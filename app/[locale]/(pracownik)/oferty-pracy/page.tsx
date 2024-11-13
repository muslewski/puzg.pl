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
  const t = await getTranslations({ locale, namespace: "OfertyPracyPage" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function OfertyPracyPage({ params: { locale } }: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("OfertyPracyPage");

  return (
    <MainWrapper topTitle={t("title")}>
      <Card border="bl">
        <MainTitle>{t("mainTitle")}</MainTitle>
        <SimpleText>{t("simpleText")}</SimpleText>
        <FancyButton
          small
          circle
          outsideLink="/files/19-2024-2025/Z.19.2024.2025.pdf"
          text={t("fancyButton")}
        />
      </Card>
      <Card border="tr">
        <MainTitle>{t("mainTitle-2")}</MainTitle>
        <SimpleText>{t("simpleText-2")}</SimpleText>
        <CardHorizontal>
          <FancyButton
            small
            text={t("fancyButton-2")}
            outsideLink="/files/19-2024-2025/Z.19.2024.2025_zal.2.docx"
            circle
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
          <FancyButton
            small
            text={t("fancyButton-3")}
            outsideLink="/files/19-2024-2025/Z.19.2024.2025_zal.3.docx"
            circle
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
          <FancyButton
            small
            text={t("fancyButton-4")}
            outsideLink="/files/19-2024-2025/Z.19.2024.2025_zal.4.docx"
            circle
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
          <FancyButton
            small
            text={t("fancyButton-5")}
            outsideLink="/files/19-2024-2025/Z.19.2024.2025_zal.5.docx"
            circle
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
          <FancyButton
            small
            text={t("fancyButton-6")}
            outsideLink="/files/19-2024-2025/Z.19.2024.2025_zal.8.docx"
            circle
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
          <FancyButton
            small
            text={t("fancyButton-7")}
            outsideLink="/files/19-2024-2025/Z.19.2024.2025_zal.10.docx"
            circle
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
        </CardHorizontal>
      </Card>
    </MainWrapper>
  );
}
