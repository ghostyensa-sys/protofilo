import { About } from "@/components/About";
import { AiTools } from "@/components/AiTools";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { SiteFooter } from "@/components/SiteFooter";
import { WorkLanes } from "@/components/WorkLanes";
import { getLocalizedProjects } from "@/content/projects";
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
  const systems = getLocalizedProjects(locale);

  return (
    <main id="main">
      <Hero
        locale={locale}
        dictionary={dictionary}
        systems={systems.map((project) => ({
          slug: project.slug,
          title: project.title,
          hook: project.hook,
        }))}
      />
      <About dictionary={dictionary} />
      <AiTools dictionary={dictionary} />
      <Services locale={locale} dictionary={dictionary} />
      <WorkLanes locale={locale} dictionary={dictionary} projects={systems} />
      <SiteFooter dictionary={dictionary} />
    </main>
  );
}
