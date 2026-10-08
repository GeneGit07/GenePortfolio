"use client";

import FadeInView from "@/components/ui/FadeInView";
import ShowMoreButton from "@/components/ui/ShowMoreButton";
import ProjectCard from "@/components/gallery/ProjectCard";
import { brandingPieces } from "@/data/branding";
import { usePaginatedList } from "@/lib/pagination";

const PIECES_PAGE_SIZE = 4;

export default function BrandingSection() {
  const { visibleItems: visiblePiecesList, hasMore: hasMorePieces, showMore } =
    usePaginatedList(brandingPieces, PIECES_PAGE_SIZE);

  return (
    <div className="page-shell">
      <FadeInView>
        <div className="mb-14 flex flex-col justify-between gap-5 md:mb-16 md:flex-row md:items-end">
          <div><span className="section-label text-muted">03 / Brand identities</span>
            <h2 className="mt-5 font-display text-5xl font-medium tracking-[-0.065em] md:text-7xl">Brands with <span className="italic text-muted">character</span></h2></div>
          <p className="max-w-xs text-sm leading-relaxed text-muted">Ideas shaped into distinctive, memorable visual worlds.</p>
        </div>
      </FadeInView>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
        {visiblePiecesList.map((piece, i) => (
          <FadeInView key={piece.slug} delay={i * 0.05} className="h-full">
            <ProjectCard
              slug={piece.slug}
              title={piece.title}
              year={piece.year}
              thumbnail={piece.thumbnail}
              variant="large"
            />
          </FadeInView>
        ))}
      </div>

      {hasMorePieces ? <ShowMoreButton onClick={showMore} /> : null}
    </div>
  );
}
