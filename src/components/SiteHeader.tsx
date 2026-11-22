"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LocaleSwitcher } from "@/components/LocaleSwitcher";
import { ThemeToggle } from "@/components/ThemeToggle";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

const navItems = ["about", "services", "work", "contact"] as const;
type NavId = (typeof navItems)[number];

export function SiteHeader({
  locale,
  dictionary,
}: {
  locale: Locale;
  dictionary: Dictionary;
}) {
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const [activePath, setActivePath] = useState<{
    path: string;
    id: NavId | null;
  }>({ path: "", id: null });
  const open = openPath === pathname;
  const onHome = pathname.replace(/\/$/, "") === `/${locale}`;
  const onCase = pathname.startsWith(`/${locale}/work`);
  const current: NavId | null = onCase
    ? "work"
    : onHome && activePath.path === pathname
      ? activePath.id
      : null;

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpenPath(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (!onHome) return;
    const nodes = navItems
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => node !== null);
    const visible = new Map<string, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visible.set(entry.target.id, entry.boundingClientRect.top);
          } else {
            visible.delete(entry.target.id);
          }
        }
        const next = [...visible.entries()].sort((a, b) => a[1] - b[1])[0];
        const id = navItems.find((item) => item === next?.[0]) ?? null;
        setActivePath({ path: pathname, id });
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0, 0.2, 0.6] },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [onHome, pathname]);

  function sectionHref(id: string) {
    return onHome ? `#${id}` : `/${locale}/#${id}`;
  }

  const links = navItems.map((id) => ({
    id,
    href: sectionHref(id),
    label: dictionary.nav[id],
  }));

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--ink)]/10 bg-[var(--paper)]/85 backdrop-blur-md">
      <div className="frame flex h-14 items-center justify-between gap-3">
        <Link
          href={`/${locale}`}
          className="font-display min-w-0 truncate text-lg text-[var(--ink)]"
        >
          {dictionary.hero.name}
        </Link>
        <div className="flex items-center gap-2 sm:gap-3">
          <nav
            aria-label={dictionary.nav.menu}
            className="hidden items-center gap-5 text-sm md:flex"
          >
            {links.map((link) => (
              <a
                key={link.id}
                href={link.href}
                aria-current={current === link.id ? "true" : undefined}
                className={
                  current === link.id
                    ? "text-[var(--accent-deep)]"
                    : "text-[var(--ink-soft)] transition hover:text-[var(--ink)]"
                }
              >
                {link.label}
              </a>
            ))}
          </nav>
          <LocaleSwitcher locale={locale} labels={dictionary.lang} />
          <ThemeToggle labels={dictionary.theme} />
          <button
            type="button"
            className="btn btn-icon md:hidden"
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
          className="border-t border-[var(--ink)]/10 bg-[var(--paper)] md:hidden"
        >
          <div className="frame flex flex-col py-2">
            {links.map((link) => (
              <a
                key={link.id}
                href={link.href}
                aria-current={current === link.id ? "true" : undefined}
                onClick={() => setOpenPath(null)}
                className={`py-3 text-base ${
                  current === link.id
                    ? "text-[var(--accent-deep)]"
                    : "text-[var(--ink)]"
                }`}
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
