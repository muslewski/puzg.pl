import Card from "@/components/card/Card";
import { CardImage } from "@/components/card/CardImage";
import CardList from "@/components/card/CardList";
import MainTitle from "@/components/card/MainTitle";
import SimpleText from "@/components/card/SimpleText";
import ImageCarousel from "@/components/carousel/ImageCarousel";
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
  const t = await getTranslations({ locale, namespace: "InstytutPage" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function InstytutPage({ params: { locale } }: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("InstytutPage");

  const images = [
    "/images/instytut/1.jpg",
    "/images/instytut/2.jpg",
    "/images/instytut/3.jpg",
    "/images/instytut/4.jpg",
    "/images/instytut/5.jpg",
  ];

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
        ]}
      />
      <Card border="bl">
        <MainTitle>{t("mainTitle")}</MainTitle>
        <SimpleText>{t("simpleText-1")}</SimpleText>
        <SimpleText>{t("simpleText-2")}</SimpleText>

        <CardList
          simpleList={[
            {
              richText: (
                <h3 className="text-base sm:text-lg md:text-xl 3xl:text-2xl font-outfit ">
                  {t("jobTitle-1")} Michał Sójka
                </h3>
              ),
              icon: "/images/icons/User.svg",
              iconAlt: t("iconAlt"),
            },
            {
              richText: (
                <h3 className="text-base sm:text-lg md:text-xl 3xl:text-2xl font-outfit">
                  {t("jobTitle-1")} Paweł Bukowski
                </h3>
              ),
              icon: "/images/icons/User.svg",
              iconAlt: t("iconAlt"),
            },
            {
              richText: (
                <h3 className="text-base sm:text-lg md:text-xl 3xl:text-2xl font-outfit">
                  {t("jobTitle-2")} Artur Mach
                </h3>
              ),
              icon: "/images/icons/User.svg",
              iconAlt: t("iconAlt"),
            },
            {
              richText: (
                <h3 className="text-base sm:text-lg md:text-xl 3xl:text-2xl font-outfit">
                  {t("jobTitle-2")} Andrzej Poślednik
                </h3>
              ),
              icon: "/images/icons/User.svg",
              iconAlt: t("iconAlt"),
            },
          ]}
        />

        <CardImage
          image="/images/instytut/mechatronic.png"
          imageAlt={t("imageAlt")}
          imageOrientation="full"
        />
      </Card>
    </MainWrapper>
  );
}
