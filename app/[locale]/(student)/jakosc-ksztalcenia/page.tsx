import Card from "@/components/card/Card";
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
      <Card
        border="l"
        mainTitle="Publiczna Uczelnia Zawodowa w Grudziądzu - Wspólny Sukces Miasta i Władz"
        simpleText="Publiczna Uczelnia Zawodowa w Grudziądzu została stworzona po latach starań władz Wojskowych Zakładów Uzbrojenia, miasta oraz samorządowców. Doprowadziły one do tego, że 15 września 2023 roku Minister Edukacji i Nauki, podpisał rozporządzenie sankcjonujące utworzenie w Grudziądzu Publicznej Uczelni Zawodowej. Uroczystość odbyła się na terenie Wojskowych Zakładów Uzbrojenia S.A."
      />
      <Card
        border="tr"
        images={["/images/jakosc-ksztalcenia/happyStudents.png"]}
        imagesAlt={["a"]}
        imagesOrientation={["full"]}
        customWrapperWidth="lg:w-full"
        mainTitle="Cele Wewnętrznego Systemu Jakości Kształcenia"
        simpleList={[
          {
            icon: "/images/jakosc-ksztalcenia/serviceIcon.png",
            iconAlt: "a",
            richText: (
              <p className="text-brandPrimaryBlue">
                kształtowanie postaw projakościowych oraz budowanie kultury
                jakości,
              </p>
            ),
          },
          {
            icon: "/images/jakosc-ksztalcenia/consistencyIcon.png",
            iconAlt: "a",
            richText: (
              <p className="text-brandPrimaryBlue">
                zapewnienie spójności kształcenia,
              </p>
            ),
          },
          {
            icon: "/images/jakosc-ksztalcenia/graduation-hatIcon.png",
            iconAlt: "a",
            richText: (
              <p className="text-brandPrimaryBlue">
                osiąganie przez studentów zakładanych efektów uczenia się,
              </p>
            ),
          },
          {
            icon: "/images/jakosc-ksztalcenia/skillsIcon.png",
            iconAlt: "a",
            richText: (
              <p className="text-brandPrimaryBlue">
                doskonalenie jakości kadry dydaktycznej, technicznej i
                administracyjnej,
              </p>
            ),
          },
          {
            icon: "/images/jakosc-ksztalcenia/dealIcon.png",
            iconAlt: "a",
            richText: (
              <p className="text-brandPrimaryBlue">
                wykorzystywanie potencjału otoczenia społeczno-gospodarczego do
                doskonalenia jakości kształcenia,
              </p>
            ),
          },
          {
            icon: "/images/jakosc-ksztalcenia/reportIcon.png",
            iconAlt: "a",
            richText: (
              <p className="text-brandPrimaryBlue">
                udostępnianie informacji o działaniach podejmowanych w zakresie
                podnoszenia jakości i osiąganych efektach uczenia się,
              </p>
            ),
          },
          {
            icon: "/images/jakosc-ksztalcenia/flaskIcon.png",
            iconAlt: "a",
            richText: (
              <p className="text-brandPrimaryBlue">
                poprawa jakości i rozwoju infrastruktury oraz zwiększenie liczby
                laboratoriów i specjalistycznych warsztatów możliwych do
                wykorzystania przez studentów.
              </p>
            ),
          },
        ]}
      />

      <Card
        border="bl"
        images={["/images/jakosc-ksztalcenia/smiles.png"]}
        imagesAlt={["a"]}
        imagesOrientation={["full"]}
        customWrapperWidth="lg:w-full"
        mainTitle="Podstawowymi procedurami w zakresie jakości kształcenia są"
        simpleList={[
          {
            icon: "/images/jakosc-ksztalcenia/serviceIcon.png",
            iconAlt: "a",
            richText: (
              <p className="text-brandPrimaryBlue">
                ocena zajęć dydaktycznych prowadzonych przez nauczycieli
                akademickich,
              </p>
            ),
          },
          {
            icon: "/images/jakosc-ksztalcenia/consistencyIcon.png",
            iconAlt: "a",
            richText: (
              <p className="text-brandPrimaryBlue">
                hospitacje zajęć dydaktycznych,
              </p>
            ),
          },
          {
            icon: "/images/jakosc-ksztalcenia/graduation-hatIcon.png",
            iconAlt: "a",
            richText: (
              <p className="text-brandPrimaryBlue">
                ocena satysfakcji studentów.
              </p>
            ),
          },
        ]}
        lastSimpleText="Jakość kształcenia obejmuje również procedury dyplomowania oraz monitorowanie losów zawodowych absolwentów. Zbiór informacji o jakości kształcenia zawarty został w Księdze Jakości Kształcenia, która jest wewnętrznym dokumentem funkcjonującym na Publicznej Uczelni Zawodowej w Grudziądzu."
      />
    </MainWrapper>
  );
}
