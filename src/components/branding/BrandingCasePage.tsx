import type { BrandingPiece } from "@/data/branding";
import FadeInView from "@/components/ui/FadeInView";
import CaseHero from "@/components/case/CaseHero";
import CaseCard from "@/components/case/CaseCard";
import BrandingGalleryGrid from "./BrandingGalleryGrid";

export default function BrandingCasePage({ project }: { project: BrandingPiece }) {
  const gallery = project.gallery ?? [];
  const hasGallery = gallery.length > 0;

  return (
    <main className="page-shell py-32 md:py-40">
      <CaseHero
        title={project.title}
        projectType="Brand identity"
        description={project.description}
        role={project.role}
        services={project.deliverables}
        year={project.year}
        palette={project.palette}
        thumbnail={project.thumbnail}
      />

      <FadeInView className="mt-16 md:mt-24">
        <CaseCard>
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            <div>
              <p className="section-label text-muted">Project goal</p>
              <p className="mt-3 max-w-xl font-display text-2xl font-medium leading-snug tracking-tight md:text-3xl">
                {project.projectGoal}
              </p>
            </div>
            <div>
              <p className="section-label text-muted">Creative approach</p>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-muted md:text-lg">
                {project.approach}
              </p>
            </div>
          </div>
        </CaseCard>
      </FadeInView>

      {hasGallery && (
        <>
          <FadeInView>
            <hr className="border-0 border-t-2 border-subtle/60 mt-12" aria-hidden="true" />
          </FadeInView>
          <div className="mt-10 md:mt-12">
            <CaseCard>
              <FadeInView>
                <div className="mb-6">
                  <h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">Project gallery</h2>
                </div>
              </FadeInView>
              <BrandingGalleryGrid assets={gallery} />
            </CaseCard>
          </div>
        </>
      )}

    </main>
  );
}
