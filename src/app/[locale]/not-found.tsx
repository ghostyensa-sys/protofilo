import Link from "next/link";
import { getDictionary } from "@/i18n/dictionaries";
import { getRequestLocale } from "@/lib/locale";

export default async function NotFound() {
  const locale = await getRequestLocale();
  const dictionary = getDictionary(locale);

  return (
    <main id="main" className="px-6 pb-24 pt-32 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-display text-4xl tracking-tight text-[var(--ink)] sm:text-5xl">
          {dictionary.notFound.title}
        </h1>
        <p className="mt-4 max-w-xl text-lg text-[var(--ink-soft)]">
          {dictionary.notFound.body}
        </p>
        <Link
          href={`/${locale}`}
          className="mt-8 inline-flex items-center justify-center bg-[var(--ink)] px-6 py-3 text-sm font-medium tracking-wide text-[var(--paper)] transition hover:bg-[var(--accent-deep)]"
        >
          {dictionary.notFound.home}
        </Link>
      </div>
    </main>
  );
}
