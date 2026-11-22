"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LocaleSwitcher } from "@/components/LocaleSwitcher";
import { ThemeToggle } from "@/components/ThemeToggle";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

const navItems = ["about", "services", "work", "contact"] as const;

export function SiteHeader({
  locale,
  dictionary,
}: {
  locale: Locale;
  dictionary: Dictionary;
}) {
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;
  const onHome = pathname.replace(/\/$/, "") === `/${locale}`;

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpenPath(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function sectionHref(id: string) {
    return onHome ? `#${id}` : `/${locale}/#${id}`;
  }

  const links = navItems.map((id) => ({
    id,
    href: sectionHref(id),
    label: dictionary.nav[id],
  }));

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--ink)]/5 bg-[var(--paper)]/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-6 sm:px-10 lg:max-w-[calc(100%-8rem)] lg:px-0 xl:max-w-6xl">
        <Link
          href={`/${locale}`}
          className="font-display min-w-0 truncate text-lg tracking-tight text-[var(--ink)]"
        >
          {dictionary.hero.name}
        </Link>
        <div className="flex items-center gap-2 sm:gap-4">
          <nav
            aria-label={dictionary.nav.menu}
            className="hidden items-center gap-5 text-sm text-[var(--ink-soft)] md:flex"
          >
            {links.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="transition hover:text-[var(--ink)]"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <LocaleSwitcher locale={locale} labels={dictionary.lang} />
          <ThemeToggle labels={dictionary.theme} />
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--ink)]/15 text-[var(--ink)] md:hidden"
            aria-expanded={open}
            aria-controls="site-menu"
            aria-label={open ? dictionary.nav.close : dictionary.nav.menu}
            onClick={() => setOpenPath(open ? null : pathname)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
      {open ? (
        <nav
          id="site-menu"
          aria-label={dictionary.nav.menu}
          className="border-t border-[var(--ink)]/10 bg-[var(--paper)] px-6 py-3 md:hidden"
        >
          <div className="mx-auto flex max-w-6xl flex-col">
            {links.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setOpenPath(null)}
                className="py-3 text-base text-[var(--ink)]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}

function MenuIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6 6l12 12M18 6 6 18"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}
