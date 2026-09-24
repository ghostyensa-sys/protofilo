import { FeaturedTeaser } from "@/components/FeaturedTeaser";
import { Hero } from "@/components/Hero";
import { SiteFooter } from "@/components/SiteFooter";
import { StoryProcess } from "@/components/StoryProcess";
import { WorkLanes } from "@/components/WorkLanes";
import {
  personalProjects,
  proProjects,
  projects,
} from "@/content/projects";

export default function HomePage() {
  const featured = projects[0];

  return (
    <main>
      <Hero />
      <WorkLanes pro={proProjects} personal={personalProjects} />
      <StoryProcess />
      <FeaturedTeaser project={featured} />
      <SiteFooter />
    </main>
  );
}
