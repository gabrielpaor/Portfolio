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
  title: {
    default: "Gabriel Paor - React Front-End Developer",
    template: "%s | Gabriel Paor",
  },
  description:
    "Portfolio of Gabriel Paor, a passionate React Front-End Developer creating beautiful, interactive web experiences",
  metadataBase: new URL("https://gabrielpaor.vercel.app"),
  alternates: { canonical: "/" },
  icons: {
    icon: "/thumbnail.png",
    apple: "/thumbnail.png",
  },
  openGraph: {
    type: "website",
    url: "https://gabrielpaor.vercel.app",
    siteName: "Gabriel Paor",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Gabriel Paor",
              jobTitle: "React Front-End Developer",
              url: "https://gabrielpaor.vercel.app",
              image: "https://gabrielpaor.vercel.app/gabriel.jpg",
              sameAs: [
                "https://github.com/gabrielpaor",
                "https://www.linkedin.com/in/gabriel-john-paor-ba0bb4235/",
              ],
            }),
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
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
