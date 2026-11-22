import Link from "next/link";
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
        <div className="reveal">
          <p className="eyebrow mb-3 text-xs text-[var(--muted)]">
            {dictionary.featured.eyebrow}
          </p>
          <h2 className="font-display max-w-3xl text-4xl tracking-tight text-[var(--ink)] sm:text-5xl">
            {project.title}
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-[var(--ink-soft)]">
            {project.summary}
          </p>
        </div>

        <div className="mt-12 grid gap-8 border-t border-[var(--ink)]/12 pt-10 lg:grid-cols-5">
          {storyStageKeys.map((key, index) => (
            <div
              key={key}
              className="reveal"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <p className="eyebrow text-xs text-[var(--accent-deep)]">
                {dictionary.stages[key]}
              </p>
              <p className="mt-3 line-clamp-5 text-sm leading-relaxed text-[var(--ink-soft)]">
                {project.story[key].lead}
              </p>
            </div>
          ))}
        </div>

        <div className="reveal mt-10">
          <Link
            href={`/${locale}/work/${project.slug}`}
            className="inline-flex items-center text-sm font-medium text-[var(--ink)] underline-offset-4 transition hover:text-[var(--accent-deep)] hover:underline"
          >
            {dictionary.featured.readFull} {locale === "ar" ? "←" : "→"}
          </Link>
        </div>
      </div>
    </section>
  );
}
