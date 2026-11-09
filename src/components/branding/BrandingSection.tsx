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
        <div className="section-heading">
          <div><span className="section-label text-accent">03 / Brand identities</span>
            <h2 className="mt-3 font-display text-5xl font-semibold leading-tight md:text-7xl">Brands with <span className="italic text-muted">character</span></h2></div>
          <p className="max-w-[65ch] text-base leading-[1.65] text-muted">Ideas shaped into distinctive, memorable visual worlds.</p>
        </div>
      </FadeInView>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
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
