"use client";

import { Link } from "@/i18n/routing";
import clsx from "clsx";
import { motion } from "framer-motion";
import Image from "next/image";
import { ComponentProps, ReactNode } from "react";

type Variant = "default" | "ink" | "minimal" | "image";

type Crumb = {
  label: string;
  href?: ComponentProps<typeof Link>["href"];
};

type SubpageHeroProps = {
  /** Small breadcrumb-style label above the title */
  eyebrow?: string;
  /** Breadcrumb trail above the eyebrow — last item is current page (no link) */
  breadcrumbs?: Crumb[];
  title: ReactNode;
  description?: ReactNode;
  variant?: Variant;
  /** Background image for "image" variant */
  image?: string;
  imageAlt?: string;
  /** Optional editorial mark in the corner (Roman numeral, kanji, year, etc.) */
  mark?: ReactNode;
  /** Optional content rendered under the title block (e.g. CTAs, meta) */
  meta?: ReactNode;
};

export default function SubpageHero({
  eyebrow,
  breadcrumbs,
  title,
  description,
  variant = "default",
  image,
  imageAlt = "",
  mark,
  meta,
}: SubpageHeroProps) {
  const isImage = variant === "image" && image;
  const isDark = variant === "ink" || isImage;
  const isMinimal = variant === "minimal";

  return (
    <header
      className={clsx(
        "relative w-full overflow-hidden",
        // Top padding clears the fixed nav comfortably (nav ~216px tall when not scrolled)
        "pt-56 sm:pt-64 lg:pt-72 xl:pt-80 pb-16 sm:pb-20 lg:pb-28",
        isDark ? "text-white" : "text-brandInk"
      )}
    >
      {/* ──────── BACKGROUND LAYERS ──────── */}
      {!isMinimal && !isImage && (
        <>
          {/* Base gradient */}
          <div
            className={clsx(
              "absolute inset-0",
              isDark
                ? "bg-brandDark"
                : "bg-gradient-to-br from-washedBlue-50 via-white to-washedBlue-100/60"
            )}
          />
          {/* Mesh gradient layer */}
          <div
            aria-hidden
            className={clsx(
              "absolute inset-0",
              isDark ? "bg-mesh-dark opacity-100" : "bg-mesh-blue opacity-90"
            )}
          />
          {/* Visible grid pattern */}
          <div
            aria-hidden
            className={clsx(
              "absolute inset-0 bg-grid-faint bg-grid-24",
              isDark ? "opacity-[0.07]" : "opacity-[0.06]"
            )}
          />
          {/* Soft corner glow */}
          <div
            aria-hidden
            className={clsx(
              "absolute -top-32 -right-32 h-[28rem] w-[28rem] rounded-full blur-3xl",
              isDark ? "bg-brandBrightBlue/35" : "bg-brandBrightBlue/20"
            )}
          />
          {/* Decorative dot pattern in top-right */}
          <div
            aria-hidden
            className="absolute top-56 right-6 lg:top-72 lg:right-12 hidden md:block opacity-50"
          >
            <svg width="160" height="160" viewBox="0 0 160 160" fill="none">
              <defs>
                <pattern
                  id="hero-dots-2"
                  x="0"
                  y="0"
                  width="14"
                  height="14"
                  patternUnits="userSpaceOnUse"
                >
                  <circle
                    cx="2"
                    cy="2"
                    r="1.4"
                    fill={isDark ? "rgba(255,255,255,0.55)" : "rgba(9,84,124,0.45)"}
                  />
                </pattern>
              </defs>
              <rect width="160" height="160" fill="url(#hero-dots-2)" />
            </svg>
          </div>
        </>
      )}

      {/* Image variant — photo background with overlay */}
      {isImage && (
        <>
          <Image
            src={image}
            fill
            alt={imageAlt}
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-brandDark/95 via-brandDark/70 to-brandDark/45"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-grid-faint bg-grid-24 opacity-[0.05]"
          />
          <div
            aria-hidden
            className="absolute -top-32 -right-32 h-[28rem] w-[28rem] rounded-full bg-brandBrightBlue/30 blur-3xl"
          />
        </>
      )}

      {/* Bottom hairline */}
      {!isMinimal && (
        <div
          aria-hidden
          className={clsx(
            "absolute inset-x-0 bottom-0 h-px",
            isDark ? "bg-white/[0.08]" : "bg-brandWashedBlue/40"
          )}
        />
      )}

      {/* ──────── EDITORIAL MARK (oversized serif accent) ──────── */}
      {mark && (
        <div
          aria-hidden
          className="hidden lg:block absolute right-12 xl:right-24 bottom-12 xl:bottom-16 pointer-events-none select-none"
        >
          <span
            className={clsx(
              "display-serif italic text-[7rem] xl:text-[10rem] leading-none",
              isDark ? "text-white/[0.06]" : "text-brandPrimaryBlue/[0.10]"
            )}
          >
            {mark}
          </span>
        </div>
      )}

      {/* ──────── CONTENT ──────── */}
      <div className="relative w-full px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          {/* Breadcrumbs */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <motion.nav
              aria-label="Breadcrumb"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="mb-6 sm:mb-8"
            >
              <ol className="!flex !flex-row !flex-wrap items-center gap-2 text-xs sm:text-sm font-outfit !pl-0 !list-none">
                {breadcrumbs.map((crumb, i) => {
                  const isLast = i === breadcrumbs.length - 1;
                  return (
                    <li key={i} className="flex items-center gap-2">
                      {crumb.href && !isLast ? (
                        <Link
                          href={crumb.href}
                          className={clsx(
                            "transition-colors hover:underline underline-offset-4",
                            isDark
                              ? "text-brandWashedBlue/80 hover:text-white"
                              : "text-brandInkSoft hover:text-brandPrimaryBlue"
                          )}
                        >
                          {crumb.label}
                        </Link>
                      ) : (
                        <span
                          className={clsx(
                            isDark ? "text-white" : "text-brandInk",
                            isLast && "font-medium"
                          )}
                          aria-current={isLast ? "page" : undefined}
                        >
                          {crumb.label}
                        </span>
                      )}
                      {!isLast && (
                        <svg
                          aria-hidden
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          className={clsx(
                            "h-3 w-3",
                            isDark ? "text-white/40" : "text-brandInkSoft/60"
                          )}
                        >
                          <polyline
                            points="9 6 15 12 9 18"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </li>
                  );
                })}
              </ol>
            </motion.nav>
          )}

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-6 sm:gap-8 max-w-4xl"
          >
            {eyebrow && (
              <div className="flex items-center gap-3">
                <span
                  className={clsx(
                    "h-px w-12",
                    isDark ? "bg-brandWashedBlue/70" : "bg-brandPrimaryBlue/70"
                  )}
                />
                <span
                  className={clsx(
                    "text-[11px] sm:text-xs font-outfit font-semibold uppercase tracking-[0.22em]",
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
                "text-4xl sm:text-5xl md:text-6xl xl:text-7xl 3xl:text-[5.5rem]",
                "leading-[1.02]",
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
            {meta && (
              <div className="mt-2 sm:mt-4 flex flex-wrap items-center gap-3 sm:gap-4">
                {meta}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </header>
  );
}
