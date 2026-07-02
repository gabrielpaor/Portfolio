# SEO Audit — Gabriel Paor Portfolio

**Date:** 2026-07-03
**Site:** https://gabrielpaor.vercel.app
**Stack:** Next.js 14 (App Router), Tailwind, Framer Motion

---

## Summary

| Area | Status |
|------|--------|
| Root metadata (title/description/OG/Twitter) | ✅ Good |
| Per-page metadata (unique titles/descriptions) | ❌ Missing |
| `sitemap.xml` | ❌ Missing |
| `robots.txt` | ❌ Missing |
| `manifest.json` (PWA) | ❌ Missing |
| Structured data (JSON-LD) | ❌ Missing |
| Canonical URLs | ❌ Missing |
| Homepage URL / redirect | ⚠️ `/` redirects to `/home` |
| Image optimization | ⚠️ Disabled (`unoptimized: true`) |
| Semantic headings | ⚠️ Weak `<h1>` on home |
| `lang` attribute | ✅ `en` set |
| Favicon / icons | ⚠️ Only `thumbnail.png`, no apple-touch-icon |

---

## High Priority

### 1. No per-page metadata — every page shares one title
`app/layout.tsx` sets a single title/description for the whole site. But `/about-me`, `/projects`, `/work`, and `/contact` are all `"use client"` components, so they can't export `metadata`. Result: Google sees the **same title on every URL**, which hurts ranking and click-through.

**Fix:** Split each route into a server `layout.tsx` (or a server `page.tsx` wrapper) that exports page-specific metadata, keeping the animated UI in a client child. Example for `app/projects/`:

```tsx
// app/projects/layout.tsx  (server component)
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects — Gabriel Paor",
  description:
    "Selected work by Gabriel Paor: e-procurement platforms, dashboards, and interactive React/Next.js web apps.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
```

Repeat for each route with a unique, keyword-rich title + description.

### 2. Missing `sitemap.xml`
Search engines have no map of your pages. Add `app/sitemap.ts`:

```ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://gabrielpaor.vercel.app";
  const routes = ["", "/home", "/about-me", "/projects", "/work", "/contact"];
  return routes.map((r) => ({
    url: `${base}${r}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: r === "" || r === "/home" ? 1 : 0.8,
  }));
}
```

### 3. Missing `robots.txt`
Add `app/robots.ts` so crawlers know what to index and where the sitemap is:

```ts
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/api/"] },
    sitemap: "https://gabrielpaor.vercel.app/sitemap.xml",
  };
}
```

### 4. Homepage lives at `/home`, and `/` just redirects
`app/page.tsx` does `redirect("/home")`. This splits ranking signals between `/` and `/home`, and the strongest URL (the root) serves no content. **Recommended:** move the home page content to `app/page.tsx` so the canonical homepage is `/`. If you keep `/home`, at minimum set a canonical pointing to one of them so they don't compete.

---

## Medium Priority

### 5. Add JSON-LD structured data (Person)
Helps Google build a knowledge panel and rich results. Add to `app/layout.tsx` inside `<body>`:

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Gabriel Paor",
      jobTitle: "React Front-End Developer",
      url: "https://gabrielpaor.vercel.app",
      sameAs: [
        "https://github.com/gabrielpaor",
        "https://www.linkedin.com/in/gabriel-john-paor-ba0bb4235/",
      ],
    }),
  }}
/>
```

### 6. Image optimization is disabled
`next.config.mjs` sets `images: { unoptimized: true }`. On Vercel you get automatic AVIF/WebP resizing for free — turning it off ships larger images, hurting LCP (a Core Web Vitals ranking factor). Remove that line unless you have a specific reason (e.g. static export). Also confirm every `next/image` has descriptive `alt` text (project screenshots especially).

### 7. Weak homepage `<h1>`
The `<h1>` is just "Hi, I'm Gab". Search engines weight the H1 heavily. Consider a keyword-rich H1 (visually the same, semantically richer), e.g. include "Gabriel Paor — React Front-End Developer" and keep the animation as a styled span. Ensure exactly one `<h1>` per page and that other headings use `<h2>`/`<h3>` in order.

### 8. Add a web app manifest + proper icons
Add `app/manifest.ts` and dedicated icon files (`favicon.ico`, `apple-icon.png`, `icon.png`). Currently only `thumbnail.png` is used as the icon; add `apple-touch-icon` for iOS home-screen and better mobile results.

```ts
import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Gabriel Paor — Portfolio",
    short_name: "G. Paor",
    start_url: "/",
    display: "standalone",
    background_color: "#0f172a",
    theme_color: "#0f172a",
    icons: [{ src: "/thumbnail.png", sizes: "512x512", type: "image/png" }],
  };
}
```

---

## Low Priority / Polish

- **`generator: "v0.dev"`** in `app/layout.tsx` — leftover scaffolding tag; remove or replace with your name.
- **Twitter card** has no `site`/`creator` handle — add `creator: "@yourhandle"` if you have one.
- **Canonical URLs** — set `alternates.canonical` per page (see fix #1) and a site-wide one in the root layout.
- **`theme-color` meta** — add via `viewport` export (`themeColor`) for browser UI theming.
- **Custom domain** — a `gabrielpaor.com`-style domain reads as more professional than `*.vercel.app` and consolidates authority. Update `metadataBase` if you switch.
- **`build` ignores errors** — `eslint.ignoreDuringBuilds` and `typescript.ignoreBuildErrors` are both `true`. Not SEO, but broken builds can ship regressions that break rendered content; worth revisiting.

---

## Suggested Order of Work

1. Add `sitemap.ts`, `robots.ts`, `manifest.ts` (quick, high impact).
2. Add per-page metadata via server `layout.tsx` wrappers.
3. Decide homepage URL (`/` vs `/home`) and set canonicals.
4. Re-enable image optimization + verify `alt` text.
5. Add JSON-LD Person schema.
6. Polish: H1, icons, remove `v0.dev` generator, Twitter handle.

After deploying, validate with:
- Google Search Console (submit sitemap)
- [Rich Results Test](https://search.google.com/test/rich-results) for JSON-LD
- [PageSpeed Insights](https://pagespeed.web.dev/) for Core Web Vitals
- Social preview via [opengraph.xyz](https://www.opengraph.xyz/)
