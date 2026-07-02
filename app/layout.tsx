import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import ChatWidget from "@/components/chat-widget";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gabriel Paor - React Front-End Developer",
  description:
    "Portfolio of Gabriel Paor, a passionate React Front-End Developer creating beautiful, interactive web experiences",
  generator: "v0.dev",
  metadataBase: new URL("https://gabrielpaor.vercel.app"),
  icons: {
    icon: "/thumbnail.png",
  },
  openGraph: {
    title: "Gabriel Paor - React Front-End Developer",
    description:
      "Portfolio of Gabriel Paor, a passionate React Front-End Developer creating beautiful, interactive web experiences",
    images: [
      {
        url: "/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Gabriel Paor portfolio thumbnail",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gabriel Paor - React Front-End Developer",
    description:
      "Portfolio of Gabriel Paor, a passionate React Front-End Developer creating beautiful, interactive web experiences",
    images: ["/thumbnail.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <main>{children}</main>
          <ChatWidget />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
