export const NAV_ITEMS = [
  { id: "hero", label: "Inicio" },
  { id: "about", label: "Sobre Mí" },
  { id: "redes-sociales", label: "Redes Sociales" },
  { id: "branding", label: "Branding" },
  { id: "contact", label: "Contacto" },
] as const;

export type NavItem = (typeof NAV_ITEMS)[number];

// Padding horizontal unificado de página + rutas:
// móvil → tablet → viewport máximo.
export const PAGE_PADDING_X = "px-6 md:px-16 lg:px-64";
