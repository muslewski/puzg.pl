"use client";

import Slide from "@/components/slide/Slide";
import SlideArrow from "@/components/slide/SlideArrow";
import SlideDot from "@/components/slide/SlideDot";
import { useReducer } from "react";
import { AnimatePresence } from "framer-motion";

export type slideProps = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

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

export default function SlideShow({ slides }: { slides: slideProps[] }) {
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
