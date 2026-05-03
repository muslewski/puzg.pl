"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const ICONS = {
  workshop: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),
  faculty: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  ),
  facilities: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
    </svg>
  ),
  partnerships: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
} as const;

const ITEMS = [
  { key: "0", icon: "workshop" as const },
  { key: "1", icon: "faculty" as const },
  { key: "2", icon: "facilities" as const },
  { key: "3", icon: "partnerships" as const },
];

export default function TrustStrip() {
  const t = useTranslations("HomePage.trust");

  return (
    <section className="w-full 2xl:w-4/5 px-4 sm:px-6 lg:px-12 2xl:px-0">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
        className="rounded-[1.75rem] bg-gradient-to-br from-brandPrimaryBlue to-brandDark text-white p-8 sm:p-12 shadow-elevated relative overflow-hidden"
      >
        {/* Decorative grid pattern */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-grid-faint bg-grid-24 opacity-[0.06]"
        />
        {/* Soft glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-brandBrightBlue/30 blur-3xl"
        />

        <div className="relative">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-px w-8 bg-brandWashedBlue/70" />
            <span className="text-[11px] sm:text-xs font-outfit font-semibold uppercase tracking-[0.18em] text-brandWashedBlue">
              {t("eyebrow")}
            </span>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mt-8">
            {ITEMS.map((item, i) => (
              <motion.li
                key={item.key}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: 0.1 + i * 0.08,
                  ease: [0.22, 1, 0.36, 1] as const,
                }}
                className="flex flex-col gap-3"
              >
                <div className="h-10 w-10 text-brandWashedBlue">
                  {ICONS[item.icon]}
                </div>
                <h3 className="!bg-none !bg-clip-border !text-white font-outfit text-lg sm:text-xl font-semibold">
                  {t(`items.${item.key}.title` as `items.0.title`)}
                </h3>
                <p className="text-sm sm:text-base text-brandWashedBlue/90 leading-relaxed">
                  {t(`items.${item.key}.description` as `items.0.description`)}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
