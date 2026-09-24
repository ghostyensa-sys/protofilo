import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CaseStages } from "@/components/CaseStages";
import { MetricsStrip } from "@/components/MetricsStrip";
import { ScreenshotGallery } from "@/components/ScreenshotGallery";
import { SiteFooter } from "@/components/SiteFooter";
import {
  getAdjacentProjects,
  getProject,
  projects,
} from "@/content/projects";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.hook,
  };
}

export default async function WorkCasePage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const { prev, next } = getAdjacentProjects(slug);

  return (
    <main>
      <article className="px-6 pb-8 pt-28 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/#work"
            className="text-sm text-[var(--muted)] transition hover:text-[var(--ink)]"
          >
            ← All work
          </Link>

          <p className="mt-8 text-xs tracking-[0.16em] text-[var(--accent-deep)] uppercase">
            {project.level === "pro" ? "Pro level" : "Personal level"}
          </p>
          <h1 className="font-display mt-3 max-w-3xl text-4xl tracking-tight text-[var(--ink)] sm:text-6xl">
            {project.title}
          </h1>
          <p className="mt-5 max-w-2xl text-xl text-[var(--ink-soft)]">
            {project.summary}
          </p>

          <div className="mt-12">
            <MetricsStrip metrics={project.metrics} />
          </div>

          <section className="mt-16">
            <h2 className="mb-6 text-sm tracking-[0.16em] text-[var(--muted)] uppercase">
              Screenshots
            </h2>
            <ScreenshotGallery screenshots={project.screenshots} />
            <p className="mt-4 text-xs text-[var(--muted)]">
              No public repository — proof is screenshots and craft metrics only.
            </p>
          </section>

          <section className="mt-20">
            <h2 className="mb-10 font-display text-3xl tracking-tight text-[var(--ink)]">
              The story
            </h2>
            <CaseStages story={project.story} />
          </section>

          <nav className="mt-24 flex flex-col gap-4 border-t border-[var(--ink)]/12 pt-10 sm:flex-row sm:justify-between">
            {prev ? (
              <Link
                href={`/work/${prev.slug}`}
                className="group text-[var(--ink-soft)] transition hover:text-[var(--ink)]"
              >
                <span className="block text-xs tracking-[0.14em] text-[var(--muted)] uppercase">
                  Previous
                </span>
                <span className="font-display text-xl group-hover:text-[var(--accent-deep)]">
                  ← {prev.title}
                </span>
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link
                href={`/work/${next.slug}`}
                className="group text-left text-[var(--ink-soft)] transition hover:text-[var(--ink)] sm:text-right"
              >
                <span className="block text-xs tracking-[0.14em] text-[var(--muted)] uppercase">
                  Next
                </span>
                <span className="font-display text-xl group-hover:text-[var(--accent-deep)]">
                  {next.title} →
                </span>
              </Link>
            ) : null}
          </nav>
        </div>
      </article>
      <SiteFooter />
    </main>
  );
}
