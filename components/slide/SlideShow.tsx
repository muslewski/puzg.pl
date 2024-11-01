"use client";

import Slide from "@/components/slide/Slide";
import SlideArrow from "@/components/slide/SlideArrow";
import SlideDot from "@/components/slide/SlideDot";
import { useReducer } from "react";
import { AnimatePresence } from "framer-motion";

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
      imageSrc: "/images/home/slide1.jpg",
      imageAlt: "Zdjęcie tła miasta Grudziądz",
    },
    {
      title: "Bezpłatne studia inżynierskie",
      description: "Praktyczna wiedza, realne możliwości.",
      imageSrc: "/images/home/slide2.jpg",
      imageAlt: "Zdjęcie tła miasta Grudziądz",
    },
    {
      title: "Studia I stopnia w formie stacjonarnej ",
      description: "W trybie dla osób pracujących",
      imageSrc: "/images/home/slide3.jpg",
      imageAlt: "Zdjęcie tła miasta Grudziądz",
    },
    {
      title: "Darmowe certyfikowane szkolenia z zakresu: ",
      description:
        "programowania robotów przemysłowych, obrabiarek CNC oraz spawalnictwa.",
      imageSrc: "/images/home/slide4.jpg",
      imageAlt: "Zdjęcie tła miasta Grudziądz",
    },
  ];

  const [slideNumber, dispatch] = useReducer(
    createSlideReducer(slides.length),
    0
  );

  return (
    <div className="flex flex-col items-center lg:items-start gap-12 w-full 2xl:w-4/5 lg:px-12 2xl:px-0">
      <AnimatePresence mode="wait">
        <Slide data={slides[slideNumber]} key={slideNumber} />
      </AnimatePresence>

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
