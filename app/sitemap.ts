import type { MetadataRoute } from "next";

const BASE_URL = "https://gabrielpaor.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/about-me", "/projects", "/work", "/contact"];
  const lastModified = new Date();

  return [
    {
      url: BASE_URL,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...routes.map((route) => ({
      url: `${BASE_URL}${route}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
