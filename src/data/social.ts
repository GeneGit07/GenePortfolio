import { RATIO, type SocialGallerySection } from "./gallery";

export type { SocialAsset, SocialAssetKind, SocialGallerySection } from "./gallery";

export interface SocialProject {
  slug: string;
  title: string;
  year: string;
  category: string;
  projectType: string;
  /** One-line summary used on cards and in the Experience timeline. */
  summary: string;
  thumbnail: string;
  thumbnailAlt: string;
  thumbnailPosition?: string;
  thumbnailVideo?: {
    src: string;
    poster?: string;
  };
  description: string;
  role: string;
  services: string[];
  palette: string[];
  sections: SocialGallerySection[];
  workflow: string;
}

const SOLAR = "/assets/social/solarworks-ph";
const RC = "/assets/social/rendezvous-cafe";
const FAD = "/assets/social/fifth-ave-dogs";
const POSTERS = "/assets/video-posters";

// ---------------------------------------------------------------------------
// SolarWorks PH
// ---------------------------------------------------------------------------

const solarSections: SocialGallerySection[] = [
  {
    id: "campaign-messaging",
    title: "Campaign messaging",
    description:
      "Lead creatives pair a clear solar-energy message with a direct invitation to enquire, connecting brand communication to a practical next step.",
    assets: [
      {
        src: `${SOLAR}/power-outage-campaign.png`,
        alt: "SolarWorks campaign comparing a powered home with a blackout during a grid outage.",
        kind: "campaign",
        ratio: RATIO.story,
      },
      {
        src: `${SOLAR}/bill-savings-campaign.png`,
        alt: "SolarWorks campaign comparing a customer's electricity bill before and after solar installation.",
        kind: "campaign",
        ratio: RATIO.story,
      },
      {
        src: `${SOLAR}/free-daylight-energy.png`,
        alt: "SolarWorks family campaign about generating clean energy from daylight.",
        kind: "campaign",
        ratio: RATIO.story,
      },
      {
        src: `${SOLAR}/summer-bill-campaign.png`,
        alt: "SolarWorks summer campaign encouraging homeowners to check rising electricity bills.",
        kind: "campaign",
        ratio: RATIO.story,
      },
    ],
  },
  {
    id: "short-form-video",
    title: "Short-form video",
    description:
      "Vertical reels built for Facebook and Instagram feeds — a brand film on what SolarWorks delivers beyond the hardware, and a captioned explainer that turns a monthly bill into a reason to switch.",
    assets: [
      {
        src: `${SOLAR}/more-than-solar-panels.mp4`,
        alt: "SolarWorks PH brand reel, More Than Solar Panels, presenting monitoring, protection, and after-sales support.",
        kind: "video",
        poster: `${POSTERS}/solarworks-more-than-solar-panels-poster.jpg`,
        caption: "More Than Solar Panels · Brand reel",
        ratio: RATIO.portrait,
      },
      {
        src: `${SOLAR}/the-bill.mp4`,
        alt: "SolarWorks PH captioned reel, The Bill, showing how much a typical household could save every month.",
        kind: "video",
        poster: `${POSTERS}/solarworks-the-bill-poster.jpg`,
        caption: "The Bill · Captioned explainer",
        ratio: RATIO.portrait,
      },
      {
        src: `${SOLAR}/solar-works-video.mp4`,
        alt: "SolarWorks campaign video presenting its solar energy offer.",
        kind: "video",
        poster: `${POSTERS}/solarworks-featured-poster.jpg`,
        caption: "Campaign film",
        ratio: RATIO.landscape,
      },
    ],
  },
  {
    id: "product-education",
    title: "Product & warranty",
    description:
      "Warranty creative presents solar components and coverage in a clear, benefit-led social format.",
    assets: [
      {
        src: `${SOLAR}/warranty-comparison.png`,
        alt: "SolarWorks comparison graphic showing panel, inverter, and battery warranty periods.",
        kind: "campaign",
        ratio: RATIO.story,
      },
      {
        src: `${SOLAR}/panel-warranty.png`,
        alt: "SolarWorks solar panel campaign highlighting a 20-year panel warranty.",
        kind: "campaign",
        ratio: RATIO.story,
      },
      {
        src: `${SOLAR}/inverter-warranty.png`,
        alt: "SolarWorks inverter campaign explaining the 10-year inverter and 5-year battery warranties.",
        kind: "campaign",
        ratio: RATIO.story,
      },
      {
        src: `${SOLAR}/warranty-content.webp`,
        alt: "SolarWorks PH warranty graphic highlighting solar panels, an inverter, and a battery.",
        kind: "campaign",
      },
    ],
  },
  {
    id: "customer-support",
    title: "After-sales support",
    description:
      "Service-focused visuals make support options easier to understand and give existing customers a clear next step.",
    assets: [
      {
        src: `${SOLAR}/customer-support.webp`,
        alt: "SolarWorks PH after-sales support graphic showing a service team, contact options, and customer care.",
        kind: "campaign",
      },
      {
        src: `${SOLAR}/after-sales-service.png`,
        alt: "SolarWorks technician speaking with homeowners about ongoing service and support.",
        kind: "campaign",
        ratio: RATIO.story,
      },
      {
        src: `${SOLAR}/messenger-support.png`,
        alt: "SolarWorks Messenger campaign showing a customer asking about solar panels and warranties.",
        kind: "campaign",
        ratio: RATIO.story,
      },
    ],
  },
  {
    id: "customer-stories",
    title: "Customer stories",
    description:
      "Testimonials make the impact of lower electricity bills and dependable service tangible.",
    assets: [
      {
        src: `${SOLAR}/mamaril-testimonial.png`,
        alt: "SolarWorks customer testimonial from Mr. and Mrs. Mamaril about savings and service.",
        kind: "campaign",
      },
      {
        src: `${SOLAR}/ana-savings-testimonial.png`,
        alt: "SolarWorks customer testimonial showing Ana's electricity bill before and after installation.",
        kind: "campaign",
        ratio: RATIO.story,
      },
      {
        src: `${SOLAR}/solar-works-testimonial-1.mp4`,
        alt: "SolarWorks customer testimonial video.",
        kind: "video",
        poster: `${POSTERS}/solarworks-testimonial-1-poster.jpg`,
        caption: "Customer testimonial · 01",
      },
      {
        src: `${SOLAR}/solar-works-testimonial-2.mp4`,
        alt: "SolarWorks customer testimonial video.",
        kind: "video",
        poster: `${POSTERS}/solarworks-testimonial-2-poster.jpg`,
        caption: "Customer testimonial · 02",
      },
      {
        src: `${SOLAR}/solar-works-testimonial-3.mp4`,
        alt: "SolarWorks customer testimonial video.",
        kind: "video",
        poster: `${POSTERS}/solarworks-testimonial-3-poster.jpg`,
        caption: "Customer testimonial · 03",
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// Fifth Ave Dogs
// ---------------------------------------------------------------------------

const fifthAveSections: SocialGallerySection[] = [
  {
    id: "menu-design",
    title: "Menu design",
    description:
      "Two illustrated menu boards organize the hot dog range, add-ons, refreshers, and prices in a bold New York-inspired system.",
    assets: [
      {
        src: `${FAD}/hotdog-menu.png`,
        alt: "Fifth Ave Dogs New York-style hot dog menu with six hot dogs, add-ons, and combo pricing.",
        kind: "campaign",
        caption: "Hot dogs & add-ons",
      },
      {
        src: `${FAD}/refreshers-menu.png`,
        alt: "Fifth Ave Dogs refresher menu featuring iced tea, root beer, red iced tea, lemonade vodka, and snacks.",
        kind: "campaign",
        caption: "Drinks & snacks",
      },
    ],
  },
  {
    id: "video",
    title: "Video",
    description:
      "A behind-the-scenes food reel brings the Queens Bacon Melt Dog from grill to table, and a vertical location video helps new customers find the store.",
    assets: [
      {
        src: `${FAD}/hotdog-prep.mp4`,
        alt: "Behind-the-scenes preparation of the Fifth Ave Dogs Queens Bacon Melt Dog.",
        kind: "video",
        poster: `${POSTERS}/fifth-ave-hotdog-prep-poster.jpg`,
        caption: "Food preparation reel",
      },
      {
        src: `${FAD}/fad-location-discovery.mp4`,
        alt: "Fifth Ave Dogs location discovery video.",
        kind: "video",
        caption: "Location discovery",
        ratio: RATIO.portrait,
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// Rendezvous Cafe
// ---------------------------------------------------------------------------

const rendezvousSections: SocialGallerySection[] = [
  {
    id: "signature-series",
    title: "Signature series",
    description:
      "A numbered drink series — N° 01 to N° 04 — built on one art-directed set: warm neutral backdrop, travertine plinth, burgundy linen, and a serif-led type system that keeps every launch recognisably Rendezvous.",
    assets: [
      {
        src: `${RC}/signature-mango-cream-pop.jpg`,
        alt: "Rendezvous Cafe N° 01 Mango Cream Pop, a 22 oz mango cream drink with popping boba and fresh mango.",
        kind: "campaign",
        ratio: RATIO.post,
      },
      {
        src: `${RC}/signature-chocolate.jpg`,
        alt: "Rendezvous Cafe N° 02 Signature Chocolate, a 16 oz iced chocolate drink beside chocolate pieces.",
        kind: "campaign",
        ratio: RATIO.post,
      },
      {
        src: `${RC}/signature-strawberry-cream-pop.jpg`,
        alt: "Rendezvous Cafe N° 03 Strawberry Cream Pop, a 22 oz strawberry cream drink with popping boba.",
        kind: "campaign",
        ratio: RATIO.post,
      },
      {
        src: `${RC}/signature-strawberry-matcha.jpg`,
        alt: "Rendezvous Cafe N° 04 Strawberry Matcha, a 16 oz layered matcha and strawberry drink.",
        kind: "campaign",
        ratio: RATIO.post,
      },
    ],
  },
  {
    id: "coffee-campaigns",
    title: "Coffee campaigns",
    description:
      "Signature drink campaigns pair vivid ingredient cues with a warm café atmosphere and a consistent visual identity.",
    assets: [
      {
        src: `${RC}/lychee-refresh.png`,
        alt: "Rendezvous Cafe Lychee Refresh campaign featuring a chilled lychee drink and fresh fruit.",
        kind: "campaign",
      },
      {
        src: `${RC}/peach-perfect.png`,
        alt: "Rendezvous Cafe Peach Perfect campaign featuring an iced peach drink and fresh peaches.",
        kind: "campaign",
      },
      {
        src: `${RC}/spanish-latte.webp`,
        alt: "Rendezvous Cafe Spanish Latte campaign featuring an iced latte in a warm café setting.",
        kind: "campaign",
      },
      {
        src: `${RC}/sea-salt-brew.webp`,
        alt: "Rendezvous Cafe Sea Salt Brew campaign featuring the iced signature drink.",
        kind: "campaign",
      },
      {
        src: `${RC}/cookie-butter-brew.webp`,
        alt: "Rendezvous Cafe Cookie Butter Brew campaign featuring the iced coffee and cookie ingredients.",
        kind: "campaign",
      },
    ],
  },
  {
    id: "holiday-campaign",
    title: "Holiday campaign",
    description:
      "A seasonal push for the Christmas period: a vertical reel that captures the café's festive atmosphere, paired with a holiday-exclusive menu feature.",
    assets: [
      {
        src: `${RC}/rendezvous-christmas-reel.mp4`,
        alt: "Rendezvous Cafe Christmas reel showing the café's festive decorations and holiday atmosphere.",
        kind: "video",
        poster: `${POSTERS}/rendezvous-christmas-reel-poster.jpg`,
        caption: "Christmas reel",
        ratio: RATIO.portrait,
      },
      {
        src: `${RC}/beef-curry-festive.jpg`,
        alt: "Rendezvous Cafe holiday-exclusive beef curry campaign featuring a plated curry dish on a terracotta background.",
        kind: "campaign",
        caption: "Beef Curry · Holiday exclusive",
        ratio: RATIO.post,
      },
    ],
  },
  {
    id: "video",
    title: "Video & motion",
    description:
      "Menu films, launch reels, and atmosphere edits extend the café's product storytelling into motion.",
    assets: [
      {
        src: `${RC}/rendezvous-all-day-favorites.mp4`,
        alt: "Rendezvous Cafe All-Day Favorites menu film featuring breakfast plates and the Special Beef Pares.",
        kind: "video",
        poster: `${POSTERS}/rendezvous-all-day-favorites-poster.jpg`,
        caption: "All-Day Favorites · Menu film",
      },
      {
        src: `${RC}/rendezvous-new-drinks.mp4`,
        alt: "Rendezvous Cafe video introducing its new drinks.",
        kind: "video",
        poster: `${POSTERS}/rendezvous-new-drinks-poster.jpg`,
        caption: "New drinks · Launch reel",
        ratio: RATIO.portrait,
      },
      {
        src: `${RC}/rendezvous-ads-final.mp4`,
        alt: "Rendezvous Cafe promotional video ad.",
        kind: "video",
        caption: "Promotional ad",
      },
      {
        src: `${RC}/rendezvous-cinematic-atmosphere.mp4`,
        alt: "Cinematic atmosphere video for Rendezvous Cafe.",
        kind: "video",
        poster: `${POSTERS}/rendezvous-cinematic-poster.jpg`,
        caption: "Café atmosphere",
      },
    ],
  },
  {
    id: "food-content",
    title: "Food content",
    description:
      "Food promotions extend the café's storytelling beyond drinks with locally inspired menu features.",
    assets: [
      {
        src: `${RC}/chicken-sisig.webp`,
        alt: "Rendezvous Cafe Chicken Sisig campaign featuring the plated Filipino-style dish.",
        kind: "campaign",
      },
      {
        src: `${RC}/chicken-sisig-reel.mp4`,
        alt: "Rendezvous Cafe chef finishing a Chicken Sisig dish with sauce and fresh garnish.",
        kind: "video",
        poster: `${POSTERS}/rendezvous-chicken-sisig-poster.jpg`,
        caption: "Chicken Sisig reel",
      },
    ],
  },
  {
    id: "solar-powered-cafe",
    title: "Solar-powered café",
    description:
      "A branded video connects Rendezvous Cafe's location with its solar-powered setup — a collaboration with SolarWorks PH.",
    assets: [
      {
        src: `${RC}/rendezvous-solarworks-setup.mp4`,
        alt: "Rendezvous Cafe solar-powered setup campaign video.",
        poster: `${POSTERS}/rendezvous-solar-setup-poster.jpg`,
        kind: "video",
        caption: "Solar-powered café",
      },
    ],
  },
  {
    id: "digital-experience",
    title: "Mobile app concept",
    description:
      "A mobile ordering concept connects the café's product identity to a considered customer journey, from browsing the menu to order confirmation.",
    assets: [
      {
        src: `${RC}/app-home.png`,
        alt: "Rendezvous Cafe mobile app concept home screen featuring a signature drink and rewards card.",
        kind: "screen",
        concept: true,
      },
      {
        src: `${RC}/app-menu.png`,
        alt: "Rendezvous Cafe mobile app concept menu screen showing signature drinks and ordering options.",
        kind: "screen",
        concept: true,
      },
      {
        src: `${RC}/app-product-detail.png`,
        alt: "Rendezvous Cafe mobile app concept product detail screen for a customizable signature drink.",
        kind: "screen",
        concept: true,
      },
      {
        src: `${RC}/app-cart.png`,
        alt: "Rendezvous Cafe mobile app concept cart screen with an order summary and pickup details.",
        kind: "screen",
        concept: true,
      },
      {
        src: `${RC}/app-order-confirmation.png`,
        alt: "Rendezvous Cafe mobile app concept order confirmation screen for a café pickup order.",
        kind: "screen",
        concept: true,
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// Projects
// ---------------------------------------------------------------------------

export const socialProjects: SocialProject[] = [
  {
    slug: "solarworks-ph",
    title: "SolarWorks PH",
    year: "2026",
    category: "Social media · Content design",
    projectType: "Social Media & Brand Content",
    summary: "Campaigns, short-form video, and customer stories for a residential solar installer.",
    thumbnail: `${SOLAR}/clean-energy-campaign.webp`,
    thumbnailAlt: "SolarWorks PH clean-energy campaign featuring a solar-powered home at sunset.",
    thumbnailPosition: "center 30%",
    thumbnailVideo: {
      src: `${SOLAR}/solar-works-video.mp4`,
      poster: `${POSTERS}/solarworks-featured-poster.jpg`,
    },
    description:
      "Social media management and content creation for SolarWorks PH, focused on building a consistent brand presence through strategic campaigns, educational content, short-form video, and customer-focused communication.",
    role:
      "I manage social media content for SolarWorks PH, developing concepts, planning content, creating visual assets and reels, and shaping how the brand communicates with its audience.",
    services: [
      "Social Media Management",
      "Content Strategy",
      "Content Creation",
      "Video & Reels",
      "Creative Direction",
      "AI-Assisted Production",
    ],
    palette: ["#e7ac27", "#211d19", "#f0dfc8"],
    sections: solarSections,
    workflow:
      "AI is part of my creative workflow — not a replacement for design thinking. I use AI to explore concepts, accelerate visual production, test directions, and refine ideas. The strategy, creative direction, editing, composition, and final decisions remain mine.",
  },
  {
    slug: "rendezvous-cafe",
    title: "Rendezvous Cafe",
    year: "2026",
    category: "Social media · Product content",
    projectType: "Food & Beverage Social Media",
    summary: "A signature drink series, seasonal campaigns, menu films, and an app concept for a café brand.",
    thumbnail: `${RC}/caramel-macchiato.webp`,
    thumbnailAlt: "Rendezvous Cafe Caramel Macchiato campaign featuring an iced caramel drink.",
    thumbnailPosition: "center 30%",
    thumbnailVideo: {
      src: `${RC}/rendezvous-cinematic-atmosphere.mp4`,
      poster: `${POSTERS}/rendezvous-cinematic-poster.jpg`,
    },
    description:
      "Social media content and product campaigns for Rendezvous Cafe, combining product-focused visuals, seasonal storytelling, video, and a premium café aesthetic held together by one consistent visual identity.",
    role:
      "I manage social media content for Rendezvous Cafe, creating product campaigns, seasonal promotions, reels, and branded content designed to build awareness and drive customers to the store.",
    services: [
      "Social Media Management",
      "Content Creation",
      "Product Advertising",
      "Video & Reels",
      "Creative Direction",
      "AI-Assisted Production",
    ],
    palette: ["#c6974e", "#2b1b11", "#f3e8d3"],
    sections: rendezvousSections,
    workflow:
      "AI helps me explore campaign directions and accelerate production. I guide the visual direction, edit each piece, and make the final creative decisions across the work.",
  },
  {
    slug: "fifth-ave-dogs",
    title: "Fifth Ave Dogs",
    year: "2026",
    category: "Social media · Food & beverage",
    projectType: "Food & Beverage Social Media",
    summary: "Menu design, food reels, and promotional content with a New York-inspired personality.",
    thumbnail: `${FAD}/beverage-campaign.webp`,
    thumbnailAlt: "Fifth Ave Dogs beverage campaign featuring red iced tea and lemonade vodka.",
    thumbnailPosition: "center 30%",
    thumbnailVideo: {
      src: `${FAD}/hotdog-prep.mp4`,
      poster: `${POSTERS}/fifth-ave-hotdog-prep-poster.jpg`,
    },
    description:
      "Social media content and promotional campaigns for Fifth Ave Dogs, combining food photography, visual storytelling, menu design, and a distinct New York-inspired brand personality.",
    role:
      "I manage and create social content for Fifth Ave Dogs, developing promotional concepts, product visuals, captions, and campaign assets designed to attract attention and encourage visits.",
    services: [
      "Social Media Management",
      "Content Creation",
      "Menu Design",
      "Food Advertising",
      "Video & Reels",
      "AI-Assisted Production",
    ],
    palette: ["#e82131", "#edb83e", "#171310"],
    sections: fifthAveSections,
    workflow:
      "AI supports production by helping me explore directions and move from concept to polished content efficiently. I manage the page, guide the visual direction, edit the work, and make the final creative decisions.",
  },
];

export function getSocialBySlug(slug: string): SocialProject | undefined {
  return socialProjects.find((project) => project.slug === slug);
}

/** Totals derived from the case-study data, used for honest at-a-glance stats. */
export function getWorkStats() {
  const assets = socialProjects.flatMap((project) =>
    project.sections.flatMap((section) => section.assets),
  );
  return {
    brands: socialProjects.length,
    videos: assets.filter((asset) => asset.kind === "video").length,
    designs: assets.filter((asset) => asset.kind !== "video").length,
  };
}
