import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brandDark: "#00152E",
        brandNavyBlue: "#030057",
        brandPrimaryBlue: "#09547C",
        brandBrightBlue: "#1F85B1",
        brandWashedBlue: "#ADCAEC",
        brandAccent: "#F59E0B",
        brandAccentSoft: "#FCD34D",
        brandSurface: "#FAFBFD",
        brandSurfaceWarm: "#F6F4EE",
        brandInk: "#0B1B33",
        brandInkSoft: "#36506F",
        brandNeutrals: {
          100: "#FFFFFF",
          200: "#FCFDFD",
          300: "#F5F6F7",
          400: "#F0F1F2",
          500: "#D9DCE0",
          600: "#BFC5CB",
          700: "#8C96A1",
          800: "#596777",
          900: "#455466",
          1000: "#26384D",
          1100: "#1F3147",
          1200: "#14283F",
          1300: "#00152E",
        },
        primaryBlue: {
          50: "#E6EEF2",
          100: "#B3CAD6",
          200: "#8EB0C3",
          300: "#5A8CA7",
          400: "#3A7696",
          500: "#09547C",
          600: "#084C71",
          700: "#063C58",
          800: "#052E44",
          900: "#042334",
        },
        washedBlue: {
          50: "#F7FAFD",
          100: "#E6EFF9",
          200: "#D9E7F6",
          300: "#C8DBF2",
          400: "#BDD5F0",
          500: "#ADCAEC",
          600: "#9DB8D7",
          700: "#7B8FA8",
          800: "#5F6F82",
          900: "#495563",
        },
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        outfit: ["var(--font-outfit)"],
        rubikVinyl: ["var(--font-rubik-vinyl)"],
        galindo: ["var(--font-galindo)"],
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
      },
      boxShadow: {
        inner2: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
        inner3: "inset -2px 3px 3px 0 rgb(0 0 0 / 0.1)",
        soft: "0 1px 2px rgb(11 27 51 / 0.04), 0 8px 24px -12px rgb(11 27 51 / 0.10)",
        elevated:
          "0 1px 2px rgb(11 27 51 / 0.04), 0 12px 32px -10px rgb(11 27 51 / 0.16)",
        ring: "0 0 0 1px rgb(173 202 236 / 0.55), 0 1px 2px rgb(11 27 51 / 0.04), 0 18px 48px -16px rgb(11 27 51 / 0.18)",
        glass:
          "inset 0 1px 0 rgb(255 255 255 / 0.6), 0 16px 40px -12px rgb(11 27 51 / 0.22)",
        glow: "0 0 60px -10px rgb(31 133 177 / 0.45)",
      },
      dropShadow: {
        white: "0 2px 18px rgba(235, 255, 255, 0.6)",
        ink: "0 8px 18px rgb(11 27 51 / 0.22)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      backgroundImage: {
        "noise-grain":
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.06 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        "mesh-blue":
          "radial-gradient(at 18% 22%, rgba(31,133,177,0.22) 0px, transparent 55%), radial-gradient(at 82% 8%, rgba(173,202,236,0.30) 0px, transparent 50%), radial-gradient(at 64% 78%, rgba(9,84,124,0.20) 0px, transparent 55%)",
        "mesh-dark":
          "radial-gradient(at 12% 12%, rgba(31,133,177,0.32) 0px, transparent 55%), radial-gradient(at 88% 18%, rgba(245,158,11,0.10) 0px, transparent 45%), radial-gradient(at 52% 92%, rgba(3,0,87,0.45) 0px, transparent 60%)",
        "grid-faint":
          "linear-gradient(to right, rgba(11,27,51,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(11,27,51,0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid-24": "24px 24px",
      },
      screens: {
        "3xl": "1750px",
      },
    },
  },
  plugins: [],
};
export default config;
