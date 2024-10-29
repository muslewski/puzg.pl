import {
  Montserrat,
  Outfit,
  Rubik_Vinyl,
  Barriecito,
  Galindo,
} from "next/font/google";

export const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  preload: true,
});

export const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
  preload: true,
});

export const rubik_vinyl = Rubik_Vinyl({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-rubik-vinyl",
  preload: true,
  weight: "400",
});

export const galindo = Galindo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-galindo",
  preload: true,
  weight: "400",
});
