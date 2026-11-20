import { brandingPieces } from "@/data/branding";
import { socialProjects } from "@/data/social";
import { assetRatio } from "@/data/gallery";

export interface FeatureLibraryItem {
  project: string;
  title: string;
  src: string;
  alt: string;
  kind?: "image" | "video";
  poster?: string;
  concept?: boolean;
  fit?: "cover" | "contain";
  /** Vertical (9:16) video — rendered in a portrait frame. */
  portrait?: boolean;
  href?: string;
}

export interface ProjectFeatureMedia {
  feature: string;
  preview: FeatureLibraryItem[];
  library: FeatureLibraryItem[];
  note?: string;
}

const socialThumbnails: FeatureLibraryItem[] = socialProjects.map((project) => ({
  project: project.title,
  title: project.projectType,
  src: project.thumbnail,
  alt: project.thumbnailAlt,
  href: `/projects/${project.slug}`,
}));

const socialCampaignAssets: FeatureLibraryItem[] = socialProjects.flatMap((project) =>
  project.sections.flatMap((section) =>
    section.assets
      .filter((asset) => asset.kind === "campaign")
      .map((asset) => ({
        project: project.title,
        title: section.title,
        src: asset.src,
        alt: asset.alt,
        href: `/projects/${project.slug}`,
      })),
  ),
);

/** Every video across the case studies, in case-study order. */
const videoReels: FeatureLibraryItem[] = socialProjects.flatMap((project) =>
  project.sections.flatMap((section) =>
    section.assets
      .filter((asset) => asset.kind === "video")
      .map((asset) => ({
        project: project.title,
        title: asset.caption ?? section.title,
        src: asset.src,
        poster: asset.poster,
        alt: asset.alt,
        kind: "video" as const,
        portrait: assetRatio(asset) < 1,
        href: `/projects/${project.slug}`,
      })),
  ),
);

const archiveReels: FeatureLibraryItem[] = [
  {
    project: "Ana Maria La Justicia",
    title: "Social reel — Product feature",
    src: "/assets/features/video-motion/ana-maria-reel-2.webm",
    poster: "/assets/features/video-motion/ana-maria-reel-2.webp",
    alt: "Product-focused promotional social reel from the archived portfolio.",
    kind: "video",
    portrait: true,
  },
  {
    project: "MD Lash Factor",
    title: "Social reel — Product promotion",
    src: "/assets/features/video-motion/md-lash-factor-reel-5.webm",
    poster: "/assets/features/video-motion/md-lash-factor-reel-5.webp",
    alt: "Product-focused promotional social reel from the archived portfolio.",
    kind: "video",
    portrait: true,
  },
];

const brandAssets: FeatureLibraryItem[] = brandingPieces.map((piece) => ({
  project: piece.title,
  title: "Visual identity",
  src: piece.thumbnail,
  alt: `${piece.title} visual identity project`,
  href: `/projects/${piece.slug}`,
}));

const mobileScreens: FeatureLibraryItem[] = [
  ["Home", "app-home"],
  ["Menu", "app-menu"],
  ["Product detail", "app-product-detail"],
  ["Cart", "app-cart"],
  ["Order confirmation", "app-order-confirmation"],
].map(([label, file]): FeatureLibraryItem => ({
  project: "Rendezvous Cafe",
  title: `Mobile app — ${label}`,
  src: `/assets/social/rendezvous-cafe/${file}.png`,
  alt: `Rendezvous Cafe mobile app concept ${label.toLowerCase()} screen.`,
  fit: "contain",
  concept: true,
  href: "/projects/rendezvous-cafe",
}));

const pick = (items: FeatureLibraryItem[], ...srcFragments: string[]) =>
  srcFragments
    .map((fragment) => items.find((item) => item.src.includes(fragment)))
    .filter((item): item is FeatureLibraryItem => Boolean(item));

export const PROJECT_FEATURE_MEDIA: ProjectFeatureMedia[] = [
  {
    feature: "Social Media Management",
    preview: socialThumbnails,
    library: socialThumbnails,
  },
  {
    feature: "Content Creation",
    preview: pick(socialCampaignAssets, "signature-mango", "power-outage", "hotdog-menu"),
    library: socialCampaignAssets,
  },
  {
    feature: "Video & Motion",
    preview: pick(videoReels, "more-than-solar-panels", "all-day-favorites", "christmas-reel"),
    library: [...videoReels, ...archiveReels],
    note: "Brand reels, menu films, customer testimonials, and seasonal edits from SolarWorks PH, Rendezvous Cafe, and Fifth Ave Dogs.",
  },
  {
    feature: "Visual Design",
    preview: brandAssets.slice(0, 3),
    library: brandAssets,
  },
  {
    feature: "UI/UX & Figma",
    preview: mobileScreens.slice(0, 3),
    library: mobileScreens,
  },
  {
    feature: "AI-Assisted Creative",
    preview: pick(socialCampaignAssets, "signature-chocolate", "free-daylight", "lychee-refresh"),
    library: socialThumbnails,
    note: "These projects document AI-assisted production as one part of a human-led creative process.",
  },
];
