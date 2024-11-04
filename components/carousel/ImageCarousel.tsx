"use client";

import SlideArrow from "@/components/slide/SlideArrow";
import SlideDot from "@/components/slide/SlideDot";
import Image from "next/image";
import { useReducer } from "react";
import { motion, AnimatePresence } from "framer-motion";

export type Action =
  | { type: "NEXT" }
  | { type: "PREV" }
  | { type: "GO_TO"; index: number };

function createCarouselReducer(totalImages: number) {
  return function slideReducer(state: number, action: Action) {
    switch (action.type) {
      case "NEXT":
        return (state + 1) % totalImages;
      case "PREV":
        return (state - 1 + totalImages) % totalImages;
      case "GO_TO":
        return action.index;
      default:
        return state;
    }
  };
}

export default function ImageCarousel({ images }: { images: string[] }) {
  const [imageNumber, dispatch] = useReducer(
    createCarouselReducer(images.length),
    0
  );

  // Helper functions to get the correct previous, current, and next images
  const prevImage = (imageNumber - 1 + images.length) % images.length;
  const nextImage = (imageNumber + 1) % images.length;

  return (
    <div className="flex flex-col gap-8 lg:gap-12 items-center">
      <div className="flex gap-6 md:gap-12 items-center">
        <div
          className="relative  hidden sm:block w-[500px] h-[300px] rounded-xl overflow-hidden hover:scale-105 transition-transform cursor-pointer"
          onClick={() => dispatch({ type: "PREV" })}
        >
          <Image
            className="object-cover "
            fill
            src={images[prevImage]}
            alt=""
          />
        </div>
        <div className="relative w-[500px] lg:w-[700px] h-[300px] lg:h-[500px] rounded-xl overflow-hidden shadow-md">
          <Image
            className="object-cover "
            fill
            src={images[imageNumber]}
            alt=""
          />
        </div>

        <div
          className="relative hidden sm:block w-[500px] h-[300px] rounded-xl overflow-hidden hover:scale-105 transition-transform cursor-pointer"
          onClick={() => dispatch({ type: "NEXT" })}
        >
          <Image
            className="object-cover "
            fill
            src={images[nextImage]}
            alt=""
          />
        </div>
      </div>

      <div className="sm:px-8 lg:px-4 w-fit flex flex-col -rotate-3 lg:rotate-0 lg:flex-row items-center justify-between gap-6 lg:gap-32">
        <SlideArrow
          dispatch={dispatch}
          direction="left"
          customClassName="self-start"
        />
        <div className="flex gap-4 lg:gap-10 w-fit">
          {images.map((_, index) => (
            <SlideDot
              key={index}
              isOpen={index === imageNumber}
              onClick={() => dispatch({ type: "GO_TO", index })}
            />
          ))}
        </div>
        <SlideArrow
          dispatch={dispatch}
          direction="right"
          customClassName="self-end"
        />
      </div>
    </div>
  );
}
