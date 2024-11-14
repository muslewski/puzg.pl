"use client";

import { border, grayCardPosition } from "@/components/card/Card";
import clsx from "clsx";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";

export default function CardWrapper({
  border,
  children,
  customGradient,
  customInsideBorder,
  customWrapperWidth,
  grayCard = false,
  grayCardPosition,
}: {
  border?: border;
  children: React.ReactNode;
  customGradient?: `from-${string}`;
  customInsideBorder?: `border-${string}`;
  customWrapperWidth?: string;
  grayCard?: boolean;
  grayCardPosition?: grayCardPosition;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  if (grayCard && !grayCardPosition) {
    throw new Error("grayCardPosition is required when grayCard is true.");
  }

  const animationVariants = {
    hidden: {
      opacity: 0,
      x:
        grayCardPosition === "left"
          ? -75
          : grayCardPosition === "right"
          ? 75
          : 0,
      y: !grayCardPosition && border ? 50 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="w-full 2xl:w-4/5 px-6 lg:px-12 2xl:px-0"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={animationVariants}
    >
      <div
        className={clsx(
          "rounded-2xl",
          customWrapperWidth ?? "w-fit",
          !grayCard &&
            (customGradient ??
              "from-brandBrightBlue/55 via-brandWashedBlue/35 to-brandWashedBlue/0"),
          border === "bl" && "pb-1 pl-1 bg-gradient-to-tr",
          border === "br" && "pb-1 pr-1 bg-gradient-to-tl",
          border === "tl" && "pt-1 pl-1 bg-gradient-to-br",
          border === "tr" && "pt-1 pr-1 bg-gradient-to-bl",
          border === "l" && "pl-1 bg-gradient-to-r",
          border === "btlr" && "p-1 bg-gradient-to-br",
          grayCard &&
            clsx(
              "relative from-brandNeutrals-700/55 via-brandNeutrals-300/35 to-brandNeutrals-300/0 before:absolute before:bg-brandNeutrals-300 before:w-[200%] before:top-0 before:h-full",
              grayCardPosition === "left" &&
                "before:right-[99%] before:shadow-[inset_4px_2px_4px_0_rgb(0,0,0,0.1)] pr-1 bg-gradient-to-bl",
              grayCardPosition === "right" &&
                "before:left-[99%] before:shadow-[inset_-4px_2px_4px_0_rgb(0,0,0,0.1)] pl-1 bg-gradient-to-br"
            )
        )}
      >
        <div
          className={clsx(
            "flex flex-col gap-12 sm:gap-20 bg-white p-6 sm:p-12 rounded-xl",
            !grayCard &&
              (customInsideBorder ?? "border-washedBlue-300 border-double"),
            border === "bl" &&
              "shadow-[inset_15px_-15px_12px_-15px_rgba(9,84,124,0.1)] border-b-4 border-l-4",
            border === "br" &&
              "shadow-[inset_-15px_-15px_12px_-15px_rgba(9,84,124,0.1)] border-b-4 border-r-4",
            border === "tl" &&
              "shadow-[inset_15px_15px_12px_-15px_rgba(9,84,124,0.1)] border-t-4 border-l-4",
            border === "tr" &&
              "shadow-[inset_-15px_15px_12px_-15px_rgba(9,84,124,0.1)] border-t-4 border-r-4",
            border === "l" &&
              "shadow-[inset_15px_0px_12px_-15px_rgba(9,84,124,0.1)] border-l-4",
            border === "btlr" &&
              "shadow-[inset_0px_0px_12px_-8px_rgba(9,84,124,0.1)] border-4",
            grayCard &&
              clsx(
                "from-brandNeutrals-300 via-brandNeutrals-300 to-brandNeutrals-400 border-brandNeutrals-600  border-double",
                grayCardPosition === "left" &&
                  "bg-gradient-to-r rounded-r-2xl rounded-l-none shadow-[inset_-2px_2px_4px_0_rgb(0,0,0,0.1)] border-r-4",
                grayCardPosition === "right" &&
                  "bg-gradient-to-l rounded-l-2xl rounded-r-none shadow-[inset_2px_2px_4px_0_rgb(0,0,0,0.1)] border-l-4"
              )
          )}
        >
          {children}
        </div>
      </div>
    </motion.div>
  );
}
