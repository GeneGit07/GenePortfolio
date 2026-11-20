export const SOCIAL_LINKS = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/18hTgkmJuE/",
  },
] as const;

export const SOFTWARES = [
  { label: "Figma", abbr: "Fi" },
  { label: "Canva", abbr: "Ca" },
  { label: "CapCut", abbr: "Cc" },
  { label: "Lightroom", abbr: "Lr" },
  { label: "Motion.so", abbr: "Mo" },
  { label: "ChatGPT", abbr: "Gp" },
  { label: "Claude", abbr: "Cl" },
] as const;

export const CONTACT = {
  title: "Contact",
  description: "Have a brand, campaign, or launch in mind? Tell me a little about it and let’s make something memorable.",
  phone: "+639496208191",
  phoneDisplay: "0949 620 8191",
  phoneHref: "tel:+639496208191",
  email: "genedalida07@gmail.com",
  emailHref: "https://mail.google.com/mail/?view=cm&fs=1&to=genedalida07%40gmail.com",
  location: "Batangas, Philippines",
} as const;

export const HERO = {
  eyebrow: "Visual Designer & Content Creator",
  location: "Batangas, Philippines",
  headline: ["Design with intention.", "Brands with character."] as const,
  description:
    "I help brands show up with clarity — social campaigns, short-form video, and visual systems, made with a human-led, AI-assisted workflow.",
  availability: "Available for new projects",
  /**
   * Set this to a PDF in /public (e.g. "/assets/home/cv-eugene-dalida.pdf")
   * to show a "Download CV" button in the hero. Hidden while empty.
   */
  cvHref: "",
} as const;

// ---------------------------------------------------------------------------
// Experience — edit roles, dates, and highlights here.
// `caseStudy` links an entry to /projects/<slug>.
// ---------------------------------------------------------------------------

export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  location?: string;
  summary: string;
  highlights: readonly string[];
  caseStudy?: string;
}

export const EXPERIENCE: readonly ExperienceEntry[] = [
  {
    company: "SolarWorks PH",
    role: "Social Media Manager & Content Creator",
    period: "2026 — Present",
    summary:
      "Run the brand's social presence end to end — content planning, campaign creative, warranty and product education, customer testimonials, and short-form video.",
    highlights: ["Content strategy", "Campaign design", "Reels & testimonials", "Creative direction"],
    caseStudy: "solarworks-ph",
  },
  {
    company: "Rendezvous Cafe",
    role: "Social Media Manager & Content Creator",
    period: "2026 — Present",
    summary:
      "Own the café's visual voice across product launches, a numbered signature drink series, seasonal campaigns, menu films, and a mobile ordering concept.",
    highlights: ["Product campaigns", "Seasonal promotions", "Menu films", "App concept"],
    caseStudy: "rendezvous-cafe",
  },
  {
    company: "Fifth Ave Dogs",
    role: "Social Media & Content Creator",
    period: "2026 — Present",
    summary:
      "Create menu boards, food reels, and promotional content that carry a bold, New York-inspired brand personality.",
    highlights: ["Menu design", "Food video", "Promotional content"],
    caseStudy: "fifth-ave-dogs",
  },
  {
    company: "Independent",
    role: "Freelance Visual Designer",
    period: "Ongoing",
    location: "Batangas, Philippines",
    summary:
      "Partner with small businesses on social content, email design, and visual identity — from first concept to final export.",
    highlights: ["Visual design", "Email design", "Brand identity"],
  },
];

// ---------------------------------------------------------------------------
// Services / capabilities
// ---------------------------------------------------------------------------

export const PROJECT_FEATURES = [
  {
    title: "Social Media Management",
    description:
      "Content planning, publishing, and consistent brand communication across Facebook and Instagram.",
    labels: ["Content planning", "Publishing", "Community"],
  },
  {
    title: "Content Creation",
    description:
      "Social posts, product campaigns, and promotional visuals designed to stop the scroll and communicate clearly.",
    labels: ["Campaigns", "Advertising", "Storytelling"],
  },
  {
    title: "Video & Motion",
    description:
      "Reels, menu films, customer testimonials, and cinematic edits made for vertical, sound-on platforms.",
    labels: ["Reels", "Editing", "Motion"],
  },
  {
    title: "Visual Design",
    description:
      "Layout, typography, and composition that turn ideas into polished, brand-consistent visuals.",
    labels: ["Graphic design", "Typography", "Systems"],
  },
  {
    title: "UI/UX & Figma",
    description:
      "Mobile interfaces and user flows designed in Figma with attention to hierarchy and usability.",
    labels: ["Figma", "Mobile", "Prototyping"],
  },
  {
    title: "AI-Assisted Creative",
    description:
      "AI to explore directions and speed up production — with strategy, taste, and final decisions kept human.",
    labels: ["Exploration", "Production", "Workflow"],
  },
] as const;

export const PROJECT_FEATURES_INTRO =
  "Six disciplines, one goal: help brands communicate clearly and grow. Open any service to see the work behind it.";
