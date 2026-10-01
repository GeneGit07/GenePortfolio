import {
  buildBrandingGallery,
  type BrandingAsset,
} from "./gallery";

export type { BrandingAsset };

export interface BrandingPiece {
  slug: string;
  title: string;
  subtitle: string;
  year: string;
  palette: string[];
  thumbnail: string;
  description: string;
  gallery: BrandingAsset[];
}

export const brandingPieces: BrandingPiece[] = [
  {
    slug: "dsumar",
    title: "D'Sumar",
    subtitle: "Conservas de Pescado.",
    year: "2024",
    palette: ["#1e4f9e", "#3b7dd8", "#f4f4f4"],
    thumbnail: "/assets/branding/dsumar/dsumar.webp",
    description:
      "Proyecto de branding e identidad visual para una marca especializada en conservas de pescado. Se desarrolló una propuesta gráfica inspirada en la frescura y esencia del mar, buscando transmitir una imagen cercana, atractiva y consistente en sus diferentes aplicaciones.",
    gallery: buildBrandingGallery({
      slug: "dsumar",
      label: "D'Sumar",
      items: 10,
    }),
  },
  {
    slug: "excelencia-grill",
    title: "EXCELENCIA GRILL",
    subtitle: "Pollería",
    year: "2024",
    palette: ["#e63329", "#f7c500", "#2a1a12"],
    thumbnail: "/assets/branding/excelencia-grill/excelencia-grill.webp",
    description:
      "Desarrollo de branding e identidad visual para Excelencia Grill. La propuesta gráfica se construyó a partir de una paleta en rojo y amarillo, buscando transmitir fuerza, energía y una personalidad visual llamativa, acorde con el concepto gastronómico de la marca.",
    gallery: buildBrandingGallery({
      slug: "excelencia-grill",
      label: "Excelencia Grill",
      items: 8,
    }),
  },
    {
    slug: "provenza",
    title: "Provenza Producciones",
    subtitle: "Pollería",
    year: "2025",
    palette: ["#c6f52e", "#1a1a1a", "#ffffff"],
    thumbnail: "/assets/branding/provenza/provenza.webp",
    description:
      "Desarrollo de la identidad visual para Provenza Producciones, productora de contenido audiovisual con presencia en Perú y Colombia. El proyecto incluyó la creación del logotipo desde cero y el desarrollo del branding de la marca, definiendo una propuesta visual moderna, creativa y profesional, coherente con el sector audiovisual y la esencia de la productora.",
    gallery: buildBrandingGallery({
      slug: "provenza",
      label: "provenza",
      items: 11,
    }),
  },
];

export function getBrandingPieceBySlug(slug: string): BrandingPiece | undefined {
  return brandingPieces.find((p) => p.slug === slug);
}
