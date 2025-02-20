import Card from "@/components/card/Card";
import { CardImage } from "@/components/card/CardImage";
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
  const t = await getTranslations({ locale, namespace: "PlanZajecPage" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function PlanZajecPage({ params: { locale } }: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("PlanZajecPage");

  return (
    <MainWrapper topTitle={t("title")}>
      <Card
        grayCard
        grayCardPosition="left"
        leftProps={[
          <CardImage
            key={0}
            image="/images/plan-zajec/plan.jpg"
            imageAlt={t("cardImageAlt")}
            imageOrientation="landscape"
          />,
        ]}
      >
        <MainTitle>{t("mainTitle")}</MainTitle>
        <SimpleText>{t("simpleText")}</SimpleText>
        <FancyButton
          text={t("buttonText")}
          outsideLink="/files/plan/plan_tygodniowy_sem.-zimowy.xlsx"
          circle
        />
      </Card>
    </MainWrapper>
  );
}
