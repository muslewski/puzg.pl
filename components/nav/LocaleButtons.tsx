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
    <div className="flex gap-2 self-end">
      <button
        className={clsx(
          isPending && "transition-opacity [&:disabled]:opacity-30",
          currentLocale !== "pl" && "opacity-70"
        )}
        onClick={() => changeLanguage("pl")}
        disabled={isPending}
      >
        PL
      </button>
      <button
        className={clsx(
          isPending && "transition-opacity [&:disabled]:opacity-30",
          currentLocale !== "en" && "opacity-70"
        )}
        onClick={() => changeLanguage("en")}
        disabled={isPending}
      >
        EN
      </button>
    </div>
  );
}
