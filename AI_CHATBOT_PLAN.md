# AI Assistant Chatbot — Implementation Plan

A floating AI chat widget for the portfolio. On load it greets visitors with:

> 👋 Hi! I'm Gabriel's AI assistant. Ask me anything about his experience, projects, or skills.

Visitors can ask about Gabriel's experience, projects, and skills, and get grounded answers.

---

## 1. Decisions (TL;DR)

| Question | Decision | Why |
| --- | --- | --- |
| Separate FastAPI backend? | **No.** Use a Next.js Route Handler (`app/api/chat/route.ts`). | Same repo + same Vercel deploy, no CORS, no second host, keeps the API key server-side. |
| Which AI (free)? | **Google Gemini `gemini-2.5-flash`** (implemented). | `gemini-2.0-flash` returned `limit: 0` (no free quota) on this account; `gemini-2.5-flash` works on the free tier and is a stronger model. Called via REST `fetch` (no SDK dependency). Thinking budget disabled for speed. |
| Vector DB / RAG infra? | **No.** Inline a knowledge string in the system prompt. | The knowledge base (about, projects, skills) is small enough to fit in context. |
| Streaming? | Phase 2 (nice-to-have). Start with a simple request/response. | Keeps v1 simple; add streaming once it works. |

> Note: Anthropic's Claude (`claude-haiku-4-5`) is a great fit technically and cheap, but is **not** free-tier (needs a prepaid balance). Gemini chosen to satisfy the "free token" requirement.

---

## 2. Architecture

```
Browser (ChatWidget.tsx, client component)
        |  POST /api/chat  { messages: [...] }
        v
Next.js Route Handler  (app/api/chat/route.ts, runs server-side)
        |  reads GEMINI_API_KEY from env (never exposed to client)
        |  injects SYSTEM_PROMPT + knowledge base
        v
Google Gemini API  (gemini-2.0-flash)
        |
        v
Response text -> back to widget -> rendered in chat bubbles
```

- **Frontend:** a floating button (bottom-right) that opens a chat panel. Reuse existing Radix UI + Tailwind + framer-motion already in the project.
- **Backend:** a single API route. No new server, no new deploy target.
- **Knowledge:** a hand-written `lib/chatbot/knowledge.ts` string built from the existing `about-me`, `projects`, and `work` pages.

---

## 3. What you need

### Accounts / keys
- [ ] Google AI Studio API key — https://aistudio.google.com/app/apikey (free, no card).
- [ ] (Optional fallback) Groq API key — https://console.groq.com/keys

### Environment variables
Add to `.env` (local, git-ignored) and Vercel Project Settings → Environment Variables (prod). **Do not commit env files.**

```
GEMINI_API_KEY=your_key_here

# Rate limiting (optional but recommended for the public site).
# Create a free Redis DB at https://console.upstash.com -> REST API tab.
# If these are omitted, rate limiting is skipped and the bot still works.
UPSTASH_REDIS_REST_URL=your_upstash_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_token
```

### Dependencies
```
npm install @google/generative-ai
```
(Optional, for cleaner streaming/UI later: `npm install ai` — the Vercel AI SDK.)

---

## 4. File-by-file plan

| File | Purpose |
| --- | --- |
| `lib/chatbot/knowledge.ts` | Exported string: Gabriel's bio, experience, projects, skills, contact. The chatbot's source of truth. |
| `lib/chatbot/prompt.ts` | The system prompt (persona, rules, "only answer about Gabriel", greeting). |
| `app/api/chat/route.ts` | POST handler. Validates input, calls Gemini with system prompt + knowledge + message history, returns reply. |
| `components/chat-widget.tsx` | Client component: floating button, open/close panel, message list, input box, loading state. Shows the greeting as the first message. |
| `components/chat-widget.tsx` mount | Render `<ChatWidget />` in `app/layout.tsx` (inside `ThemeProvider`, after `<main>`). |

---

## 5. Implementation phases

### Phase 1 — Backend route (get the AI talking)
1. Install `@google/generative-ai`.
2. Write `lib/chatbot/knowledge.ts` and `lib/chatbot/prompt.ts`.
3. Build `app/api/chat/route.ts`:
   - `export const runtime = "edge"` (optional, fast) or default Node.
   - Parse `{ messages }` from the body (Zod validate — `zod` is already installed).
   - Prepend system prompt + knowledge, call `gemini-2.0-flash`.
   - Return `{ reply }` as JSON.
   - Basic guardrails: cap message length, cap history length, reject empty.
4. Test with curl / a `.http` file before touching the UI.

### Phase 2 — Frontend widget
1. Build `components/chat-widget.tsx` (client component, `"use client"`).
2. State: `isOpen`, `messages`, `input`, `isLoading`.
3. Seed `messages[0]` with the greeting (assistant role).
4. On send: optimistic-append user message, POST to `/api/chat`, append reply.
5. Style with existing Tailwind tokens; animate open/close with framer-motion.
6. Mount in `app/layout.tsx`.

### Phase 3 — Polish (optional)
- [ ] Streaming responses (token-by-token) via Vercel AI SDK.
- [ ] Markdown rendering in replies.
- [x] Rate limiting — per-IP via Upstash Redis (10 msg/min). Implemented in
  `lib/chatbot/rate-limit.ts`; gracefully disabled until Upstash env vars are set.
- [ ] Suggested prompt chips ("What are his top skills?", "Tell me about his projects").
- [ ] Persist conversation in `sessionStorage`.
- [ ] Analytics on questions asked.

---

## 6. Guardrails & cost control (important for a public free-tier key)

- **Never** expose `GEMINI_API_KEY` to the client — it lives only in the route handler.
- Limit request size: max ~20 messages of history, max ~1000 chars per message.
- System prompt instructs the model to **only** answer about Gabriel and politely decline off-topic / jailbreak attempts.
- Add rate limiting before sharing the live site widely (Phase 3) so the free quota isn't drained or abused.
- Consider a simple per-IP throttle even in v1 if traffic is a concern.

---

## 7. Acceptance criteria

- [ ] Greeting message visible when the chat opens.
- [ ] Asking "What are Gabriel's skills?" returns an accurate, grounded answer.
- [ ] Off-topic question ("What's the weather?") is politely declined.
- [ ] API key is not present in any client bundle (verify in browser network/sources).
- [ ] Works in production on Vercel with the env var set.

---

## 8. Open questions for Gabriel

1. Tone of the assistant — professional, friendly, or playful?
2. Should it be allowed to share contact info / link to the contact page and resume?
3. Greeting only, or also proactively suggest 2–3 starter questions?
4. OK with Gemini, or do you specifically want a different provider?
