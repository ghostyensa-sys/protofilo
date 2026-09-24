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
  localizeProject,
  projects,
} from "@/content/projects";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale, locales, type Locale } from "@/i18n/config";

type PageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    projects.map((project) => ({ locale, slug: project.slug })),
  );
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale: localeParam, slug } = await params;
  if (!isLocale(localeParam)) return {};
  const project = getProject(slug);
  if (!project) return {};
  const localized = localizeProject(project, localeParam);

  return {
    title: localized.title,
    description: localized.hook,
  };
}

export default async function WorkCasePage({ params }: PageProps) {
  const { locale: localeParam, slug } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale = localeParam as Locale;
  const dictionary = getDictionary(locale);
  const project = getProject(slug);
  if (!project) notFound();

  const localized = localizeProject(project, locale);
  const { prev, next } = getAdjacentProjects(slug);
  const prevLocalized = prev ? localizeProject(prev, locale) : null;
  const nextLocalized = next ? localizeProject(next, locale) : null;

  return (
    <main>
      <article className="px-6 pb-8 pt-28 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <Link
            href={`/${locale}/#work`}
            className="text-sm text-[var(--muted)] transition hover:text-[var(--ink)]"
          >
            {locale === "ar" ? "→ " : "← "}
            {dictionary.caseStudy.allWork}
          </Link>

          <p className="mt-8 text-xs tracking-[0.16em] text-[var(--accent-deep)] uppercase">
            {localized.level === "pro"
              ? dictionary.caseStudy.proLevel
              : dictionary.caseStudy.personalLevel}
          </p>
          <h1 className="font-display mt-3 max-w-3xl text-4xl tracking-tight text-[var(--ink)] sm:text-6xl">
            {localized.title}
          </h1>
          <p className="mt-5 max-w-2xl text-xl text-[var(--ink-soft)]">
            {localized.summary}
          </p>

          <div className="mt-12">
            <MetricsStrip
              metrics={localized.metrics}
              labels={dictionary.caseStudy}
            />
          </div>

          <section className="mt-16">
            <h2 className="mb-6 text-sm tracking-[0.16em] text-[var(--muted)] uppercase">
              {dictionary.caseStudy.screenshots}
            </h2>
            <ScreenshotGallery
              screenshots={localized.screenshots}
              labels={dictionary.caseStudy}
            />
            <p className="mt-4 text-xs text-[var(--muted)]">
              {dictionary.caseStudy.privacyNote}
            </p>
          </section>

          <section className="mt-20">
            <h2 className="mb-10 font-display text-3xl tracking-tight text-[var(--ink)]">
              {dictionary.caseStudy.theStory}
            </h2>
            <CaseStages
              story={localized.story}
              stageLabels={dictionary.stages}
            />
          </section>

          <nav className="mt-24 flex flex-col gap-4 border-t border-[var(--ink)]/12 pt-10 sm:flex-row sm:justify-between">
            {prevLocalized ? (
              <Link
                href={`/${locale}/work/${prevLocalized.slug}`}
                className="group text-[var(--ink-soft)] transition hover:text-[var(--ink)]"
              >
                <span className="block text-xs tracking-[0.14em] text-[var(--muted)] uppercase">
                  {dictionary.caseStudy.previous}
                </span>
                <span className="font-display text-xl group-hover:text-[var(--accent-deep)]">
                  {locale === "ar" ? `${prevLocalized.title} →` : `← ${prevLocalized.title}`}
                </span>
              </Link>
            ) : (
              <span />
            )}
            {nextLocalized ? (
              <Link
                href={`/${locale}/work/${nextLocalized.slug}`}
                className="group text-start text-[var(--ink-soft)] transition hover:text-[var(--ink)] sm:text-end"
              >
                <span className="block text-xs tracking-[0.14em] text-[var(--muted)] uppercase">
                  {dictionary.caseStudy.next}
                </span>
                <span className="font-display text-xl group-hover:text-[var(--accent-deep)]">
                  {locale === "ar" ? `← ${nextLocalized.title}` : `${nextLocalized.title} →`}
                </span>
              </Link>
            ) : null}
          </nav>
        </div>
      </article>
      <SiteFooter dictionary={dictionary} />
    </main>
  );
}
