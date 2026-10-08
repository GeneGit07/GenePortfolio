import type { SocialGallerySection } from "./gallery";

export type { SocialAsset, SocialAssetKind, SocialGallerySection } from "./gallery";

export interface SocialProject {
  slug: string;
  title: string;
  year: string;
  category: string;
  projectType: string;
  thumbnail: string;
  thumbnailAlt: string;
  thumbnailPosition?: string;
  description: string;
  role: string;
  services: string[];
  palette: string[];
  sections: SocialGallerySection[];
  workflow: string;
}

const solarSections: SocialGallerySection[] = [
  {
    id: "campaign-messaging",
    title: "Campaign messaging & calls to action",
    description:
      "The lead creative pairs a clear solar-energy message with a direct invitation to enquire, connecting brand communication to a practical next step.",
    assets: [],
  },
  {
    id: "product-education",
    title: "Product & warranty communication",
    description:
      "Warranty creative presents solar components and coverage in a clear, benefit-led social format.",
    assets: [
      {
        src: "/assets/social/solarworks-ph/warranty-content.webp",
        alt: "SolarWorks PH warranty graphic highlighting solar panels, an inverter, and a battery.",
        kind: "campaign",
      },
    ],
  },
  {
    id: "customer-support",
    title: "Customer-focused after-sales support",
    description:
      "A service-focused visual makes support options easier to understand and gives existing customers a clear next step.",
    assets: [
      {
        src: "/assets/social/solarworks-ph/customer-support.webp",
        alt: "SolarWorks PH after-sales support graphic showing a service team, contact options, and customer care.",
        kind: "campaign",
      },
    ],
  },
];

const fifthAveSections: SocialGallerySection[] = [
  {
    id: "beverage-campaign",
    title: "Beverage campaign",
    description:
      "The supplied campaign artwork gives a featured beverage a bold New York-inspired setting, clear flavor cues, and an immediate availability message.",
    assets: [],
  },
];

const rendezvousSections: SocialGallerySection[] = [
  {
    id: "coffee-campaigns",
    title: "Coffee campaigns",
    description:
      "A coordinated set of signature drink promotions uses product names, flavor cues, and a warm café atmosphere to give each campaign its own character.",
    assets: [
      {
        src: "/assets/social/rendezvous-cafe/spanish-latte.webp",
        alt: "Rendezvous Cafe Spanish Latte campaign featuring an iced latte in a warm café setting.",
        kind: "campaign",
      },
      {
        src: "/assets/social/rendezvous-cafe/sea-salt-brew.webp",
        alt: "Rendezvous Cafe Sea Salt Brew campaign featuring the iced signature drink.",
        kind: "campaign",
      },
      {
        src: "/assets/social/rendezvous-cafe/cookie-butter-brew.webp",
        alt: "Rendezvous Cafe Cookie Butter Brew campaign featuring the iced coffee and cookie ingredients.",
        kind: "campaign",
      },
    ],
  },
  {
    id: "food-content",
    title: "Food content",
    description:
      "A food promotion extends the café’s product storytelling beyond drinks with a locally inspired menu feature.",
    assets: [
      {
        src: "/assets/social/rendezvous-cafe/chicken-sisig.webp",
        alt: "Rendezvous Cafe Chicken Sisig campaign featuring the plated Filipino-style dish.",
        kind: "campaign",
      },
    ],
  },
  {
    id: "digital-experience",
    title: "Digital café experience",
    description:
      "A mobile ordering concept connects the café’s product identity to a considered customer journey, from browsing the menu to order confirmation.",
    assets: [
      {
        src: "/assets/social/rendezvous-cafe/app-home.png",
        alt: "Rendezvous Cafe mobile app concept home screen featuring a signature drink and rewards card.",
        kind: "screen",
      },
      {
        src: "/assets/social/rendezvous-cafe/app-menu.png",
        alt: "Rendezvous Cafe mobile app concept menu screen showing signature drinks and ordering options.",
        kind: "screen",
      },
      {
        src: "/assets/social/rendezvous-cafe/app-product-detail.png",
        alt: "Rendezvous Cafe mobile app concept product detail screen for a customizable signature drink.",
        kind: "screen",
      },
      {
        src: "/assets/social/rendezvous-cafe/app-cart.png",
        alt: "Rendezvous Cafe mobile app concept cart screen with an order summary and pickup details.",
        kind: "screen",
      },
      {
        src: "/assets/social/rendezvous-cafe/app-order-confirmation.png",
        alt: "Rendezvous Cafe mobile app concept order confirmation screen for a café pickup order.",
        kind: "screen",
      },
    ],
  },
];

