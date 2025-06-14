import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx,html}",
    "./components/**/*.{js,ts,jsx,tsx,mdx,html}",
    "./app/**/*.{js,ts,jsx,tsx,mdx,html}",
  ],

  theme: {
    fontSize: {
      xs: "12px", // 0.75rem * 16px
      sm: "14px", // 0.875rem * 16px
      tiny: "14px", // 0.875rem * 16px
      base: "16px", // 1rem * 16px
      md: "18px", // 1.125rem * 16px
      lg: "20px", // 1.25rem * 16px
      xl: "23px", // 1.45rem * 16px
      "2xl": "24px", // 1.5rem * 16px
      "3xl": "30px", // 1.875rem * 16px
      "4xl": "36px", // 2.25rem * 16px
      "5xl": "48px", // 3rem * 16px
      "6xl": "64px", // 4rem * 16px
      "7xl": "80px",
    },
    colors: {
      ...colors,
      primary: "#1a1a1d",
      //#0c1821, #1A1A1D, 322e38
      purpleDark: "#4d415e", // Royal Aubergine
      purpleLight: "#5b4e6e", // Lavender Mist
      purpleMiddle: "#55466b", // Mauve Dream
      purpleSoft: "#968897",

      // Blue Shades
      blueDark: "#213555", // Ocean Depths
      blueLight: "#3E5879", // Dusk Tide

      // White Shades
      whiteSoft: "#FEFBF6", // Moonlit Snow
      whitePale: "#f8f9fa", // Misty Pearl

      // Gray Shades (fefbf6)
      grayLight: "#968897", // Silver Cloud
      grayMedium: "#e9ecff", // Soft Fog
      grayDark: "#dee2e6", // Urban Concrete
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
        Ovo: ["Ovo", "serif"],
      },
    },
    spacing: {
      none: "0px",
      xs: "8px",
      sm: "16px",
      md: "24px",
      lg: "32px",
      xl: "48px",
      "2xl": "64px",
      "3xl": "72px",
      "4xl": "80px",
      "5xl": "88px",
      "6xl": "106px",
      wrapper: "10vw",
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
export default config;
