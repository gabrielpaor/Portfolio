import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Get to know Gabriel Paor — a React Front-End Developer passionate about clean code, modern design, and crafting delightful user experiences.",
  alternates: { canonical: "/about-me" },
};

export default function AboutMeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
