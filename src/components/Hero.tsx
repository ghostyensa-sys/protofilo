import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

export type HeroSystem = {
  slug: string;
  title: string;
};

export function Hero({
  locale,
  dictionary,
  systems,
}: {
  locale: Locale;
  dictionary: Dictionary;
  systems: HeroSystem[];
}) {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_0%_0%,var(--hero-glow),transparent_50%),linear-gradient(180deg,var(--paper)_0%,var(--paper-2)_100%)]" />
      </div>

      <div className="frame grid items-end gap-12 pt-28 pb-16 sm:pt-32 sm:pb-20 lg:grid-cols-[minmax(0,1.35fr)_minmax(16rem,0.65fr)] lg:gap-20 lg:pt-36 lg:pb-24">
        <div>
          <p className="reveal eyebrow mb-5 max-w-xl text-sm text-[var(--muted)]">
            {dictionary.hero.eyebrow}
          </p>
          <h1 className="reveal font-display display-tight max-w-4xl text-[clamp(2.6rem,6.2vw,4.75rem)] leading-[1.08] text-[var(--ink)]">
            {dictionary.hero.headline}
          </h1>
          <p className="reveal mt-6 max-w-xl text-lg leading-relaxed text-[var(--ink-soft)]">
            {dictionary.hero.lead}
          </p>
          <div className="reveal mt-8 flex flex-wrap gap-3">
            <a href="#services" className="btn btn-primary">
              {dictionary.hero.ctaServices}
            </a>
            <a href="#work" className="btn btn-secondary">
              {dictionary.hero.ctaWork}
            </a>
          </div>
        </div>

        <ol className="reveal border-t border-[var(--ink)]/12 lg:border-t-0">
          {systems.map((system, index) => (
            <li key={system.slug} className="border-b border-[var(--ink)]/12">
              <a
                href={`/${locale}/work/${system.slug}`}
                className="group grid grid-cols-[2rem_1fr_auto] items-baseline gap-3 py-4"
              >
                <span className="text-xs text-[var(--muted)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-[var(--ink)] transition group-hover:text-[var(--accent-deep)]">
                  {system.title}
                </span>
                <span
                  aria-hidden
                  className="text-[var(--muted)] transition group-hover:text-[var(--accent-deep)]"
                >
                  {locale === "ar" ? "←" : "→"}
                </span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
