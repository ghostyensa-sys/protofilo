"use client";

import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import type { LocalizedProject } from "@/content/projects";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

function ProjectRow({
  project,
  locale,
  dictionary,
  index,
}: {
  project: LocalizedProject;
  locale: Locale;
  dictionary: Dictionary;
  index: number;
}) {
  return (
    <StaggerItem>
      <Link
        href={`/${locale}/work/${project.slug}`}
        className="group grid gap-2 border-t border-[var(--ink)]/12 py-6 transition sm:grid-cols-[2.5rem_minmax(0,1.15fr)_minmax(0,0.85fr)] sm:items-baseline sm:gap-8"
      >
        <span className="hidden text-xs text-[var(--muted)] sm:block">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="min-w-0">
          <h3 className="font-display display-tight text-xl text-[var(--ink)] transition group-hover:text-[var(--accent-deep)] sm:text-2xl">
            {project.title}
          </h3>
          <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-[var(--ink-soft)] sm:text-base">
            {project.hook}
          </p>
        </div>
        <div className="flex flex-col gap-1.5 sm:items-end">
          <p className="line-clamp-2 text-sm leading-relaxed text-[var(--muted)] sm:text-end">
            {project.outcome}
          </p>
          <span className="text-sm text-[var(--accent-deep)]">
            {dictionary.work.openStory} {locale === "ar" ? "←" : "→"}
          </span>
        </div>
      </Link>
    </StaggerItem>
  );
}

export function WorkLanes({
  locale,
  dictionary,
  projects,
}: {
  locale: Locale;
  dictionary: Dictionary;
  projects: LocalizedProject[];
}) {
  return (
    <section id="work" className="scroll-mt-24 py-16 sm:py-20">
      <div className="frame">
        <Reveal className="mb-8 max-w-2xl">
          <p className="eyebrow mb-3 text-xs text-[var(--muted)]">
            {dictionary.work.eyebrow}
          </p>
          <h2 className="font-display display-tight text-3xl text-[var(--ink)] sm:text-4xl">
            {dictionary.work.title}
          </h2>
          <p className="mt-3 text-lg text-[var(--ink-soft)]">{dictionary.work.lead}</p>
        </Reveal>

        <Stagger className="border-b border-[var(--ink)]/12">
          {projects.map((project, index) => (
            <ProjectRow
              key={project.slug}
              project={project}
              locale={locale}
              dictionary={dictionary}
              index={index}
            />
          ))}
        </Stagger>
      </div>
    </section>
  );
}
