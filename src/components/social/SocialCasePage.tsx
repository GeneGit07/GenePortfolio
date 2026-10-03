"use client";

import type { SocialProject } from "@/data/social";
import FadeInView from "@/components/ui/FadeInView";
import CaseHero from "@/components/case/CaseHero";
import CaseCard from "@/components/case/CaseCard";
import SocialGalleryGrid from "./SocialGalleryGrid";
import SocialSectionNav from "./SocialSectionNav";
import { PAGE_PADDING_X } from "@/lib/constants";

const KIND_LABELS: Record<string, string> = {
  banner: "Banners",
  carousel: "Carruseles",
  post: "Posts",
  reel: "Reels",
  mockup: "Mockups",
};

function groupByKind(gallery: SocialProject["gallery"]) {
  const groups = new Map<string, typeof gallery>();
  for (const asset of gallery) {
    if (!groups.has(asset.kind)) groups.set(asset.kind, []);
    groups.get(asset.kind)!.push(asset);
  }
  // Orden editorial: banners → carruseles → mockups → posts → reels
  const order = ["banner", "carousel", "mockup", "post", "reel"];
  return [...groups.entries()].sort(
    (a, b) => order.indexOf(a[0]) - order.indexOf(b[0])
  );
}

export default function SocialCasePage({ project }: { project: SocialProject }) {
  const grouped = groupByKind(project.gallery);
  const kinds = grouped.map(([k]) => k);

  return (
    <main className={`py-24 ${PAGE_PADDING_X}`}>
      <CaseHero
        title={project.title}
        description={project.description}
        year={project.year}
        palette={project.palette}
        thumbnail={project.thumbnail}
      />

      {/* Delineado info → galería, igual que en branding */}
      {grouped.length > 0 && (
        <FadeInView>
          <hr className="mt-0 border-0 border-t-2 border-subtle/60 md:mt-20" aria-hidden="true" />
        </FadeInView>
      )}

      {/* Nav anchor por kind */}
      {kinds.length > 1 && (
        <FadeInView>
          <div className="mt-12">
            <SocialSectionNav kinds={kinds} />
          </div>
        </FadeInView>
      )}

      {/* Secciones apiladas por kind */}
      <div className="mt-12 space-y-16">
        {grouped.map(([kind, assets]) => (
          <section key={kind} id={`section-${kind}`} className="scroll-mt-28">
            <CaseCard>
              <FadeInView>
                <div className="mb-6">
                  <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
                    {KIND_LABELS[kind] ?? kind}
                  </h2>
                </div>
              </FadeInView>
              <SocialGalleryGrid assets={assets} />
            </CaseCard>
          </section>
        ))}
      </div>
    </main>
  );
}
