import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { locales } from "@/i18n/config";
import { getSiteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = getSiteUrl().origin;
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    const languages = Object.fromEntries(
      locales.map((code) => [code, `${origin}/${code}`]),
    );
    entries.push({
      url: `${origin}/${locale}`,
      alternates: { languages },
    });

    for (const project of projects) {
      entries.push({
        url: `${origin}/${locale}/work/${project.slug}`,
        alternates: {
          languages: Object.fromEntries(
            locales.map((code) => [
              code,
              `${origin}/${code}/work/${project.slug}`,
            ]),
          ),
        },
      });
    }
  }

  return entries;
}
