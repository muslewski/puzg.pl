"use client";

import { useEffect, useState, useTransition } from "react";
import { Locale, useRouter, usePathname } from "@/i18n/routing";
import { useLocale } from "next-intl";
import clsx from "clsx";
import { useMediaQuery } from "react-responsive";
import { motion, AnimatePresence } from "framer-motion";
import { useParams } from "next/navigation";

export function LocaleButtonsLogic() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const params = useParams();

  function changeLanguage(locale: Locale) {
    if (locale === currentLocale) return;
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale }
      );
    });
  }

  return (
    <div className="flex gap-6 font-outfit text-base pointer-events-auto">
      <button
        title="Zmień język na Polski"
        className={clsx(
          "text-white lg:text-brandDark transition-all",
          currentLocale !== "pl" &&
            "opacity-70 scale-95 hover:scale-100 active:opacity-95 active:scale-110"
        )}
        onClick={() => changeLanguage("pl")}
        disabled={isPending}
      >
        PL
      </button>
      <button
        title="Zmień język na Angielski"
        className={clsx(
          "text-white lg:text-brandDark transition-all",
          currentLocale !== "en" &&
            "opacity-70 scale-95 hover:scale-100 active:opacity-95 active:scale-110"
        )}
        onClick={() => changeLanguage("en")}
        disabled={isPending}
      >
        EN
      </button>
    </div>
  );
}

export default function LocaleButtons({ active }: { active: boolean }) {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1023px)" });

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      {isMounted && !isTabletOrMobile ? (
        <div className="self-end">
          <LocaleButtonsLogic />
        </div>
      ) : (
        <AnimatePresence>
          {isMounted && active && (
            <motion.div
              className="self-end"
              variants={{
                hidden: {
                  opacity: [1, 0],
                  maxHeight: 0,
                  marginTop: -16,
                },
                visible: {
                  opacity: [0, 1],
                  maxHeight: 500,
                  marginTop: 0,
                },
              }}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{
                duration: 0.8,
                ease: "easeInOut",
              }}
            >
              <LocaleButtonsLogic />
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </>
  );
}
