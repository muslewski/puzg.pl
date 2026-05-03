"use client";

import FancyButton from "@/components/FancyButton";
import { Link } from "@/i18n/routing";
import clsx from "clsx";
import { motion } from "framer-motion";
import { ComponentProps, ReactNode } from "react";

type CTAButton = {
  text: string;
  link?: ComponentProps<typeof Link>["href"];
  outsideLink?: string;
};

type Variant = "dark" | "light" | "subtle";

type CTABannerProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  primary?: CTAButton;
  secondary?: CTAButton;
  variant?: Variant;
  className?: string;
};

export default function CTABanner({
  eyebrow,
  title,
  description,
  primary,
  secondary,
  variant = "dark",
  className,
}: CTABannerProps) {
  const isDark = variant === "dark";
  const isLight = variant === "light";
  const isSubtle = variant === "subtle";

  return (
    <section
      className={clsx(
        "w-full px-6 sm:px-8 lg:px-12",
        className
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
        className={clsx(
          "relative overflow-hidden rounded-[1.75rem] mx-auto max-w-7xl",
          isDark && "shadow-elevated",
          isLight && "shadow-soft ring-1 ring-brandWashedBlue/40",
          isSubtle && "ring-1 ring-brandWashedBlue/30"
        )}
      >
        {/* Backgrounds */}
        {isDark && (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-brandDark via-brandPrimaryBlue to-brandBrightBlue" />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-mesh-dark opacity-90"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-grid-faint bg-grid-24 opacity-[0.05]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -top-32 -left-20 h-80 w-80 rounded-full bg-brandBrightBlue/30 blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-brandWashedBlue/20 blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute top-8 right-8 hidden md:block opacity-40"
            >
              <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                <defs>
                  <pattern
                    id={`cta-dots-${variant}`}
                    x="0"
                    y="0"
                    width="14"
                    height="14"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle cx="2" cy="2" r="1.4" fill="rgba(255,255,255,0.6)" />
                  </pattern>
                </defs>
                <rect
                  width="120"
                  height="120"
                  fill={`url(#cta-dots-${variant})`}
                />
              </svg>
            </div>
          </>
        )}

        {isLight && (
          <div className="absolute inset-0 bg-gradient-to-br from-white via-washedBlue-50 to-white" />
        )}

        {isSubtle && (
          <div className="absolute inset-0 bg-brandSurface" />
        )}

        <div
          className={clsx(
            "relative grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 sm:p-12 lg:p-16",
            isDark ? "text-white" : "text-brandInk"
          )}
        >
          <div
            className={clsx(
              "flex flex-col gap-5",
              primary || secondary ? "lg:col-span-8" : "lg:col-span-12"
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
                    "text-[11px] sm:text-xs font-outfit font-semibold uppercase tracking-[0.2em]",
                    isDark ? "text-brandWashedBlue" : "text-brandPrimaryBlue"
                  )}
                >
                  {eyebrow}
                </span>
              </div>
            )}

            <h2
              className={clsx(
                "font-montserrat font-bold text-3xl sm:text-4xl xl:text-5xl !leading-[1.05] tracking-tight max-w-3xl",
                isDark ? "!text-white" : "!text-brandInk"
              )}
            >
              {title}
            </h2>

            {description && (
              <p
                className={clsx(
                  "text-base sm:text-lg max-w-2xl leading-relaxed",
                  isDark ? "text-brandWashedBlue/90" : "text-brandInkSoft"
                )}
              >
                {description}
              </p>
            )}
          </div>

          {(primary || secondary) && (
            <div className="lg:col-span-4 flex flex-col gap-3 sm:gap-4 lg:items-end lg:justify-end">
              {primary && (
                <FancyButton
                  text={primary.text}
                  link={primary.link}
                  outsideLink={primary.outsideLink}
                  customGradient={isDark ? "bg-white" : undefined}
                  textColor={isDark ? "text-brandPrimaryBlue" : undefined}
                  customClass={
                    isDark
                      ? "ring-1 ring-white/30 hover:ring-white/60"
                      : undefined
                  }
                />
              )}
              {secondary && (
                <FancyButton
                  text={secondary.text}
                  link={secondary.link}
                  outsideLink={secondary.outsideLink}
                  small
                  customGradient={isDark ? "bg-transparent" : "bg-white"}
                  textColor={
                    isDark ? "text-white" : "text-brandPrimaryBlue"
                  }
                  customClass={
                    isDark
                      ? "ring-1 ring-white/40 hover:ring-white/80 backdrop-blur-sm"
                      : "ring-1 ring-brandPrimaryBlue/30 hover:ring-brandPrimaryBlue/60"
                  }
                  stopAnimation
                />
              )}
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
}
