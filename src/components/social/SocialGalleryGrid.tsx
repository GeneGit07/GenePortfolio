"use client";

import Image from "next/image";
import { useState } from "react";
import type { SocialAsset } from "@/data/social";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import ImageModal from "@/components/ui/ImageModal";
import { activateExclusiveVideo } from "@/lib/videoPlayback";

export default function SocialGalleryGrid({ assets }: { assets: SocialAsset[] }) {
  const [selected, setSelected] = useState<SocialAsset | null>(null);

  if (assets.length === 0) return null;

  return (
    <>
      <GalleryGrid>
        {assets.map((asset, index) => {
          const isScreen = asset.kind === "screen";
          const isVideo = asset.kind === "video";
          return (
            <GalleryGrid.Item key={asset.src} colSpan={isVideo ? 2 : 1} index={index}>
              {isVideo ? (
                <figure className="relative overflow-hidden rounded-2xl bg-black">
                  <div className="relative aspect-video w-full overflow-hidden">
                    <video
                      src={asset.src}
                      poster={asset.poster}
                      aria-label={asset.alt}
                      controls
                      muted={false}
                      playsInline
                      preload="auto"
                      onPlay={(event) => activateExclusiveVideo(event.currentTarget)}
                      className="absolute inset-0 block h-full w-full object-cover object-center"
                      style={{ width: "100%", height: "100%", objectPosition: "center center" }}
                    />
                  </div>
                  {asset.caption && <figcaption className="px-3 py-3 text-sm text-background">{asset.caption}</figcaption>}
                </figure>
              ) : (
                <button
                  type="button"
                  onClick={() => setSelected(asset)}
                  aria-label={`View larger image: ${asset.alt}`}
                  className={`group block h-full w-full cursor-zoom-in overflow-hidden rounded-2xl text-left ${isScreen ? "bg-[#100d08]" : "bg-surface"}`}
                >
                  <div className={`relative w-full overflow-hidden ${isScreen ? "aspect-[9/16]" : "aspect-[2/3] bg-surface"}`}>
                    <Image
                      src={asset.src}
                      alt={asset.alt}
                      fill
                      sizes="(max-width:768px) 50vw, 25vw"
                      className={`${isScreen ? "object-contain" : "object-cover group-hover:scale-[1.02]"}`}
                    />
                    {asset.caption && (
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-3 py-3">
                        <p className="text-sm tracking-wide text-white">{asset.caption}</p>
                      </div>
                    )}
                  </div>
                </button>
              )}
            </GalleryGrid.Item>
          );
        })}
      </GalleryGrid>

      {selected && <ImageModal src={selected.src} alt={selected.alt} onClose={() => setSelected(null)} />}
    </>
  );
}
