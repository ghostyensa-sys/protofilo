"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/i18n/config";
import { locales } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

export function LocaleSwitcher({
  locale,
  labels,
}: {
  locale: Locale;
  labels: Dictionary["lang"];
}) {
  const pathname = usePathname();

  function switchPath(next: Locale) {
    const segments = pathname.split("/");
    segments[1] = next;
    return segments.join("/") || `/${next}`;
  }

  return (
    <div className="flex items-center gap-1 text-sm">
      {locales.map((code) => {
        const active = code === locale;
        return (
          <Link
            key={code}
            href={switchPath(code)}
            hrefLang={code}
            className={`rounded px-2 py-1 transition ${
              active
                ? "bg-[var(--ink)] text-[var(--paper)]"
                : "text-[var(--ink-soft)] hover:text-[var(--ink)]"
            }`}
            aria-current={active ? "page" : undefined}
          >
            {labels[code]}
          </Link>
        );
      })}
    </div>
  );
}
