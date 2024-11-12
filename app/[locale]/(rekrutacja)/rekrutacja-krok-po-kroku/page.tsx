import Card from "@/components/card/Card";
import { CardImage } from "@/components/card/CardImage";
import CardList from "@/components/card/CardList";
import MainTitle from "@/components/card/MainTitle";
import SimpleText from "@/components/card/SimpleText";
import FancyButton from "@/components/FancyButton";
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
    namespace: "RekrutacjaKrokPoKrokuPage",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function RekrutacjaKrokPoKrokuPage({
  params: { locale },
}: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("RekrutacjaKrokPoKrokuPage");

  return (
    <MainWrapper topTitle={t("title")}>
      <Card border="bl">
        <MainTitle>
          Rozpocznij studia w Publicznej Uczelni Zawodowej w Grudziądzu
        </MainTitle>
        <CardImage
          image="/images/rekrutacja-krok-po-kroku/grudziadz2.jpg"
          imageAlt="a"
          imageOrientation="full"
        />
        <SimpleText>
          Publiczna Uczelnia Zawodowa w Grudziądzu to miejsce, w którym możesz
          rozwijać swoje umiejętności i zainteresowania. Uczelnia zlokalizowana
          jest w centrum Grudziądza, posiada przestrzeń do pozyskania
          teoretycznej wiedzy i praktycznych kompetencji, rozwoju kreatywności,
          budowania kariery oraz realizowania projektów.
        </SimpleText>
        <SimpleText>Zapraszamy do przesyłania zgłoszeń.</SimpleText>
        <FancyButton
          icon="/images/icons/MailWhite.svg"
          iconAlt="Mail"
          text="Aplikuj do nas"
          customGradient="bg-gradient-to-br from-brandBrightBlue to-brandNavyBlue"
          link="/elektroniczna-rejestracja-kandydata"
        />
      </Card>

      <Card border="tr">
        <MainTitle>Lista kroków:</MainTitle>
        <CardList
          flexSettings="flex flex-col flex-wrap lg:flex-row gap-24 pt-12 justify-around"
          listItemSettings="max-w-xl"
          listObject={[
            {
              title: "Krok 1 - Wypełnij formularz rekrutacyjny",
              richDescription: (
                <p>
                  Postępowanie kwalifikacyjne na studia pierwszego stopnia na
                  kierunku Mechatronika wymaga wypełnienia formularza
                  rekrutacyjnego.
                </p>
              ),
              icon: "/images/rekrutacja-krok-po-kroku/form.png",
              iconAlt: "a",
            },
            {
              title: "Krok 2 - Uzupełnij i załącz wymagane pliki",
              richDescription: (
                <ol>
                  <li>
                    zdjęcie w postaci elektronicznej (jak do dowodu osobistego)
                    o rozdzielczości co najmniej 492 x 610 pikseli i wielkości
                    maksymalnie 2,5 MB, przesłane jako osobny plik JPG,
                  </li>
                  <li>skan podpisanych oświadczeń kandydata w formacie PDF,</li>
                  <li>
                    skan uzupełnionego i podpisanego podania o przyjęcie na
                    studia w formacie PDF,
                  </li>
                  <li>potwierdzenie wniesienia opłaty rekrutacyjnej.</li>
                </ol>
              ),
              icon: "/images/rekrutacja-krok-po-kroku/attached-file.png",
              iconAlt: "a",
            },
            {
              title: "Krok 3 - Dokonaj opłaty rekrutacyjnej",
              richDescription: (
                <>
                  <p>
                    Kandydat powinien dokonać wpłaty na konto Publicznej Uczelni
                    Zawodowej w Grudziądzu w kwocie 85 zł.
                  </p>
                  <br></br>
                  <p>
                    konto PKO BP<br></br>numer rachunku bankowego:<br></br> 75
                    1020 1462 0000 7902 0441 6327
                  </p>
                </>
              ),
              icon: "/images/rekrutacja-krok-po-kroku/payment-method.png",
              iconAlt: "a",
            },
            {
              title: "Krok 4 - Prześlij formularz",
              richDescription: (
                <p>
                  Ostatni krok do zakończenia postępowania kwalifikacyjnego.
                  Uzupełniony formularz wraz z załączonymi dokumentami (podanie
                  na studia, zdjęcie, oświadczenia i potwierdzenie opłaty)
                  należy przesłać do Uczelnianej Komisji Rekrutacyjnej poprzez
                  opcję „wyślij”. Przed wysłaniem sprawdź dokładnie dane oraz
                  załączone pliki. Kopia wiadomości zostanie również przesłana
                  na adres e-mail, który podany został w formularzu.
                </p>
              ),
              icon: "/images/rekrutacja-krok-po-kroku/submit.png",
              iconAlt: "a",
            },
            {
              title: "Krok 5 - Dostarcz dokumenty",
              richDescription: (
                <>
                  <p>
                    Gratulujemy zdania matury. Teraz należy dokończyć proces
                    rekrutacyjny i dostarczyć dokumenty.
                  </p>
                  <br></br>
                  <FancyButton
                    small
                    link={"/rekrutacja-krok-po-kroku/dostarcz-dokumenty"}
                    text="Sprawdź co powinien zawierać komplet dokumentów"
                  />
                </>
              ),
              icon: "/images/rekrutacja-krok-po-kroku/handover.png",
              iconAlt: "a",
            },
            {
              title: "Krok 6 - Wyniki rekrutacji",
              richDescription: (
                <p>
                  Po zakończonej rekrutacji na adres e-mail podany w formularzu
                  kandydat otrzyma informacje o przyjęciu/nieprzyjęciu na studia
                  oraz ilości zdobytych punktów.
                </p>
              ),
              icon: "/images/rekrutacja-krok-po-kroku/evaluation.png",
              iconAlt: "a",
            },
            {
              title: "Krok 7 - Widzimy się w październiku na uczelni",
              richDescription: (
                <p>
                  Gratulacje!
                  <br></br>Rekrutacja zakończona została pomyślnie, widzimy się
                  w Październiku na I roku studiów.<br></br>Życzymy udanych
                  wakacji.
                </p>
              ),
              icon: "/images/rekrutacja-krok-po-kroku/happy-face.png",
              iconAlt: "aa",
            },
          ]}
        />
      </Card>
    </MainWrapper>
  );
}
