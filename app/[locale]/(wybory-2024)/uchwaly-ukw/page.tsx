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
  const t = await getTranslations({
    locale,
    namespace: "UchwalyUKWPage",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function UchwalyUKWPage({ params: { locale } }: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("UchwalyUKWPage");

  return (
    <MainWrapper topTitle={t("title")}>
      <Card border="bl">
        <MainTitle>Uchwały i zarządzenia wyborcze</MainTitle>

        <SimpleText>
          Przedstawiamy listę zarządzeń związanych z procesem wyborczym na rok
          2024, które regulują kluczowe aspekty wyborów w naszej uczelni.
        </SimpleText>

        <CardHorizontal>
          <FancyButton
            small
            text="Zarządzenie 1/UKW/2024"
            outsideLink="/files/wybory/uchwaly-ukw/UKW.1.2024.pdf"
            icon="/images/icons/circle.svg"
            iconAlt="Circle"
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
          <FancyButton
            small
            text="Zarządzenie 2/UKW/2024"
            outsideLink="/files/wybory/uchwaly-ukw/UKW.2.2024.pdf"
            icon="/images/icons/circle.svg"
            iconAlt="Circle"
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
          <FancyButton
            small
            text="Zarządzenie 3/UKW/2024"
            outsideLink="/files/wybory/uchwaly-ukw/UKW.3.2024.pdf"
            icon="/images/icons/circle.svg"
            iconAlt="Circle"
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
          <FancyButton
            small
            text="Zarządzenie 4/UKW/2024"
            outsideLink="/files/wybory/uchwaly-ukw/UKW.4.2024.pdf"
            icon="/images/icons/circle.svg"
            iconAlt="Circle"
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
          <FancyButton
            small
            text="Zarządzenie 5/UKW/2024"
            outsideLink="/files/wybory/uchwaly-ukw/UKW.5.2024.pdf"
            icon="/images/icons/circle.svg"
            iconAlt="Circle"
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
        </CardHorizontal>

        <CardImage
          image="/images/uchwaly-ukw/documents.jpg"
          imageAlt="a"
          imageOrientation="full"
        />
      </Card>
    </MainWrapper>
  );
}
