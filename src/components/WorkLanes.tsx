import Link from "next/link";
import type { LocalizedProject } from "@/content/projects";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

function ProjectRow({
  project,
  locale,
  dictionary,
}: {
  project: LocalizedProject;
  locale: Locale;
  dictionary: Dictionary;
}) {
  return (
    <Link
      href={`/${locale}/work/${project.slug}`}
      className="group grid gap-3 border-t border-[var(--ink)]/12 py-7 transition sm:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] sm:items-end sm:gap-10"
    >
      <div className="min-w-0">
        <h3 className="font-display display-tight text-2xl text-[var(--ink)] transition group-hover:text-[var(--accent-deep)] sm:text-3xl">
          {project.title}
        </h3>
        <p className="mt-2 max-w-xl text-[var(--ink-soft)]">{project.hook}</p>
      </div>
      <div className="flex flex-col gap-2 sm:items-end">
        <p className="text-sm leading-relaxed text-[var(--ink)] sm:text-end">
          {project.outcome}
        </p>
        <span className="text-sm text-[var(--accent-deep)]">
          {dictionary.work.openStory} {locale === "ar" ? "←" : "→"}
        </span>
      </div>
    </Link>
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
    <section id="work" className="scroll-mt-24 py-20 sm:py-24">
      <div className="frame">
        <div className="reveal mb-10 max-w-2xl">
          <p className="eyebrow mb-3 text-xs text-[var(--muted)]">
            {dictionary.work.eyebrow}
          </p>
          <h2 className="font-display display-tight text-4xl text-[var(--ink)] sm:text-5xl">
            {dictionary.work.title}
          </h2>
          <p className="mt-4 text-lg text-[var(--ink-soft)]">{dictionary.work.lead}</p>
        </div>

        <div className="border-b border-[var(--ink)]/12">
          {projects.map((project) => (
            <ProjectRow
              key={project.slug}
              project={project}
              locale={locale}
              dictionary={dictionary}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
