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
    <div>
      <FadeInView>
        <div className="mb-12">
          <span className="text-sm font-mono font-medium text-muted">03</span>
          <h2 className="mt-1 font-display text-4xl font-bold uppercase tracking-tight md:text-5xl">
            Branding
          </h2>
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
