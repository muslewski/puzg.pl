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
    titleKey: "KierunkiStudiowPage.title",
    descriptionKey: "KierunkiStudiowPage.description",
    href: "/kierunki-studiow",
    category: "student",
  },
  {
    titleKey: "RekrutacjaKrokPoKrokuPage.title",
    descriptionKey: "RekrutacjaKrokPoKrokuPage.description",
    href: "/rekrutacja/krok-po-kroku",
    category: "recruitment",
  },
  // Add more items as needed
];
