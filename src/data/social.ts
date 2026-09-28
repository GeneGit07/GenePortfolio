import {
  buildSocialGallery,
  type SocialAsset,
} from "./gallery";

export type { SocialAsset, SocialAssetKind } from "./gallery";

export interface SocialProject {
  slug: string;
  title: string;
  year: string;
  thumbnail: string;
  description: string;
  subtitle: string;
  palette: string[];
  gallery: SocialAsset[];
}

export const socialProjects: SocialProject[] = [
  {
    slug: "md-lash-factor",
    title: "MD Lash Factor",
    year: "2024",
    thumbnail: "/assets/social/md-lash-factor/md.webp",
    subtitle: "Sérum de Pestañas",
    palette: ["#7c8ca5", "#c5eafb", "#ffffff"],
    description: "Diseño y desarrollo de contenido visual para redes sociales, incluyendo posts, banners, reels y carruseles, orientados a fortalecer la identidad de marca, potenciar la comunicación visual y generar mayor interacción con la audiencia.",
    gallery: buildSocialGallery({
      base: "/assets/social/md-lash-factor",
      label: "MD",
      banners: 3,
      posts: 8,
      reels: 5,
    }),
  },
  {
    slug: "dermanet",
    title: "DERMANET",
    year: "2024",
    thumbnail: "/assets/social/dermanet/dermanet.webp",
    subtitle: "Productos Dermatológicos",
    palette: ["#6fa1d8", "#3b38c6", "#ffffff"],
    description: "Diseño y creación de contenido visual para redes sociales, desarrollando posts, banners y reels alineados con la identidad de marca. El proyecto busca fortalecer su presencia digital mediante una comunicación visual clara, atractiva y consistente.",
    gallery: buildSocialGallery({
      base: "/assets/social/dermanet",
      label: "Dermanet",
      banners: 4,
      mockups: 2,
      posts: 8,
      reels: 2,
    }),
  },
    {
    slug: "ana-maria-la-justicia",
    title: "Ana María La Justicia",
    year: "2025",
    thumbnail: "/assets/social/ana-maria-la-justicia/ana-maria-la-justicia.webp",
    subtitle: "Subtitulo",
    palette: ["#e5dbce", "#ff9a00", "#8b4c00"],
    description: "Diseño de contenido visual para Ana María La Justicia, desarrollando posts, banners, reels y piezas para campañas publicitarias orientadas a fortalecer la comunicación de la marca, ampliar su alcance en redes sociales y acompañar su posicionamiento en farmacias y tiendas por departamento de Lima.",
    gallery: buildSocialGallery({
      base: "/assets/social/ana-maria-la-justicia",
      label: "Ana María La Justicia",
      banners: 6,
      posts: 12,
      reels: 2,
    }),
  },
];

export function getSocialBySlug(slug: string): SocialProject | undefined {
  return socialProjects.find((p) => p.slug === slug);
}
