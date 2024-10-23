import NavigationLink from "@/components/nav/NavigationLink";
import { useTranslations } from "next-intl";

export default function Links() {
  const t = useTranslations("Links");

  return (
    <div className="flex justify-evenly items-center gap-2 w-full px-6 py-4 bg-brandPrimaryBlue rounded-t-xl rounded-b-[2rem] border-t-2 border-brandDark shadow-md">
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
          { label: t("recruitmentSchedule"), href: "/terminarz-rekrutacji" },
        ]}
        submenuWidth={10}
      >
        {t("recruitment")}
      </NavigationLink>
      <NavigationLink href="/instytut">{t("institute")}</NavigationLink>
      <NavigationLink href="/wspolpraca">{t("collaboration")}</NavigationLink>
      <NavigationLink href="/kontakt">{t("contact")}</NavigationLink>
    </div>
  );
}
