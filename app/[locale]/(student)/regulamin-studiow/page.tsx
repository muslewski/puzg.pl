import Card from "@/components/card/Card";
import { CardImage } from "@/components/card/CardImage";
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
    namespace: "RegulaminStudiowPage",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function RegulaminStudiowPage({ params: { locale } }: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("RegulaminStudiowPage");

  return (
    <MainWrapper topTitle={t("title")}>
      <Card grayCard grayCardPosition="right">
        <SimpleText>{t("simpleText")}</SimpleText>
        <FancyButton
          text={t("button-1")}
          outsideLink="/files/regulamin-studiow-PUZG.pdf"
          circle
          customGradient="bg-gradient-to-br from-brandBrightBlue to-brandNavyBlue"
        />

        <br />

        <CardImage
          image="/images/regulamin-studiow/regulation.png"
          imageAlt={t("imageAlt-1")}
          imageOrientation="full"
        />
      </Card>
    </MainWrapper>
  );
}
