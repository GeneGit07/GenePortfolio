import type { BrandingPiece } from "@/data/branding";
import FadeInView from "@/components/ui/FadeInView";
import CaseHero from "@/components/case/CaseHero";
import CaseCard from "@/components/case/CaseCard";
import BrandingGalleryGrid from "./BrandingGalleryGrid";
import { PAGE_PADDING_X } from "@/lib/constants";

export default function BrandingCasePage({ project }: { project: BrandingPiece }) {
  const gallery = project.gallery ?? [];
  const hasGallery = gallery.length > 0;

  return (
    <main className={`py-24 ${PAGE_PADDING_X}`}>
      <CaseHero
        title={project.title}
        description={project.description}
        year={project.year}
        palette={project.palette}
        thumbnail={project.thumbnail}
      />

      {hasGallery && (
        <>
          <FadeInView>
            <hr className="border-0 border-t-2 border-subtle/60 mt-12" aria-hidden="true" />
          </FadeInView>
          <div className="mt-10 md:mt-12">
            <CaseCard>
              <FadeInView>
                <div className="mb-6">
                  <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">Galería</h2>
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
