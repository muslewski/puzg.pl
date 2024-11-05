import Card from "@/components/card/Card";
import GrayCard from "@/components/card/GrayCard";
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
        altImages={["a", "b", "c", "d", "e", "f", "g"]}
      />

      <Card
        border="tl"
        mainTitle="Nasza misja"
        simpleText="Misją Publicznej Uczelni Zawodowej w Grudziądzu jest przede wszystkim stworzenie silnego ośrodka edukacyjnego, który nie tylko kształci przyszłych specjalistów, ale również aktywnie uczestniczy w rozwiązywaniu głównych wyzwań społecznych i gospodarczych. Stawiamy na rozwój umiejętności praktycznych, innowacyjność i współpracę z lokalnymi oraz krajowymi instytucjami."
      />
      <Card
        border="br"
        mainTitle="Realizujemy wizję"
        simpleText="Dążymy do kształtowania przyszłości poprzez edukację, innowacje oraz zaangażowanie społeczne. Naszym celem jest nie tylko przygotowanie studentów do rynku pracy, ale także inspirowanie ich do tworzenia nowoczesnych rozwiązań technologicznych, które mogą zmieniać gospodarkę."
      />

      <GrayCard
        mainTitle="Mechatronika i Nowoczesne Laboratoria dla Studentów"
        simpleText="Od 1 października 2024 roku na Uczelni rozpocznie się kształcenie
        studentów na kierunku mechatronika, a w przyszłości planowane jest
        poszerzenie oferty o kolejne kierunki studiów. Koncepcja kształcenia
        zakłada wprowadzenie do tradycyjnych elementów kształcenia, nowatorskie
        przedmioty i wynikające z nich efekty uczenia się, które uwzględniają
        postęp w obszarze stosunków gospodarczych, ekonomicznych i społecznych.
        Zakładane efekty uczenia się powinny być uzyskane również w oparciu o
        elektroniczne źródła wiedzy i umiejętności - programy i aplikacje
        umożliwiające wyszukiwanie najnowszych publikacji, studiów przypadków i
        literatury w obszarze kształconego kierunku. "
        simpleText2="Nauka w PUZ będzie się
        odbywać z wykorzystaniem pomieszczeń i wyposażenia Centrum Kształcenia
        Zawodowego przy ul. Czarnieckiego 5/7 oraz Zespołu Szkół Technicznych
        im. Jana i Jędrzeja Śniadeckich przy ul. Hoffmanna 1-7. Z myślą o
        studentach, którzy już wkrótce rozpoczną tam rok akademicki wyposażono
        sale w nowoczesny sprzęt dydaktyczny, a ponadto dzięki zapleczu
        Branżowego Centrum Umiejętności będzie można zaoferować studentom całą
        gamę bezpłatnych kursów, m.in. z projektowania robotów czy modelowania
        3D."
      />

      <Card
        mainTitle="Nasze mocne strony"
        border="bl"
        listObject={[
          {
            title: "Nowoczesna infrastruktura",
            description: "Sale wyposażone w nowoczesny sprzęt.",
            icon: "/images/icons/Rocket.svg",
            iconAlt: "s",
          },
          {
            title: "Praktyczne podejście do nauki",
            description: "Współpraca z Centrum Kształcenia Zawodowego.",
            icon: "/images/icons/Chart.svg",
            iconAlt: "s",
          },
          {
            title: "Bezpłatne kursy",
            description: "Kursy z projektowania robotów i modelowania 3D.",
            icon: "/images/icons/Users.svg",
            iconAlt: "s",
          },
        ]}
      />

      <Card
        mainTitle="Gdzie nas znajdziesz?"
        simpleText="Znajdziesz nas na ulicy Czarnieckiego 5/7 oraz Hoffmanna 1-7, gdzie mieści się nasza nowoczesna infrastruktura edukacyjna."
        border="tr"
        customElement={<LocalizationIframe />}
      />
    </MainWrapper>
  );
}
