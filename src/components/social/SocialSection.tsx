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
        <div className="section-heading">
          <div>
            <span className="section-label text-accent">02 / Selected work</span>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-tight md:text-6xl">Social <span className="italic text-muted">&amp; digital</span></h2>
          </div>
          <p className="max-w-[65ch] text-base leading-[1.65] text-muted">Social campaigns and product stories for three distinct brands.</p>
        </div>
      </FadeInView>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-6">
        {visibleProjects.map((project, i) => (
          <FadeInView key={project.slug} delay={Math.min(i * 0.035, 0.14)} className={`h-full ${i === 0 ? "md:col-span-2" : ""}`}>
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
              videoSrc={project.thumbnailVideo?.src}
              videoPoster={project.thumbnailVideo?.poster}
              variant="large"
            />
          </FadeInView>
        ))}
      </div>

      {hasMore ? <ShowMoreButton onClick={showMore} /> : null}
    </div>
  );
}
