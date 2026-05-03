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
    <div className="relative min-h-[78vh] lg:min-h-screen w-full">
      {/* Outer container — removed exaggerated 20% radius for refined corner */}
      <div className="relative md:rounded-b-[3rem] xl:rounded-b-[4rem] overflow-hidden shadow-elevated">
        {/* Photo + parallax */}
        <div className="relative w-full h-[58vh] md:h-[68vh] xl:h-[80vh]">
          <HeroImage heroImageAlt={heroImageAlt} />

          {/* Refined gradient overlay — dark navy bottom, soft top */}
          <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-brandDark/85 via-brandDark/35 to-transparent" />
          <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-brandDark/55 via-transparent to-transparent" />

          {/* Decorative grid in top-right corner */}
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

          {/* Title plate — modern glass slab */}
          <motion.div
            className="absolute left-4 sm:left-8 lg:left-14 right-4 sm:right-auto bottom-6 sm:bottom-10 lg:bottom-14 z-20 max-w-[95%] sm:max-w-[78%] lg:max-w-[68%] xl:max-w-[58%]"
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="glass rounded-3xl px-6 sm:px-10 py-6 sm:py-9">
              {/* Eyebrow label */}
              <div className="mb-3 sm:mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-brandPrimaryBlue/70" />
                <span className="text-[11px] sm:text-xs font-outfit font-semibold uppercase tracking-[0.18em] text-brandPrimaryBlue">
                  Państwowa Uczelnia Zawodowa
                </span>
              </div>

              <HeroTitle slogan={slogan} sloganMobile={sloganMobile} />

              {/* Decorative serif accent */}
              <div className="mt-4 sm:mt-5 hidden sm:flex items-center gap-3">
                <div className="h-1 w-1 rounded-full bg-brandBrightBlue" />
                <span className="display-serif text-sm md:text-base text-brandInkSoft italic">
                  Grudziądz · od 2004
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Subtle bottom edge highlight */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      </div>

      {/* Decorative arrow stays */}
      <div className="absolute left-[60%] sm:left-[52%] -bottom-32 xl:-bottom-44 3xl:-bottom-40 z-20">
        <HeroArrow arrowAlt={arrowAlt} />
      </div>
    </div>
  );
}
