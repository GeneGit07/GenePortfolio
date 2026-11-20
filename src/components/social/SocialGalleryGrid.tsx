"use client";

import Image from "next/image";
import { useState, type CSSProperties } from "react";
import type { SocialAsset } from "@/data/social";
import { assetRatio } from "@/data/gallery";
import FadeInView from "@/components/ui/FadeInView";
import ImageModal from "@/components/ui/ImageModal";
import { activateExclusiveVideo } from "@/lib/videoPlayback";

/**
 * Justified gallery: items in a row share one height and keep their native
 * aspect ratio, so posters, stories, 4:5 posts, and portrait or landscape
 * videos sit together without cropping.
 */
export default function SocialGalleryGrid({ assets }: { assets: SocialAsset[] }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const images = assets.filter((asset) => asset.kind !== "video");
  const selected = selectedIndex === null ? null : images[selectedIndex];

  if (assets.length === 0) return null;

  const move = (direction: -1 | 1) =>
    setSelectedIndex((current) => (current === null ? null : (current + direction + images.length) % images.length));

  const single = assets.length === 1;

  return (
    <>
      <div className="justified-gallery">
        {assets.map((asset, index) => {
          const ratio = assetRatio(asset);
          const style = { "--r": ratio } as CSSProperties;
          const isVideo = asset.kind === "video";
          const isScreen = asset.kind === "screen";
          // A lone portrait item should not stretch to the full content width.
          const singleCap = single && ratio < 1 ? { maxWidth: "min(100%, 420px)" } : undefined;

          return (
            <FadeInView key={asset.src} delay={Math.min(index * 0.035, 0.25)} className="jg-item" style={style}>
              <figure style={singleCap}>
                <div className="media-frame w-full" style={{ aspectRatio: ratio }}>
                  {isVideo ? (
                    <video
                      src={asset.src}
                      poster={asset.poster}
                      aria-label={asset.alt}
                      controls
                      playsInline
                      preload={asset.poster ? "none" : "metadata"}
                      onPlay={(event) => activateExclusiveVideo(event.currentTarget)}
                      className="absolute inset-0 block h-full w-full bg-black object-cover"
                    />
                  ) : (
                    <button
                      type="button"
                      onClick={() => setSelectedIndex(images.indexOf(asset))}
                      aria-label={`View larger image: ${asset.alt}`}
                      className="group absolute inset-0 block cursor-zoom-in"
                    >
                      <Image
                        src={asset.src}
                        alt={asset.alt}
                        fill
                        sizes="(max-width: 768px) 60vw, 33vw"
                        className={`transition-transform duration-700 ${isScreen ? "object-contain p-2" : "object-cover group-hover:scale-[1.02]"}`}
                      />
                      {asset.concept ? <span className="concept-chip absolute left-2 top-2">Concept</span> : null}
                    </button>
                  )}
                </div>
                {asset.caption ? (
                  <figcaption className="mt-3 text-[0.8125rem] leading-snug text-muted">{asset.caption}</figcaption>
                ) : null}
              </figure>
            </FadeInView>
          );
        })}
        {single ? null : <span aria-hidden="true" className="jg-fill" />}
      </div>

      {selected ? (
        <ImageModal
          src={selected.src}
          alt={selected.alt}
          onClose={() => setSelectedIndex(null)}
          onPrevious={images.length > 1 ? () => move(-1) : undefined}
          onNext={images.length > 1 ? () => move(1) : undefined}
        />
      ) : null}
    </>
  );
}
