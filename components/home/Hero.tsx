"use client";

import HeroArrow from "@/components/home/HeroArrow";
import HeroImage from "@/components/home/HeroImage";
import { motion } from "framer-motion";

export default function Hero({
  slogan,
  sloganMobile,
  heroImageAlt,
  arrowAlt,
  eyebrow,
  description,
}: {
  slogan: React.ReactNode;
  sloganMobile: React.ReactNode;
  heroImageAlt: string;
  arrowAlt: string;
  eyebrow: string;
  description: string;
}) {
  return (
    <header className="relative w-full h-[88vh] md:h-[95vh] lg:h-screen overflow-hidden md:rounded-b-[3rem] xl:rounded-b-[4rem] shadow-elevated">
      {/* Parallax background photo */}
      <HeroImage heroImageAlt={heroImageAlt} />

      {/* Diagonal navy fade — strong behind text bottom-left, photo visible top-right */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-tr from-brandDark/85 via-brandDark/35 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 z-10 bg-gradient-to-t from-brandDark/60 via-brandDark/15 to-transparent"
      />

      {/* Subtle grid for depth */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10 bg-grid-faint bg-grid-24 opacity-[0.05]"
      />

      {/* Decorative dot pattern in top-right */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-44 right-6 lg:top-56 lg:right-12 hidden md:block opacity-50 z-10"
      >
        <svg width="160" height="160" viewBox="0 0 160 160" fill="none">
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
          <rect width="160" height="160" fill="url(#hero-dots)" />
        </svg>
      </div>

      {/* Editorial mark — oversized italic accent in the corner */}
      <div
        aria-hidden
        className="hidden lg:block absolute right-10 xl:right-20 bottom-8 xl:bottom-14 pointer-events-none select-none z-10"
      >
        <span className="display-serif italic text-[8rem] xl:text-[12rem] leading-none text-white/[0.05]">
          PUZG
        </span>
      </div>

      {/* Bottom hairline edge */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-px bg-white/[0.10] z-10"
      />

      {/* Content — bottom-left stack matching the subpage editorial pattern */}
      <div className="absolute inset-x-0 bottom-0 z-20 px-6 sm:px-8 lg:px-12 pb-12 sm:pb-16 lg:pb-20">
        <div className="mx-auto w-full max-w-7xl">
          <motion.div
            className="flex flex-col gap-5 sm:gap-7 max-w-3xl text-white"
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-12 bg-brandWashedBlue/70" />
              <span className="text-[11px] sm:text-xs font-outfit font-semibold uppercase tracking-[0.22em] text-brandWashedBlue">
                {eyebrow}
              </span>
            </div>

            <h1 className="font-montserrat font-bold tracking-tight text-4xl sm:text-5xl md:text-6xl xl:text-7xl 3xl:text-[5.5rem] leading-[1.02] text-white">
              <span className="hidden sm:flex">{slogan}</span>
              <span className="flex sm:hidden">{sloganMobile}</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl text-brandWashedBlue/85">
              {description}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Decorative arrow — overlaps below hero (kept) */}
      <div className="absolute left-[60%] sm:left-[52%] -bottom-32 xl:-bottom-44 3xl:-bottom-40 z-20">
        <HeroArrow arrowAlt={arrowAlt} />
      </div>
    </header>
  );
}
