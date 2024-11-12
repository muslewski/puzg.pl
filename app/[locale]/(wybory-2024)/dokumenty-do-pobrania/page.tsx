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
    namespace: "DokumentyDoPobraniaPage",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function DokumentyDoPobraniaPage({ params: { locale } }: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("DokumentyDoPobraniaPage");

  return (
    <MainWrapper topTitle={t("title")}>
      <Card border="tr">
        <MainTitle>Dokumenty niezbędne w procesie wyborczym</MainTitle>
        <SimpleText>
          Skorzystaj z poniższych linków, aby pobrać dokumenty wymagane do
          zgłoszenia kandydatów oraz przeprowadzenia wyborów.
        </SimpleText>
        <CardHorizontal>
          <FancyButton
            small
            text="Zgłoszenie kandydatów do Kolegium Elektorów"
            outsideLink="/files/wybory/dokumenty-do-pobrania/ZGLOSZENIE-NA-CZLONKA-KOLEGIUM-ELEKTOROW.docx"
            icon="/images/icons/circle.svg"
            iconAlt="Circle"
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
          <FancyButton
            small
            text="Wzory kart do głosowania"
            customClass="max-w-2xl"
            outsideLink="/files/wybory/dokumenty-do-pobrania/karty-do-glosowania.pdf"
            icon="/images/icons/circle.svg"
            iconAlt="Circle"
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
          <FancyButton
            small
            text="Zgoda na kandydowanie i oświadczenie kandydata"
            outsideLink="/files/wybory/dokumenty-do-pobrania/Zgoda-na-kandydowanie-i-oswiadczenie-kandydata.docx"
            icon="/images/icons/circle.svg"
            iconAlt="Circle"
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
          <FancyButton
            small
            text="Oświadczenie lustracyjne"
            outsideLink="/files/wybory/dokumenty-do-pobrania/oswiadczenie-lustracyjne.docx"
            icon="/images/icons/circle.svg"
            iconAlt="Circle"
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
          <FancyButton
            small
            text="Klauzula informacyjna dotycząca przetwarzania danych osobowych Na potrzeby przeprowadzenia procesu wyborczego organów Publicznej uczelni zawodowej w Grudziądzu"
            outsideLink="/files/wybory/dokumenty-do-pobrania/klauzula-informacyjna-PUZ-do-wyborow.pdf"
            icon="/images/icons/circle.svg"
            iconAlt="Circle"
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
            customClass="max-w-5xl"
          />
          <FancyButton
            small
            text="Zgłoszenie kandydata do Senatu"
            outsideLink="/files/wybory/dokumenty-do-pobrania/zgloszenie-kandydata-do-Senatu.doc"
            icon="/images/icons/circle.svg"
            iconAlt="Circle"
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
        </CardHorizontal>
      </Card>
    </MainWrapper>
  );
}
