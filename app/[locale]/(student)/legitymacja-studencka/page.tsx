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
    namespace: "LegitymacjaStudenckaPage",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function PlanZajecPage({ params: { locale } }: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("LegitymacjaStudenckaPage");

  return (
    <MainWrapper topTitle={t("title")}>
      <Card border="bl">
        <MainTitle>załączniki do pobrania:</MainTitle>
        <SimpleText>
          W tej sekcji znajdziesz wszystkie niezbędne dokumenty związane z
          legitymacją studencką. Prosimy o pobranie i zapoznanie się z
          zawartością przed złożeniem wniosku o legitymację studencką.
        </SimpleText>
        <CardHorizontal>
          <FancyButton
            small
            text="Z.52.2024.2025_zał.1"
            outsideLink="/files/legitymacja-studencka/Z.52.2024.2025_zał.1.docx"
            icon="/images/icons/circle.svg"
            iconAlt="Circle"
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
          <FancyButton
            small
            text="Z.52.2024.2025_zał.2"
            outsideLink="/files/legitymacja-studencka/Z.52.2024.2025_zał.2.docx"
            icon="/images/icons/circle.svg"
            iconAlt="Circle"
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
          <FancyButton
            small
            text="Z.52.2024.2025"
            outsideLink="/files/legitymacja-studencka/Z.52.2024.2025.pdf"
            icon="/images/icons/circle.svg"
            iconAlt="Circle"
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
        </CardHorizontal>
      </Card>
    </MainWrapper>
  );
}
