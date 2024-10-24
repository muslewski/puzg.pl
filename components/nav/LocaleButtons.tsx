"use client";

import { useTransition } from "react";
import { Locale, useRouter, usePathname } from "@/i18n/routing";
import { useLocale } from "next-intl";
import clsx from "clsx";

export default function LocaleButtons() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  function changeLanguage(locale: Locale) {
    if (locale === currentLocale) return;
    startTransition(() => {
      router.replace({ pathname }, { locale });
    });
  }

  return (
    <div className="flex gap-6 self-end font-outfit text-base">
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
