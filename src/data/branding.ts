import {
  buildBrandingGallery,
  type BrandingAsset,
} from "./gallery";

export type { BrandingAsset };

export interface BrandingPiece {
  slug: string;
  title: string;
  year: string;
  projectGoal: string;
  approach: string;
  role: string;
  deliverables: string[];
  palette: string[];
  thumbnail: string;
  description: string;
  gallery: BrandingAsset[];
}

export const brandingPieces: BrandingPiece[] = [
  {
    slug: "dsumar",
    title: "D'Sumar",
    year: "2024",
    projectGoal: "Create a recognizable identity for a canned seafood brand.",
    approach: "A warm visual system takes inspiration from the freshness and spirit of the sea, bringing a consistent feel to the brand’s applications.",
    role: "Brand identity and visual design",
    deliverables: ["Visual identity", "Visual system", "Brand applications"],
    palette: ["#fcdc3e", "#194f90"],
    thumbnail: "/assets/branding/dsumar/dsumar.webp",
    description:
      "Branding and visual identity for a canned seafood company. Inspired by the freshness and spirit of the sea, the visual system gives the brand a warm, appealing, and consistent presence across applications.",
    gallery: buildBrandingGallery({
      slug: "dsumar",
      label: "D'Sumar",
      items: 10,
    }),
  },
  {
    slug: "excelencia-grill",
    title: "EXCELENCIA GRILL",
    year: "2024",
    projectGoal: "Give the restaurant a bold, distinctive visual presence.",
    approach: "A confident red and yellow palette brings energy to the identity and gives the brand a clear personality.",
    role: "Brand identity and visual design",
    deliverables: ["Visual identity", "Color direction", "Brand system"],
    palette: ["#ed2224", "#facc13", "#2A0E12"],
    thumbnail: "/assets/branding/excelencia-grill/excelencia-grill.webp",
    description:
      "Branding and visual identity for Excelencia Grill. A bold red and yellow palette brings energy and a distinctive personality to the restaurant’s visual world.",
    gallery: buildBrandingGallery({
      slug: "excelencia-grill",
      label: "Excelencia Grill",
      items: 8,
    }),
  },
    {
    slug: "provenza",
    title: "Provenza Producciones",
    year: "2025",
    projectGoal: "Build a modern identity for an audiovisual production company working across Peru and Colombia.",
    approach: "A new logo and complete brand system bring the company a creative, professional, and cohesive visual presence.",
    role: "Logo design and brand system",
    deliverables: ["Logo design", "Visual identity", "Complete brand system"],
    palette: ["#000000", "#def118"],
    thumbnail: "/assets/branding/provenza/provenza.webp",
    description:
      "Visual identity for Provenza Producciones, an audiovisual production company working across Peru and Colombia. The project included a new logo and a complete brand system with a modern, creative, and professional point of view.",
    gallery: buildBrandingGallery({
      slug: "provenza",
      label: "Provenza Producciones",
      items: 11,
    }),
  },
  {
    slug: "nutralife",
    title: "Nutralife",
    year: "2025",
    projectGoal: "Create a trustworthy, natural-feeling identity across the brand’s digital touchpoints.",
    approach: "The visual direction carries through identity, product-focused social content, and website design.",
    role: "Brand identity and digital visual design",
    deliverables: ["Visual identity", "Product social posts", "Website design"],
    palette: ["#000000", "#00b140"],
    thumbnail: "/assets/branding/nutralife/nutralife.webp",
    description:
      "Branding for Nutralife, a nutrition and wellness brand. The project covered visual identity, product-focused social posts, and website design, with a natural, trustworthy, and professional feel.",
    gallery: buildBrandingGallery({
      slug: "nutralife",
      label: "Nutralife",
      items: 11,
    }),
  },
];

export function getBrandingPieceBySlug(slug: string): BrandingPiece | undefined {
  return brandingPieces.find((p) => p.slug === slug);
}
