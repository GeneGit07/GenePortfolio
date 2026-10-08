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
    <div className="page-shell">
      <FadeInView>
        <div className="mb-14 flex flex-col justify-between gap-5 md:mb-16 md:flex-row md:items-end">
          <div><span className="section-label text-muted">02 / Selected work</span>
            <h2 className="mt-5 font-display text-5xl font-medium tracking-[-0.065em] md:text-7xl">Social <span className="italic text-muted">& digital</span></h2></div>
          <p className="max-w-xs text-sm leading-relaxed text-muted">Social campaigns and product stories for three distinct brands.</p>
        </div>
      </FadeInView>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
        {visibleProjects.map((project, i) => (
          <FadeInView key={project.slug} delay={i * 0.05} className="h-full">
            <ProjectCard
              slug={project.slug}
              title={project.title}
              year={project.year}
              eyebrow={project.year}
              category={project.category}
              description={project.description}
              thumbnail={project.thumbnail}
              thumbnailAlt={project.thumbnailAlt}
              thumbnailPosition={project.thumbnailPosition}
              variant="large"
            />
          </FadeInView>
        ))}
      </div>

      {hasMore ? <ShowMoreButton onClick={showMore} /> : null}
    </div>
  );
}
