export const NAV_ITEMS = [
  { id: "hero", label: "Inicio" },
  { id: "about", label: "Sobre Mí" },
  { id: "redes-sociales", label: "Redes Sociales" },
  { id: "branding", label: "Branding" },
  { id: "contact", label: "Contacto" },
] as const;

export type NavItem = (typeof NAV_ITEMS)[number];
