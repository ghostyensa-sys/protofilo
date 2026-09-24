"use client";

import Link from "next/link";
import { motion } from "motion/react";
import type { LocalizedProject } from "@/content/projects";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

function ProjectRow({
  project,
  index,
  locale,
  dictionary,
}: {
  project: LocalizedProject;
  index: number;
  locale: Locale;
  dictionary: Dictionary;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href={`/${locale}/work/${project.slug}`}
        className="group flex flex-col gap-3 border-t border-[var(--ink)]/12 py-7 transition sm:flex-row sm:items-end sm:justify-between sm:gap-10"
      >
        <div className="min-w-0">
          <p className="mb-2 text-xs tracking-[0.16em] text-[var(--muted)] uppercase">
            {project.level === "pro"
              ? dictionary.work.pro
              : dictionary.work.personal}
          </p>
          <h3 className="font-display text-2xl tracking-tight text-[var(--ink)] transition group-hover:text-[var(--accent-deep)] sm:text-3xl">
            {project.title}
          </h3>
          <p className="mt-2 max-w-xl text-[var(--ink-soft)]">{project.hook}</p>
        </div>
        <div className="flex shrink-0 items-center gap-6 text-sm text-[var(--muted)]">
          <span>
            {project.metrics.linesOfCode} {dictionary.work.loc}
          </span>
          <span className="text-[var(--accent-deep)] transition group-hover:translate-x-1 rtl:group-hover:-translate-x-1">
            {dictionary.work.openStory} {locale === "ar" ? "←" : "→"}
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

export function WorkLanes({
  locale,
  dictionary,
  pro,
  personal,
}: {
  locale: Locale;
  dictionary: Dictionary;
  pro: LocalizedProject[];
  personal: LocalizedProject[];
}) {
  return (
    <section id="work" className="scroll-mt-24 px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-14 max-w-2xl"
        >
          <p className="mb-3 text-xs tracking-[0.18em] text-[var(--muted)] uppercase">
            {dictionary.work.eyebrow}
          </p>
          <h2 className="font-display text-4xl tracking-tight text-[var(--ink)] sm:text-5xl">
            {dictionary.work.title}
          </h2>
          <p className="mt-4 text-lg text-[var(--ink-soft)]">
            {dictionary.work.lead}
          </p>
        </motion.div>

        <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          <div>
            <h3 className="mb-2 text-sm tracking-[0.16em] text-[var(--accent-deep)] uppercase">
              {dictionary.work.pro}
            </h3>
            <div>
              {pro.map((project, index) => (
                <ProjectRow
                  key={project.slug}
                  project={project}
                  index={index}
                  locale={locale}
                  dictionary={dictionary}
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-2 text-sm tracking-[0.16em] text-[var(--accent-deep)] uppercase">
              {dictionary.work.personal}
            </h3>
            <div>
              {personal.map((project, index) => (
                <ProjectRow
                  key={project.slug}
                  project={project}
                  index={index}
                  locale={locale}
                  dictionary={dictionary}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
