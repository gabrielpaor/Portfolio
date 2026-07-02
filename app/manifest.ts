import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Gabriel Paor — React Front-End Developer",
    short_name: "G. Paor",
    description:
      "Portfolio of Gabriel Paor, a React Front-End Developer creating beautiful, interactive web experiences.",
    start_url: "/",
    display: "standalone",
    background_color: "#0f172a",
    theme_color: "#0f172a",
    icons: [
      {
        src: "/thumbnail.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
