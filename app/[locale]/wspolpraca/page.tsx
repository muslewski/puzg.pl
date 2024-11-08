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
        <MainTitle>Inicjatywa Współpracy z Przemysłem</MainTitle>
        <SimpleText>
          Działalność Publicznej Uczelni Zawodowej w Grudziądzu zainicjowana
          została przez Wojskowe Zakłady Uzbrojenia S.A w Grudziądzu, co stanowi
          silne podłoże do ścisłej współpracy pomiędzy uczelnią a przemysłem. W
          regionie, w którym zlokalizowana jest uczelnia, funkcjonuje wiele
          przedsiębiorstw, które poszukują wykwalifikowanej kadry w zakresie
          mechatroniki, robotyki, automatyzacji, logistyki, zarządzania, obsługi
          urządzeń medycznych oraz bezpieczeństwa i obronności kraju. Współpraca
          uczelni z otoczeniem gospodarczym jest istotnym elementem w procesie
          kształcenia, dlatego dokładane są wszelkie starania aby otoczenie
          reprezentujące lokalny przemysł było zintegrowane z prowadzonymi
          kierunkami studiów.
        </SimpleText>
      </Card>

      <Card border="tr">
        <MainTitle>Umowy o Współpracy z Przedsiębiorstwami</MainTitle>
        <SimpleText>
          Publiczna Uczelnia Zawodowa w Grudziądzu podpisała umowy o współpracę
          z kilkunastoma zakładami pracy z Grudziądza i okolic, które
          zatrudniają inżynierów mechatroniki. Aktualnie uczelnia posiada
          deklaracje współpracy z ośmioma przedsiębiorstwami:
        </SimpleText>

        <CardList
          iconsSize="h-8 w-8 sm:h-14 sm:w-14"
          simpleList={[
            {
              icon: "/images/wspolpraca/electrical-panel.png",
              iconAlt: "a",
              richText: (
                <h2 className="h3fake">
                  Bydgoskie Zakłady Elektromechaniczne BELMA S. A.
                </h2>
              ),
            },
            {
              icon: "/images/wspolpraca/sonar.png",
              iconAlt: "a",
              richText: (
                <h2 className="h3fake">
                  Ośrodek Badawczo-Rozwojowy Centrum Techniki Morskiej S. A.
                </h2>
              ),
            },
            {
              icon: "/images/wspolpraca/test.png",
              iconAlt: "a",
              richText: (
                <h2 className="h3fake">Zakłady Chemiczne NITRO-CHEM S. A.</h2>
              ),
            },
            {
              icon: "/images/wspolpraca/fighter-jet.png",
              iconAlt: "a",
              richText: (
                <h2 className="h3fake">Wojskowe Zakłady Lotnicze nr 2 S. A.</h2>
              ),
            },
            {
              icon: "/images/wspolpraca/missiles.png",
              iconAlt: "a",
              richText: (
                <h2 className="h3fake">Wojskowe Zakłady Uzbrojenia S. A.</h2>
              ),
            },
            {
              icon: "/images/wspolpraca/production.png",
              iconAlt: "a",
              richText: <h2 className="h3fake">Rychiger Poland Sp. z o.o.</h2>,
            },
            {
              icon: "/images/wspolpraca/manufacturing.png",
              iconAlt: "a",
              richText: <h2 className="h3fake">Jabil Poland Sp. z o.o.</h2>,
            },
            {
              icon: "/images/wspolpraca/processor.png",
              iconAlt: "a",
              richText: <h2 className="h3fake">Kitron Sp. z o.o.</h2>,
            },
          ]}
        />

        <CardImage
          image="/images/wspolpraca/wspolpraca.jpg"
          imageOrientation="full"
          imageAlt="a"
        />
      </Card>

      <Card border="tl">
        <MainTitle>Wsparcie Przemysłu w Kształceniu Inżynierów</MainTitle>
        <SimpleText>
          Realizacja potrzeb gospodarczych w zakresie kształcenia inżynierów
          związana jest bezpośrednio ze wsparciem działań dydaktycznych przez
          przemysł. Władze uczelni prowadzą rozmowy oraz podpisują porozumienia
          z kolejnymi przedsiębiorstwami, które stworzą w przyszłości miejsca
          pracy dla absolwentów Publicznej Uczelni Zawodowej w Grudziądzu.
        </SimpleText>

        <SimpleText>
          Współpraca z interesariuszami zewnętrznymi opiera się na kształceniu
          wysoko wykwalifikowanych absolwentów, którzy przygotowani będą do
          wymagań rynku pracy. Aktualnie na PUZ kształcenie odbywa się na
          kierunku Mechatronika, ma ono charakter praktyczny. Program
          proponowanych studiów jest odpowiedzią na potrzeby przemysłu
          zbrojeniowego, samorządu lokalnego oraz przedsiębiorców z Pomorskiej
          Specjalnej Strefy Ekonomicznej.
        </SimpleText>
      </Card>
    </MainWrapper>
  );
}
