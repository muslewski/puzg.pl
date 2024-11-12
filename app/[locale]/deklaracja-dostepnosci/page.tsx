import Card from "@/components/card/Card";
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
    namespace: "DeklaracjaDostepnosciPage",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function PolitykaPrywatnosciPage({ params: { locale } }: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("DeklaracjaDostepnosciPage");

  return (
    <MainWrapper topTitle={t("title")}>
      <Card grayCard grayCardPosition="left">
        <SimpleText>
          Publiczna Uczelnia Zawodowa w Grudziądzu zobowiązuje się zapewnić
          dostępność swojej strony internetowej zgodnie z przepisami ustawy z
          dnia 4 kwietnia 2019 r. o dostępności cyfrowej stron internetowych i
          aplikacji mobilnych podmiotów publicznych.
        </SimpleText>
        <SimpleText>
          Deklaracja dostępności dotyczy strony internetowej{" "}
          <a
            href="https://puzg.pl"
            className="hover:text-gray-500 transition-colors"
          >
            https://puzg.pl
          </a>
          .
        </SimpleText>
      </Card>

      <Card border="bl">
        <MainTitle>Daty i status</MainTitle>
        <ul>
          <li>Data publikacji strony internetowej: 2015 r.</li>
          <li>Data ostatniej istotnej aktualizacji: 2024-11-17</li>
          <li>
            Status pod względem zgodności z ustawą: Strona internetowa jest
            częściowo zgodna z ustawą o dostępności cyfrowej stron internetowych
            i aplikacji mobilnych podmiotów publicznych z powodu niezgodności
            lub wyłączeń wymienionych poniżej.
          </li>
        </ul>
      </Card>

      <Card border="tl">
        <MainTitle>Treści niedostępne</MainTitle>
        <ul>
          <li>Niektóre zdjęcia nie posiadają tekstów alternatywnych</li>
          <li>Część dokumentów PDF nie jest dostępna cyfrowo</li>
          <li>
            Niektóre formularze nie posiadają odpowiednich etykiet i opisów pól
          </li>
        </ul>

        <MainTitle>Wyłączenia</MainTitle>
        <ul>
          <li>Mapy są wyłączone z obowiązku zapewniania dostępności</li>
          <li>
            Dokumenty archiwalne opublikowane przed 23 września 2018 r. nie są
            dostępne cyfrowo
          </li>
          <li>
            Multimedia opublikowane przed 23 września 2020 r. nie posiadają
            napisów dla osób niesłyszących i Głuchych
          </li>
        </ul>
      </Card>

      <Card grayCard grayCardPosition="right">
        <MainTitle>Przygotowanie deklaracji dostępności</MainTitle>
        <ul>
          <li>Data sporządzenia deklaracji: 2024-11-12</li>
          <li>Data ostatniego przeglądu deklaracji: 2024-11-12</li>
          <li>
            Deklarację sporządzono na podstawie samooceny przeprowadzonej przez
            podmiot publiczny
          </li>
        </ul>
      </Card>

      <Card border="bl">
        <MainTitle>Informacje zwrotne i dane kontaktowe</MainTitle>
        <SimpleText>
          W przypadku problemów z dostępnością strony internetowej prosimy o
          kontakt z Działem IT PUZG w Grudziądzu:
        </SimpleText>
        <ul>
          <li>
            e-mail:{" "}
            <a
              href="mailto:sekretariat@puzg.pl"
              className="hover:text-gray-500 transition-colors"
            >
              sekretariat@puzg.pl
            </a>
          </li>
          <li>
            telefon:{" "}
            <a
              href="tel:+48 576-060-123"
              className="hover:text-gray-500 transition-colors"
            >
              +48 576-060-123
            </a>
          </li>
        </ul>
        <SimpleText>
          Tą samą drogą można składać wnioski o udostępnienie informacji
          niedostępnej oraz składać skargi na brak zapewnienia dostępności.
        </SimpleText>

        <MainTitle>Procedura wnioskowo-skargowa</MainTitle>
        <SimpleText>
          Każdy ma prawo do wystąpienia z żądaniem zapewnienia dostępności
          cyfrowej strony internetowej, aplikacji mobilnej lub jakiegoś ich
          elementu. Można także zażądać udostępnienia informacji w formie
          alternatywnej, na przykład przez odczytanie niedostępnego cyfrowo
          dokumentu, opisanie zawartości filmu bez audiodeskrypcji itp.
        </SimpleText>

        <SimpleText>Żądanie powinno zawierać:</SimpleText>
        <ul>
          <li>dane osoby zgłaszającej</li>
          <li>wskazanie strony lub elementu strony, której dotyczy żądanie</li>
          <li>sposób kontaktu</li>
          <li>preferowany sposób udostępnienia informacji, jeśli dotyczy</li>
        </ul>

        <SimpleText>
          Uczelnia zrealizuje żądanie niezwłocznie i nie później niż w ciągu 7
          dni. Jeżeli dotrzymanie tego terminu nie jest możliwe, niezwłocznie
          poinformuje o tym, kiedy realizacja żądania będzie możliwa, przy czym
          termin ten nie może być dłuższy niż 2 miesiące. Jeżeli zapewnienie
          dostępności nie jest możliwe, zaproponujemy alternatywny sposób
          dostępu do informacji.
        </SimpleText>

        <SimpleText>
          W przypadku odmowy zapewnienia dostępności cyfrowej wskazanej w
          żądaniu, można złożyć skargę. Po wyczerpaniu procedury skargowej można
          także złożyć wniosek do Rzecznika Praw Obywatelskich.
        </SimpleText>
      </Card>

      <Card border="tl">
        <MainTitle>Dostępność architektoniczna</MainTitle>
        <SimpleText>
          Siedziba główna PUZ w Grudziądzu znajduje się przy ul. [ADRES].
        </SimpleText>
        <ul>
          <li>
            Budynek jest wyposażony w podjazd dla wózków przy wejściu głównym
          </li>
          <li>Na parterze znajduje się punkt informacyjny</li>
          <li>Dostępna jest winda obsługująca wszystkie kondygnacje</li>
          <li>
            W budynku znajdują się toalety przystosowane dla osób z
            niepełnosprawnościami
          </li>
          <li>
            Przed budynkiem wyznaczono miejsca parkingowe dla osób z
            niepełnosprawnościami
          </li>
          <li>
            Do budynku i wszystkich jego pomieszczeń można wejść z psem
            asystującym i psem przewodnikiem
          </li>
        </ul>
      </Card>

      <Card border="bl">
        <MainTitle>Dostępność komunikacyjno-informacyjna</MainTitle>
        <ul>
          <li>
            W uczelni można skorzystać z tłumacza polskiego języka migowego
            (PJM) online
          </li>
          <li>Usługa tłumacza jest dostępna w godzinach pracy uczelni</li>
          <li>
            W budynku znajdują się pętle indukcyjne w wybranych salach
            wykładowych
          </li>
          <li>
            Istnieje możliwość załatwienia spraw przez telefon, e-mail lub
            poprzez osobisty kontakt z pracownikiem administracyjnym
          </li>
        </ul>
      </Card>
    </MainWrapper>
  );
}
