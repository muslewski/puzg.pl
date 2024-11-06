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
        <MainTitle>Akty prawne</MainTitle>
        <SimpleText>
          Akt prawny dotyczący zasad zatrudniania pracowników na stanowiskach
          dydaktycznych oraz badawczo - dydaktycznych na Publicznej Uczelni
          Zawodowej w Grudziądzu
        </SimpleText>
        <FancyButton
          small
          outsideLink="/files/Z.19.2024.2025.pdf"
          text="Z.19.2024.2025 (przekierowanie do zarządzenia w PDF)"
          icon="/images/icons/circle.svg"
          iconAlt="Circle"
        />
      </Card>
      <Card border="tr">
        <MainTitle>Dokumenty do pobrania</MainTitle>
        <SimpleText>
          Pobierz kluczowe dokumenty związane z zatrudnieniem na stanowiskach
          dydaktycznych oraz badawczo-dydaktycznych w Publicznej Uczelni
          Zawodowej w Grudziądzu.
        </SimpleText>
        <CardHorizontal>
          <FancyButton
            small
            text="Z.19.2024.2025_zał.2"
            outsideLink="/files/Z.19.2024.2025_zal.2.docx"
            icon="/images/icons/circle.svg"
            iconAlt="Circle"
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
          <FancyButton
            small
            text="Z.19.2024.2025_zał.3"
            outsideLink="/files/Z.19.2024.2025_zal.3.docx"
            icon="/images/icons/circle.svg"
            iconAlt="Circle"
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
          <FancyButton
            small
            text="Z.19.2024.2025_zał.4"
            outsideLink="/files/Z.19.2024.2025_zal.4.docx"
            icon="/images/icons/circle.svg"
            iconAlt="Circle"
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
          <FancyButton
            small
            text="Z.19.2024.2025_zał.5"
            outsideLink="/files/Z.19.2024.2025_zal.5.docx"
            icon="/images/icons/circle.svg"
            iconAlt="Circle"
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
          <FancyButton
            small
            text="Z.19.2024.2025_zał.8"
            outsideLink="/files/Z.19.2024.2025_zal.8.docx"
            icon="/images/icons/circle.svg"
            iconAlt="Circle"
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
          <FancyButton
            small
            text="Z.19.2024.2025_zał.10"
            outsideLink="/files/Z.19.2024.2025_zal.10.docx"
            icon="/images/icons/circle.svg"
            iconAlt="Circle"
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
        </CardHorizontal>
      </Card>
    </MainWrapper>
  );
}
