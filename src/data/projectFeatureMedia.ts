import { brandingPieces } from "@/data/branding";
import { socialProjects } from "@/data/social";

export interface FeatureLibraryItem {
  project: string;
  title: string;
  src: string;
  alt: string;
  kind?: "image" | "video";
  poster?: string;
  fit?: "cover" | "contain";
  href?: string;
}

export interface ProjectFeatureMedia {
  feature: string;
  preview: FeatureLibraryItem[];
  library: FeatureLibraryItem[];
  note?: string;
}

const socialThumbnails = socialProjects.map((project) => ({
  project: project.title,
  title: project.projectType,
  src: project.thumbnail,
  alt: project.thumbnailAlt,
  href: `/projects/${project.slug}`,
}));

const socialCampaignAssets = socialProjects.flatMap((project) =>
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

const brandAssets = brandingPieces.map((piece) => ({
  project: piece.title,
  title: "Visual identity",
  src: piece.thumbnail,
  alt: `${piece.title} visual identity project`,
  href: `/projects/${piece.slug}`,
}));

const mobileScreens: FeatureLibraryItem[] = [
  {
    project: "Rendezvous Cafe",
    title: "Mobile app — Home",
    src: "/assets/social/rendezvous-cafe/app-home.png",
    alt: "Rendezvous Cafe mobile app concept home screen.",
    fit: "contain",
    href: "/projects/rendezvous-cafe",
  },
  {
    project: "Rendezvous Cafe",
    title: "Mobile app — Menu",
    src: "/assets/social/rendezvous-cafe/app-menu.png",
    alt: "Rendezvous Cafe mobile app concept menu screen.",
    fit: "contain",
    href: "/projects/rendezvous-cafe",
  },
  {
    project: "Rendezvous Cafe",
    title: "Mobile app — Product detail",
    src: "/assets/social/rendezvous-cafe/app-product-detail.png",
    alt: "Rendezvous Cafe mobile app concept product detail screen.",
    fit: "contain",
    href: "/projects/rendezvous-cafe",
  },
  {
    project: "Rendezvous Cafe",
    title: "Mobile app — Cart",
    src: "/assets/social/rendezvous-cafe/app-cart.png",
    alt: "Rendezvous Cafe mobile app concept cart screen.",
    fit: "contain",
    href: "/projects/rendezvous-cafe",
  },
  {
    project: "Rendezvous Cafe",
    title: "Mobile app — Order confirmation",
    src: "/assets/social/rendezvous-cafe/app-order-confirmation.png",
    alt: "Rendezvous Cafe mobile app concept order confirmation screen.",
    fit: "contain",
    href: "/projects/rendezvous-cafe",
  },
];

const videoReels: FeatureLibraryItem[] = [
  {
    project: "Ana Maria La Justicia",
    title: "Social reel — Product feature",
    src: "/assets/features/video-motion/ana-maria-reel-2.webm",
    poster: "/assets/features/video-motion/ana-maria-reel-2.webp",
    alt: "Product-focused promotional social reel from the archived portfolio.",
    kind: "video",
  },
  {
    project: "MD Lash Factor",
    title: "Social reel — Product promotion",
    src: "/assets/features/video-motion/md-lash-factor-reel-5.webm",
    poster: "/assets/features/video-motion/md-lash-factor-reel-5.webp",
    alt: "Product-focused promotional social reel from the archived portfolio.",
    kind: "video",
  },
];

export const PROJECT_FEATURE_MEDIA: ProjectFeatureMedia[] = [
  {
    feature: "Social Media Management",
    preview: socialThumbnails,
    library: socialThumbnails,
  },
  {
    feature: "Content Creation",
    preview: [socialCampaignAssets[0], socialThumbnails[1], socialCampaignAssets[2]],
    library: [...socialCampaignAssets, socialThumbnails[1]],
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
    feature: "Video & Motion",
    preview: videoReels.slice(0, 1),
    library: videoReels,
    note: "Reel examples from the archived portfolio work folder.",
  },
  {
    feature: "AI-Assisted Creative",
    preview: [socialCampaignAssets[0], socialCampaignAssets[2], socialCampaignAssets[1]],
    library: socialThumbnails,
    note: "These projects document AI-assisted production as one part of a human-led creative process.",
  },
];
