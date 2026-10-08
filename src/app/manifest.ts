import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Eugene Dalida — Portfolio",
    short_name: "Eugene Dalida",
    description: "Portfolio of visual identity, art direction, and digital design.",
    start_url: "/",
    display: "standalone",
    background_color: "#f2f0e9",
    theme_color: "#f2f0e9",
    icons: [
      {
        src: "/assets/home/favicon-black.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
