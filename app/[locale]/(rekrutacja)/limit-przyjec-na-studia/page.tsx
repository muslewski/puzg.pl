import Card from "@/components/card/Card";
import { CardImage } from "@/components/card/CardImage";
import CardList from "@/components/card/CardList";
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
    namespace: "LimitPrzyjecNaStudiaPage",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function LimitPrzyjecNaStudiaPage({
  params: { locale },
}: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("LimitPrzyjecNaStudiaPage");

  return (
    <MainWrapper topTitle={t("title")}>
      <Card border="bl">
        <MainTitle>{t("mainTitle")}</MainTitle>

        <SimpleText>{t("simpleText")}</SimpleText>
        <CardList
          iconsSize="h-8 w-8 sm:h-10 sm:w-10"
          simpleList={[
            {
              richText: <p className="h3fakeLess">{t("richText-1")}</p>,
              icon: "/images/icons/training.png",
              iconAlt: t("iconAlt-1"),
            },
            {
              richText: <p className="h3fakeLess">{t("richText-2")}</p>,
              icon: "/images/icons/sunset.png",
              iconAlt: t("iconAlt-2"),
            },
          ]}
        />

        <SimpleText>{t("simpleText-2")}</SimpleText>

        <CardImage
          image="/images/limit-przyjec-na-studia/students-happy.jpg"
          imageAlt={t("cardImageAlt")}
          imageOrientation="full"
        />
      </Card>
    </MainWrapper>
  );
}
