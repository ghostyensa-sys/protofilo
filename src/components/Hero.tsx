"use client";

import { Reveal } from "@/components/motion/Reveal";
import type { Dictionary } from "@/i18n/dictionaries";
import { motion, useReducedMotion } from "motion/react";

export function Hero({ dictionary }: { dictionary: Dictionary }) {
  const reduce = useReducedMotion();

  return (
    <section className="relative min-h-[min(100svh,52rem)] overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(165deg,var(--paper)_0%,var(--paper-2)_48%,var(--paper)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-10%,var(--hero-glow),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_100%_40%,var(--hero-glow),transparent_50%)]" />
        <div className="hero-mesh absolute inset-0 opacity-[0.35] dark:opacity-[0.25]" />
        {!reduce ? (
          <motion.div
            className="absolute -top-24 start-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[var(--hero-glow)] blur-3xl"
            animate={{ opacity: [0.35, 0.55, 0.35], scale: [1, 1.08, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        ) : null}
      </div>

      <div className="frame flex min-h-[min(100svh,52rem)] flex-col justify-end pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-36">
        <div className="max-w-3xl">
          <Reveal>
            <p className="eyebrow mb-4 text-sm text-[var(--muted)]">
              {dictionary.hero.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="font-display display-tight text-[clamp(2.75rem,7vw,5.25rem)] leading-[1.02] text-[var(--ink)]">
              {dictionary.hero.name}
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <h1 className="mt-5 max-w-2xl text-xl font-medium leading-snug text-[var(--ink-soft)] sm:text-2xl">
              {dictionary.hero.headline}
            </h1>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
              {dictionary.hero.lead}
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#services" className="btn btn-primary">
                {dictionary.hero.ctaServices}
              </a>
              <a href="#work" className="btn btn-secondary">
                {dictionary.hero.ctaWork}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
