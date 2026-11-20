"use client";

import Link from "next/link";
import { socialProjects, type SocialProject } from "@/data/social";
import FadeInView from "@/components/ui/FadeInView";
import CaseHero from "@/components/case/CaseHero";
import SocialGalleryGrid from "./SocialGalleryGrid";
import SocialSectionNav from "./SocialSectionNav";

export default function SocialCasePage({ project }: { project: SocialProject }) {
  const index = socialProjects.findIndex((item) => item.slug === project.slug);
  const next = socialProjects[(index + 1) % socialProjects.length];

  return (
    <main id="main-content" className="page-shell pb-24 pt-32 md:pb-32 md:pt-40">
      <CaseHero
        title={project.title}
        category={project.category}
        projectType={project.projectType}
        description={project.description}
        role={project.role}
        services={project.services}
        year={project.year}
        palette={project.palette}
        thumbnail={project.thumbnail}
        thumbnailAlt={project.thumbnailAlt}
        thumbnailVideo={project.thumbnailVideo}
      />

      {project.sections.length > 0 && (
        <>
          {project.sections.length > 1 && (
            <div className="mt-20 md:mt-28">
              <SocialSectionNav sections={project.sections} />
            </div>
          )}

          <div className="mt-10 md:mt-14">
            {project.sections.map((section, i) => (
              <section
                key={section.id}
                id={`section-${section.id}`}
                className="scroll-mt-36 border-t border-border py-14 md:py-20"
              >
                <FadeInView>
                  <div className="mb-10 grid gap-4 md:grid-cols-12 md:gap-8">
                    <p className="section-label pt-2 text-accent md:col-span-2">{String(i + 1).padStart(2, "0")}</p>
                    <div className="md:col-span-10">
                      <h2 className="display-3">{section.title}</h2>
                      <p className="mt-3 max-w-[64ch] text-[0.9375rem] leading-[1.7] text-muted">{section.description}</p>
                    </div>
                  </div>
                </FadeInView>
                <SocialGalleryGrid assets={section.assets} />
              </section>
            ))}
          </div>
        </>
      )}

      <FadeInView className="border-t border-border py-14 md:py-20">
        <div className="grid gap-4 md:grid-cols-12 md:gap-8">
          <p className="section-label pt-2 text-muted md:col-span-2">Process</p>
          <div className="md:col-span-10">
            <h2 className="display-3">AI-assisted, human-led</h2>
            <p className="mt-3 max-w-[64ch] text-[0.9375rem] leading-[1.7] text-muted">{project.workflow}</p>
          </div>
        </div>
      </FadeInView>

      {next && next.slug !== project.slug ? (
        <FadeInView className="border-t border-border pt-14 md:pt-20">
          <Link href={`/projects/${next.slug}`} className="group block">
            <p className="section-label text-muted">Next project</p>
            <p className="display-2 mt-4 flex flex-wrap items-baseline gap-x-6">
              {next.title}
              <span aria-hidden="true" className="btn-arrow text-accent">→</span>
            </p>
            <p className="mt-3 max-w-[56ch] text-muted">{next.summary}</p>
          </Link>
        </FadeInView>
      ) : null}
    </main>
  );
}
