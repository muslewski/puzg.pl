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
    namespace: "KomunikatyPage",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function KomunikatyPage({ params: { locale } }: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("KomunikatyPage");

  return (
    <MainWrapper topTitle={t("title")}>
      <Card border="bl">
        <MainTitle>Komunikat 1 - Kalendarz wyborczy</MainTitle>
        <SimpleText>
          Zapoznaj się z kalendarzem wyborczym, który zawiera kluczowe daty i
          terminy związane z nadchodzącymi wyborami.
        </SimpleText>
        <CardHorizontal>
          <FancyButton
            small
            text="Komunikat"
            outsideLink="/files/wybory/komunikaty/komunikat-1_UKW_kalendarz-wyborczy.docx"
            icon="/images/icons/circle.svg"
            iconAlt="Circle"
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
        </CardHorizontal>
      </Card>
      <Card border="tl">
        <MainTitle>Komunikat 2 - Wybory do Senatu</MainTitle>
        <SimpleText>
          Znajdziesz tutaj dokumenty dotyczące zgłoszonych kandydatów oraz skład
          nowo wybranego Senatu.
        </SimpleText>
        <CardHorizontal>
          <FancyButton
            small
            text="Komunikat"
            outsideLink="/files/wybory/komunikaty/komunikat-2_UKW.docx"
            icon="/images/icons/circle.svg"
            iconAlt="Circle"
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
          <FancyButton
            small
            text="Zgłoszeni kandydaci do Senatu"
            outsideLink="/files/wybory/komunikaty/komunikat-2_Zgloszeni-kandydaci-do-Senatu.pdf"
            icon="/images/icons/circle.svg"
            iconAlt="Circle"
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
          <FancyButton
            small
            text="Skład Senatu"
            outsideLink="/files/wybory/komunikaty/komunikat-2_sklad-Senatu.pdf"
            icon="/images/icons/circle.svg"
            iconAlt="Circle"
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
        </CardHorizontal>
      </Card>
      <Card border="bl">
        <MainTitle>Komunikat 3 - Wybory do Kolegium Elektorów</MainTitle>
        <SimpleText>
          Dokumenty dotyczące wyborów do Kolegium Elektorów, w tym lista
          zgłoszonych kandydatów oraz skład nowo wybranego Kolegium.
        </SimpleText>
        <CardHorizontal>
          <FancyButton
            small
            text="Komunikat"
            outsideLink="/files/wybory/komunikaty/komunikat-3_UKW.docx"
            icon="/images/icons/circle.svg"
            iconAlt="Circle"
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
          <FancyButton
            small
            text="Zgłoszeni kandydaci do Kolegium Elektorów"
            outsideLink="/files/wybory/komunikaty/komunikat-3_Zgloszeni-kandydaci-do-Kolegium-Elektorow.pdf"
            icon="/images/icons/circle.svg"
            iconAlt="Circle"
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
          <FancyButton
            small
            text="Skład Kolegium Elektorów"
            outsideLink="/files/wybory/komunikaty/komunikat-3_sklad-Kolegium-Elektorow.pdf"
            icon="/images/icons/circle.svg"
            iconAlt="Circle"
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
        </CardHorizontal>
      </Card>
      <Card border="tl">
        <MainTitle>Komunikat 4 - Wybory na Rektora</MainTitle>
        <SimpleText>
          Zapoznaj się z listą kandydatów oraz wynikami wyborów na stanowisko
          Rektora uczelni.
        </SimpleText>
        <CardHorizontal>
          <FancyButton
            small
            text="Lista kandydatów"
            outsideLink="/files/wybory/komunikaty/lista-kandydatow-na-Rektora.docx"
            icon="/images/icons/circle.svg"
            iconAlt="Circle"
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
          <FancyButton
            small
            text="Wyniki wyborów"
            outsideLink="/files/wybory/komunikaty/wyniki-wyborow_Rektor.docx"
            icon="/images/icons/circle.svg"
            iconAlt="Circle"
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
        </CardHorizontal>
      </Card>
    </MainWrapper>
  );
}
