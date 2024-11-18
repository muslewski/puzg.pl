"use client";

import { useEffect, useReducer, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import SlideArrow from "@/components/slide/SlideArrow";
import SlideDot from "@/components/slide/SlideDot";
import SideImage from "@/components/carousel/SideImage";
import ImageZoom from "@/components/ImageZoom";

type Action =
  | { type: "NEXT" }
  | { type: "PREV" }
  | { type: "GO_TO"; index: number };

function createCarouselReducer(totalImages: number) {
  return function slideReducer(state: number, action: Action): number {
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

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "50%" : "-50%",
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
  }),
};

export default function ImageCarousel({
  images,
  altImages,
  small = false,
}: {
  images: string[];
  altImages: string[];
  small?: boolean;
}) {
  const [imageNumber, dispatch] = useReducer(
    createCarouselReducer(images.length),
    0
  );
  const [direction, setDirection] = useState(0);

  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>(
    new Array(images.length).fill(false)
  );

  useEffect(() => {
    // Preload all images
    images.forEach((image, index) => {
      const img = new Image();
      img.src = image;
      img.onload = () => {
        setImagesLoaded((prev) => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
      };
    });
  }, [images]);

  const handleNavigation = (action: Action) => {
    if (action.type === "NEXT") {
      setDirection(1);
    } else if (action.type === "PREV") {
      setDirection(-1);
    } else if (action.type === "GO_TO") {
      setDirection(action.index > imageNumber ? 1 : -1);
    }
    dispatch(action);
  };

  const getAdjacentIndex = (offset: number) =>
    (imageNumber + offset + images.length) % images.length;

  return (
    <div className="flex flex-col gap-8 lg:gap-12 items-center">
      <div className="flex gap-6 md:gap-12 items-center">
        <SideImage
          image={images[getAdjacentIndex(-1)]}
          altImage={altImages[getAdjacentIndex(-1)]}
          onClick={() => handleNavigation({ type: "PREV" })}
          small={small}
          direction={direction}
          isLoaded={imagesLoaded[getAdjacentIndex(-1)]}
        />
        <div
          className={clsx(
            "relative rounded-xl overflow-hidden shadow-md",
            small
              ? "w-[250px] sm:w-[400px] 2xl:w-[500px] h-[300px] 2xl:h-[350px]"
              : "w-[500px] lg:w-[700px] h-[300px] lg:h-[500px]"
          )}
        >
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={imageNumber}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30, mass: 0.8 },
                opacity: { duration: 0.5 },
              }}
              className="absolute w-full h-full"
            >
              {imagesLoaded[imageNumber] ? (
                <ImageZoom
                  src={images[imageNumber]}
                  alt={altImages[imageNumber]}
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gray-200 animate-pulse flex items-center justify-center">
                  <span className="text-gray-400">Loading...</span>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
        <SideImage
          image={images[getAdjacentIndex(1)]}
          altImage={altImages[getAdjacentIndex(1)]}
          onClick={() => handleNavigation({ type: "NEXT" })}
          small={small}
          direction={direction}
          isLoaded={imagesLoaded[getAdjacentIndex(1)]}
        />
      </div>

      <div
        className={clsx(
          "sm:px-8 lg:px-4 w-fit flex flex-col -rotate-3 lg:rotate-0 lg:flex-row items-center justify-between gap-6 lg:gap-32",
          small ? "w-full" : "w-fit"
        )}
      >
        <SlideArrow
          dispatch={() => handleNavigation({ type: "PREV" })}
          direction="left"
          customClassName="self-start"
        />
        <div className="flex gap-4 lg:gap-10 w-fit">
          {images.map((_, index) => (
            <SlideDot
              key={index}
              isOpen={index === imageNumber}
              onClick={() => handleNavigation({ type: "GO_TO", index })}
            />
          ))}
        </div>
        <SlideArrow
          dispatch={() => handleNavigation({ type: "NEXT" })}
          direction="right"
          customClassName="self-end"
        />
      </div>
    </div>
  );
}
