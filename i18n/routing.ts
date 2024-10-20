import { defineRouting } from "next-intl/routing";
import { createLocalizedPathnamesNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["pl", "en"],

  // Used when no locale matches
  defaultLocale: "pl",
  localePrefix: "always",

  // The `pathnames` object holds pairs of internal and
  // external paths. Based on the locale, the external
  // paths are rewritten to the shared, internal ones.
  pathnames: {
    "/": "/",
    "/o-nas": {
      pl: "/o-nas",
      en: "/about-us",
    },
    "/instytut": {
      pl: "/instytut",
      en: "/institute",
    },
  },
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation(routing);
