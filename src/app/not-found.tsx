import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { getDictionary } from "@/i18n/dictionaries";
import { getRequestLocale } from "@/lib/locale";

export default async function RootNotFound() {
  const locale = await getRequestLocale();
  const dictionary = getDictionary(locale);

  return (
    <>
      <a href="#main" className="skip-link">
        {dictionary.skip}
      </a>
      <SiteHeader locale={locale} dictionary={dictionary} />
      <main id="main" className="pt-32 pb-24">
        <div className="frame">
          <div className="max-w-3xl">
          <h1 className="font-display display-tight text-4xl text-[var(--ink)]">
            {dictionary.notFound.title}
          </h1>
          <p className="mt-4 text-lg text-[var(--ink-soft)]">
            {dictionary.notFound.body}
          </p>
          <Link href={`/${locale}`} className="btn btn-primary mt-8">
            {dictionary.notFound.home}
          </Link>
          </div>
        </div>
      </main>
    </>
  );
}
