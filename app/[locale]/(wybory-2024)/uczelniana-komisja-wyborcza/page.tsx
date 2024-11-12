import Card from "@/components/card/Card";
import MainTitle from "@/components/card/MainTitle";
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
    namespace: "UczelnianaKomisjaWyborczaPage",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function PlanZajecPage({ params: { locale } }: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("UczelnianaKomisjaWyborczaPage");

  return (
    <MainWrapper topTitle={t("title")}>
      <Card border="bl">
        <MainTitle>Skład Uczelnianej Komisji Wyborczej</MainTitle>
        <ol>
          <li>Jacek Nalaskowski - przewodniczący</li>
          <li>Andrzej Neubauer</li>
          <li>Andrzej Michalak</li>
        </ol>
      </Card>
      <Card border="tr">
        <MainTitle>Siedziba Uczelnianej Komisji Wyborczej</MainTitle>
        <ul>
          <li>Biuro Rektora</li>
          <li>ul. Czarnieckiego 5/7</li>
          <li>86-300 Grudziądz</li>
        </ul>
      </Card>
    </MainWrapper>
  );
}
