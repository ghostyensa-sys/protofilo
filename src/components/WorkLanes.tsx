"use client";

import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import type { LocalizedProject } from "@/content/projects";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

function ProjectCard({
  project,
  locale,
  dictionary,
}: {
  project: LocalizedProject;
  locale: Locale;
  dictionary: Dictionary;
}) {
  return (
    <StaggerItem className="h-full">
      <Link
        href={`/${locale}/work/${project.slug}`}
        className="group flex h-full flex-col rounded-2xl border border-[var(--ink)]/10 bg-[var(--paper)] p-6 transition duration-200 hover:-translate-y-0.5 hover:border-[var(--accent)]/60"
      >
        <p className="text-xs text-[var(--muted)]">{project.metrics.platform}</p>
        <h3 className="font-display display-tight mt-3 text-2xl text-[var(--ink)] transition group-hover:text-[var(--accent-deep)]">
          {project.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--ink-soft)]">
          {project.hook}
        </p>
        <span className="mt-6 text-sm font-medium text-[var(--accent-deep)]">
          {dictionary.work.openStory} {locale === "ar" ? "←" : "→"}
        </span>
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

        <Stagger className="grid gap-4 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              locale={locale}
              dictionary={dictionary}
            />
          ))}
        </Stagger>
      </div>
    </section>
  );
}
