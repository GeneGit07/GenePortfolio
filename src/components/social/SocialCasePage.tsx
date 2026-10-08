"use client";

import type { SocialProject } from "@/data/social";
import FadeInView from "@/components/ui/FadeInView";
import CaseHero from "@/components/case/CaseHero";
import CaseCard from "@/components/case/CaseCard";
import SocialGalleryGrid from "./SocialGalleryGrid";
import SocialSectionNav from "./SocialSectionNav";

export default function SocialCasePage({ project }: { project: SocialProject }) {
  return (
    <main className="page-shell py-32 md:py-40">
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
      />

      {project.sections.length > 0 && (
        <>
          <FadeInView>
            <hr className="mt-0 border-0 border-t-2 border-subtle/60 md:mt-20" aria-hidden="true" />
          </FadeInView>

          {project.sections.length > 1 && (
            <FadeInView>
              <div className="mt-8">
                <SocialSectionNav sections={project.sections} />
              </div>
            </FadeInView>
          )}

          <div className="mt-12 space-y-12 md:space-y-16">
            {project.sections.map((section) => (
              <section key={section.id} id={`section-${section.id}`} className="scroll-mt-28">
                <CaseCard>
                  <FadeInView>
                    <div className="mb-6 max-w-3xl">
                      <h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
                        {section.title}
                      </h2>
                      <p className="mt-3 text-sm leading-relaxed text-background/65 md:text-base">
                        {section.description}
                      </p>
                    </div>
                  </FadeInView>
                  <SocialGalleryGrid assets={section.assets} />
                </CaseCard>
              </section>
            ))}
          </div>
        </>
      )}

      <FadeInView className="mt-16 border-t border-border pt-10 md:mt-24 md:pt-14">
        <div className="grid gap-5 md:grid-cols-[0.7fr_1.3fr] md:gap-12">
          <div>
            <p className="section-label text-muted">Creative process</p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-tight md:text-4xl">
              AI-assisted workflow
            </h2>
          </div>
          <p className="max-w-3xl text-base leading-relaxed text-muted md:text-lg">
            {project.workflow}
          </p>
        </div>
      </FadeInView>
    </main>
  );
}
