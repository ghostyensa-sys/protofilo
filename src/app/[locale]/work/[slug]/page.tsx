import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CaseStages } from "@/components/CaseStages";
import { CraftNote, MetricsStrip } from "@/components/MetricsStrip";
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
import { existingScreenshots } from "@/lib/screenshots";
import { socialMetadata } from "@/lib/metadata";

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
  const dictionary = getDictionary(localeParam);
  const title = `${localized.title} · ${dictionary.meta.title}`;

  return {
    title: localized.title,
    description: localized.hook,
    ...socialMetadata({
      locale: localeParam,
      title,
      description: localized.hook,
      path: `/work/${localized.slug}`,
      siteName: dictionary.meta.title,
    }),
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
  const screenshots = existingScreenshots(localized.screenshots);
  const { prev, next } = getAdjacentProjects(slug);
  const prevLocalized = prev ? localizeProject(prev, locale) : null;
  const nextLocalized = next ? localizeProject(next, locale) : null;

  return (
    <main id="main">
      <article className="pt-28 pb-8">
        <div className="frame">
          <Link
            href={`/${locale}/#work`}
            className="text-sm text-[var(--muted)] transition hover:text-[var(--ink)]"
          >
            {locale === "ar" ? "→ " : "← "}
            {dictionary.caseStudy.allWork}
          </Link>

          <h1 className="font-display display-tight mt-8 max-w-3xl text-4xl text-[var(--ink)] sm:text-6xl">
            {localized.title}
          </h1>
          <p className="mt-5 max-w-2xl text-xl leading-relaxed text-[var(--ink)]">
            {localized.outcome}
          </p>

          <div className="mt-12">
            <MetricsStrip
              metrics={localized.metrics}
              labels={dictionary.caseStudy}
            />
          </div>

          {screenshots.length > 0 ? (
            <section className="mt-16">
              <h2 className="eyebrow mb-6 text-sm text-[var(--muted)]">
                {dictionary.caseStudy.screenshots}
              </h2>
              <ScreenshotGallery screenshots={screenshots} />
            </section>
          ) : null}

          <section className="mt-16">
            <h2 className="font-display display-tight mb-10 text-3xl text-[var(--ink)]">
              {dictionary.caseStudy.theStory}
            </h2>
            <CaseStages
              story={localized.story}
              stageLabels={dictionary.stages}
            />
          </section>

          <CraftNote metrics={localized.metrics} labels={dictionary.caseStudy} />

          <div className="mt-10">
            <a href={`/${locale}/#contact`} className="btn btn-primary">
              {dictionary.caseStudy.startSimilar}
            </a>
          </div>

          <nav className="mt-24 flex flex-col gap-4 border-t border-[var(--ink)]/12 pt-10 sm:flex-row sm:justify-between">
            {prevLocalized ? (
              <Link
                href={`/${locale}/work/${prevLocalized.slug}`}
                className="group text-[var(--ink-soft)] transition hover:text-[var(--ink)]"
              >
                <span className="eyebrow block text-xs text-[var(--muted)]">
                  {dictionary.caseStudy.previous}
                </span>
                <span className="font-display display-tight text-xl group-hover:text-[var(--accent-deep)]">
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
                <span className="eyebrow block text-xs text-[var(--muted)]">
                  {dictionary.caseStudy.next}
                </span>
                <span className="font-display display-tight text-xl group-hover:text-[var(--accent-deep)]">
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
