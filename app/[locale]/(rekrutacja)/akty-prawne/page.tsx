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
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale },
}: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "AktyPrawnePage" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function AktyPrawnePage({ params: { locale } }: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("AktyPrawnePage");

  return (
    <MainWrapper topTitle={t("title")}>
      <Card border="bl">
        <MainTitle>
          Akty prawne dotyczące procesu rekrutacji w Publicznej Uczelni
          Zawodowej w Grudziądzu:
        </MainTitle>

        <SimpleText>
          Przegląd aktów prawnych związanych z rekrutacją na rok akademicki
          2024/2025 w Publicznej Uczelni Zawodowej w Grudziądzu. Kliknij
          poniżej, aby zobaczyć wybrane dokumenty.
        </SimpleText>

        <CardHorizontal>
          <FancyButton
            small
            text="Z.11.2024.2025"
            outsideLink="/files/akty-prawne/Z.11.2024.2025.pdf"
            icon="/images/icons/circle.svg"
            iconAlt="Circle"
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
          <FancyButton
            small
            text="Z.12.2024.2025"
            outsideLink="/files/akty-prawne/Z.12.2024.2025.pdf"
            icon="/images/icons/circle.svg"
            iconAlt="Circle"
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
          <FancyButton
            small
            text="Z.13.2024.2025"
            outsideLink="/files/akty-prawne/Z.13.2024.2025.pdf"
            icon="/images/icons/circle.svg"
            iconAlt="Circle"
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
          <FancyButton
            small
            text="Z.14.2024.2025"
            outsideLink="/files/akty-prawne/Z.14.2024.2025.pdf"
            icon="/images/icons/circle.svg"
            iconAlt="Circle"
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
          <FancyButton
            small
            text="Z.15.2024.2025"
            outsideLink="/files/akty-prawne/Z.15.2024.2025.pdf"
            icon="/images/icons/circle.svg"
            iconAlt="Circle"
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
        </CardHorizontal>

        <CardImage
          image="/images/akty-prawne/podpis.png"
          imageAlt="a"
          imageOrientation="full"
        />
      </Card>
    </MainWrapper>
  );
}
