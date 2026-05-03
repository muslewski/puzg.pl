"use client";

import FancyButton from "@/components/FancyButton";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function ProgramsPreview() {
  const t = useTranslations("HomePage.programs");
  const bullets = ["0", "1", "2"] as const;

  return (
    <section className="w-full 2xl:w-4/5 px-4 sm:px-6 lg:px-12 2xl:px-0">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10"
      >
        {/* Intro column */}
        <div className="lg:col-span-4 flex flex-col gap-4 lg:gap-6 lg:py-6">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-brandPrimaryBlue/70" />
            <span className="text-[11px] sm:text-xs font-outfit font-semibold uppercase tracking-[0.18em] text-brandPrimaryBlue">
              {t("eyebrow")}
            </span>
          </div>
          <h2 className="!leading-[1.1]">{t("mainTitle")}</h2>
          <p className="text-brandInkSoft">{t("intro")}</p>

          <div className="hidden lg:block mt-4 rounded-2xl border border-brandWashedBlue/40 bg-white/60 p-5">
            <h3 className="!bg-none !text-brandInk font-semibold text-base mb-1">
              {t("upcoming.title")}
            </h3>
            <p className="text-sm text-brandInkSoft leading-relaxed">
              {t("upcoming.description")}
            </p>
          </div>
        </div>

        {/* Featured program card */}
        <div className="lg:col-span-8">
          <div className="relative rounded-[1.75rem] overflow-hidden bg-white shadow-elevated ring-1 ring-brandWashedBlue/40">
            {/* Top accent bar */}
            <div className="h-1.5 bg-gradient-to-r from-brandPrimaryBlue via-brandBrightBlue to-brandWashedBlue" />

            {/* Decorative blur */}
            <div
              aria-hidden
              className="pointer-events-none absolute -top-20 -right-24 h-72 w-72 rounded-full bg-brandBrightBlue/15 blur-3xl"
            />

            <div className="relative p-6 sm:p-10 lg:p-12 flex flex-col gap-6 sm:gap-8">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-brandPrimaryBlue/10 px-3 py-1 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-brandPrimaryBlue">
                  <span className="h-1.5 w-1.5 rounded-full bg-brandPrimaryBlue animate-pulse" />
                  {t("featured.tag")}
                </span>
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="!bg-none !text-brandInk font-montserrat font-bold text-3xl sm:text-4xl xl:text-5xl tracking-tight">
                  {t("featured.name")}
                </h3>
                <p className="text-brandInkSoft text-base sm:text-lg max-w-2xl">
                  {t("featured.summary")}
                </p>
              </div>

              <ul className="flex flex-col gap-3 sm:gap-4">
                {bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-3 text-brandInk text-base sm:text-lg"
                  >
                    <svg
                      className="mt-1 h-5 w-5 flex-shrink-0 text-brandBrightBlue"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{t(`featured.bullets.${b}` as `featured.bullets.0`)}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
                <FancyButton
                  text={t("featured.cta")}
                  link="/program-studiow"
                  small
                />
                <FancyButton
                  text={t("featured.ctaSecondary")}
                  link="/kierunki-studiow"
                  small
                  customGradient="bg-white"
                  textColor="text-brandPrimaryBlue"
                  customClass="ring-1 ring-brandPrimaryBlue/30 hover:ring-brandPrimaryBlue/60"
                />
              </div>
            </div>
          </div>

          {/* Mobile: upcoming programs note */}
          <div className="lg:hidden mt-6 rounded-2xl border border-brandWashedBlue/40 bg-white/60 p-5">
            <h3 className="!bg-none !text-brandInk font-semibold text-base mb-1">
              {t("upcoming.title")}
            </h3>
            <p className="text-sm text-brandInkSoft leading-relaxed">
              {t("upcoming.description")}
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
