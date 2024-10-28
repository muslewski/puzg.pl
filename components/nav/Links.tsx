"use client";

import NavigationLink from "@/components/nav/NavigationLink";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export function ListOfLinks() {
  const t = useTranslations("Links");

  return (
    <>
      <NavigationLink
        submenu={[
          { label: t("news"), href: "/aktualnosci" },
          { label: t("contact"), href: "/kontakt" },
          { label: t("aboutCollege"), href: "/o-uczelni" },
          { label: t("collegeAuthorities"), href: "/wladze-uczelni" },
        ]}
        submenuWidth={7}
      >
        {t("college")}
      </NavigationLink>
      <NavigationLink
        submenu={[
          { label: t("deanery"), href: "/dziekanat" },
          { label: t("educationQuality"), href: "/jakosc-ksztalcenia" },
          { label: t("fieldsOfStudy"), href: "/kierunki-studiow" },
          {
            label: t("academicYearOrganization"),
            href: "/organizacja-roku-akademickiego",
          },
          { label: t("studyProgram"), href: "/program-studiow" },
          { label: t("studyRegulations"), href: "/regulamin-studiow" },
        ]}
        submenuWidth={9}
      >
        {t("student")}
      </NavigationLink>
      <NavigationLink
        submenu={[
          { label: t("jobOffers"), href: "/oferty-pracy" },
          {
            label: t("lawsAndRegulations"),
            href: "/ustawy-i-rozporzadzenia-mnisw",
          },
          {
            label: t("rulesForStudyPrograms"),
            href: "/zasady-tworzenia-prowadzenia-i-likwidacji-kierunkow-studiow",
          },
        ]}
        submenuWidth={9}
      >
        {t("employee")}
      </NavigationLink>
      <NavigationLink
        submenu={[
          { label: t("legalActs"), href: "/akty-prawne" },
          {
            label: t("electronicRegistration"),
            href: "/elektroniczna-rejestracja-kandydata",
          },
          {
            label: t("admissionLimits"),
            href: "/limit-przyjec-na-studia",
          },
          { label: t("recruitmentFee"), href: "/oplata-rekrutacyjna" },
          {
            label: t("recruitmentStepByStep"),
            href: "/rekrutacja-krok-po-kroku",
          },
          {
            label: t("recruitmentSchedule"),
            href: "/terminarz-rekrutacji",
          },
        ]}
        submenuWidth={10}
      >
        {t("recruitment")}
      </NavigationLink>
      <NavigationLink href="/instytut">{t("institute")}</NavigationLink>
      <NavigationLink href="/wspolpraca">{t("collaboration")}</NavigationLink>
      <NavigationLink href="/kontakt">{t("contact")}</NavigationLink>
    </>
  );
}

export default function Links({ active }: { active: boolean }) {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1023px)" });

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      {isMounted && !isTabletOrMobile ? (
        <div className="relative flex flex-wrap  lg:flex-row md:justify-evenly lg:items-center gap-2 w-full px-6 py-4 bg-white lg:bg-brandPrimaryBlue rounded-t-xl rounded-b-[2rem] border-t-2 border-brandDark shadow-md pointer-events-auto">
          <ListOfLinks />
        </div>
      ) : (
        <AnimatePresence>
          {isMounted && active && (
            <motion.div
              className="relative flex flex-wrap  lg:flex-row md:justify-evenly lg:items-center gap-2 w-full px-6 py-4 bg-white lg:bg-brandPrimaryBlue rounded-t-xl rounded-b-[2rem] border-t-2 border-brandDark shadow-md pointer-events-auto"
              variants={{
                hidden: {
                  opacity: [1, 0],
                  x: ["0%", "5%", "-150%", "-150%"],
                  maxHeight: 0,
                  marginTop: -75,
                },
                visible: {
                  opacity: [0, 1],
                  x: ["-90%", "-95%", "10%", "0%"],
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
              <ListOfLinks />
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </>
  );
}
