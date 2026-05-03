"use client";

import LocalizationIframe from "@/components/LocalizationIframe";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function LocationCard() {
  const t = useTranslations("HomePage.location");

  return (
    <section className="w-full 2xl:w-4/5 px-4 sm:px-6 lg:px-12 2xl:px-0">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-[1.75rem] overflow-hidden bg-gradient-to-br from-brandNeutrals-200 via-brandNeutrals-300 to-brandNeutrals-400 ring-1 ring-brandNeutrals-500/40 shadow-soft"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Info column */}
          <div className="lg:col-span-5 p-6 sm:p-10 lg:p-12 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-brandPrimaryBlue/70" />
              <span className="text-[11px] sm:text-xs font-outfit font-semibold uppercase tracking-[0.18em] text-brandPrimaryBlue">
                {t("eyebrow")}
              </span>
            </div>

            <h2 className="!leading-[1.1]">{t("mainTitle")}</h2>

            <p className="text-brandInkSoft text-base sm:text-lg">
              {t("description")}
            </p>

            <dl className="flex flex-col gap-5 mt-2">
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1 h-9 w-9 rounded-xl bg-white ring-1 ring-brandWashedBlue/40 flex items-center justify-center text-brandPrimaryBlue">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-brandInkSoft mb-1">
                    {t("addressLabel")}
                  </dt>
                  <dd className="text-brandInk font-medium">{t("address")}</dd>
                  <dd className="text-brandInkSoft text-sm mt-0.5">
                    {t("addressSecondary")}
                  </dd>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1 h-9 w-9 rounded-xl bg-white ring-1 ring-brandWashedBlue/40 flex items-center justify-center text-brandPrimaryBlue">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-brandInkSoft mb-1">
                    {t("contactLabel")}
                  </dt>
                  <dd>
                    <a
                      href={`tel:${t("phone").replace(/\s/g, "")}`}
                      className="text-brandInk font-medium hover:text-brandPrimaryBlue transition-colors"
                    >
                      {t("phone")}
                    </a>
                  </dd>
                  <dd>
                    <a
                      href={`tel:${t("phoneSecondary").replace(/\s/g, "")}`}
                      className="text-brandInkSoft text-sm hover:text-brandPrimaryBlue transition-colors"
                    >
                      {t("phoneSecondary")}
                    </a>
                  </dd>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1 h-9 w-9 rounded-xl bg-white ring-1 ring-brandWashedBlue/40 flex items-center justify-center text-brandPrimaryBlue">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-brandInkSoft mb-1">
                    {t("emailLabel")}
                  </dt>
                  <dd>
                    <a
                      href={`mailto:${t("email")}`}
                      className="text-brandInk font-medium hover:text-brandPrimaryBlue transition-colors"
                    >
                      {t("email")}
                    </a>
                  </dd>
                </div>
              </div>
            </dl>
          </div>

          {/* Map column */}
          <div className="lg:col-span-7 min-h-[320px] lg:min-h-[480px] bg-white">
            <LocalizationIframe />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
