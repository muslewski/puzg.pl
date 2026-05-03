"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { slideProps } from "@/components/slide/SlideShow";

export default function Slide({ data }: { data: slideProps }) {
  return (
    <div className="relative w-full h-[32rem] lg:h-[28rem]">
      {/* Image side */}
      <motion.div
        className="absolute w-11/12 lg:w-3/5 h-2/3 lg:h-full bottom-1/3 lg:bottom-auto right-0 rounded-3xl overflow-hidden shadow-elevated ring-1 ring-white/40"
        initial={{ opacity: 0, x: 60, scale: 0.98 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        exit={{ opacity: 0, x: 60, scale: 0.98 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src={data.imageSrc}
          fill
          sizes="(max-width: 1024px) 91vw, 60vw"
          alt={data.imageAlt}
          className="object-cover"
        />
        {/* Subtle blue tint overlay for cohesion */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-tr from-brandPrimaryBlue/30 via-transparent to-transparent mix-blend-multiply"
        />
      </motion.div>

      {/* Text plate — single unified glass panel */}
      <motion.div
        className="absolute w-11/12 lg:w-[55%] left-0 bottom-0 lg:bottom-6"
        initial={{ opacity: 0, x: -40, y: 12 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        exit={{ opacity: 0, x: -40, y: 12 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="glass rounded-3xl px-6 sm:px-10 py-6 sm:py-8">
          {/* Eyebrow */}
          <div className="mb-3 flex items-center gap-3">
            <span className="h-px w-6 bg-brandPrimaryBlue/70" />
            <span className="text-[10px] sm:text-xs font-outfit font-semibold uppercase tracking-[0.2em] text-brandPrimaryBlue">
              Aktualności
            </span>
          </div>

          <motion.h2
            initial={{ x: -16, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="!text-brandInk"
          >
            {data.title}
          </motion.h2>

          <motion.p
            initial={{ x: -24, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.18 }}
            className="mt-4 text-brandInkSoft text-base sm:text-lg leading-relaxed"
          >
            {data.description}
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}
