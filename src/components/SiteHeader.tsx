import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--ink)]/5 bg-[var(--paper)]/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6 sm:px-10 lg:px-0 lg:max-w-[calc(100%-8rem)] xl:max-w-6xl">
        <Link
          href="/"
          className="font-display text-lg tracking-tight text-[var(--ink)]"
        >
          Ali Al Aidarous
        </Link>
        <nav className="flex items-center gap-6 text-sm text-[var(--ink-soft)]">
          <a href="/#work" className="transition hover:text-[var(--ink)]">
            Work
          </a>
          <a href="/#contact" className="transition hover:text-[var(--ink)]">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
