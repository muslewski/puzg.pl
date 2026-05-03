"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import { ReactNode } from "react";

type Variant = "default" | "ink" | "minimal";

type SubpageHeroProps = {
  /** Small breadcrumb-style label above the title. Defaults to product context. */
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  variant?: Variant;
  /** Optional content rendered to the right of the heading on lg+ */
  aside?: ReactNode;
};

export default function SubpageHero({
  eyebrow,
  title,
  description,
  variant = "default",
  aside,
}: SubpageHeroProps) {
  const isDark = variant === "ink";
  const isMinimal = variant === "minimal";

  return (
    <header
      className={clsx(
        "relative w-full overflow-hidden",
        // Top padding clears the fixed nav (~140px)
        "pt-44 sm:pt-48 lg:pt-52 pb-12 sm:pb-16 lg:pb-20",
        isDark && "text-white",
        !isDark && !isMinimal && "text-brandInk",
        isMinimal && "text-brandInk"
      )}
    >
      {/* Background layer */}
      {!isMinimal && (
        <>
          <div
            className={clsx(
              "absolute inset-0",
              isDark
                ? "bg-gradient-to-br from-brandDark via-brandPrimaryBlue/95 to-brandDark"
                : "bg-gradient-to-br from-washedBlue-50 via-white to-washedBlue-50/50"
            )}
          />
          {isDark && (
            <div
              aria-hidden
              className="absolute inset-0 bg-mesh-dark opacity-90"
            />
          )}
          <div
            aria-hidden
            className={clsx(
              "absolute inset-0 bg-grid-faint bg-grid-24",
              isDark ? "opacity-[0.05]" : "opacity-[0.04]"
            )}
          />
          {/* Soft corner glow */}
          <div
            aria-hidden
            className={clsx(
              "absolute -top-24 -right-24 h-80 w-80 rounded-full blur-3xl",
              isDark ? "bg-brandBrightBlue/30" : "bg-brandBrightBlue/15"
            )}
          />
          {/* Bottom hairline edge */}
          <div
            aria-hidden
            className={clsx(
              "absolute inset-x-0 bottom-0 h-px",
              isDark ? "bg-white/[0.06]" : "bg-brandWashedBlue/40"
            )}
          />
        </>
      )}

      <div className="relative w-full px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className={clsx(
              "flex flex-col gap-5 sm:gap-6 max-w-3xl",
              aside && "lg:max-w-2xl"
            )}
          >
            {eyebrow && (
              <div className="flex items-center gap-3">
                <span
                  className={clsx(
                    "h-px w-8",
                    isDark ? "bg-brandWashedBlue/70" : "bg-brandPrimaryBlue/70"
                  )}
                />
                <span
                  className={clsx(
                    "text-[11px] sm:text-xs font-outfit font-semibold uppercase tracking-[0.18em]",
                    isDark ? "text-brandWashedBlue" : "text-brandPrimaryBlue"
                  )}
                >
                  {eyebrow}
                </span>
              </div>
            )}
            <h1
              className={clsx(
                "font-montserrat font-bold tracking-tight",
                "text-3xl sm:text-4xl md:text-5xl xl:text-6xl 3xl:text-7xl",
                "leading-[1.05]",
                isDark ? "text-white" : "text-brandInk"
              )}
            >
              {title}
            </h1>
            {description && (
              <p
                className={clsx(
                  "text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl",
                  isDark ? "text-brandWashedBlue/85" : "text-brandInkSoft"
                )}
              >
                {description}
              </p>
            )}
          </motion.div>

          {aside && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-8 lg:mt-12"
            >
              {aside}
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
}
