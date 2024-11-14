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
    namespace: "DokumentyDoPobraniaPage",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function DokumentyDoPobraniaPage({ params: { locale } }: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("DokumentyDoPobraniaPage");

  return (
    <MainWrapper topTitle={t("title")}>
      <Card border="tr">
        <MainTitle>{t("mainTitle")}</MainTitle>
        <SimpleText>{t("simpleText")}</SimpleText>
        <CardHorizontal>
          <FancyButton
            small
            text={t("button-1")}
            outsideLink="/files/wybory/dokumenty-do-pobrania/ZGLOSZENIE-NA-CZLONKA-KOLEGIUM-ELEKTOROW.docx"
            circle
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
          <FancyButton
            small
            text={t("button-2")}
            customClass="max-w-2xl"
            outsideLink="/files/wybory/dokumenty-do-pobrania/karty-do-glosowania.pdf"
            circle
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
          <FancyButton
            small
            text={t("button-3")}
            outsideLink="/files/wybory/dokumenty-do-pobrania/Zgoda-na-kandydowanie-i-oswiadczenie-kandydata.docx"
            circle
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
          <FancyButton
            small
            text={t("button-4")}
            outsideLink="/files/wybory/dokumenty-do-pobrania/oswiadczenie-lustracyjne.docx"
            circle
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
          <FancyButton
            small
            text={t("button-5")}
            outsideLink="/files/wybory/dokumenty-do-pobrania/klauzula-informacyjna-PUZ-do-wyborow.pdf"
            circle
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
            customClass="max-w-5xl"
          />
          <FancyButton
            small
            text={t("button-6")}
            outsideLink="/files/wybory/dokumenty-do-pobrania/zgloszenie-kandydata-do-Senatu.doc"
            circle
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
        </CardHorizontal>
      </Card>
    </MainWrapper>
  );
}
