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
    "/aktualnosci/[slug]": {
      pl: "/aktualnosci/[slug]",
      en: "/news/[slug]",
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
    "/legitymacja-studencka": {
      pl: "/legitymacja-studencka",
      en: "/student-id-card",
    },
    "/organizacja-roku-akademickiego": {
      pl: "/organizacja-roku-akademickiego",
      en: "/academic-year-organization",
    },
    "/plan-zajec": {
      pl: "/plan-zajec",
      en: "/class-schedule",
    },
    "/program-studiow": {
      pl: "/program-studiow",
      en: "/study-program",
    },
    "/regulamin-studiow": {
      pl: "/regulamin-studiow",
      en: "/study-regulations",
    },
    "/stypendia": {
      pl: "/stypendia",
      en: "/scholarships",
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
    "/rekrutacja-krok-po-kroku/dostarcz-dokumenty": {
      pl: "/rekrutacja-krok-po-kroku/dostarcz-dokumenty",
      en: "/recruitment-step-by-step/deliver-documents",
    },
    "/rekrutacja-krok-po-kroku/godziny-dyzurowania-uczelnianej-komisji-rekrutacyjnej":
      {
        pl: "/rekrutacja-krok-po-kroku/godziny-dyzurowania-uczelnianej-komisji-rekrutacyjnej",
        en: "/recruitment-step-by-step/office-hours-of-the-college-admissions-committee",
      },
    "/terminarz-rekrutacji": {
      pl: "/terminarz-rekrutacji",
      en: "/recruitment-schedule",
    },

    // Wybory 2024
    "/dokumenty-do-pobrania": {
      pl: "/dokumenty-do-pobrania",
      en: "/downloadable-documents",
    },
    "/komunikaty": {
      pl: "/komunikaty",
      en: "/announcements",
    },
    "/uchwaly-ukw": {
      pl: "/uchwaly-ukw",
      en: "/resolutions-ukw",
    },
    "/uczelniana-komisja-wyborcza": {
      pl: "/uczelniana-komisja-wyborcza",
      en: "/college-election",
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

    // Footer
    "/polityka-prywatnosci": {
      pl: "/polityka-prywatnosci",
      en: "/privacy-policy",
    },
    "/deklaracja-dostepnosci": {
      pl: "/deklaracja-dostepnosci",
      en: "/accessibility-declaration",
    },
    "/biuletyn-informacji-publicznej": {
      pl: "/biuletyn-informacji-publicznej",
      en: "/public-information-bulletin",
    },
  },
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
