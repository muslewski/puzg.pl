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
  plugins: [require("tailwindcss-animated")],
};
export default config;