export const socialProjects: SocialProject[] = [
  {
    slug: "solarworks-ph",
    title: "SolarWorks PH",
    year: "2026",
    category: "Social Media · Content Design",
    projectType: "Social Media & Brand Content",
    thumbnail: "/assets/social/solarworks-ph/clean-energy-campaign.webp",
    thumbnailAlt:
      "SolarWorks PH clean-energy campaign featuring a solar-powered home at sunset.",
    thumbnailPosition: "center 30%",
    description:
      "Social media management and content creation for SolarWorks PH, focused on building a consistent brand presence through strategic campaigns, educational content, promotional visuals, and customer-focused communication.",
    role:
      "I manage social media content for SolarWorks PH, developing concepts, planning content, creating visual assets, and shaping how the brand communicates with its audience.",
    services: [
      "Social Media Management",
      "Content Strategy",
      "Content Creation",
      "Creative Direction",
      "Visual Design",
      "AI-Assisted Production",
    ],
    palette: ["#e7ac27", "#211d19", "#f0dfc8"],
    sections: solarSections,
    workflow:
      "AI is part of my creative workflow — not a replacement for design thinking. I use AI to explore concepts, accelerate visual production, test directions, and refine ideas. The strategy, creative direction, editing, composition, and final decisions remain mine.",
  },
  {
    slug: "fifth-ave-dogs",
    title: "Fifth Ave Dogs",
    year: "2026",
    category: "Social Media · Food & Beverage",
    projectType: "Food & Beverage Social Media",
    thumbnail: "/assets/social/fifth-ave-dogs/beverage-campaign.webp",
    thumbnailAlt:
      "Fifth Ave Dogs beverage campaign featuring red iced tea and lemonade vodka.",
    thumbnailPosition: "center 30%",
    description:
      "Social media content and promotional campaigns created for Fifth Ave Dogs, combining food photography, visual storytelling, promotional design, and a distinct New York-inspired brand personality.",
    role:
      "I manage and create social content for Fifth Ave Dogs, developing promotional concepts, product visuals, captions, and campaign assets designed to attract attention and encourage visits and purchases.",
    services: [
      "Social Media Management",
      "Content Creation",
      "Food Advertising",
      "Creative Direction",
      "Visual Design",
      "Campaign Design",
      "AI-Assisted Production",
    ],
    palette: ["#e82131", "#edb83e", "#171310"],
    sections: fifthAveSections,
    workflow:
      "AI supports production by helping me explore directions and move from concept to polished content efficiently. I manage the page, guide the visual direction, edit the work, and make the final creative decisions.",
  },
  {
    slug: "rendezvous-cafe",
    title: "Rendezvous Cafe",
    year: "2026",
    category: "Social Media · Product Content",
    projectType: "Food & Beverage Social Media",
    thumbnail: "/assets/social/rendezvous-cafe/caramel-macchiato.webp",
    thumbnailAlt:
      "Rendezvous Cafe Caramel Macchiato campaign featuring an iced caramel drink.",
    thumbnailPosition: "center 30%",
    description:
      "Social media content and product campaigns created for Rendezvous Cafe, combining product-focused visuals, brand consistency, promotional storytelling, and a premium café aesthetic.",
    role:
      "I manage social media content for Rendezvous Cafe, creating product campaigns, promotional visuals, and branded content designed to build awareness and drive customers to the store.",
    services: [
      "Social Media Management",
      "Content Creation",
      "Product Advertising",
      "Creative Direction",
      "Visual Design",
      "Campaign Design",
      "AI-Assisted Production",
    ],
    palette: ["#c6974e", "#2b1b11", "#f3e8d3"],
    sections: rendezvousSections,
    workflow:
      "AI helps me explore campaign directions and accelerate production. I guide the visual direction, edit each piece, and make the final creative decisions across the work.",
  },
];

export function getSocialBySlug(slug: string): SocialProject | undefined {
  return socialProjects.find((project) => project.slug === slug);
}
