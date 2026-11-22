import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { contact } from "@/content/contact";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { socialMetadata } from "@/lib/metadata";
import { getSiteUrl } from "@/lib/site";

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) return {};
  const dictionary = getDictionary(localeParam);

  return {
    title: {
      default: dictionary.meta.title,
      template: `%s · ${dictionary.meta.title}`,
    },
    description: dictionary.meta.description,
    robots: { index: true, follow: true },
    authors: [{ name: dictionary.hero.name, url: contact.linkedin }],
    ...socialMetadata({
      locale: localeParam,
      title: dictionary.meta.title,
      description: dictionary.meta.description,
      siteName: dictionary.meta.title,
    }),
  };
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale = localeParam as Locale;
  const dictionary = getDictionary(locale);
  const site = getSiteUrl();
  const email = contact.email.replace(/^mailto:/, "");
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: dictionary.hero.name,
    description: dictionary.meta.description,
    url: new URL(`/${locale}`, site).toString(),
    email,
    telephone: "+967737979088",
    sameAs: [contact.linkedin],
    founder: {
      "@type": "Person",
      name: dictionary.hero.name,
      url: contact.linkedin,
      email,
      knowsLanguage: ["ar", "en"],
      sameAs: [contact.linkedin],
    },
  };

  return (
    <div lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <a href="#main" className="skip-link">
        {dictionary.skip}
      </a>
      <SiteHeader locale={locale} dictionary={dictionary} />
      {children}
    </div>
  );
}
