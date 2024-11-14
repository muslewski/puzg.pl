import Card from "@/components/card/Card";
import { CardImage } from "@/components/card/CardImage";
import CardList from "@/components/card/CardList";
import MainTitle from "@/components/card/MainTitle";
import SimpleText from "@/components/card/SimpleText";
import ImageCarousel from "@/components/carousel/ImageCarousel";
import LocalizationIframe from "@/components/LocalizationIframe";
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
  const t = await getTranslations({ locale, namespace: "OUczelniPage" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function OUczelniPage({ params: { locale } }: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("OUczelniPage");

  const images = [
    "/images/o-uczelni/1.jpg",
    "/images/o-uczelni/2.jpg",
    "/images/o-uczelni/3.jpg",
    "/images/o-uczelni/4.jpg",
    "/images/o-uczelni/5.jpg",
    "/images/o-uczelni/6.jpg",
    "/images/o-uczelni/7.jpg",
  ];

  // ! Remember to add alt images

  return (
    <MainWrapper topTitle={t("title")}>
      <ImageCarousel
        images={images}
        altImages={[
          t("carouselAlts.1"),
          t("carouselAlts.2"),
          t("carouselAlts.3"),
          t("carouselAlts.4"),
          t("carouselAlts.5"),
          t("carouselAlts.6"),
          t("carouselAlts.7"),
        ]}
      />

      <Card
        grayCard
        grayCardPosition="left"
        leftProps={[
          <CardImage
            key={0}
            image="/images/o-uczelni/engineer.jpg"
            imageAlt={t("imageAlt-1")}
            imageOrientation="landscape"
          />,
        ]}
      >
        <MainTitle>{t("mainTitle")}</MainTitle>
        <SimpleText>{t("simpleText")}</SimpleText>
      </Card>

      <Card
        border="bl"
        rightProps={[
          <CardImage
            key={0}
            image="/images/o-uczelni/engineer2.jpg"
            imageAlt={t("imageAlt-2")}
            imageOrientation="landscape"
          />,
        ]}
      >
        <MainTitle>{t("mainTitle-2")}</MainTitle>
        <SimpleText>{t("simpleText-2")}</SimpleText>
      </Card>

      <Card>
        <MainTitle>{t("mainTitle-3")}</MainTitle>
        <SimpleText>{t("simpleText-3")}</SimpleText>
        <SimpleText>{t("simpleText-4")}</SimpleText>
      </Card>

      <Card border="bl">
        <MainTitle>{t("mainTitle-4")}</MainTitle>,
        <CardList
          listObject={[
            {
              title: t("listTitle-1"),
              description: t("listDesc-1"),
              icon: "/images/icons/Rocket.svg",
              iconAlt: t("listAlt-1"),
            },
            {
              title: t("listTitle-2"),
              description: t("listDesc-2"),
              icon: "/images/icons/Chart.svg",
              iconAlt: t("listAlt-2"),
            },
            {
              title: t("listTitle-3"),
              description: t("listDesc-3"),
              icon: "/images/icons/Users.svg",
              iconAlt: t("listAlt-3"),
            },
          ]}
        />
      </Card>

      <Card grayCard grayCardPosition="left">
        <MainTitle>{t("mainTitle-5")}</MainTitle>
        <SimpleText>{t("simpleText-5")}</SimpleText>
        <LocalizationIframe />
      </Card>
    </MainWrapper>
  );
}
