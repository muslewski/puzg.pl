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
      <ImageCarousel images={images} altImages={["a", "b", "c", "d", "e"]} />
      <Card border="bl">
        <MainTitle>Główny cel</MainTitle>
        <SimpleText>
          Głównym celem pracy Instytutu jest prowadzenie procesu kształcenia na
          kierunku Mechatronika. Działalność Instytutu Mechatroniki obejmuje
          problematykę projektowania systemów mechatronicznych, programowania
          sterowników logicznych, budowy sieci komputerowych i sieci
          przemysłowych, systemów eksploatacji układów automatyki, systemów
          sterowania oraz systemów wspomagania decyzji, a także zdobywanie
          umiejętności z zakresu budowy, technologii i eksploatacji maszyn i
          pojazdów sterowanych mechatronicznie, projektowania mechatronicznych
          procesów technologicznych obróbki i montażu z wykorzystaniem programów
          CAD/CAM.
        </SimpleText>
        <SimpleText>
          W instytucie zatrudnieni są nauczyciele akademiccy, którzy realizują
          proces kształcenia studentów na kierunku Mechatronika. W roku
          akademickim 2024/2025 planowane jest utworzenie Koła Naukowego
          Mechatroników, nad którym pracownicy Instytutu będą sprawować opiekę.
          Rada Naukowa Instytutu:
        </SimpleText>

        <CardList
          simpleList={[
            {
              richText: <h3>Dr inż. Michał Sójka</h3>,
              icon: "/images/icons/User.svg",
              iconAlt: "a",
            },
            {
              richText: <h3>Dr inż. Paweł Bukowski</h3>,
              icon: "/images/icons/User.svg",
              iconAlt: "a",
            },
            {
              richText: <h3>Mgr inż. Artur Mach</h3>,
              icon: "/images/icons/User.svg",
              iconAlt: "a",
            },
            {
              richText: <h3>Mgr inż. Andrzej Poślednik</h3>,
              icon: "/images/icons/User.svg",
              iconAlt: "a",
            },
          ]}
        />

        <CardImage
          image="/images/instytut/mechatronic.png"
          imageAlt="a"
          imageOrientation="full"
        />
      </Card>
    </MainWrapper>
  );
}
