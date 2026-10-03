"use client";

import FadeInView from "@/components/ui/FadeInView";
import ShowMoreButton from "@/components/ui/ShowMoreButton";
import ProjectCard from "@/components/gallery/ProjectCard";
import { socialProjects } from "@/data/social";
import { usePaginatedList } from "@/lib/pagination";

const SOCIAL_PAGE_SIZE = 4;

export default function SocialSection() {
  const {
    visibleItems: visibleProjects,
    hasMore,
    showMore,
  } = usePaginatedList(socialProjects, SOCIAL_PAGE_SIZE);

  return (
    <div>
      <FadeInView>
        <div className="mb-12">
          <span className="text-sm font-mono font-medium text-muted">02</span>
          <h2 className="mt-1 font-display text-4xl font-bold uppercase tracking-tight md:text-5xl">
            Redes Sociales
          </h2>
        </div>
      </FadeInView>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
        {visibleProjects.map((project, i) => (
          <FadeInView key={project.slug} delay={i * 0.05} className="h-full">
            <ProjectCard
              slug={project.slug}
              title={project.title}
              year={project.year}
              thumbnail={project.thumbnail}
              variant="large"
            />
          </FadeInView>
        ))}
      </div>

      {hasMore ? <ShowMoreButton onClick={showMore} /> : null}
    </div>
  );
}
