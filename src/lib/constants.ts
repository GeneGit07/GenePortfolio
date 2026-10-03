export const NAV_ITEMS = [
  { id: "hero", label: "Inicio" },
  { id: "about", label: "Sobre Mí" },
  { id: "redes-sociales", label: "Redes Sociales" },
  { id: "branding", label: "Branding" },
  { id: "contact", label: "Contacto" },
] as const;

export type NavItem = (typeof NAV_ITEMS)[number];

// Padding horizontal unificado de página + rutas (los separadores inset de
// globals.css lo espejan: 1.5rem / 2rem / 4rem / 6rem / 8rem / 16rem):
// móvil → sm → tablet → laptop → desktop → máxima.
export const PAGE_PADDING_X = "px-6 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-64";
