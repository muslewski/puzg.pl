"use client";

import Slide from "@/components/home/Slide";
import SlideArrow from "@/components/home/SlideArrow";
import SlideDot from "@/components/home/SlideDot";
import { useReducer } from "react";

export type Action =
  | { type: "NEXT" }
  | { type: "PREV" }
  | { type: "GO_TO"; index: number };

function createSlideReducer(totalSlides: number) {
  return function slideReducer(state: number, action: Action) {
    switch (action.type) {
      case "NEXT":
        return (state + 1) % totalSlides;
      case "PREV":
        return (state - 1 + totalSlides) % totalSlides;
      case "GO_TO":
        return action.index;
      default:
        return state;
    }
  };
}

export default function SlideShow() {
  const slides = [
    {
      title: "Rekrutacja uzupełniająca na rok akademicki 2024/2025",
      description: "Kierunek mechatronika trwa od 21.08.2024 do 20.09.2024",
      imageSrc: "/images/home/grudziadz2.jpeg",
      imageAlt: "Zdjęcie tła miasta Grudziądz",
    },
    {
      title: "Rekasdasdrutacja uzupełniająca na rok akademicki 2024/2025",
      description:
        "Kieasdasdrunek mechatronika trwa od 21.08.2024 do 20.09.2024",
      imageSrc: "/images/bip.png",
      imageAlt: "Zdjęcie tła miasta Grudziądz",
    },
    {
      title: "Rekasdasdrutacja uzupełniająca na rok akademicki 2024/2025",
      description:
        "Kieasdasdrunek mechatronika trwa od 21.08.2024 do 20.09.2024",
      imageSrc: "/images/Logo.svg",
      imageAlt: "Zdjęcie tła miasta Grudziądz",
    },
  ];

  const [slideNumber, dispatch] = useReducer(
    createSlideReducer(slides.length),
    0
  );

  return (
    <div className="flex flex-col items-center lg:items-start gap-12 w-full 2xl:w-3/4 lg:px-12">
      <Slide data={slides[slideNumber]} />

      <div className="w-full px-4 sm:px-8 lg:w-fit flex items-center justify-between lg:gap-32">
        <SlideArrow dispatch={dispatch} direction="left" />
        <div className="flex gap-5 lg:gap-10">
          {slides.map((_, index) => (
            <SlideDot
              key={index}
              isOpen={index === slideNumber}
              onClick={() => dispatch({ type: "GO_TO", index })}
            />
          ))}
        </div>
        <SlideArrow dispatch={dispatch} direction="right" />
      </div>
    </div>
  );
}
