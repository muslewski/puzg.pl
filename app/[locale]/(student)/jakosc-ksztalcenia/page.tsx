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
      <Card border="l">
        <MainTitle>
          Publiczna Uczelnia Zawodowa w Grudziądzu - Wspólny Sukces Miasta i
          Władz
        </MainTitle>
        <SimpleText>
          Publiczna Uczelnia Zawodowa w Grudziądzu została stworzona po latach
          starań władz Wojskowych Zakładów Uzbrojenia, miasta oraz
          samorządowców. Doprowadziły one do tego, że 15 września 2023 roku
          Minister Edukacji i Nauki, podpisał rozporządzenie sankcjonujące
          utworzenie w Grudziądzu Publicznej Uczelni Zawodowej. Uroczystość
          odbyła się na terenie Wojskowych Zakładów Uzbrojenia S.A.
        </SimpleText>
      </Card>

      <Card border="tr">
        <CardImage
          image="/images/jakosc-ksztalcenia/happyStudents.png"
          imageAlt="a"
          imageOrientation="full"
        />
        <MainTitle>Cele Wewnętrznego Systemu Jakości Kształcenia</MainTitle>
        <CardList
          richTextColor="bg-gradient-to-br from-brandPrimaryBlue via-brandPrimaryBlue/95 to-brandBrightBlue/65 text-transparent bg-clip-text w-fit"
          simpleList={[
            {
              icon: "/images/jakosc-ksztalcenia/serviceIcon.png",
              iconAlt: "a",
              richText: (
                <p>
                  kształtowanie postaw projakościowych oraz budowanie kultury
                  jakości,
                </p>
              ),
            },
            {
              icon: "/images/jakosc-ksztalcenia/consistencyIcon.png",
              iconAlt: "a",
              richText: <p>zapewnienie spójności kształcenia,</p>,
            },
            {
              icon: "/images/jakosc-ksztalcenia/graduation-hatIcon.png",
              iconAlt: "a",
              richText: (
                <p>
                  osiąganie przez studentów zakładanych efektów uczenia się,
                </p>
              ),
            },
            {
              icon: "/images/jakosc-ksztalcenia/skillsIcon.png",
              iconAlt: "a",
              richText: (
                <p>
                  doskonalenie jakości kadry dydaktycznej, technicznej i
                  administracyjnej,
                </p>
              ),
            },
            {
              icon: "/images/jakosc-ksztalcenia/dealIcon.png",
              iconAlt: "a",
              richText: (
                <p>
                  wykorzystywanie potencjału otoczenia społeczno-gospodarczego
                  do doskonalenia jakości kształcenia,
                </p>
              ),
            },
            {
              icon: "/images/jakosc-ksztalcenia/reportIcon.png",
              iconAlt: "a",
              richText: (
                <p>
                  udostępnianie informacji o działaniach podejmowanych w
                  zakresie podnoszenia jakości i osiąganych efektach uczenia
                  się,
                </p>
              ),
            },
            {
              icon: "/images/jakosc-ksztalcenia/flaskIcon.png",
              iconAlt: "a",
              richText: (
                <p>
                  poprawa jakości i rozwoju infrastruktury oraz zwiększenie
                  liczby laboratoriów i specjalistycznych warsztatów możliwych
                  do wykorzystania przez studentów.
                </p>
              ),
            },
          ]}
        />
      </Card>

      <Card border="bl">
        <MainTitle>
          Podstawowymi procedurami w zakresie jakości kształcenia są
        </MainTitle>
        <CardList
          richTextColor="bg-gradient-to-br from-brandPrimaryBlue via-brandPrimaryBlue/95 to-brandBrightBlue/65 text-transparent bg-clip-text w-fit"
          simpleList={[
            {
              icon: "/images/jakosc-ksztalcenia/serviceIcon.png",
              iconAlt: "a",
              richText: (
                <p>
                  ocena zajęć dydaktycznych prowadzonych przez nauczycieli
                  akademickich,
                </p>
              ),
            },
            {
              icon: "/images/jakosc-ksztalcenia/consistencyIcon.png",
              iconAlt: "a",
              richText: <p>hospitacje zajęć dydaktycznych,</p>,
            },
            {
              icon: "/images/jakosc-ksztalcenia/graduation-hatIcon.png",
              iconAlt: "a",
              richText: <p>ocena satysfakcji studentów.</p>,
            },
          ]}
        />
        <CardImage
          image="/images/jakosc-ksztalcenia/smiles.png"
          imageAlt="a"
          imageOrientation="full"
        />
        <SimpleText>
          Jakość kształcenia obejmuje również procedury dyplomowania oraz
          monitorowanie losów zawodowych absolwentów. Zbiór informacji o jakości
          kształcenia zawarty został w Księdze Jakości Kształcenia, która jest
          wewnętrznym dokumentem funkcjonującym na Publicznej Uczelni Zawodowej
          w Grudziądzu.
        </SimpleText>
      </Card>
    </MainWrapper>
  );
}
