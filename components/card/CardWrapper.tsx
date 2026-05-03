"use client";

import { border, grayCardPosition } from "@/components/card/Card";
import clsx from "clsx";
import { motion } from "framer-motion";

export default function CardWrapper({
  border,
  children,
  customGradient,
  customInsideBorder,
  customWrapperWidth,
  blueGradient,
  grayCard = false,
  grayCardPosition,
}: {
  border?: border;
  children: React.ReactNode;
  customGradient?: `from-${string}`;
  customInsideBorder?: string;
  customWrapperWidth?: string;
  blueGradient?: boolean;
  grayCard?: boolean;
  grayCardPosition?: grayCardPosition;
}) {
  if (grayCard && !grayCardPosition) {
    throw new Error("grayCardPosition is required when grayCard is true.");
  }

  const animationVariants = {
    hidden: {
      opacity: 0,
      x:
        grayCardPosition === "left"
          ? -60
          : grayCardPosition === "right"
          ? 60
          : 0,
      y: !grayCardPosition && border ? 32 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  // Map border position → corner accent direction
  const accentCorner = {
    bl: "bottom-0 left-0 rounded-tr-3xl",
    br: "bottom-0 right-0 rounded-tl-3xl",
    tl: "top-0 left-0 rounded-br-3xl",
    tr: "top-0 right-0 rounded-bl-3xl",
    l: "top-0 left-0 h-full w-1.5 rounded-r-full",
    btlr: "inset-0 rounded-3xl pointer-events-none border-2 border-brandBrightBlue/35",
  } as const;

  return (
    <motion.div
      className="w-full 2xl:w-4/5 px-4 sm:px-6 lg:px-12 2xl:px-0"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      variants={animationVariants}
    >
      <div
        className={clsx(
          "relative isolate",
          customWrapperWidth ?? "w-full",
        )}
      >
        {/* Soft glow layer behind card */}
        {!grayCard && (
          <div
            aria-hidden
            className={clsx(
              "absolute -inset-px rounded-[2rem] -z-10 opacity-60 blur-2xl",
              customGradient ??
                "bg-gradient-to-br from-brandBrightBlue/25 via-brandWashedBlue/15 to-transparent"
            )}
          />
        )}

        {/* Main card body */}
        <div
          className={clsx(
            "relative flex flex-col gap-10 sm:gap-16 rounded-[1.75rem] p-6 sm:p-10 lg:p-14 overflow-hidden",
            grayCard
              ? "bg-gradient-to-br from-brandNeutrals-200 via-brandNeutrals-300 to-brandNeutrals-400 ring-1 ring-brandNeutrals-500/40"
              : blueGradient
              ? "bg-gradient-to-br from-white via-washedBlue-50 to-white ring-1 ring-brandWashedBlue/30"
              : "bg-white/85 backdrop-blur-sm ring-1 ring-brandWashedBlue/30",
            !grayCard && "shadow-soft hover:shadow-elevated transition-shadow duration-500",
            grayCard &&
              clsx(
                grayCardPosition === "left" &&
                  "rounded-l-none rounded-r-[1.75rem] shadow-[inset_4px_0_8px_-6px_rgba(11,27,51,0.15)]",
                grayCardPosition === "right" &&
                  "rounded-r-none rounded-l-[1.75rem] shadow-[inset_-4px_0_8px_-6px_rgba(11,27,51,0.15)]"
              )
          )}
        >
          {/* Corner accent strip — replaces heavy border-double */}
          {!grayCard && border && border !== "btlr" && border !== "l" && (
            <div
              aria-hidden
              className={clsx(
                "absolute h-1.5 w-24 sm:w-32",
                accentCorner[border],
                "bg-gradient-to-r from-brandPrimaryBlue via-brandBrightBlue to-brandWashedBlue"
              )}
            />
          )}
          {!grayCard && border === "l" && (
            <div
              aria-hidden
              className={clsx(
                "absolute",
                accentCorner.l,
                "bg-gradient-to-b from-brandPrimaryBlue via-brandBrightBlue to-brandWashedBlue"
              )}
            />
          )}
          {!grayCard && border === "btlr" && (
            <div aria-hidden className={accentCorner.btlr} />
          )}

          {/* Optional inside border override (used by some custom calls) */}
          {customInsideBorder && (
            <div
              aria-hidden
              className={clsx(
                "absolute inset-2 rounded-[1.5rem] pointer-events-none",
                customInsideBorder
              )}
            />
          )}

          {children}
        </div>
      </div>
    </motion.div>
  );
}
