import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Eugene Dalida — Portfolio",
    short_name: "Eugene Dalida",
    description: "Portfolio of visual identity, art direction, and digital design.",
    start_url: "/",
    display: "standalone",
    background_color: "#0A0A0B",
    theme_color: "#0A0A0B",
    icons: [
      {
        src: "/assets/home/favicon-black-gold.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
