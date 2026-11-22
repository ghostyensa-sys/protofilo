import type { Metadata } from "next";
import { locales, type Locale } from "@/i18n/config";

export function alternatesFor(
  locale: Locale,
  path = "",
): NonNullable<Metadata["alternates"]> {
  const languages: Record<string, string> = {};
  for (const code of locales) {
    languages[code] = `/${code}${path}`;
  }
  languages["x-default"] = `/ar${path}`;

  return {
    canonical: `/${locale}${path}`,
    languages,
  };
}

export function socialMetadata({
  locale,
  title,
  description,
  path = "",
  siteName,
}: {
  locale: Locale;
  title: string;
  description: string;
  path?: string;
  siteName: string;
}): Pick<Metadata, "alternates" | "openGraph" | "twitter"> {
  return {
    alternates: alternatesFor(locale, path),
    openGraph: {
      type: "website",
      title,
      description,
      url: `/${locale}${path}`,
      locale: locale === "ar" ? "ar_AR" : "en_US",
      alternateLocale: locale === "ar" ? "en_US" : "ar_AR",
      siteName,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
