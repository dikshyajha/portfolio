import type { Metadata } from "next";
import "@fontsource/ovo";
import "@fontsource/tenor-sans";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import "./globals.css";
import { TopNav } from "@/components/partials/TopNav";
import Stars from "@/components/common/Stars";
import { Footer } from "@/components/modules/Landing/Footer";

export const metadata: Metadata = {
  title: "Dikshya K. Jha | Full-Stack Developer",
  description:
    "Portfolio of Dikshya K. Jha — full-stack developer (React, Next.js, NestJS) and MS Computer Science student at Lamar University.",
  icons: {
    icon: "/images/final-logo.png",
  },
  openGraph: {
    title: "Dikshya K. Jha | Full-Stack Developer",
    description:
      "Full-stack developer and MS Computer Science student at Lamar University.",
    images: ["/images/final-logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className="relative bg-black text-white">
        <MantineProvider>
          <Stars />
          <TopNav />
          {children}
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
