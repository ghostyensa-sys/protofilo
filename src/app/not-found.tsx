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
      <main id="main" className="px-6 pb-24 pt-32">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-display text-4xl tracking-tight text-[var(--ink)]">
            {dictionary.notFound.title}
          </h1>
          <p className="mt-4 text-lg text-[var(--ink-soft)]">
            {dictionary.notFound.body}
          </p>
          <Link
            href={`/${locale}`}
            className="mt-8 inline-flex bg-[var(--ink)] px-6 py-3 text-sm font-medium text-[var(--paper)]"
          >
            {dictionary.notFound.home}
          </Link>
        </div>
      </main>
    </>
  );
}
