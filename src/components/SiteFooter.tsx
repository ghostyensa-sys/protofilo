import { contact } from "@/content/contact";
import type { Dictionary } from "@/i18n/dictionaries";

export function SiteFooter({ dictionary }: { dictionary: Dictionary }) {
  return (
    <footer id="contact" className="scroll-mt-24 border-t border-[var(--ink)]/10">
      <div className="frame flex flex-col gap-10 py-20 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-xl">
          <p className="eyebrow mb-3 text-xs text-[var(--muted)]">
            {dictionary.contact.eyebrow}
          </p>
          <h2 className="font-display display-tight text-3xl text-[var(--ink)] sm:text-4xl">
            {dictionary.contact.title}
          </h2>
          <p className="mt-3 max-w-md text-[var(--ink-soft)]">
            {dictionary.contact.lead}
          </p>
        </div>
        <div className="flex flex-col items-start gap-4">
          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <span>{dictionary.contact.whatsapp}</span>
            <span dir="ltr">{contact.whatsappDisplay}</span>
          </a>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a
              href={contact.email}
              className="text-[var(--ink-soft)] transition hover:text-[var(--accent-deep)]"
            >
              <span className="sr-only">{dictionary.contact.email}: </span>
              <span dir="ltr">{contact.emailDisplay}</span>
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--ink-soft)] transition hover:text-[var(--accent-deep)]"
            >
              {dictionary.contact.linkedin}
            </a>
          </div>
        </div>
      </div>
      <p className="frame pb-10 text-xs text-[var(--muted)]">
        © {new Date().getFullYear()} {dictionary.hero.name}.{" "}
        {dictionary.caseStudy.privacyNote}
      </p>
    </footer>
  );
}
