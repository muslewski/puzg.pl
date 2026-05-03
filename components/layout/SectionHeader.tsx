"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import { ReactNode } from "react";

type SectionHeaderProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
  /** Visual heading level — keeps semantic h2 but allows display sizing */
  size?: "lg" | "xl";
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  size = "lg",
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
      className={clsx(
        "flex flex-col gap-4 sm:gap-5 max-w-3xl",
        align === "center" && "items-center text-center mx-auto",
        className
      )}
    >
      {eyebrow && (
        <div className={clsx("flex items-center gap-3", align === "center" && "justify-center")}>
          <span className="h-px w-8 bg-brandPrimaryBlue/70" />
          <span className="text-[11px] sm:text-xs font-outfit font-semibold uppercase tracking-[0.18em] text-brandPrimaryBlue">
            {eyebrow}
          </span>
        </div>
      )}
      <h2
        className={clsx(
          "!leading-[1.1] tracking-tight",
          size === "xl" && "!text-3xl md:!text-4xl xl:!text-5xl 3xl:!text-6xl"
        )}
      >
        {title}
      </h2>
      {description && (
        <p className="text-brandInkSoft text-base sm:text-lg leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </motion.div>
  );
}
