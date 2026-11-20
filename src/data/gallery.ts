// ---------------------------------------------------------------------------
// Gallery builders — shared by branding & social data files.
// This file contains ALL structural logic (kind maps, path generation,
// aspect defaults). The data files only define interfaces + arrays.
// ---------------------------------------------------------------------------

const IMG_EXT = ".webp";
// ---- Branding -----------------------------------------------------------

export interface BrandingGallerySpec {
  /** Slug del proyecto, carpeta destino ej. "dsumar" */
  slug: string;
  label: string;
  /** Número de items: genera item-1.webp … item-N.webp */
  items: number;
}

export interface BrandingAsset {
  src: string;
  alt: string;
}

export function buildBrandingGallery(spec: BrandingGallerySpec): BrandingAsset[] {
  const gallery: BrandingAsset[] = [];
  for (let i = 1; i <= spec.items; i++) {
    gallery.push({
      src: `/assets/branding/${spec.slug}/item-${i}${IMG_EXT}`,
      alt: `${spec.label} — ${i}`,
    });
  }
  return gallery;
}

// ---- Social -------------------------------------------------------------

export type SocialAssetKind = "campaign" | "screen" | "video";

export interface SocialAsset {
  src: string;
  alt: string;
  kind: SocialAssetKind;
  caption?: string;
  poster?: string;
  concept?: boolean;
  /** Width ÷ height of the source file. Keeps media uncropped in galleries. */
  ratio?: number;
}

/** Common aspect ratios (width ÷ height) used across the portfolio assets. */
export const RATIO = {
  landscape: 16 / 9,
  portrait: 9 / 16,
  post: 4 / 5,
  poster: 2 / 3,
  story: 941 / 1672,
  phone: 390 / 844,
} as const;

const DEFAULT_RATIO: Record<SocialAssetKind, number> = {
  campaign: RATIO.poster,
  screen: RATIO.phone,
  video: RATIO.landscape,
};

export function assetRatio(asset: Pick<SocialAsset, "kind" | "ratio">): number {
  return asset.ratio ?? DEFAULT_RATIO[asset.kind];
}

export interface SocialGallerySection {
  id: string;
  title: string;
  description: string;
  assets: SocialAsset[];
}
