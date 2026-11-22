import Link from "next/link";
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
    <div className="reveal" style={{ animationDelay: `${index * 60}ms` }}>
      <Link
        href={`/${locale}/work/${project.slug}`}
        className="group flex flex-col gap-3 border-t border-[var(--ink)]/12 py-7 transition sm:flex-row sm:items-end sm:justify-between sm:gap-10"
      >
        <div className="min-w-0">
          <h3 className="font-display text-2xl tracking-tight text-[var(--ink)] transition group-hover:text-[var(--accent-deep)] sm:text-3xl">
            {project.title}
          </h3>
          <p className="mt-2 max-w-xl text-[var(--ink-soft)]">{project.hook}</p>
        </div>
        <div className="flex shrink-0 flex-col gap-2 sm:max-w-xs sm:items-end">
          <p className="text-sm leading-relaxed text-[var(--ink)]">
            {project.outcome}
          </p>
          <span className="text-sm text-[var(--accent-deep)] transition group-hover:translate-x-1 rtl:group-hover:-translate-x-1">
            {dictionary.work.openStory} {locale === "ar" ? "←" : "→"}
          </span>
        </div>
      </Link>
    </div>
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
    <section id="work" className="scroll-mt-24 px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="reveal mb-14 max-w-2xl">
          <p className="eyebrow mb-3 text-xs text-[var(--muted)]">
            {dictionary.work.eyebrow}
          </p>
          <h2 className="font-display text-4xl tracking-tight text-[var(--ink)] sm:text-5xl">
            {dictionary.work.title}
          </h2>
          <p className="mt-4 text-lg text-[var(--ink-soft)]">
            {dictionary.work.lead}
          </p>
        </div>

        <div>
          {projects.map((project, index) => (
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
    </section>
  );
}
