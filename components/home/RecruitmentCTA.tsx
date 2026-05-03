"use client";

import FancyButton from "@/components/FancyButton";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function RecruitmentCTA() {
  const t = useTranslations("HomePage.recruitmentCta");

  return (
    <section className="w-full 2xl:w-4/5 px-4 sm:px-6 lg:px-12 2xl:px-0">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-[1.75rem] shadow-elevated"
      >
        {/* Layered backgrounds */}
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

        {/* Decorative dots in corner */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-8 right-8 hidden md:block opacity-40"
        >
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
            <defs>
              <pattern
                id="cta-dots"
                x="0"
                y="0"
                width="14"
                height="14"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="2" cy="2" r="1.4" fill="rgba(255,255,255,0.6)" />
              </pattern>
            </defs>
            <rect width="120" height="120" fill="url(#cta-dots)" />
          </svg>
        </div>

        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 sm:p-12 lg:p-16">
          <div className="lg:col-span-8 flex flex-col gap-5 text-white">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-brandWashedBlue/70" />
              <span className="text-[11px] sm:text-xs font-outfit font-semibold uppercase tracking-[0.2em] text-brandWashedBlue">
                {t("eyebrow")}
              </span>
            </div>

            <h2 className="!text-white font-montserrat font-bold text-3xl sm:text-4xl xl:text-5xl !leading-[1.05] tracking-tight max-w-3xl">
              {t("mainTitle")}
            </h2>

            <p className="text-brandWashedBlue/90 text-base sm:text-lg max-w-2xl leading-relaxed">
              {t("description")}
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-3 sm:gap-4 lg:items-end lg:justify-end">
            <FancyButton
              text={t("primaryCta")}
              link="/rekrutacja-krok-po-kroku"
              customGradient="bg-white"
              textColor="text-brandPrimaryBlue"
              customClass="ring-1 ring-white/30 hover:ring-white/60"
            />
            <FancyButton
              text={t("secondaryCta")}
              link="/terminarz-rekrutacji"
              small
              customGradient="bg-transparent"
              textColor="text-white"
              customClass="ring-1 ring-white/40 hover:ring-white/80 backdrop-blur-sm"
              stopAnimation
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
