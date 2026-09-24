"use client";

import { motion } from "motion/react";
import { storyStages } from "@/content/projects";

export function StoryProcess() {
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
            How I tell work
          </p>
          <h2 className="font-display text-4xl tracking-tight text-[var(--ink)] sm:text-5xl">
            Issue to impact.
          </h2>
          <p className="mt-4 text-lg text-[var(--ink-soft)]">
            Every project follows the same arc — so you see the problem, the bet,
            and what actually changed.
          </p>
        </motion.div>

        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {storyStages.map((stage, index) => (
            <motion.li
              key={stage.key}
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
                {stage.label}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
