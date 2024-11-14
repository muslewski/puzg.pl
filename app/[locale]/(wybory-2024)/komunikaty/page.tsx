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
    namespace: "KomunikatyPage",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function KomunikatyPage({ params: { locale } }: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("KomunikatyPage");

  return (
    <MainWrapper topTitle={t("title")}>
      <Card border="bl">
        <MainTitle>{t("mainTitle")}</MainTitle>
        <SimpleText>{t("simpleText")}</SimpleText>
        <CardHorizontal>
          <FancyButton
            small
            text={t("button-1")}
            outsideLink="/files/wybory/komunikaty/komunikat-1_UKW_kalendarz-wyborczy.docx"
            circle
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
        </CardHorizontal>
      </Card>
      <Card border="tl">
        <MainTitle>{t("mainTitle-2")}</MainTitle>
        <SimpleText>{t("simpleText-2")}</SimpleText>
        <CardHorizontal>
          <FancyButton
            small
            text={t("button-2")}
            outsideLink="/files/wybory/komunikaty/komunikat-2_UKW.docx"
            circle
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
          <FancyButton
            small
            text={t("button-3")}
            outsideLink="/files/wybory/komunikaty/komunikat-2_Zgloszeni-kandydaci-do-Senatu.pdf"
            circle
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
          <FancyButton
            small
            text={t("button-4")}
            outsideLink="/files/wybory/komunikaty/komunikat-2_sklad-Senatu.pdf"
            circle
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
        </CardHorizontal>
      </Card>
      <Card border="bl">
        <MainTitle>{t("mainTitle-3")}</MainTitle>
        <SimpleText>{t("simpleText-3")}</SimpleText>
        <CardHorizontal>
          <FancyButton
            small
            text={t("button-5")}
            outsideLink="/files/wybory/komunikaty/komunikat-3_UKW.docx"
            circle
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
          <FancyButton
            small
            text={t("button-6")}
            outsideLink="/files/wybory/komunikaty/komunikat-3_Zgloszeni-kandydaci-do-Kolegium-Elektorow.pdf"
            circle
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
          <FancyButton
            small
            text={t("button-7")}
            outsideLink="/files/wybory/komunikaty/komunikat-3_sklad-Kolegium-Elektorow.pdf"
            circle
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
        </CardHorizontal>
      </Card>
      <Card border="tl">
        <MainTitle>{t("mainTitle-4")}</MainTitle>
        <SimpleText>{t("simpleText-4")}</SimpleText>
        <CardHorizontal>
          <FancyButton
            small
            text={t("button-8")}
            outsideLink="/files/wybory/komunikaty/lista-kandydatow-na-Rektora.docx"
            circle
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
          <FancyButton
            small
            text={t("button-9")}
            outsideLink="/files/wybory/komunikaty/wyniki-wyborow_Rektor.docx"
            circle
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
        </CardHorizontal>
      </Card>
    </MainWrapper>
  );
}
