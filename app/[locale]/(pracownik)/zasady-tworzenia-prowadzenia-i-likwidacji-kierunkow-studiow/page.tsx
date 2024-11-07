import Card from "@/components/card/Card";
import CardHorizontal from "@/components/card/CardHorizontal";
import MainTitle from "@/components/card/MainTitle";
import SimpleText from "@/components/card/SimpleText";
import FancyButton from "@/components/FancyButton";
import MainWrapper from "@/components/MainWrapper";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale },
}: Props): Promise<Metadata> {
  const t = await getTranslations({
    locale,
    namespace: "ZasadyTworzeniaKierunkowStudiowPage",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function ZasadyTworzeniaKierunkowStudiowPage({
  params: { locale },
}: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("ZasadyTworzeniaKierunkowStudiowPage");

  return (
    <MainWrapper topTitle={t("title")}>
      <Card border="bl">
        <SimpleText>
          Zarządzenie nr Z.28.2024.2025 Rektora Publicznej Uczelni Zawodowej w
          Grudziądzu z dnia 6 sierpnia 2024 r. w sprawie ustalenia zasad
          tworzenia, prowadzenia i likwidacji kierunków studiów
        </SimpleText>
        <FancyButton
          text="Kliknij tutaj aby wyświetlić"
          outsideLink="/files/zasady/Z.28.2024.2025-tworzenie-modyfikacje-i-likwidacja-kierunkow-studiow.pdf"
          icon="/images/icons/circle.svg"
          iconAlt="Circle"
          customGradient="bg-gradient-to-br from-brandBrightBlue to-brandNavyBlue"
        />
      </Card>

      <Card border="tr">
        <MainTitle>Załączniki do pobrania</MainTitle>
        <SimpleText>
          Znajdź wszystkie potrzebne dokumenty i załączniki związane z
          tworzeniem i zarządzaniem kierunkami studiów.
        </SimpleText>
        <CardHorizontal>
          <FancyButton
            small
            text="Wniosek o utworzenie studiów"
            outsideLink="/files/zasady/Wniosek-o-utworzenie-studiow.docx"
            icon="/images/icons/circle.svg"
            iconAlt="Circle"
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
          <FancyButton
            small
            text="Wykaz nauczycieli akademickich proponowanych do realizacji zajęć na kierunku studiów"
            customClass="max-w-2xl"
            outsideLink="/files/zasady/Wykaz-nauczycieli-akademickich-proponowanych-do-realizacji-zajec-na-kierunku-studiow.docx"
            icon="/images/icons/circle.svg"
            iconAlt="Circle"
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
          <FancyButton
            small
            text="Informacje o kompetencjach i doświadczeniu nauczycieli akademickich pozwalających na prawidłową realizację zajęć w ramach programu studiów"
            outsideLink="/files/zasady/Informacje-o-kompetencjach-i-doswiadczeniu-nauczycieli-akademickich-pozwalajacych-na-prawidlowa-realizacje-zajec-w-ramach-programu-studiow.docx"
            icon="/images/icons/circle.svg"
            iconAlt="Circle"
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
            customClass="max-w-4xl"
          />
          <FancyButton
            small
            text="Deklaracja nauczycieli akademickich"
            outsideLink="/files/zasady/Deklaracja-nauczycieli-akademickich.docx"
            icon="/images/icons/circle.svg"
            iconAlt="Circle"
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
          <FancyButton
            small
            text="Deklaracja osoby prowadzącej zajęia ze studentami"
            outsideLink="/files/zasady/Deklaracja-osoby-prowadzacej-zajecia-ze-studentami.docx"
            icon="/images/icons/circle.svg"
            iconAlt="Circle"
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
          <FancyButton
            small
            text="Zakładane efekty uczenia się dla kierunku"
            outsideLink="/files/zasady/Zakladane-efekty-uczenia-sie-dla-kierunku.docx"
            icon="/images/icons/circle.svg"
            iconAlt="Circle"
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
          <FancyButton
            small
            text="Matryca efektów uczenia się dla kierunku"
            outsideLink="/files/zasady/Matryca-efektow-uczenia-sie-dla-kierunku.docx"
            icon="/images/icons/circle.svg"
            iconAlt="Circle"
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
          <FancyButton
            small
            text="Karta przedmiotu / sylabus"
            outsideLink="/files/zasady/Karta-przedmiotu-sylabus.docx"
            icon="/images/icons/circle.svg"
            iconAlt="Circle"
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
          <FancyButton
            small
            text="Wniosek dotyczący modyfikacji kierunku"
            outsideLink="/files/zasady/Wniosek-dotyczacy-modyfikacji-kierunku.docx"
            icon="/images/icons/circle.svg"
            iconAlt="Circle"
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
          <FancyButton
            small
            text="Wniosek dotyczący utworzenia specjalności"
            outsideLink="/files/zasady/Wniosek-dotyczacy-utworzenia-specjalnosci.docx"
            icon="/images/icons/circle.svg"
            iconAlt="Circle"
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
          <FancyButton
            small
            text="Wniosek o likwidację kierunku / specjalności"
            outsideLink="/files/zasady/Wniosek-o-likwidacje-kierunku-specjalnosci.docx"
            icon="/images/icons/circle.svg"
            iconAlt="Circle"
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
        </CardHorizontal>
      </Card>
    </MainWrapper>
  );
}
