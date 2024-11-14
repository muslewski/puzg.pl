export interface SearchItem {
  titleKey: string;
  descriptionKey: string;
  href: string;
  category?: string;
}

export const searchItems: SearchItem[] = [
  {
    titleKey: "HomePage.title",
    descriptionKey: "HomePage.description",
    href: "/",
    category: "main",
  },
  {
    titleKey: "AktualnosciPage.title",
    descriptionKey: "AktualnosciPage.description",
    href: "/aktualnosci",
    category: "main",
  },
  {
    titleKey: "OUczelniPage.title",
    descriptionKey: "OUczelniPage.description",
    href: "/o-uczelni",
    category: "main",
  },
  {
    titleKey: "WladzeUczelniPage.title",
    descriptionKey: "WladzeUczelniPage.description",
    href: "/wladze-uczelni",
    category: "main",
  },
  {
    titleKey: "DziekanatPage.title",
    descriptionKey: "DziekanatPage.description",
    href: "/dziekanat",
    category: "student",
  },
  {
    titleKey: "JakoscKsztalceniaPage.title",
    descriptionKey: "JakoscKsztalceniaPage.description",
    href: "/jakosc-ksztalcenia",
    category: "student",
  },
  {
    titleKey: "KierunkiStudiowPage.title",
    descriptionKey: "KierunkiStudiowPage.description",
    href: "/kierunki-studiow",
    category: "student",
  },
  {
    titleKey: "LegitymacjaStudenckaPage.title",
    descriptionKey: "LegitymacjaStudenckaPage.description",
    href: "/legitymacja-studencka",
    category: "student",
  },
  {
    titleKey: "OrganizacjaRokuAkademickiegoPage.title",
    descriptionKey: "OrganizacjaRokuAkademickiegoPage.description",
    href: "/organizacja-roku-akademickiego",
    category: "student",
  },
  {
    titleKey: "PlanZajecPage.title",
    descriptionKey: "PlanZajecPage.description",
    href: "/plan-zajec",
    category: "student",
  },
  {
    titleKey: "ProgramStudiowPage.title",
    descriptionKey: "ProgramStudiowPage.description",
    href: "/program-studiow",
    category: "student",
  },
  {
    titleKey: "RegulaminStudiowPage.title",
    descriptionKey: "RegulaminStudiowPage.description",
    href: "/regulamin-studiow",
    category: "student",
  },
  {
    titleKey: "StypendiaPage.title",
    descriptionKey: "StypendiaPage.description",
    href: "/stypendia",
    category: "student",
  },
  {
    titleKey: "OfertyPracyPage.title",
    descriptionKey: "OfertyPracyPage.description",
    href: "/oferty-pracy",
    category: "employee",
  },
  {
    titleKey: "UstawyMNiSWPage.title",
    descriptionKey: "UstawyMNiSWPage.description",
    href: "/ustawy-i-rozporzadzenia-mnisw",
    category: "employee",
  },
  {
    titleKey: "ZasadyTworzeniaKierunkowStudiowPage.title",
    descriptionKey: "ZasadyTworzeniaKierunkowStudiowPage.description",
    href: "/zasady-tworzenia-prowadzenia-i-likwidacji-kierunkow-studiow",
    category: "employee",
  },
  {
    titleKey: "AktyPrawnePage.title",
    descriptionKey: "AktyPrawnePage.description",
    href: "/akty-prawne",
    category: "recruitment",
  },
  {
    titleKey: "ElektronicznaRejestracjaPage.title",
    descriptionKey: "ElektronicznaRejestracjaPage.description",
    href: "/elektroniczna-rejestracja-kandydata",
    category: "recruitment",
  },
  {
    titleKey: "LimitPrzyjecNaStudiaPage.title",
    descriptionKey: "LimitPrzyjecNaStudiaPage.description",
    href: "/limit-przyjec-na-studia",
    category: "recruitment",
  },
  {
    titleKey: "OplataRekrutacyjnaPage.title",
    descriptionKey: "OplataRekrutacyjnaPage.description",
    href: "/oplata-rekrutacyjna",
    category: "recruitment",
  },
  {
    titleKey: "RekrutacjaKrokPoKrokuPage.title",
    descriptionKey: "RekrutacjaKrokPoKrokuPage.description",
    href: "/rekrutacja-krok-po-kroku",
    category: "recruitment",
  },
  {
    titleKey: "DostarczDokumentyPage.title",
    descriptionKey: "DostarczDokumentyPage.description",
    href: "/rekrutacja-krok-po-kroku/dostarcz-dokumenty",
    category: "recruitment",
  },
  {
    titleKey: "GodzinyDyzurowaniaPage.title",
    descriptionKey: "GodzinyDyzurowaniaPage.description",
    href: "/rekrutacja-krok-po-kroku/godziny-dyzurowania-uczelnianej-komisji-rekrutacyjnej",
    category: "recruitment",
  },
  {
    titleKey: "TerminarzRekrutacjiPage.title",
    descriptionKey: "TerminarzRekrutacjiPage.description",
    href: "/terminarz-rekrutacji",
    category: "recruitment",
  },

  {
    titleKey: "DokumentyDoPobraniaPage.title",
    descriptionKey: "DokumentyDoPobraniaPage.description",
    href: "/dokumenty-do-pobrania",
    category: "elections",
  },
  {
    titleKey: "KomunikatyPage.title",
    descriptionKey: "KomunikatyPage.description",
    href: "/komunikaty",
    category: "elections",
  },
  {
    titleKey: "UchwalyUKWPage.title",
    descriptionKey: "UchwalyUKWPage.description",
    href: "/uchwaly-ukw",
    category: "elections",
  },
  {
    titleKey: "UczelnianaKomisjaWyborczaPage.title",
    descriptionKey: "UczelnianaKomisjaWyborczaPage.description",
    href: "/uczelniana-komisja-wyborcza",
    category: "elections",
  },

  {
    titleKey: "InstytutPage.title",
    descriptionKey: "InstytutPage.description",
    href: "/instytut",
    category: "main",
  },
  {
    titleKey: "WspolpracaPage.title",
    descriptionKey: "WspolpracaPage.description",
    href: "/wspolpraca",
    category: "main",
  },
  {
    titleKey: "KontaktPage.title",
    descriptionKey: "KontaktPage.description",
    href: "/kontakt",
    category: "main",
  },
  {
    titleKey: "PolitykaPrywatnosciPage.title",
    descriptionKey: "PolitykaPrywatnosciPage.description",
    href: "/polityka-prywatnosci",
    category: "main",
  },
  {
    titleKey: "DeklaracjaDostepnosciPage.title",
    descriptionKey: "DeklaracjaDostepnosciPage.description",
    href: "/deklaracja-dostepnosci",
    category: "main",
  },
  {
    titleKey: "BipPage.title",
    descriptionKey: "BipPage.description",
    href: "/biuletyn-informacji-publicznej",
    category: "main",
  },

  {
    titleKey: "AktualnosciPage.news.0.title",
    descriptionKey: "AktualnosciPage.news.0.metaDescription",
    href: "/aktualnosci/0",
    category: "news",
  },
  {
    titleKey: "AktualnosciPage.news.1.title",
    descriptionKey: "AktualnosciPage.news.1.metaDescription",
    href: "/aktualnosci/1",
    category: "news",
  },
  {
    titleKey: "AktualnosciPage.news.2.title",
    descriptionKey: "AktualnosciPage.news.2.metaDescription",
    href: "/aktualnosci/2",
    category: "news",
  },
  {
    titleKey: "AktualnosciPage.news.3.title",
    descriptionKey: "AktualnosciPage.news.3.metaDescription",
    href: "/aktualnosci/3",
    category: "news",
  },
  {
    titleKey: "AktualnosciPage.news.4.title",
    descriptionKey: "AktualnosciPage.news.4.metaDescription",
    href: "/aktualnosci/4",
    category: "news",
  },
  {
    titleKey: "AktualnosciPage.news.5.title",
    descriptionKey: "AktualnosciPage.news.5.metaDescription",
    href: "/aktualnosci/5",
    category: "news",
  },
];
