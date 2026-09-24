import { FeaturedTeaser } from "@/components/FeaturedTeaser";
import { Hero } from "@/components/Hero";
import { SiteFooter } from "@/components/SiteFooter";
import { StoryProcess } from "@/components/StoryProcess";
import { WorkLanes } from "@/components/WorkLanes";
import {
  getLocalizedProjects,
  localizeProject,
  projects,
} from "@/content/projects";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale, type Locale } from "@/i18n/config";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: PageProps) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale = localeParam as Locale;
  const dictionary = getDictionary(locale);
  const localized = getLocalizedProjects(locale);
  const pro = localized.filter((p) => p.level === "pro");
  const personal = localized.filter((p) => p.level === "personal");
  const featured = localizeProject(projects[0], locale);

  return (
    <main>
      <Hero dictionary={dictionary} />
      <WorkLanes
        locale={locale}
        dictionary={dictionary}
        pro={pro}
        personal={personal}
      />
      <StoryProcess dictionary={dictionary} />
      <FeaturedTeaser
        locale={locale}
        dictionary={dictionary}
        project={featured}
      />
      <SiteFooter dictionary={dictionary} />
    </main>
  );
}
