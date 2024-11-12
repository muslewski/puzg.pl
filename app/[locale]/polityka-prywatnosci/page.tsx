import Card from "@/components/card/Card";
import CardList from "@/components/card/CardList";
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
    namespace: "PolitykaPrywatnosciPage",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function PolitykaPrywatnosciPage({ params: { locale } }: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("PolitykaPrywatnosciPage");

  return (
    <MainWrapper topTitle={t("title")}>
      <div className="flex flex-col gap-12 lg:gap-28 w-full 2xl:w-4/5 px-6 lg:px-12 2xl:px-0">
        <Card grayCard grayCardPosition="left">
          <CardList
            simpleList={[
              {
                richText: (
                  <h2 className="h3fake">
                    1. Informacje o Administratorze Danych Osobowych
                  </h2>
                ),
                richDescription: (
                  <>
                    <SimpleText>
                      Niniejsza Polityka Prywatności określa zasady
                      przetwarzania i ochrony danych osobowych przekazywanych
                      przez użytkowników w związku z korzystaniem z serwisu
                      internetowego{" "}
                      <a
                        href="https://puzg.pl"
                        className="hover:text-gray-500 transition-colors"
                      >
                        https://puzg.pl
                      </a>
                      . Administratorem danych osobowych jest:
                    </SimpleText>
                    <ul>
                      <li>Publiczna Uczelnia Zawodowa w Grudziądzu</li>
                      <li>NIP 8762507517</li>
                      <li>REGON 526881565</li>
                    </ul>
                  </>
                ),
                icon: "/images/icons/Book.svg",
                iconAlt: "a",
              },
            ]}
          />
        </Card>

        <Card grayCard grayCardPosition="right">
          <CardList
            simpleList={[
              {
                richText: <h2 className="h3fake">2. Dane Osobowe</h2>,
                richDescription: (
                  <>
                    <SimpleText>
                      Zgromadzenie i przetwarzanie danych osobowych użytkowników
                      jest prowadzone zgodnie z obowiązującymi przepisami prawa,
                      w szczególności z Rozporządzeniem Parlamentu Europejskiego
                      i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie
                      ochrony osób fizycznych w związku z przetwarzaniem danych
                      osobowych i w sprawie swobodnego przepływu takich danych
                      (RODO).
                    </SimpleText>
                    <SimpleText>
                      Nie zbieramy żadnych danych osobowych przekazywanych na
                      stronie internetowej{" "}
                      <a
                        href="https://puzg.pl"
                        className="hover:text-gray-500 transition-colors"
                      >
                        https://puzg.pl
                      </a>{" "}
                      bez wyraźnej zgody użytkownika.
                    </SimpleText>
                    <SimpleText>
                      Nasza strona jest wyposażona w certyfikat SSL, co oznacza,
                      że wszystkie przekazywane informacje są szyfrowane i
                      chronione przed dostępem osób nieupoważnionych.
                    </SimpleText>
                  </>
                ),
                icon: "/images/icons/Book.svg",
                iconAlt: "a",
              },
            ]}
          />
        </Card>

        <Card grayCard grayCardPosition="left">
          <CardList
            simpleList={[
              {
                richText: (
                  <h2 className="h3fake">
                    3. Cel i Zakres Przetwarzania Danych Osobowych
                  </h2>
                ),
                richDescription: (
                  <SimpleText>
                    Jeśli użytkownik dobrowolnie poda nam swoje dane osobowe (na
                    przykład w formularzu kontaktowym lub w celu subskrypcji
                    newslettera), będziemy przetwarzać te dane wyłącznie w celu
                    realizacji określonego celu, o którym zostanie poinformowany
                    w chwili ich zbierania. Dostarczone nam dane osobowe nie
                    będą przekazywane osobom trzecim ani wykorzystywane w celach
                    marketingowych bez wyraźnej zgody użytkownika.
                  </SimpleText>
                ),
                icon: "/images/icons/Book.svg",
                iconAlt: "a",
              },
            ]}
          />
        </Card>

        <Card grayCard grayCardPosition="right">
          <CardList
            simpleList={[
              {
                richText: (
                  <h2 className="h3fake">4. Analiza Danych i Statystyki</h2>
                ),
                richDescription: (
                  <SimpleText>
                    Nasza strona może korzystać z narzędzi do analizy ruchu,
                    takich jak Google Analytics, w celu zbierania anonimowych
                    informacji na temat ruchu na stronie. Te dane są
                    wykorzystywane wyłącznie w celach statystycznych i
                    doskonalenia jakości naszego serwisu. Nie pozwalają one na
                    identyfikację konkretnych użytkowników.
                  </SimpleText>
                ),
                icon: "/images/icons/Book.svg",
                iconAlt: "a",
              },
            ]}
          />
        </Card>
        <Card grayCard grayCardPosition="left">
          <CardList
            simpleList={[
              {
                richText: <h2 className="h3fake">5. Utrzymanie Strony</h2>,
                richDescription: (
                  <SimpleText>
                    Strona{" "}
                    <a
                      href="https://puzg.pl"
                      className="hover:text-gray-500 transition-colors"
                    >
                      https://puzg.pl
                    </a>{" "}
                    jest utrzymywana przy użyciu{" "}
                    <a
                      href="https://vercel.com/"
                      className="hover:text-gray-500 transition-colors"
                    >
                      Vercel Hosting
                    </a>
                    , co zapewnia wysoki poziom bezpieczeństwa i ochrony danych.
                    Vercel oferuje zaawansowane monitorowanie oraz system
                    kontroli wersji, który ułatwia śledzenie zmian i zapobiega
                    ewentualnym incydentom związanym z bezpieczeństwem.
                    Dodatkowo, kod źródłowy strony jest jawny i dostępny pod
                    adresem:{" "}
                    <a
                      href="https://github.com/muslewski/puzg.pl"
                      className="hover:text-gray-500 transition-colors"
                    >
                      https://github.com/muslewski/puzg.pl
                    </a>
                    . Publiczny dostęp do kodu umożliwia przejrzystość oraz
                    wspiera ciągłe doskonalenie strony.{" "}
                  </SimpleText>
                ),
                icon: "/images/icons/Book.svg",
                iconAlt: "a",
              },
            ]}
          />
        </Card>
        <Card grayCard grayCardPosition="right">
          <CardList
            simpleList={[
              {
                richText: <h2 className="h3fake">6. Prawa Użytkowników</h2>,
                richDescription: (
                  <SimpleText>
                    Zgodnie z RODO, użytkownicy mają prawo dostępu do swoich
                    danych osobowych, ich poprawiania, usuwania lub ograniczania
                    przetwarzania, a także prawo do przenoszenia danych oraz
                    wniesienia sprzeciwu wobec przetwarzania danych osobowych.
                    Wszelkie pytania i prośby dotyczące danych osobowych prosimy
                    kierować na adres e-mail:{" "}
                    <a
                      href="mailto:sekretariat@puzg.pl"
                      className="hover:text-gray-500 transition-colors"
                    >
                      sekretariat@puzg.pl
                    </a>
                  </SimpleText>
                ),
                icon: "/images/icons/Book.svg",
                iconAlt: "a",
              },
            ]}
          />
        </Card>
        <Card grayCard grayCardPosition="left">
          <CardList
            simpleList={[
              {
                richText: (
                  <h2 className="h3fake">7. Zmiany w Polityce Prywatności</h2>
                ),
                richDescription: (
                  <SimpleText>
                    Zastrzegamy sobie prawo do zmiany Polityki Prywatności w
                    celu dostosowania jej do zmieniających się potrzeb i
                    przepisów prawnych. Aktualna wersja Polityki Prywatności
                    zawsze będzie dostępna na stronie:{" "}
                    <a
                      href="https://puzg.pl/polityka-prywatnosci"
                      className="hover:text-gray-500 transition-colors"
                    >
                      https://puzg.pl/polityka-prywatnosci
                    </a>
                  </SimpleText>
                ),
                icon: "/images/icons/Book.svg",
                iconAlt: "a",
              },
            ]}
          />
        </Card>
      </div>
    </MainWrapper>
  );
}
