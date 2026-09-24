import { notFound } from "next/navigation";
import { HtmlLangDir } from "@/components/HtmlLangDir";
import { SiteHeader } from "@/components/SiteHeader";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale, locales, type Locale } from "@/i18n/config";

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale = localeParam as Locale;
  const dictionary = getDictionary(locale);

  return (
    <div lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <HtmlLangDir locale={locale} />
      <SiteHeader locale={locale} dictionary={dictionary} />
      {children}
    </div>
  );
}
