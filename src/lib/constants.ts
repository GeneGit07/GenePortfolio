export const NAV_ITEMS = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "services", label: "Services" },
  { id: "email-design", label: "Email" },
  { id: "contact", label: "Contact" },
] as const;

export type NavItem = (typeof NAV_ITEMS)[number];

/** Home-page section anchor used by "Back to work" links on case pages. */
export const WORK_ANCHOR = "/#work";

// Legacy Tailwind padding helper. Layouts use the `.page-shell` class from
// globals.css, which applies the shared `--container-gutter`.
export const PAGE_PADDING_X = "px-6 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-64";
