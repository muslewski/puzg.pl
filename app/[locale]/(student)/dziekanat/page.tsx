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
            imageAlt="Zdjęcię dziekanatu"
            imageOrientation="portrait"
          />,
        ]}
      >
        <MainTitle>Dane Kontaktowe</MainTitle>
        <CardList
          simpleList={[
            {
              icon: "/images/icons/User.svg",
              iconAlt: "a",
              richText: (
                <span>
                  <p className="font-semibold bg-gradient-to-br from-brandPrimaryBlue to-[#1099E2] text-transparent bg-clip-text w-fit">
                    Justyna Rubach
                  </p>
                  specjalista ds. administracyjnych
                </span>
              ),
            },
            {
              icon: "/images/icons/Calling.svg",
              iconAlt: "a",
              richText: <a href="tel:+48 576-060-124">+48 576-060-124</a>,
            },
            {
              icon: "/images/icons/Mail.svg",
              iconAlt: "a",
              richText: (
                <a href="mailto:justyna.rubach@puzg.pl">
                  justyna.rubach@puzg.pl
                </a>
              ),
            },
            {
              icon: "/images/icons/Flag.svg",
              iconAlt: "a",
              richText: (
                <span>
                  ul. Stefana Czarneckiego 5/7
                  <br></br>
                  86-300 Grudziądz
                </span>
              ),
            },
          ]}
        />
      </Card>

      <Card border="tr">
        <MainTitle>Godziny przyjęć studentów</MainTitle>
        <CardList
          simpleList={[
            {
              icon: "/images/icons/AlarmClock.svg",
              iconAlt: "clock",
              richText: (
                <p className="font-medium bg-gradient-to-br from-brandPrimaryBlue to-[#1099E2] text-transparent bg-clip-text w-fit">
                  poniedziałek, środa, piątek
                </p>
              ),
              description: "godz. 10:00 - 14:00",
            },
            {
              icon: "/images/icons/AlarmClock.svg",
              iconAlt: "clock",
              richText: (
                <p className="font-medium bg-gradient-to-br from-brandPrimaryBlue to-[#1099E2] text-transparent bg-clip-text w-fit">
                  wtorek, czwartek
                </p>
              ),
              description: "godz. 14:00 - 18:00",
            },
          ]}
        />
      </Card>
    </MainWrapper>
  );
}
