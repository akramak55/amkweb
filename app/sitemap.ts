import type { MetadataRoute } from "next";
import { events } from "@/lib/data";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes: MetadataRoute.Sitemap = [
    { url: site.url, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/events`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${site.url}/gallery`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${site.url}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
  ];

  for (const event of events) {
    routes.push({
      url: `${site.url}/events/${event.slug}`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.6,
    });
  }

  return routes;
}
