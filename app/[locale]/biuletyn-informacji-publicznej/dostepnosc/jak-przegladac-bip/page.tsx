import Card from "@/components/card/Card";
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
    namespace: "BipPage",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function BipJakPrzegladacPage({ params: { locale } }: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("BipPage");

  return (
    <MainWrapper topTitle="Jak przeglądać BIP">
      <Card border="bl">
        <MainTitle>Instrukcja obsługi BIP</MainTitle>
        <SimpleText>
          W naszym Biuletynie Informacji Publicznej (BIP) publikujemy informacje
          dotyczące prowadzonej przez naszą organizację działalności pożytku
          publicznego, w tym tej finansowanej ze środków publicznych.
        </SimpleText>

        <SimpleText>
          Jeśli nie znajdziesz poszukiwanej informacji w BIP, skontaktuj się z
          nami, korzystając z adresu mailowego lub numeru telefonu podanego na
          stronie.
        </SimpleText>
        <FancyButton
          text="Przejdź do formularza kontaktowego"
          link="/kontakt"
          icon="/images/icons/MailWhite.svg"
          iconAlt="Mail Icon"
        />
      </Card>
    </MainWrapper>
  );
}
