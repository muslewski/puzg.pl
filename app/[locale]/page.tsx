import Card from "@/components/card/Card";
import GrayCard from "@/components/card/GrayCard";
import TeamsButton from "@/components/card/TeamsButton";
import Hero from "@/components/home/Hero";
import SlideShow from "@/components/home/SlideShow";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale },
}: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "HomePage" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function HomePage({ params: { locale } }: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("HomePage");

  return (
    <main className="flex flex-col items-center">
      <Hero />

      <div className="w-full flex flex-col gap-32 lg:gap-52 items-center">
        <SlideShow />

        <Card
          mainTitle="Dlaczego warto wybrać naszą uczelnię?"
          border="bl"
          listObject={[
            {
              title: "Perspektywy zatrudnienia",
              description:
                "Po ukończeniu studiów czekają na Ciebie liczne możliwości pracy dzięki dynamicznemu rozwojowi przemysłu i biznesu w Grudziądzu.",
              icon: "/images/home/card1.png",
              iconAlt: "Ikona uścisku dłoni",
            },
            {
              title: "Wygodna lokalizacja",
              description:
                "Nasza uczelnia znajduje się zaledwie 15 minut spacerem od stacji PKP Grudziądz - miasto, co ułatwia dojazd.",
              icon: "/images/home/card2.png",
              iconAlt: "Ikona mapy",
            },
            {
              title: "Dostosowane dla pracujących",
              description:
                "Oferujemy elastyczny program studiów, który pozwala na łączenie nauki z pracą zawodową.",
              icon: "/images/home/card3.png",
              iconAlt: "Ikona walizki do pracy",
            },
          ]}
        />

        <GrayCard
          mainTitle="Gdzie nas znajdziesz?"
          simpleText="Znajdziesz nas na ulicy Czarnieckiego 5/7 oraz Hoffmanna 1-7, gdzie mieści się nasza nowoczesna infrastruktura edukacyjna."
          customElement={
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d522.5370547032383!2d18.753977153923262!3d53.479048888948526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4702cfd876a65acb%3A0xe6d78eb49d59c1f1!2sCzarnieckiego%205%2F7%2C%2086-300%20Grudzi%C4%85dz!5e0!3m2!1sen!2spl!4v1730317783353!5m2!1sen!2spl"
              width="600"
              height="450"
              className="border-8 rounded-2xl border-brandPrimaryBlue border-double h-96 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          }
        />

        <Card
          mainTitle="Dołącz do nas na Microsoft Teams!"
          border="tr"
          simpleText="Zajęcia, które nie mogą odbyć się na uczelni, będą prowadzone online na Microsoft Teams."
          customElement={<TeamsButton iconAlt="Logo Teams" />}
        />
      </div>
    </main>
  );
}
