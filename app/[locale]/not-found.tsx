import Card from "@/components/card/Card";
import FancyButton from "@/components/FancyButton";
import MainWrapper from "@/components/MainWrapper";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale },
}: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "NotFoundPage" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function NotFound() {
  const t = useTranslations("NotFoundPage");

  return (
    <MainWrapper topTitle={t("title")}>
      <Card
        border="bl"
        mainTitle={t("h1")}
        simpleText={t("description")}
        customElement={
          <FancyButton
            text={t("buttonText")}
            icon="/images/home.png"
            iconAlt={t("buttonIconAlt")}
            link="/"
          />
        }
      />
    </MainWrapper>
  );
}
