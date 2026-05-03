import { use } from "react";
import Card from "@/components/card/Card";
import CardHorizontal from "@/components/card/CardHorizontal";
import { CardImage } from "@/components/card/CardImage";
import MainTitle from "@/components/card/MainTitle";
import SimpleText from "@/components/card/SimpleText";
import FancyButton from "@/components/FancyButton";
import MainWrapper from "@/components/MainWrapper";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;

  const {
    locale
  } = params;

  const t = await getTranslations({
    locale,
    namespace: "UchwalyUKWPage",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function UchwalyUKWPage(props: Props) {
  const params = use(props.params);

  const {
    locale
  } = params;

  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("UchwalyUKWPage");

  return (
    <MainWrapper topTitle={t("title")}>
      <Card border="bl">
        <MainTitle>{t("mainTitle")}</MainTitle>
        <SimpleText>{t("simpleText")}</SimpleText>

        <CardHorizontal>
          <FancyButton
            small
            text={t("button-1")}
            outsideLink="/files/wybory/uchwaly-ukw/UKW.1.2024.pdf"
            circle
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
          <FancyButton
            small
            text={t("button-2")}
            outsideLink="/files/wybory/uchwaly-ukw/UKW.2.2024.pdf"
            circle
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
          <FancyButton
            small
            text={t("button-3")}
            outsideLink="/files/wybory/uchwaly-ukw/UKW.3.2024.pdf"
            circle
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
          <FancyButton
            small
            text={t("button-4")}
            outsideLink="/files/wybory/uchwaly-ukw/UKW.4.2024.pdf"
            circle
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
          <FancyButton
            small
            text={t("button-5")}
            outsideLink="/files/wybory/uchwaly-ukw/UKW.5.2024.pdf"
            circle
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
        </CardHorizontal>

        <CardImage
          image="/images/uchwaly-ukw/documents.jpg"
          imageAlt={t("imageAlt")}
          imageOrientation="full"
        />
      </Card>
    </MainWrapper>
  );
}
