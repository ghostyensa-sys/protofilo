"use client";

import { motion } from "motion/react";
import type { Dictionary } from "@/i18n/dictionaries";
import { storyStageKeys } from "@/content/projects";

export function StoryProcess({ dictionary }: { dictionary: Dictionary }) {
  return (
    <section className="border-y border-[var(--ink)]/10 bg-[var(--paper-2)] px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-14 max-w-2xl"
        >
          <p className="mb-3 text-xs tracking-[0.18em] text-[var(--muted)] uppercase">
            {dictionary.process.eyebrow}
          </p>
          <h2 className="font-display text-4xl tracking-tight text-[var(--ink)] sm:text-5xl">
            {dictionary.process.title}
          </h2>
          <p className="mt-4 text-lg text-[var(--ink-soft)]">
            {dictionary.process.lead}
          </p>
        </motion.div>

        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {storyStageKeys.map((key, index) => (
            <motion.li
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative"
            >
              <span className="font-display text-4xl text-[var(--accent)]/50">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="mt-3 text-lg font-medium text-[var(--ink)]">
                {dictionary.stages[key]}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
