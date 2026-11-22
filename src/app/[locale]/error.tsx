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
    <main id="main" className="pt-32 pb-24">
      <div className="frame">
        <div className="max-w-3xl">
        <h1 className="font-display display-tight text-4xl text-[var(--ink)]">
          {dictionary.error.title}
        </h1>
        <p className="mt-4 text-lg text-[var(--ink-soft)]">
          {dictionary.error.body}
        </p>
        <button type="button" onClick={reset} className="btn btn-primary mt-8">
          {dictionary.error.retry}
        </button>
        </div>
      </div>
    </main>
  );
}
