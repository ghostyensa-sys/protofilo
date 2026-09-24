import Link from "next/link";
import { LocaleSwitcher } from "@/components/LocaleSwitcher";
import { ThemeToggle } from "@/components/ThemeToggle";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

export function SiteHeader({
  locale,
  dictionary,
}: {
  locale: Locale;
  dictionary: Dictionary;
}) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--ink)]/5 bg-[var(--paper)]/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-6 sm:px-10 lg:px-0 lg:max-w-[calc(100%-8rem)] xl:max-w-6xl">
        <Link
          href={`/${locale}`}
          className="font-display text-lg tracking-tight text-[var(--ink)]"
        >
          {dictionary.hero.name}
        </Link>
        <nav className="flex items-center gap-3 text-sm text-[var(--ink-soft)] sm:gap-5">
          <a
            href={`/${locale}/#work`}
            className="hidden transition hover:text-[var(--ink)] sm:inline"
          >
            {dictionary.nav.work}
          </a>
          <a
            href={`/${locale}/#contact`}
            className="hidden transition hover:text-[var(--ink)] sm:inline"
          >
            {dictionary.nav.contact}
          </a>
          <LocaleSwitcher locale={locale} labels={dictionary.lang} />
          <ThemeToggle labels={dictionary.theme} />
        </nav>
      </div>
    </header>
  );
}
