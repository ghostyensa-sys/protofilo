import type { Dictionary } from "@/i18n/dictionaries";

export function SiteFooter({ dictionary }: { dictionary: Dictionary }) {
  return (
    <footer
      id="contact"
      className="scroll-mt-24 border-t border-[var(--ink)]/10 px-6 py-20 sm:px-10 lg:px-16"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-3 text-xs tracking-[0.18em] text-[var(--muted)] uppercase">
            {dictionary.contact.eyebrow}
          </p>
          <h2 className="font-display text-3xl tracking-tight text-[var(--ink)] sm:text-4xl">
            {dictionary.contact.title}
          </h2>
          <p className="mt-3 max-w-md text-[var(--ink-soft)]">
            {dictionary.contact.lead}
          </p>
        </div>
        <div className="flex flex-col gap-3 text-sm">
          <a
            href="mailto:ali@example.com"
            className="font-medium text-[var(--ink)] transition hover:text-[var(--accent-deep)]"
            dir="ltr"
          >
            ali@example.com
          </a>
          <p className="text-[var(--muted)]">{dictionary.contact.emailHint}</p>
        </div>
      </div>
      <p className="mx-auto mt-16 max-w-6xl text-xs text-[var(--muted)]">
        © {new Date().getFullYear()} {dictionary.hero.name}.{" "}
        {dictionary.contact.copyright}
      </p>
    </footer>
  );
}
