export interface MenuItem {
  title: string;
  href?: string;
  items?: MenuItem[];
}

export const bipStructure: MenuItem[] = [
  {
    title: "Uczelnia",
    // href: "/uczelnia",
    items: [
      {
        title: "Władze",
        href: "/uczelnia/wladze",
        items: [
          { title: "Rektor", href: "/uczelnia/wladze/rektor" },
          {
            title: "Prorektor ds. Nauczania i Studentów",
            href: "/uczelnia/wladze/prorektor",
          },
          { title: "Senat", href: "/uczelnia/wladze/senat" },
          { title: "Rada", href: "/uczelnia/wladze/rada" },
        ],
      },
      { title: "Strategie rozwoju", href: "/uczelnia/strategie-rozwoju" },
      { title: "Baza lokalowa i majątek", href: "/uczelnia/baza-lokalowa" },
      {
        title: "Struktura organizacyjna",
        href: "/uczelnia/struktura",
        items: [
          {
            title: "Schemat organizacyjny",
            href: "/uczelnia/struktura/schemat",
          },
          { title: "Wydziały", href: "/uczelnia/struktura/wydzialy" },
          {
            title: "Jednostki ogólnouczelniane",
            href: "/uczelnia/struktura/jednostki",
          },
          { title: "Administracja", href: "/uczelnia/struktura/administracja" },
        ],
      },
      { title: "Skargi i wnioski", href: "/uczelnia/skargi-i-wnioski" },
      { title: "Kontrole", href: "/uczelnia/kontrole" },
      {
        title: "Dane teleadresowe",
        href: "/uczelnia/dane-teleadresowe",
        items: [
          {
            title: "Informacje ogólne",
            href: "/uczelnia/dane-teleadresowe/informacje",
          },
          {
            title: "Notka historyczna o Uczelni",
            href: "/uczelnia/dane-teleadresowe/notka-historyczna",
          },
        ],
      },
    ],
  },
  {
    title: "Studia",
    // href: "/studia",
    items: [
      { title: "Rekrutacja", href: "/studia/rekrutacja" },
      { title: "Opłaty", href: "/studia/oplata" },
      { title: "Regulamin studiów", href: "/studia/regulamin" },
      {
        title: "Regulamin świadczeń dla studentów",
        href: "/studia/regulamin-swiadczen",
      },
      { title: "Samorząd studencki", href: "/studia/samorzad-studencki" },
      {
        title: "Kursy, szkolenia i studia podyplomowe",
        href: "/studia/kursy-i-szkolenia",
      },
    ],
  },
  {
    title: "Prawo",
    // href: "/prawo",
    items: [
      { title: "Statut", href: "/prawo/statut" },
      { title: "Uchwały Senatu", href: "/prawo/uchwaly-senatu" },
      { title: "Zarządzenia Rektora", href: "/prawo/zarzadzenia-rektora" },
      {
        title: "Zarządzenia Dyrektora Administracyjnego",
        href: "/prawo/zarzadzenia-dyrektora",
      },
      { title: "Zarządzenia Kanclerza", href: "/prawo/zarzadzenia-kanclerza" },
      { title: "Kontrola zarządcza", href: "/prawo/kontrola-zarzadcza" },
      { title: "Ochrona danych osobowych", href: "/prawo/ochrona-danych" },
      {
        title: "Informacje dotyczące przetwarzania danych osobowych",
        href: "/prawo/informacje-o-przetwarzaniu-danych",
      },
      { title: "Regulaminy", href: "/prawo/regulaminy" },
    ],
  },
  {
    title: "Zamówienia publiczne",
    // href: "/zamowienia-publiczne",
    items: [
      { title: "Platforma zakupowa", href: "/zamowienia-publiczne/platforma" },
      {
        title: "Zamówienia poniżej 130 000 zł",
        href: "/zamowienia-publiczne/ponizej-130000",
      },
      {
        title: "Zamówienia od 130 000 zł",
        href: "/zamowienia-publiczne/powyzej-130000",
      },
      {
        title: "Zamówienia poniżej 30 tys. euro",
        href: "/zamowienia-publiczne/ponizej-30tys-euro",
      },
      {
        title: "Zamówienia powyżej 30 tys. euro",
        href: "/zamowienia-publiczne/powyzej-30tys-euro",
      },
      {
        title: "Plan zamówień publicznych",
        href: "/zamowienia-publiczne/plan",
      },
      {
        title: "Na sprzedaż",
        href: "/zamowienia-publiczne/na-sprzedaz",
        items: [
          {
            title: "Na sprzedaż - Aktualne",
            href: "/zamowienia-publiczne/na-sprzedaz/aktualne",
          },
          {
            title: "Na sprzedaż - Archiwalne",
            href: "/zamowienia-publiczne/na-sprzedaz/archiwalne",
          },
        ],
      },
      {
        title: "Szacowanie wartości zamówienia",
        href: "/zamowienia-publiczne/szacowanie",
      },
    ],
  },
  {
    title: "Praca",
    // href: "/praca",
    items: [
      { title: "Oferty pracy", href: "/praca/oferty" },
      { title: "Wyniki konkursów", href: "/praca/wyniki-konkursow" },
      { title: "Archiwalne", href: "/praca/archiwalne" },
    ],
  },
  {
    title: "Dostępność",
    // href: "/dostepnosc",
    items: [
      { title: "Deklaracja dostępności", href: "/dostepnosc/deklaracja" },
      {
        title: "Zapewnienie dostępności osobom ze specjalnymi potrzebami",
        href: "/dostepnosc/dostepnosc-osob",
      },
      { title: "Mapa biuletynu", href: "/dostepnosc/mapa" },
      { title: "Lista kanałów RSS", href: "/dostepnosc/rss" },
      { title: "Statystyki podstron", href: "/dostepnosc/statystyki" },
      { title: "Redaktorzy biuletynu", href: "/dostepnosc/redaktorzy" },
      { title: "Jak przeglądać BIP", href: "/dostepnosc/jak-przegladac" },
      { title: "Rejestr zmian stron", href: "/dostepnosc/rejestr-zmian" },
    ],
  },
];
