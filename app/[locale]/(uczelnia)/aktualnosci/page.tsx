import Card from "@/components/card/Card";
import FancyButton from "@/components/FancyButton";
import MainWrapper from "@/components/MainWrapper";

import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Pathnames } from "@/i18n/routing";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale },
}: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "AktualnosciPage" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export const news = {
  "0": {
    title: "Nowy Rektor",
    image: "/images/aktualnosci/post0.0.png",
    imageAlt: "Zdjęcie przedstawia nowego Rektora Uczelni",
    description: `Od dnia 11 września 2024 roku na Publicznej Uczelni Zawodowej w Grudziądzu mamy nowego Rektora.

     Nowo mianowanym Rektorem Publicznej Uczelni Zawodowej w Grudziądzu został dr inż. Michał Sójka, ceniony specjalista w zakresie tribologii. Jego akademicka kariera obejmuje wieloletnie doświadczenie jako wykładowcy w Kujawskiej Szkole Wyższej we Włocławku na kierunkach Budowa i Eksploatacja Maszyn, Transport, Inżynieria Techniczno – Informatyczna, Inżynieria Mechaniczna i Logistyka oraz funkcję Dziekana zamiejscowego Wydziału Mechanicznego w Grudziądzu, Kujawskiej Szkoły Wyższej we Włocławku.

     Dr inż. Michał Sójka jest autorem wielu publikacji związanych z jego wiodącą dyscypliną naukową Inżynierią Mechaniczną. Jest również założycielem, właścicielem oraz prezesem zarządu przedsiębiorstwa badawczo rozwojowego wdrożeń innowacji inżynieryjnych oraz laboratorium tribologicznego.

     Bogate doświadczenie i wszechstronna wiedza nowego Rektora są dla naszej Uczelni cennym atutem.`,
  },
  "1": {
    title: "Inauguracja Roku Akademickiego",
    image: "/images/aktualnosci/post1.0.png",
    imageAlt: "Zdjęcie przedstawia rynek w mieście Grudziądz",
    description: `Uroczysta Inauguracja pierwszego roku akademickiego na Publicznej Uczelni Zawodowej w Grudziądzu z udziałem Władz naszej Uczelni, studentów, pracowników oraz zaproszonych gości odbędzie się 15 października 2024 roku o godzinie 15:00 w Centrum Kultury Teatr w Grudziądzu”. Podczas inauguracji studenci kierunku Mechatronika złożą uroczyste ślubowanie.`,
  },
  "2": {
    title: "Studenci kierunku Mechatronika złożyli ślubowanie",
    image: "/images/aktualnosci/post2.0.png",
    imageAlt: "Zdjęcie przedstawia rynek w mieście Grudziądz",
    description: `Dnia 15 pażdziernika 2024 r. odbyła się Uroczysta Inauguracja roku akademickiego. Studenci kierunku Mechatronika złożyli ślubowanie o treści:

”Ślubuję uroczyście, że będę wytrwale dążyć do zdobywania wiedzy, umiejętności i rozwoju własnej osobowości, odnosić się z szacunkiem do władz Publicznej Uczelni Zawodowej w Grudziądzu i wszystkich członków Jej społeczności, stosować prawa i dobre obyczaje akademickie oraz całym postępowaniem dbać o godność i honor studenta Publicznej Uczelni Zawodowej w Grudziądzu.”`,
  },
  "3": {
    title: "Wybory Rektora na kadencję 2024 - 2028",
    image: "/images/aktualnosci/post3.0.png",
    imageAlt: "Zdjęcie przedstawia rynek w mieście Grudziądz",
    description: `Dnia 18 października 2024 r. na Publicznej Uczelni Zawodowej w Grudziądzu odbyły się wybory Rektora na kadencję 2024 - 2028. JM Rektorem PUZG został dr inż. Michał Sójka, prof. Uczelni.

Serdecznie gratulujemy!`,
  },
};

export default function AktualnosciPage({ params: { locale } }: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("AktualnosciPage");

  return (
    <MainWrapper topTitle={t("title")}>
      {Object.entries(news).map(([key, post], index) => (
        <Card
          border={
            index % 4 === 0
              ? "bl"
              : index % 4 === 1
              ? "tl"
              : index % 4 === 2
              ? "br"
              : "tr"
          }
          key={key}
          mainTitle={post.title}
          simpleText={post.description}
          simpleTextWordsLimit={40}
          image={post.image}
          imageAlt={post.imageAlt}
          customElement={
            <FancyButton
              text="Zobacz Więcej"
              link={{
                pathname: "/aktualnosci/[slug]",
                params: { slug: key },
              }}
            />
          }
        />
      ))}
    </MainWrapper>
  );
}
