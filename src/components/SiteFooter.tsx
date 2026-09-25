import { contact } from "@/content/contact";
import type { Dictionary } from "@/i18n/dictionaries";

const iconButtonClass =
  "inline-flex h-12 w-12 items-center justify-center border border-[var(--ink)]/15 text-[var(--ink)] transition hover:border-[var(--accent)] hover:text-[var(--accent-deep)]";

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
        <div className="flex items-center gap-3">
          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className={iconButtonClass}
            aria-label={dictionary.contact.whatsapp}
            title={dictionary.contact.whatsapp}
          >
            <WhatsAppIcon />
          </a>
          <a
            href={contact.email}
            className={iconButtonClass}
            aria-label={dictionary.contact.email}
            title={contact.emailDisplay}
          >
            <EmailIcon />
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={iconButtonClass}
            aria-label={dictionary.contact.linkedin}
            title={dictionary.contact.linkedin}
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
      <p className="mx-auto mt-16 max-w-6xl text-xs text-[var(--muted)]">
        © {new Date().getFullYear()} {dictionary.hero.name}.{" "}
        {dictionary.contact.copyright}
      </p>
    </footer>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.5 3.5A11 11 0 0 0 2.1 17.2L1 23l6-1.6A11 11 0 0 0 20.5 3.5Zm-8.5 17a9.1 9.1 0 0 1-4.6-1.3l-.3-.2-3.6.9.9-3.5-.2-.3A9.1 9.1 0 1 1 12 20.5Zm5-6.8c-.3-.1-1.6-.8-1.8-.9s-.4-.1-.6.1-.7.9-.8 1-.3.2-.6.1a7.4 7.4 0 0 1-2.2-1.4 8.2 8.2 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.6l.4-.5.2-.3a.5.5 0 0 0 0-.5l-.9-2.1c-.2-.6-.5-.5-.6-.5h-.6a1.1 1.1 0 0 0-.8.4 3.3 3.3 0 0 0-1 2.5 5.8 5.8 0 0 0 1.2 3 13.2 13.2 0 0 0 5 4.4 5.7 5.7 0 0 0 2.7.7 3.1 3.1 0 0 0 2.1-1.4 2.5 2.5 0 0 0 .2-1.4c-.1-.1-.3-.2-.6-.3Z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <path
        d="M4 7.5 12 13l8-5.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M6.5 9H4V20h2.5V9ZM5.2 4A1.6 1.6 0 1 0 5.2 7.2 1.6 1.6 0 0 0 5.2 4ZM20 20h-2.5v-5.6c0-1.6-.6-2.6-2-2.6a2.1 2.1 0 0 0-2 1.4c-.1.3-.1.7-.1 1.1V20H11V9h2.4v1.5A3 3 0 0 1 16.2 9c2.2 0 3.8 1.4 3.8 4.5V20Z" />
    </svg>
  );
}
