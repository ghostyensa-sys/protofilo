"use client";

import { motion } from "motion/react";
import type { Dictionary } from "@/i18n/dictionaries";

export function Hero({ dictionary }: { dictionary: Dictionary }) {
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden px-6 pb-16 pt-28 sm:px-10 sm:pb-24 lg:px-16">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_10%,var(--hero-glow),transparent_55%),radial-gradient(ellipse_at_90%_30%,var(--hero-shade),transparent_45%),linear-gradient(180deg,var(--paper)_0%,var(--paper-2)_100%)]" />
        <div className="absolute inset-0 opacity-[0.28] mix-blend-multiply dark:opacity-[0.15] dark:mix-blend-soft-light [background-image:url('data:image/svg+xml,%3Csvg viewBox=%270 0 200 200%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%274%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27/%3E%3C/svg%3E')]" />
      </div>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mb-4 max-w-xl font-sans text-sm tracking-[0.12em] text-[var(--muted)] uppercase"
      >
        {dictionary.hero.eyebrow}
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        className="font-display max-w-5xl text-[clamp(2.75rem,9vw,6.5rem)] leading-[1.05] tracking-[-0.03em] text-[var(--ink)]"
      >
        {dictionary.hero.name}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
        className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--ink-soft)] sm:text-xl"
      >
        {dictionary.hero.lead}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
        className="mt-10 flex flex-wrap items-center gap-4"
      >
        <a
          href="#work"
          className="inline-flex items-center justify-center bg-[var(--ink)] px-6 py-3 text-sm font-medium tracking-wide text-[var(--paper)] transition hover:bg-[var(--accent-deep)] hover:text-[var(--paper)]"
        >
          {dictionary.hero.ctaWork}
        </a>
        <a
          href="#contact"
          className="inline-flex items-center justify-center border border-[var(--ink)]/20 px-6 py-3 text-sm font-medium tracking-wide text-[var(--ink)] transition hover:border-[var(--accent)] hover:text-[var(--accent-deep)]"
        >
          {dictionary.hero.ctaContact}
        </a>
      </motion.div>
    </section>
  );
}
