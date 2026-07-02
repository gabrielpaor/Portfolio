import { NextResponse } from "next/server";
import { z } from "zod";
import { SYSTEM_PROMPT } from "@/lib/chatbot/prompt";
import { checkRateLimit, getClientIp } from "@/lib/chatbot/rate-limit";

// Runs on the Edge for low latency. The API key is read server-side only and is
// never exposed to the browser.
export const runtime = "edge";

const GEMINI_MODEL = "gemini-2.5-flash";
const MAX_MESSAGE_LENGTH = 1000;
const MAX_HISTORY = 20;

const RequestSchema = z.object({
  messages: z
    .array(
      z.object({
        role: z.enum(["user", "assistant"]),
        content: z.string().min(1).max(MAX_MESSAGE_LENGTH),
      })
    )
    .min(1)
    .max(MAX_HISTORY),
});

type ChatMessage = z.infer<typeof RequestSchema>["messages"][number];

export async function POST(req: Request) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error("GEMINI_API_KEY is not set");
    return NextResponse.json(
      { error: "The assistant is not configured yet." },
      { status: 500 }
    );
  }

  // Per-IP rate limit (no-ops if Upstash isn't configured).
  const { success, retryAfter } = await checkRateLimit(getClientIp(req));
  if (!success) {
    return NextResponse.json(
      {
        error: `You're sending messages too quickly. Please wait ${retryAfter}s and try again.`,
      },
      { status: 429, headers: { "Retry-After": String(retryAfter) } }
    );
  }

  let parsed;
  try {
    parsed = RequestSchema.parse(await req.json());
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Map our chat history to Gemini's content format (assistant -> "model").
  const contents = parsed.messages.map((m: ChatMessage) => ({
    role: m.role === "assistant" ? "model" : "user",
    parts: [{ text: m.content }],
  }));

  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${apiKey}`;

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
        contents,
        generationConfig: {
          temperature: 0.6,
          maxOutputTokens: 1024,
          // gemini-2.5-flash is a "thinking" model; disable the thinking budget
          // so a simple Q&A bot stays fast and doesn't burn tokens on reasoning.
          thinkingConfig: { thinkingBudget: 0 },
        },
        safetySettings: [
          { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_ONLY_HIGH" },
          { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_ONLY_HIGH" },
        ],
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("Gemini API error:", res.status, detail);
      return NextResponse.json(
        { error: "The assistant is having trouble right now. Please try again." },
        { status: 502 }
      );
    }

    const data = await res.json();
    const reply: string | undefined =
      data?.candidates?.[0]?.content?.parts
        ?.map((p: { text?: string }) => p.text ?? "")
        .join("")
        .trim();

    if (!reply) {
      return NextResponse.json(
        { error: "I couldn't generate a response. Please rephrase your question." },
        { status: 200 }
      );
    }

    return NextResponse.json({ reply });
  } catch (err) {
    console.error("Chat route error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
