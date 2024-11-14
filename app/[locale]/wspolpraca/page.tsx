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
  const t = await getTranslations({ locale, namespace: "WspolpracaPage" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function WspolpracaPage({ params: { locale } }: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("WspolpracaPage");

  return (
    <MainWrapper topTitle={t("title")}>
      <Card border="bl">
        <MainTitle>{t("mainTitle-1")}</MainTitle>
        <SimpleText>{t("simpleText-1")}</SimpleText>
      </Card>

      <Card border="tr">
        <MainTitle>{t("mainTitle-2")}</MainTitle>
        <SimpleText>{t("simpleText-2")}</SimpleText>

        <CardList
          iconsSize="h-8 w-8 sm:h-14 sm:w-14"
          simpleList={[
            {
              icon: "/images/wspolpraca/electrical-panel.png",
              iconAlt: t("iconAlt-1"),
              richText: (
                <h2 className="h3fake text-base sm:text-lg md:text-xl 3xl:text-2xl font-outfit font-normal">
                  Bydgoskie Zakłady Elektromechaniczne BELMA S. A.
                </h2>
              ),
            },
            {
              icon: "/images/wspolpraca/sonar.png",
              iconAlt: t("iconAlt-2"),
              richText: (
                <h2 className="h3fake text-base sm:text-lg md:text-xl 3xl:text-2xl font-outfit font-normal">
                  Ośrodek Badawczo-Rozwojowy Centrum Techniki Morskiej S. A.
                </h2>
              ),
            },
            {
              icon: "/images/wspolpraca/test.png",
              iconAlt: t("iconAlt-3"),
              richText: (
                <h2 className="h3fake text-base sm:text-lg md:text-xl 3xl:text-2xl font-outfit font-normal">
                  Zakłady Chemiczne NITRO-CHEM S. A.
                </h2>
              ),
            },
            {
              icon: "/images/wspolpraca/fighter-jet.png",
              iconAlt: t("iconAlt-4"),
              richText: (
                <h2 className="h3fake text-base sm:text-lg md:text-xl 3xl:text-2xl font-outfit font-normal">
                  Wojskowe Zakłady Lotnicze nr 2 S. A.
                </h2>
              ),
            },
            {
              icon: "/images/wspolpraca/missiles.png",
              iconAlt: t("iconAlt-5"),
              richText: (
                <h2 className="h3fake text-base sm:text-lg md:text-xl 3xl:text-2xl font-outfit font-normal">
                  Wojskowe Zakłady Uzbrojenia S. A.
                </h2>
              ),
            },
            {
              icon: "/images/wspolpraca/production.png",
              iconAlt: t("iconAlt-6"),
              richText: (
                <h2 className="h3fake text-base sm:text-lg md:text-xl 3xl:text-2xl font-outfit font-normal">
                  Rychiger Poland Sp. z o.o.
                </h2>
              ),
            },
            {
              icon: "/images/wspolpraca/manufacturing.png",
              iconAlt: t("iconAlt-7"),
              richText: (
                <h2 className="h3fake text-base sm:text-lg md:text-xl 3xl:text-2xl font-outfit font-normal">
                  Jabil Poland Sp. z o.o.
                </h2>
              ),
            },
            {
              icon: "/images/wspolpraca/processor.png",
              iconAlt: t("iconAlt-8"),
              richText: (
                <h2 className="h3fake text-base sm:text-lg md:text-xl 3xl:text-2xl font-outfit font-normal">
                  Kitron Sp. z o.o.
                </h2>
              ),
            },
          ]}
        />

        <CardImage
          image="/images/wspolpraca/wspolpraca.jpg"
          imageOrientation="full"
          imageAlt={t("imageAlt-1")}
        />
      </Card>

      <Card border="tl">
        <MainTitle>{t("mainTitle-3")}</MainTitle>
        <SimpleText>{t("simpleText-3")}</SimpleText>
        <SimpleText>{t("simpleText-4")}</SimpleText>
      </Card>
    </MainWrapper>
  );
}
