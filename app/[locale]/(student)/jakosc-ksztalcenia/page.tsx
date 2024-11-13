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
    namespace: "JakoscKsztalceniaPage",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function JakoscKsztalceniaPage({ params: { locale } }: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("JakoscKsztalceniaPage");

  return (
    <MainWrapper topTitle={t("title")}>
      <Card grayCard grayCardPosition="right">
        <MainTitle>{t("mainTitle-1")}</MainTitle>
        <SimpleText>{t("simpleText-1")}</SimpleText>
      </Card>

      <Card border="tr">
        <MainTitle>{t("mainTitle-2")}</MainTitle>
        <CardImage
          image="/images/jakosc-ksztalcenia/happyStudents.png"
          imageAlt={t("cardImageAlt")}
          imageOrientation="full"
        />
        <CardList
          richTextColor="bg-gradient-to-br from-brandPrimaryBlue via-brandPrimaryBlue/95 to-brandBrightBlue/65 text-transparent bg-clip-text w-fit"
          simpleList={[
            {
              icon: "/images/jakosc-ksztalcenia/serviceIcon.png",
              iconAlt: t("listAlt-1"),
              richText: <p>{t("text-1")}</p>,
            },
            {
              icon: "/images/jakosc-ksztalcenia/consistencyIcon.png",
              iconAlt: t("listAlt-2"),
              richText: <p>{t("text-2")}</p>,
            },
            {
              icon: "/images/jakosc-ksztalcenia/graduation-hatIcon.png",
              iconAlt: t("listAlt-3"),
              richText: <p>{t("text-3")}</p>,
            },
            {
              icon: "/images/jakosc-ksztalcenia/skillsIcon.png",
              iconAlt: t("listAlt-4"),
              richText: <p>{t("text-4")}</p>,
            },
            {
              icon: "/images/jakosc-ksztalcenia/dealIcon.png",
              iconAlt: t("listAlt-5"),
              richText: <p>{t("text-5")}</p>,
            },
            {
              icon: "/images/jakosc-ksztalcenia/reportIcon.png",
              iconAlt: t("listAlt-6"),
              richText: <p>{t("text-6")}</p>,
            },
            {
              icon: "/images/jakosc-ksztalcenia/flaskIcon.png",
              iconAlt: t("listAlt-7"),
              richText: <p>{t("text-7")}</p>,
            },
          ]}
        />
      </Card>

      <Card border="bl">
        <MainTitle>{t("mainTitle-3")}</MainTitle>
        <CardList
          richTextColor="bg-gradient-to-br from-brandPrimaryBlue via-brandPrimaryBlue/95 to-brandBrightBlue/65 text-transparent bg-clip-text w-fit"
          simpleList={[
            {
              icon: "/images/jakosc-ksztalcenia/feedbackIcon.png",
              iconAlt: t("listAlt-2-1"),
              richText: <p>{t("text-2-1")}</p>,
            },
            {
              icon: "/images/jakosc-ksztalcenia/researchIcon.png",
              iconAlt: t("listAlt-2-2"),
              richText: <p>{t("text-2-2")}</p>,
            },
            {
              icon: "/images/jakosc-ksztalcenia/satisfactionIcon.png",
              iconAlt: t("listAlt-2-3"),
              richText: <p>{t("text-2-3")}</p>,
            },
          ]}
        />
        <CardImage
          image="/images/jakosc-ksztalcenia/smiles.png"
          imageAlt={t("cardImageAlt-2")}
          imageOrientation="full"
        />
        <SimpleText>{t("simpleText-2")}</SimpleText>
      </Card>
    </MainWrapper>
  );
}
