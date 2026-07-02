import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work Experience",
  description:
    "Gabriel Paor's professional experience as a React developer, including roles, achievements, and the teams and products he has contributed to.",
  alternates: { canonical: "/work" },
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
