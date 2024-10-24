import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

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

    // Uczelnia
    "/aktualnosci": {
      pl: "/aktualnosci",
      en: "/news",
    },
    "/o-uczelni": {
      pl: "/o-uczelni",
      en: "/about-college",
    },
    "/wladze-uczelni": {
      pl: "/wladze-uczelni",
      en: "/college-authorities",
    },

    // Student
    "/dziekanat": {
      pl: "/dziekanat",
      en: "/deanery",
    },
    "/jakosc-ksztalcenia": {
      pl: "/jakosc-ksztalcenia",
      en: "/education-quality",
    },
    "/kierunki-studiow": {
      pl: "/kierunki-studiow",
      en: "/fields-of-study",
    },
    "/organizacja-roku-akademickiego": {
      pl: "/organizacja-roku-akademickiego",
      en: "/academic-year-organization",
    },
    "/program-studiow": {
      pl: "/program-studiow",
      en: "/study-program",
    },
    "/regulamin-studiow": {
      pl: "/regulamin-studiow",
      en: "/study-regulations",
    },

    // Pracownik
    "/oferty-pracy": {
      pl: "/oferty-pracy",
      en: "/job-offers",
    },
    "/ustawy-i-rozporzadzenia-mnisw": {
      pl: "/ustawy-i-rozporzadzenia-mnisw",
      en: "/laws-and-regulations-mnisw",
    },
    "/zasady-tworzenia-prowadzenia-i-likwidacji-kierunkow-studiow": {
      pl: "/zasady-tworzenia-prowadzenia-i-likwidacji-kierunkow-studiow",
      en: "/rules-for-creating-conducting-and-closing-study-programs",
    },

    // Rekrutacja
    "/akty-prawne": {
      pl: "/akty-prawne",
      en: "/legal-acts",
    },
    "/elektroniczna-rejestracja-kandydata": {
      pl: "/elektroniczna-rejestracja-kandydata",
      en: "/electronic-candidate-registration",
    },
    "/limit-przyjec-na-studia": {
      pl: "/limit-przyjec-na-studia",
      en: "/admission-limits",
    },
    "/oplata-rekrutacyjna": {
      pl: "/oplata-rekrutacyjna",
      en: "/recruitment-fee",
    },
    "/rekrutacja-krok-po-kroku": {
      pl: "/rekrutacja-krok-po-kroku",
      en: "/recruitment-step-by-step",
    },
    "/terminarz-rekrutacji": {
      pl: "/terminarz-rekrutacji",
      en: "/recruitment-schedule",
    },

    "/instytut": {
      pl: "/instytut",
      en: "/institute",
    },
    "/wspolpraca": {
      pl: "/wspolpraca",
      en: "/collaboration",
    },
    "/kontakt": {
      pl: "/kontakt",
      en: "/contact",
    },
  },
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
