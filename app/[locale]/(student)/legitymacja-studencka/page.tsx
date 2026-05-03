import { use } from "react";
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
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;

  const {
    locale
  } = params;

  const t = await getTranslations({
    locale,
    namespace: "LegitymacjaStudenckaPage",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function PlanZajecPage(props: Props) {
  const params = use(props.params);

  const {
    locale
  } = params;

  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("LegitymacjaStudenckaPage");

  return (
    <MainWrapper
      topTitle={t("title")}
      eyebrow={t("hero.eyebrow")}
      description={t("description")}
      heroVariant="image"
      heroImage={t("hero.image")}
      heroImageAlt=""
    >
      <Card border="bl">
        <MainTitle>{t("mainTitle")}</MainTitle>
        <SimpleText>{t("simpleText")}</SimpleText>
        <CardHorizontal>
          <FancyButton
            small
            text="Z.52.2024.2025_zał.1"
            outsideLink="/files/legitymacja-studencka/Z.52.2024.2025_zał.1.docx"
            circle
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
          <FancyButton
            small
            text="Z.52.2024.2025_zał.2"
            outsideLink="/files/legitymacja-studencka/Z.52.2024.2025_zał.2.docx"
            circle
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
          <FancyButton
            small
            text="Z.52.2024.2025"
            outsideLink="/files/legitymacja-studencka/Z.52.2024.2025.pdf"
            circle
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
        </CardHorizontal>
      </Card>
    </MainWrapper>
  );
}
