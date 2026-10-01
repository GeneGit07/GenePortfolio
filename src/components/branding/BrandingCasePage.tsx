import type { BrandingPiece } from "@/data/branding";
import FadeInView from "@/components/ui/FadeInView";
import CaseHero from "@/components/case/CaseHero";
import BrandingGalleryGrid from "./BrandingGalleryGrid";
import { PAGE_PADDING_X } from "@/lib/constants";

export default function BrandingCasePage({ project }: { project: BrandingPiece }) {
  const gallery = project.gallery ?? [];
  const hasGallery = gallery.length > 0;

  return (
    <main className={`py-24 ${PAGE_PADDING_X}`}>
      <CaseHero
        title={project.title}
        subtitle={project.subtitle}
        description={project.description}
        year={project.year}
        palette={project.palette}
        thumbnail={project.thumbnail}
      />

      {hasGallery && (
        <>
          <FadeInView>
            <hr className="border-0 border-t border-border mt-12" aria-hidden="true" />
          </FadeInView>
          <div className="mt-10 md:mt-12">
            <FadeInView>
              <div className="mb-6">
                <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Galería</h2>
              </div>
            </FadeInView>
            <BrandingGalleryGrid assets={gallery} />
          </div>
        </>
      )}

    </main>
  );
}
