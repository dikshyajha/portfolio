import type { Metadata } from "next";
import { Outfit, Ovo, Tenor_Sans, Assistant } from "next/font/google";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "./globals.css";
import { TopNav } from "@/components/partials/TopNav";
import Spotlight from "@/components/common/Spotlight";
import Stars from "@/components/common/Stars";
import { Footer } from "@/components/modules/Landing/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

const tenorSans = Tenor_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

const assistant = Assistant({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export const metadata: Metadata = {
  title: "Dikshya | Portfolio",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`relative bg-black text-white pt-md`}>
        <MantineProvider>
          <div className="px-wrapper">
            {/* <Spotlight /> */}

            <Stars />
            <TopNav />
            {children}
          </div>
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
