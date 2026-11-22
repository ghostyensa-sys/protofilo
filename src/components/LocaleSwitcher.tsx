"use client";

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
          <a
            key={code}
            href={switchPath(code)}
            hrefLang={code}
            lang={code}
            className={`rounded px-2 py-1 transition ${
              code === "ar"
                ? "[font-family:var(--font-arabic),system-ui,sans-serif]"
                : ""
            } ${
              active
                ? "bg-[var(--ink)] text-[var(--paper)]"
                : "text-[var(--ink-soft)] hover:text-[var(--ink)]"
            }`}
            aria-current={active ? "page" : undefined}
            onPointerDown={(event) => {
              const hash = window.location.hash;
              if (hash) event.currentTarget.hash = hash;
            }}
            onFocus={(event) => {
              const hash = window.location.hash;
              if (hash) event.currentTarget.hash = hash;
            }}
          >
            {labels[code]}
          </a>
        );
      })}
    </div>
  );
}
