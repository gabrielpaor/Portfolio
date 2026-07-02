import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// Per-IP rate limiting backed by Upstash Redis (works on the Edge runtime).
//
// Graceful degradation: if the Upstash env vars aren't configured, limiting is
// skipped so the assistant keeps working. Set these in .env / Vercel to enable:
//   UPSTASH_REDIS_REST_URL
//   UPSTASH_REDIS_REST_TOKEN
// Create a free database at https://console.upstash.com (Redis -> REST API).

const url = process.env.UPSTASH_REDIS_REST_URL;
const token = process.env.UPSTASH_REDIS_REST_TOKEN;

let ratelimit: Ratelimit | null = null;
let warned = false;

if (url && token) {
  ratelimit = new Ratelimit({
    redis: new Redis({ url, token }),
    // Allow 10 messages per minute per IP, with a short burst smoothing window.
    limiter: Ratelimit.slidingWindow(10, "60 s"),
    prefix: "chatbot",
    analytics: true,
  });
}

export type RateLimitResult = {
  success: boolean;
  /** Seconds until the limit resets (only meaningful when success === false). */
  retryAfter: number;
};

/**
 * Returns whether the given client identifier is allowed to make a request.
 * No-ops (always allows) when Upstash is not configured.
 */
export async function checkRateLimit(
  identifier: string
): Promise<RateLimitResult> {
  if (!ratelimit) {
    if (!warned) {
      console.warn(
        "[chatbot] Upstash not configured — rate limiting is disabled. " +
          "Set UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN to enable it."
      );
      warned = true;
    }
    return { success: true, retryAfter: 0 };
  }

  const { success, reset } = await ratelimit.limit(identifier);
  const retryAfter = Math.max(0, Math.ceil((reset - Date.now()) / 1000));
  return { success, retryAfter };
}

/** Best-effort client IP extraction for the Edge runtime. */
export function getClientIp(req: Request): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return req.headers.get("x-real-ip") ?? "anonymous";
}
