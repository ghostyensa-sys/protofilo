"use client";

import { Reveal } from "@/components/motion/Reveal";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

export type HeroSystem = {
  slug: string;
  title: string;
  hook: string;
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
        <div className="absolute inset-0 bg-[var(--paper)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_100%_0%,var(--hero-glow),transparent_60%)]" />
      </div>

      <div className="frame grid items-end gap-12 pt-28 pb-14 sm:pt-32 lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)] lg:gap-16 lg:pt-36 lg:pb-20">
        <div className="max-w-xl">
          <Reveal>
            <p className="eyebrow mb-4 text-sm text-[var(--muted)]">
              {dictionary.hero.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="font-display text-lg text-[var(--accent-deep)]">
              {dictionary.hero.name}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display display-tight mt-3 text-[clamp(2.4rem,5.4vw,4.25rem)] leading-[1.05] text-[var(--ink)]">
              {dictionary.hero.headline}
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 text-base leading-relaxed text-[var(--ink-soft)] sm:text-lg">
              {dictionary.hero.lead}
            </p>
          </Reveal>
          <Reveal delay={0.22}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#services" className="btn btn-primary">
                {dictionary.hero.ctaServices}
              </a>
              <a href="#work" className="btn btn-secondary">
                {dictionary.hero.ctaWork}
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <ol className="grid gap-3">
            {systems.map((system, index) => (
              <li key={system.slug}>
                <a
                  href={`/${locale}/work/${system.slug}`}
                  className="group block rounded-2xl border border-[var(--ink)]/10 bg-[var(--paper)]/80 p-4 backdrop-blur-sm transition duration-200 hover:-translate-y-0.5 hover:border-[var(--accent)]/60"
                >
                  <span className="text-xs text-[var(--muted)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="mt-1 block font-medium text-[var(--ink)] transition group-hover:text-[var(--accent-deep)]">
                    {system.title}
                  </span>
                  <span className="mt-1 block text-sm leading-relaxed text-[var(--ink-soft)]">
                    {system.hook}
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
