import { galindo } from "@/app/fonts";
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
      },
      boxShadow: {
        inner2: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
        inner3: "inset -2px 3px 3px 0 rgb(0 0 0 / 0.1)",
      },
      dropShadow: {
        white: "0 2px 18px rgba(235, 255, 255, 0.6)",
      },
      screens: {
        "3xl": "1750px",
      },
    },
  },
  plugins: [],
};
export default config;
