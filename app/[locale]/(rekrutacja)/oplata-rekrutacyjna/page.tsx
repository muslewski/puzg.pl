import Card from "@/components/card/Card";
import { CardImage } from "@/components/card/CardImage";
import MainTitle from "@/components/card/MainTitle";
import SimpleText from "@/components/card/SimpleText";
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
    namespace: "OplataRekrutacyjnaPage",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function OplataRekrutacyjnaPage({ params: { locale } }: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("OplataRekrutacyjnaPage");

  return (
    <MainWrapper topTitle={t("title")}>
      <Card border="bl">
        <SimpleText>
          Wyciąg z Rozporządzenia Ministra Nauki i Szkolnictwa Wyższego z dnia
          27 września 2018 r. w sprawie studiów (t. j. Dz.U. z 2023 r. poz.
          2787), w części dotyczącej wysokości opłaty za przeprowadzenie
          rekrutacji na I rok studiów od roku akademickiego 2024/2025
        </SimpleText>
        <MainTitle>Rozdział 10</MainTitle>
        <SimpleText>
          <b>Wysokość opłaty za przeprowadzenie rekrutacji:</b>
          <br></br>§ 38. Opłata za przeprowadzenie rekrutacji na studia wynosi
          85 zł, z tym że:
        </SimpleText>
        <ul className="-mt-4">
          <li>
            1) w przypadku konieczności sprawdzenia uzdolnień artystycznych -
            opłata wynosi 150 zł;
          </li>{" "}
          <li>
            2) w przypadku przeprowadzania egzaminu wstępnego, w tym sprawdzianu
            sprawności fizycznej - opłata wynosi 100 zł.
          </li>
        </ul>

        <SimpleText>
          <b>Dane do przelewu:</b>
          <br></br>
          konto PKO BP<br></br> numer rachunku bankowego: 75 1020 1462 0000 7902
          0441 6327
        </SimpleText>

        <CardImage
          image="/images/oplata-rekrutacyjna/online-payment.jpg"
          imageAlt="a"
          imageOrientation="full"
        />
      </Card>
    </MainWrapper>
  );
}
