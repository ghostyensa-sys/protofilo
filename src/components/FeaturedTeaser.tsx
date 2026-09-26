"use client";

import Link from "next/link";
import { motion } from "motion/react";
import type { LocalizedProject } from "@/content/projects";
import { storyStageKeys } from "@/content/projects";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

export function FeaturedTeaser({
  locale,
  dictionary,
  project,
}: {
  locale: Locale;
  dictionary: Dictionary;
  project: LocalizedProject;
}) {
  return (
    <section className="px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <p className="mb-3 text-xs tracking-[0.18em] text-[var(--muted)] uppercase">
            {dictionary.featured.eyebrow}
          </p>
          <h2 className="font-display max-w-3xl text-4xl tracking-tight text-[var(--ink)] sm:text-5xl">
            {project.title}
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-[var(--ink-soft)]">
            {project.summary}
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 border-t border-[var(--ink)]/12 pt-10 lg:grid-cols-5">
          {storyStageKeys.map((key, index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
            >
              <p className="text-xs tracking-[0.14em] text-[var(--accent-deep)] uppercase">
                {dictionary.stages[key]}
              </p>
              <p className="mt-3 line-clamp-5 text-sm leading-relaxed text-[var(--ink-soft)]">
                {project.story[key].lead}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <Link
            href={`/${locale}/work/${project.slug}`}
            className="inline-flex items-center text-sm font-medium text-[var(--ink)] underline-offset-4 transition hover:text-[var(--accent-deep)] hover:underline"
          >
            {dictionary.featured.readFull} {locale === "ar" ? "←" : "→"}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
