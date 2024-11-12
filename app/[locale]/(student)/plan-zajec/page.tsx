import Card from "@/components/card/Card";
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
  const t = await getTranslations({ locale, namespace: "PlanZajecPage" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function PlanZajecPage({ params: { locale } }: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("PlanZajecPage");

  return (
    <MainWrapper topTitle={t("title")}>
      <Card>
        <FancyButton
          text="Pobierz"
          outsideLink="/files/plan_tygodniowy_sem.-zimowy.xlsx"
          icon="/images/icons/circle.svg"
          iconAlt="Circle"
        />
      </Card>
    </MainWrapper>
  );
}
