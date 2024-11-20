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
      <div className="flex flex-col gap-12 lg:gap-28 w-full 2xl:w-4/5 px-6 lg:px-12 2xl:px-0 hover:[&_a]:text-gray-500 [&_a]:transition-colors">
        <Card>
          <SimpleText>
            Publiczna Uczelnia Zawodowa w Grudziądzu (dalej "PUZG") przywiązuje
            szczególną wagę do poszanowania prywatności użytkowników serwisu
            internetowego "www.puzg.pl", zwanego dalej "stroną, serwisem". W
            związku z powyższym PUZG wdraża poniższą Politykę Prywatności i
            zachęca każdego użytkownika serwisu do zapoznania się z nią:
          </SimpleText>
        </Card>
        <Card grayCard grayCardPosition="left">
          <CardList
            simpleList={[
              {
                richText: (
                  <h2 className="h3fake">1. Akceptacja Polityki Prywatności</h2>
                ),
                richDescription: (
                  <SimpleText>
                    Korzystając z Portalu użytkownik akceptuje niniejszą
                    Politykę Prywatności.
                  </SimpleText>
                ),
                icon: "/images/icons/Book.svg",
                iconAlt: t("iconAlt"),
              },
            ]}
          />
        </Card>

        <Card grayCard grayCardPosition="right">
          <CardList
            simpleList={[
              {
                richText: (
                  <h2 className="h3fake">2. Gromadzenie Danych Osobowych</h2>
                ),
                richDescription: (
                  <>
                    <SimpleText>
                      Dane osobowe w Portalu mogą być gromadzone poprzez
                      następujące działania:
                    </SimpleText>
                    <ul>
                      <li>
                        zapisywanie w bazie danych informacji podawanych w
                        formularzach zamieszczonych w Portalu,
                      </li>
                      <li>
                        zbieranie w sposób automatyczny informacji podczas
                        korzystania z Portalu:
                        <ul>
                          <li>
                            w logach serwerów oraz Portalu, np. adres IP,
                            żądanie strony wysyłane przez użytkownika, data i
                            godzina żądania, typ przeglądarki, język
                            przeglądarki, dane urządzenia, typ systemu
                            operacyjnego,
                          </li>
                          <li>
                            w plikach "cookies" - niewielkie pliki tekstowe
                            wysyłane przez Portal na urządzenie użytkownika
                            odwiedzającego Portal (np. komputer, smartfon),
                          </li>
                          <li>
                            "Web Storage" - wewnętrzna pamięć przeglądarki
                            internetowej użytkownika.
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </>
                ),
                icon: "/images/icons/Book.svg",
                iconAlt: t("iconAlt"),
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
                    3. Cel Gromadzenia Danych Automatycznie
                  </h2>
                ),
                richDescription: (
                  <>
                    <SimpleText>
                      Informacje zbierane w sposób automatyczny służą do
                      realizacji następujących celów:
                    </SimpleText>
                    <ul>
                      <li>administrowania serwerami i Portalem,</li>
                      <li>
                        zapewnienia bezpieczeństwa oraz ochrony danych i
                        Portalu,
                      </li>
                      <li>
                        zapewnienia świadczenia użytkownikowi określonych usług,
                      </li>
                      <li>utrzymanie sesji użytkownika,</li>
                      <li>
                        zapewnienie prawidłowego działania witryn Portalu w
                        przeglądarce użytkownika,
                      </li>
                      <li>
                        ułatwienia użytkownikowi korzystania z Portalu i
                        dopasowania go do potrzeb użytkownika,
                      </li>
                      <li>
                        zapamiętywania indywidualnych ustawień i preferencji
                        użytkownika,
                      </li>
                      <li>
                        tworzenia statystyk Portalu umożliwiających poznanie
                        oczekiwań użytkowników i rozwój Portalu tak, aby ułatwić
                        dotarcie do najczęściej poszukiwanych informacji (np.
                        poprzez analizę zapytań z wyszukiwarek).
                      </li>
                    </ul>
                  </>
                ),
                icon: "/images/icons/Book.svg",
                iconAlt: t("iconAlt"),
              },
            ]}
          />
        </Card>

        <Card grayCard grayCardPosition="right">
          <CardList
            simpleList={[
              {
                richText: (
                  <h2 className="h3fake">
                    4. Domyślne Ustawienia Przeglądarki
                  </h2>
                ),
                richDescription: (
                  <SimpleText>
                    Przeglądarki internetowe zwykle domyślnie dopuszczają
                    przechowywanie plików "cookies" na urządzeniu użytkownika.
                  </SimpleText>
                ),
                icon: "/images/icons/Book.svg",
                iconAlt: t("iconAlt"),
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
                    5. Przykłady Plików Cookies i Web Storage
                  </h2>
                ),
                richDescription: (
                  <>
                    <SimpleText>
                      Przykładowe rodzaje informacji i ich sposoby
                      przechowywania wykorzystywane w Portalu:
                    </SimpleText>
                    <ul>
                      <li>
                        Pliki "cookies" służące do określenia statystyk
                        popularności stron, ilości odwiedzin i rozkładu
                        odwiedzin w czasie (Google Analytics: _gat, _ga, _gid,
                        __utma, __utmb, __utmc, __utmz, FacebookPixel: _fbp),
                      </li>
                      <li>
                        Pliki "cookies" ustawiane przez serwer aplikacyjny
                        przyznawane przy pierwszej wizycie na Portalu, usuwane
                        po pewnym czasie braku aktywności bądź w wyniku
                        zakończenia ustalonej czynności na Portalu, np.
                        opuszczenie strony, zamknięcie przeglądarki, wylogowanie
                        (PHPSESSID),
                      </li>
                      <li>
                        Pliki "cookies" dedykowane ustawiane przez szablony:
                        <ul>
                          <li>
                            używane do zapamiętania wybranego języka
                            przeglądania Portalu,
                          </li>
                          <li>
                            używane do zapamiętania preferencji, kontrastu
                            (trybu ciemnego),
                          </li>
                          <li>
                            używane do zapamiętania zgody na stosowanych w
                            portalu narzędzi zewnętrznych (Google Analytics,
                            CUX, FacebookPixel).
                          </li>
                        </ul>
                      </li>
                      <li>
                        Pamięć "Web Storage" jest używany do rejestrowania
                        indywidualnych, anonimowych sesji korzystania z serwisu
                        oraz generowania na ich podstawie map cieplnych oraz
                        wskaźników analizy konwersji (CUX):
                        <ul>
                          <li>
                            Zbierane są różne rodzaje informacji pochodzących z
                            przeglądarki użytkownika końcowego. Stanowią
                            minimalny zestaw danych, które są niezbędne do
                            wizualizacji aktywności użytkowników.
                          </li>
                        </ul>
                      </li>
                    </ul>
                    <SimpleText>
                      Gromadzone i przetwarzane informacje obejmują:
                    </SimpleText>
                    <ul>
                      <li>
                        Dane określające wykorzystywane urządzenie:
                        <ul>
                          <li>
                            adres IP urządzenia (dwa ostatnie oktety adresu IPv4
                            są zamieniane wartościami 0, ostatnie 64 bity adresu
                            IPv6 są usuwane, takie rozwiązanie zapewnia, że
                            pełny adres IP nie może zostać zapisany w magazynie
                            pamięci lub pamięci podręcznej),
                          </li>
                          <li>rozdzielczość ekranu urządzenia,</li>
                          <li>obszar treści wyświetlany przez przeglądarkę,</li>
                          <li>głębia kolorów przeglądarki,</li>
                          <li>orientacja ekranu,</li>
                          <li>
                            typ urządzenia (niepowtarzalne identyfikatory
                            urządzenia, system operacyjny, rodzaj przeglądarki),
                          </li>
                          <li>
                            lokalizacja (kraj) bazująca na zanonimizowanym IP,
                          </li>
                          <li>preferowany język wyświetlania strony.</li>
                        </ul>
                      </li>
                      <li>
                        Interakcje użytkownika:
                        <ul>
                          <li>
                            zdarzenia wskaźnika (przemieszczenia, pozycja,
                            kliknięcia, stuknięcia, przeciągnięcia, gesty)
                          </li>
                          <li>
                            wciśnięcia klawiszy (przedstawiane są w postaci
                            zanonimizowanego klucza reprezentującego znaki,
                            liczby, klawisze specjalne).
                          </li>
                        </ul>
                      </li>
                      <li>
                        Dane serwisu:
                        <ul>
                          <li>adresy i domeny stron odsyłających,</li>
                          <li>odwiedzone strony,</li>
                          <li>otwarte i odwiedzone okna,</li>
                          <li>czas trwania aktywnej karty,</li>
                          <li>data, czas, strefa czasowa dostępu do stron.</li>
                        </ul>
                      </li>
                    </ul>
                    <ul>
                      <li></li>
                    </ul>
                  </>
                ),
                icon: "/images/icons/Book.svg",
                iconAlt: t("iconAlt"),
              },
            ]}
          />
        </Card>
        <Card grayCard grayCardPosition="right">
          <CardList
            simpleList={[
              {
                richText: (
                  <h2 className="h3fake">
                    6. Konfiguracja Przeglądarki w Zakresie Cookies
                  </h2>
                ),
                richDescription: (
                  <>
                    <SimpleText>
                      Użytkownik posiada możliwość skonfigurowania własnej
                      przeglądarki internetowej tak, aby całkowicie lub
                      częściowo wyłączyć przechowywanie plików "cookies" na
                      urządzeniu. Wyłączenie przechowywania plików "cookies"
                      może spowodować, że niektóre funkcje Portalu mogą nie
                      działać poprawnie.Jak zablokować pliki
                      "cookies":Użytkownik może zdecydować o zapisywaniu bądź
                      nie plików "cookies" w ustawieniach przeglądarki:
                    </SimpleText>
                    <ul>
                      <li>w przeglądarce Firefox: Opcje {">"} Prywatność,</li>
                      <li>
                        w przeglądarce Chrome: Ustawienia {">"} Ustawienia
                        zaawansowane {">"} Prywatność {">"} Ustawienia treści,
                      </li>
                      <li>
                        w przeglądarce Internet Explorer: Narzędzia {">"} Opcje
                        internetowe {">"} Prywatność (pozwala wybrać różne
                        poziomy ochrony) {">"} Zaawansowane,
                      </li>
                      <li>
                        w przeglądarce Opera: Preferencje {">"} Zaawansowane{" "}
                        {">"} Ciasteczka (pliki "cookies").
                      </li>
                    </ul>
                  </>
                ),
                icon: "/images/icons/Book.svg",
                iconAlt: t("iconAlt"),
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
                    7. Zewnętrzni Operatorzy i Narzędzia Analityczne
                  </h2>
                ),
                richDescription: (
                  <>
                    <SimpleText>
                      Przy korzystaniu z Portalu część danych o użytkowniku może
                      być automatycznie zbierana i przetwarzana przez narzędzia
                      podmiotów zewnętrznych, z których korzysta PUZG. Do celów
                      statystycznych PUZG korzysta z narzędzia Google Analytics,
                      działającego w oparciu o własne pliki "cookies". Polecamy
                      zapoznanie się z Polityką Prywatności Google Analytics:
                      <br></br>
                      https://support.google.com/analytics/answer/6004245?hl=pl.
                      <br></br>
                      Do celów jakościowych PUZG korzysta z aplikacji CUX,
                      działającego w oparciu o własny mechanizm "Web Storage".
                      Polecamy zapoznanie się z Polityką Prywatności CUX:
                      <br></br>
                      https://cux.io/legal/privacy-policy/.
                      <br></br>
                      Do celów marketingowych wykorzystujemy narzędzie Facebook
                      Pixel, które działa w oparciu o własne pliki "cookies".
                      Polecamy zapoznanie się z Polityką Prywatności Facebook
                      Pixel na Stronie:
                      <br></br>
                      https://www.facebook.com/privacy/explanation.
                      <br></br>
                      Dodatkowo wykorzystywane są: wtyczki, przyciski lub inne
                      narzędzia umożliwiające dzielenie się treścią na portalach
                      społecznościowych, takich jak: Facebook i Twitter, filmy z
                      serwisu YouTube i pliki dźwiękowe (podcasty) z serwisu
                      SoundCloud.
                    </SimpleText>
                    <SimpleText>
                      Wyżej wymienione podmioty mogą użyć w ten sposób zebrane
                      informacje do świadczenia usług pomiarów i targetowania
                      reklam. Aby dowiedzieć się więcej o mechanizmach
                      targetowania reklam w internecie oraz mieć możliwość
                      kontroli i wyboru informacji przekazywanych podmiotom
                      trzecim polecamy skorzystać narzędzi
                      http://www.aboutads.info/choices oraz
                      http://www.youronlinechoices.eu.
                    </SimpleText>
                  </>
                ),
                icon: "/images/icons/Book.svg",
                iconAlt: t("iconAlt"),
              },
            ]}
          />
        </Card>
        <Card grayCard grayCardPosition="right">
          <CardList
            simpleList={[
              {
                richText: (
                  <h2 className="h3fake">
                    8. Polityka Prywatności Zewnętrznych Podmiotów
                  </h2>
                ),
                richDescription: (
                  <SimpleText>
                    PUZG nie odpowiada za politykę prywatności podmiotów
                    zewnętrznych między innymi serwisów, do których zamieszcza
                    linki. Użytkownik powinien zapoznać się z zasadami
                    obowiązującymi u tych podmiotów.
                  </SimpleText>
                ),
                icon: "/images/icons/Book.svg",
                iconAlt: t("iconAlt"),
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
                    9. Ochrona Danych Osobowych na Portalu
                  </h2>
                ),
                richDescription: (
                  <SimpleText>
                    PUZG dokłada wszelkich starań, aby chronić Portal wraz z
                    przetwarzanymi na nim danymi, m. in. przed nieuprawnionym
                    dostępem osób trzecich. W tym celu PUZG stosuje fizyczne
                    środki bezpieczeństwa, systemy bezpieczeństwa
                    zabezpieczające dostęp do serwerów i serwisu oraz
                    rozwiązania kryptograficzne. Dane osobowe udostępniane są
                    wyłącznie tym pracownikom oraz podmiotom, którym są one
                    niezbędne do realizacji zadań i są one przetwarzane
                    wyłącznie w celach opisanych w niniejszej Polityce
                    Prywatności.
                  </SimpleText>
                ),
                icon: "/images/icons/Book.svg",
                iconAlt: t("iconAlt"),
              },
            ]}
          />
        </Card>
        <Card grayCard grayCardPosition="right">
          <CardList
            simpleList={[
              {
                richText: (
                  <h2 className="h3fake">10. Administrator Danych Osobowych</h2>
                ),
                richDescription: (
                  <SimpleText>
                    PUZG jest administratorem danych przetwarzanych w związku z
                    korzystaniem z Portalu, z wyłączeniem danych zbieranych
                    przez podmioty zewnętrzne, o których mowa w pkt 8 i 9.
                  </SimpleText>
                ),
                icon: "/images/icons/Book.svg",
                iconAlt: t("iconAlt"),
              },
            ]}
          />
        </Card>
        <Card grayCard grayCardPosition="left">
          <CardList
            simpleList={[
              {
                richText: <h2 className="h3fake">11. Zgodność z RODO</h2>,
                richDescription: (
                  <SimpleText>
                    PUZG przetwarzając dane przestrzega przepisów o ochronie
                    danych osobowych, w tym przepisów rozporządzenia Parlamentu
                    Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016
                    r. w sprawie ochrony osób fizycznych w związku z
                    przetwarzaniem danych osobowych i w sprawie swobodnego
                    przepływu takich danych oraz uchylenia dyrektywy 95/46/WE
                    (tzw. RODO).
                  </SimpleText>
                ),
                icon: "/images/icons/Book.svg",
                iconAlt: t("iconAlt"),
              },
            ]}
          />
        </Card>
        <Card grayCard grayCardPosition="right">
          <CardList
            simpleList={[
              {
                richText: (
                  <h2 className="h3fake">
                    12. Podstawa Prawna Przetwarzania Danych Osobowych
                  </h2>
                ),
                richDescription: (
                  <SimpleText>
                    Dane osobowe użytkowników zabrane w celach opisanych w pkt.
                    3 i 4 niniejszej Polityki Prywatności są przetwarzane na
                    podstawie art. 6 ust. 1 lit. f RODO i będą przetwarzane
                    przez okres niezbędny do realizacji danego celu.
                  </SimpleText>
                ),
                icon: "/images/icons/Book.svg",
                iconAlt: t("iconAlt"),
              },
            ]}
          />
        </Card>
        <Card grayCard grayCardPosition="left">
          <CardList
            simpleList={[
              {
                richText: (
                  <h2 className="h3fake">13. Przekazywanie Danych Osobowych</h2>
                ),
                richDescription: (
                  <SimpleText>
                    Dane osobowe są przekazywane do podmiotów przetwarzających
                    dane w imieniu administratora danych w związku ze
                    świadczeniem usług na rzecz PUZG.
                  </SimpleText>
                ),
                icon: "/images/icons/Book.svg",
                iconAlt: t("iconAlt"),
              },
            ]}
          />
        </Card>
        <Card grayCard grayCardPosition="right">
          <CardList
            simpleList={[
              {
                richText: (
                  <h2 className="h3fake">
                    14. Prawa Użytkowników w Zakresie Danych Osobowych
                  </h2>
                ),
                richDescription: (
                  <>
                    <SimpleText>
                      Użytkownikowi przysługuje prawo do żądania od
                      administratora danych osobowych:
                    </SimpleText>
                    <ul>
                      <li>dostępu do swoich danych osobowych,</li>
                      <li>ich sprostowania,</li>
                      <li>ograniczenia ich przetwarzania,</li>
                      <li>
                        przeniesienia danych do innego administratora danych,
                      </li>
                      <li>wniesienia sprzeciwu.</li>
                    </ul>
                  </>
                ),
                icon: "/images/icons/Book.svg",
                iconAlt: t("iconAlt"),
              },
            ]}
          />
        </Card>
        <Card grayCard grayCardPosition="left">
          <CardList
            simpleList={[
              {
                richText: (
                  <h2 className="h3fake">15. Prawo do Skargi do UODO</h2>
                ),
                richDescription: (
                  <SimpleText>
                    Użytkownikowi przysługuje również prawo do wniesienia skargi
                    do Prezesa Urzędu Ochrony Danych Osobowych jeśli uzna, że
                    przetwarzanie jego danych osobowych narusza przepisy RODO.
                  </SimpleText>
                ),
                icon: "/images/icons/Book.svg",
                iconAlt: t("iconAlt"),
              },
            ]}
          />
        </Card>
        <Card grayCard grayCardPosition="right">
          <CardList
            simpleList={[
              {
                richText: (
                  <h2 className="h3fake">
                    16. Kontakt w Sprawie Danych Osobowych
                  </h2>
                ),
                richDescription: (
                  <>
                    <SimpleText>
                      Informacje i dane do kontaktów w sprawie danych osobowych:
                    </SimpleText>
                    <SimpleText>
                      Administratorem Pani/Pana danych osobowych jest Publiczna
                      Uczelnia Zawodowa w Grudziądzu z siedzibą w Grudziądzu
                      (86-300) przy ul. Kosynierów Gdyńskich 17, adres do
                      korespondencji ul. Czarnieckiego 5/7, 86-300 Grudziądz,
                      NIP 8762507517, REGON 526881565.
                    </SimpleText>
                    <SimpleText>
                      Administrator powołał Inspektora Ochrony Danych, z którym
                      można skontaktować się pod numerem telefonu 726 940 804
                      lub adresem e-mail: iod@puzg.edu.pl. Z Inspektorem Ochrony
                      Danych można kontaktować się we wszystkich sprawach
                      dotyczących przetwarzania danych osobowych oraz
                      korzystania z praw związanych z ich przetwarzaniem.
                    </SimpleText>
                  </>
                ),
                icon: "/images/icons/Book.svg",
                iconAlt: t("iconAlt"),
              },
            ]}
          />
        </Card>

        <Card>
          <SimpleText>
            W przypadku zmiany niniejszej Polityki Prywatności, odpowiednia
            informacja zostanie zamieszczona na tej stronie.
          </SimpleText>
        </Card>
      </div>
    </MainWrapper>
  );
}
