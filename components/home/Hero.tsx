"use client";

import HeroArrow from "@/components/home/HeroArrow";
import HeroImage from "@/components/home/HeroImage";
import HeroTitle from "@/components/home/HeroTitle";

import { motion } from "framer-motion";

export default function Hero({
  slogan,
  sloganMobile,
  heroImageAlt,
  arrowAlt,
}: {
  slogan: React.ReactNode;
  sloganMobile: React.ReactNode;
  heroImageAlt: string;
  arrowAlt: string;
}) {
  return (
    <div className="relative w-full h-[85vh] md:h-[95vh] lg:h-screen">
      {/* Image fills hero — radii on the bottom only */}
      <div className="relative w-full h-full md:rounded-b-[3rem] xl:rounded-b-[4rem] overflow-hidden shadow-elevated">
        <HeroImage heroImageAlt={heroImageAlt} />

        {/* Bottom-anchored gradient for title legibility — only covers the lower portion */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 z-10 bg-gradient-to-t from-brandDark/90 via-brandDark/50 to-transparent" />
        {/* Subtle left-side dark shade so eyebrow stays readable */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 z-10 bg-gradient-to-r from-brandDark/40 to-transparent" />

        {/* Decorative dot grid in top-right corner */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-6 right-6 sm:top-10 sm:right-10 z-10 hidden md:block"
        >
          <svg
            width="140"
            height="140"
            viewBox="0 0 140 140"
            fill="none"
            className="opacity-50"
          >
            <defs>
              <pattern
                id="hero-dots"
                x="0"
                y="0"
                width="14"
                height="14"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="2" cy="2" r="1.4" fill="rgba(255,255,255,0.55)" />
              </pattern>
            </defs>
            <rect width="140" height="140" fill="url(#hero-dots)" />
          </svg>
        </div>

        {/* Title plate — pinned to bottom, takes ~25-30% of hero height */}
        <motion.div
          className="absolute left-4 sm:left-8 lg:left-14 right-4 sm:right-auto bottom-6 sm:bottom-8 lg:bottom-10 z-20 max-w-[95%] sm:max-w-[78%] lg:max-w-[64%] xl:max-w-[54%]"
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="glass rounded-3xl px-5 sm:px-8 lg:px-10 py-4 sm:py-6">
            <div className="mb-2 sm:mb-3 flex items-center gap-3">
              <span className="h-px w-7 bg-brandPrimaryBlue/70" />
              <span className="text-[11px] sm:text-xs font-outfit font-semibold uppercase tracking-[0.18em] text-brandPrimaryBlue">
                Państwowa Uczelnia Zawodowa · Grudziądz
              </span>
            </div>

            <HeroTitle slogan={slogan} sloganMobile={sloganMobile} />
          </div>
        </motion.div>
      </div>

      {/* Decorative arrow */}
      <div className="absolute left-[60%] sm:left-[52%] -bottom-32 xl:-bottom-44 3xl:-bottom-40 z-20">
        <HeroArrow arrowAlt={arrowAlt} />
      </div>
    </div>
  );
}
