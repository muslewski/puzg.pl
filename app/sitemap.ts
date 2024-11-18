import { MetadataRoute } from "next";
import { routing, getPathname, Pathnames } from "@/i18n/routing";
import { newsKeys } from "@/data/newsItems";

const host = "https://puzg.pl"; // Replace with your actual domain

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // Add all static routes
  (Object.keys(routing.pathnames) as Pathnames[]).forEach((pathname) => {
    // Skip the dynamic news route as we'll handle it separately
    if (pathname !== "/aktualnosci/[slug]") {
      const translatedPath = routing.pathnames[pathname];

      // Get the correct paths for both languages
      const plPath =
        typeof translatedPath === "string" ? translatedPath : translatedPath.pl;
      const enPath =
        typeof translatedPath === "string" ? translatedPath : translatedPath.en;

      entries.push({
        url: `${host}/pl${plPath}`,
        lastModified: new Date(),
        changeFrequency: "daily" as const,
        priority: pathname === "/" ? 1.0 : 0.7,
        alternates: {
          languages: {
            pl: `${host}/pl${plPath}`,
            en: `${host}/en${enPath}`,
          },
        },
      });
    }
  });

  // Add news detail pages
  newsKeys.forEach((newsKey) => {
    entries.push({
      url: `${host}/pl/aktualnosci/${newsKey}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
      alternates: {
        languages: {
          pl: `${host}/pl/aktualnosci/${newsKey}`,
          en: `${host}/en/news/${newsKey}`,
        },
      },
    });
  });

  // Sort entries by priority (highest first) and then by URL
  return entries.sort((a, b) => {
    if (a.priority !== b.priority) {
      return (b.priority || 0) - (a.priority || 0);
    }
    return (a.url || "").localeCompare(b.url || "");
  });
}
