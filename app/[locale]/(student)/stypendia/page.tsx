import Card from "@/components/card/Card";
import CardHorizontal from "@/components/card/CardHorizontal";
import { CardImage } from "@/components/card/CardImage";
import MainTitle from "@/components/card/MainTitle";
import SimpleText from "@/components/card/SimpleText";
import FancyButton from "@/components/FancyButton";
import MainWrapper from "@/components/MainWrapper";
import RichText from "@/components/RichText";
import SubtleHr from "@/components/SubtleHr";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale },
}: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "StypendiaPage" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function PlanZajecPage({ params: { locale } }: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("StypendiaPage");

  return (
    <MainWrapper topTitle={t("title")}>
      <Card border="bl">
        <MainTitle>{t("mainTitle-1")}</MainTitle>
        <RichText gap="1.75rem">
          {(tags) => t.rich("richText-1", tags)}
        </RichText>
        <SubtleHr />
        <MainTitle>{t("mainTitle-2")}</MainTitle>
        <RichText gap="1.75rem">
          {(tags) => t.rich("richText-2", tags)}
        </RichText>
      </Card>

      <Card border="tl">
        <MainTitle>{t("mainTitle-3")}</MainTitle>
        <SimpleText>{t("simpleText")}</SimpleText>
        <CardHorizontal>
          <FancyButton
            small
            text="Z.22.2024.2025_zał.15"
            outsideLink="/files/stypendia/Z.22.2024.2025_zal.15.docx"
            circle
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
          <FancyButton
            small
            text="Z.22.2024.2025_zał.7"
            outsideLink="/files/stypendia/Z.22.2024.2025_zal.7.docx"
            circle
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
          <FancyButton
            small
            text="Z.22.2024.2025_zał.2"
            outsideLink="/files/stypendia/Z.22.2024.2025_zal.2.docx"
            circle
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
          <FancyButton
            small
            text="Z.22.2024.2025_kompletne"
            outsideLink="/files/stypendia/Z.22.2024.2025_kompletne.pdf"
            circle
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
        </CardHorizontal>
      </Card>
    </MainWrapper>
  );
}
