import Card from "@/components/card/Card";
import { CardImage } from "@/components/card/CardImage";
import CardList from "@/components/card/CardList";
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
  const t = await getTranslations({ locale, namespace: "DziekanatPage" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function DziekanatPage({ params: { locale } }: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("DziekanatPage");

  return (
    <MainWrapper topTitle={t("title")}>
      <Card
        border="bl"
        leftProps={[
          <CardImage
            image="/images/dziekanat/dziekanat.jpg"
            imageAlt={t("cardImageAlt")}
            imageOrientation="portrait"
          />,
        ]}
      >
        <MainTitle>{t("mainTitle")}</MainTitle>
        <CardList
          simpleList={[
            {
              icon: "/images/icons/User.svg",
              iconAlt: t("cardAlt-1"),
              richText: (
                <span>
                  <p className="font-semibold bg-gradient-to-br from-brandPrimaryBlue to-[#1099E2] text-transparent bg-clip-text w-fit">
                    Justyna Rubach
                  </p>
                  {t("specialist")}
                </span>
              ),
            },
            {
              icon: "/images/icons/Calling.svg",
              iconAlt: t("cardAlt-2"),
              richText: <a href="tel:+48 576-060-124">+48 576-060-124</a>,
            },
            {
              icon: "/images/icons/Mail.svg",
              iconAlt: t("cardAlt-3"),
              richText: (
                <a href="mailto:justyna.rubach@puzg.pl">
                  justyna.rubach@puzg.pl
                </a>
              ),
            },
            {
              icon: "/images/icons/Flag.svg",
              iconAlt: t("cardAlt-4"),
              richText: (
                <span>
                  {t("street")} Stefana Czarneckiego 5/7
                  <br></br>
                  86-300 Grudziądz
                </span>
              ),
            },
          ]}
        />
      </Card>

      <Card border="tr">
        <MainTitle>{t("mainTitle-2")}</MainTitle>
        <CardList
          simpleList={[
            {
              icon: "/images/icons/AlarmClock.svg",
              iconAlt: t("cardAlt-5"),
              richText: (
                <p className="font-medium bg-gradient-to-br from-brandPrimaryBlue to-[#1099E2] text-transparent bg-clip-text w-fit">
                  {t("week-1")}
                </p>
              ),
              description: `${t("hour")} 10:00 - 14:00`,
            },
            {
              icon: "/images/icons/AlarmClock.svg",
              iconAlt: t("cardAlt-5"),
              richText: (
                <p className="font-medium bg-gradient-to-br from-brandPrimaryBlue to-[#1099E2] text-transparent bg-clip-text w-fit">
                  {t("week-2")}
                </p>
              ),
              description: `${t("hour")} godz. 14:00 - 18:00`,
            },
          ]}
        />
      </Card>
    </MainWrapper>
  );
}
