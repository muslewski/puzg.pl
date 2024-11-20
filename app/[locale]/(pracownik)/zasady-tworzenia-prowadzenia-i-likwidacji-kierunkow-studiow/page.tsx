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
          outsideLink="/files/zasady/Z.53.2024.2025.pdf"
          circle
          customGradient="bg-gradient-to-br from-brandBrightBlue to-brandNavyBlue"
        />
      </Card>

      <Card border="tr">
        <MainTitle>{t("mainTitle")}</MainTitle>
        <SimpleText>{t("simpleText-2")}</SimpleText>
        <CardHorizontal>
          <FancyButton
            small
            text={t("button-2")}
            outsideLink="/files/zasady/Wniosek dotyczący utworzenia specjalności.docx"
            circle
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
          <FancyButton
            small
            text={t("button-3")}
            customClass="max-w-2xl"
            outsideLink="/files/zasady/Wykaz nauczycieli akademickich proponowanych do realizacji zajęć na kierunku studiów.docx"
            circle
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
          <FancyButton
            small
            text={t("button-4")}
            outsideLink="/files/zasady/Informacje-o-kompetencjach-i-doswiadczeniu-nauczycieli-akademickich-pozwalajacych-na-prawidlowa-realizacje-zajec-w-ramach-programu-studiow.docx"
            circle
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
            customClass="max-w-4xl"
          />
          <FancyButton
            small
            text={t("button-5")}
            outsideLink="/files/zasady/Deklaracja nauczycieli akademickich.docx"
            circle
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
          <FancyButton
            small
            text={t("button-6")}
            outsideLink="/files/zasady/Deklaracja osoby prowadzącej zajęcia ze studentami.docx"
            circle
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
          <FancyButton
            small
            text={t("button-7")}
            outsideLink="/files/zasady/Zakładane efekty uczenia się dla kierunku.docx"
            circle
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
          <FancyButton
            small
            text={t("button-8")}
            outsideLink="/files/zasady/Matryca efektów uczenia się dla kierunku.docx"
            circle
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
          <FancyButton
            small
            text={t("button-9")}
            outsideLink="/files/zasady/Karta przedmiotusylabus.docx"
            circle
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
          <FancyButton
            small
            text={t("button-10")}
            outsideLink="/files/zasady/Wniosek dotyczący modyfikacji kierunku.docx"
            circle
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
          <FancyButton
            small
            text={t("button-11")}
            outsideLink="/files/zasady/Wniosek dotyczący utworzenia specjalności.docx"
            circle
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
          <FancyButton
            small
            text={t("button-12")}
            outsideLink="/files/zasady/Wniosek o likwidację kierunkuspecjalności.docx"
            circle
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
        </CardHorizontal>
      </Card>
    </MainWrapper>
  );
}
