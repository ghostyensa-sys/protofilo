"use client";

import { usePathname } from "next/navigation";
import { defaultLocale, isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export default function LocaleError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const pathname = usePathname();
  const segment = pathname.split("/")[1] ?? "";
  const locale = isLocale(segment) ? segment : defaultLocale;
  const dictionary = getDictionary(locale);

  return (
    <main id="main" className="px-6 pb-24 pt-32 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-display text-4xl tracking-tight text-[var(--ink)]">
          {dictionary.error.title}
        </h1>
        <p className="mt-4 text-lg text-[var(--ink-soft)]">
          {dictionary.error.body}
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-8 inline-flex bg-[var(--ink)] px-6 py-3 text-sm font-medium text-[var(--paper)]"
        >
          {dictionary.error.retry}
        </button>
      </div>
    </main>
  );
}
