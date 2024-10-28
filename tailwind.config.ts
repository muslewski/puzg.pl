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
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        outfit: ["var(--font-outfit)"],
      },
      boxShadow: {
        inner2: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
      },
      screens: {
        "3xl": "1750px",
      },
    },
  },
  plugins: [],
};
export default config;
