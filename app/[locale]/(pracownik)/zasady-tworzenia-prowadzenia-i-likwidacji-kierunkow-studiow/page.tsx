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
        <SimpleText>{t("simpleText")}</SimpleText>
        <FancyButton
          text={t("fancyButton")}
          outsideLink="/files/zasady/Z.28.2024.2025-tworzenie-modyfikacje-i-likwidacja-kierunkow-studiow.pdf"
          circle
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
            circle
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
          <FancyButton
            small
            text="Wykaz nauczycieli akademickich proponowanych do realizacji zajęć na kierunku studiów"
            customClass="max-w-2xl"
            outsideLink="/files/zasady/Wykaz-nauczycieli-akademickich-proponowanych-do-realizacji-zajec-na-kierunku-studiow.docx"
            circle
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
          <FancyButton
            small
            text="Informacje o kompetencjach i doświadczeniu nauczycieli akademickich pozwalających na prawidłową realizację zajęć w ramach programu studiów"
            outsideLink="/files/zasady/Informacje-o-kompetencjach-i-doswiadczeniu-nauczycieli-akademickich-pozwalajacych-na-prawidlowa-realizacje-zajec-w-ramach-programu-studiow.docx"
            circle
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
            customClass="max-w-4xl"
          />
          <FancyButton
            small
            text="Deklaracja nauczycieli akademickich"
            outsideLink="/files/zasady/Deklaracja-nauczycieli-akademickich.docx"
            circle
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
          <FancyButton
            small
            text="Deklaracja osoby prowadzącej zajęia ze studentami"
            outsideLink="/files/zasady/Deklaracja-osoby-prowadzacej-zajecia-ze-studentami.docx"
            circle
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
          <FancyButton
            small
            text="Zakładane efekty uczenia się dla kierunku"
            outsideLink="/files/zasady/Zakladane-efekty-uczenia-sie-dla-kierunku.docx"
            circle
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
          <FancyButton
            small
            text="Matryca efektów uczenia się dla kierunku"
            outsideLink="/files/zasady/Matryca-efektow-uczenia-sie-dla-kierunku.docx"
            circle
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
          <FancyButton
            small
            text="Karta przedmiotu / sylabus"
            outsideLink="/files/zasady/Karta-przedmiotu-sylabus.docx"
            circle
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
          <FancyButton
            small
            text="Wniosek dotyczący modyfikacji kierunku"
            outsideLink="/files/zasady/Wniosek-dotyczacy-modyfikacji-kierunku.docx"
            circle
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
          <FancyButton
            small
            text="Wniosek dotyczący utworzenia specjalności"
            outsideLink="/files/zasady/Wniosek-dotyczacy-utworzenia-specjalnosci.docx"
            circle
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
          <FancyButton
            small
            text="Wniosek o likwidację kierunku / specjalności"
            outsideLink="/files/zasady/Wniosek-o-likwidacje-kierunku-specjalnosci.docx"
            circle
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
        </CardHorizontal>
      </Card>
    </MainWrapper>
  );
}
