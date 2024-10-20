import NavigationLink from "@/components/nav/NavigationLink";
import { useTranslations } from "next-intl";

export default function Links() {
  const t = useTranslations("Navigation");

  return (
    <div className="flex justify-evenly gap-4 w-full px-14 py-2 bg-brandPrimaryBlue rounded-t-xl rounded-b-[2rem] border-t-2 border-brandDark shadow-md">
      <NavigationLink
        href="/o-nas"
        submenu={[
          { label: "Aktualności", href: "/o-nas" },
          { label: "O Uczelni", href: "/o-nas" },
          { label: "Władze Uczelni", href: "/o-nas" },
        ]}
        submenuWidth={7}
      >
        Uczelnia
      </NavigationLink>
      <NavigationLink
        href="/o-nas"
        submenu={[
          { label: "Dziekanat", href: "/o-nas" },
          { label: "Regulamin studiów", href: "/o-nas" },
          { label: "Organizacja roku akademickiego", href: "/o-nas" },
          { label: "Kierunki studiów", href: "/o-nas" },
          { label: "Program studiów", href: "/o-nas" },
          { label: "Jakość kształcenia", href: "/o-nas" },
        ]}
        submenuWidth={9}
      >
        Student
      </NavigationLink>
      <NavigationLink
        href="/o-nas"
        submenu={[
          { label: "Oferty pracy", href: "/o-nas" },
          {
            label: "Zasady tworzenia, prowadzenia i likwidacji studiów",
            href: "/o-nas",
          },
          { label: "Ustawy i rozporządzenia MNiSW", href: "/o-nas" },
        ]}
        submenuWidth={9}
      >
        Pracownik
      </NavigationLink>
      <NavigationLink
        href="/o-nas"
        submenu={[
          { label: "Rekrutacja krok po kroku", href: "/o-nas" },
          { label: "Elektroniczna rejestracja kandydata", href: "/o-nas" },
          { label: "Akty prawne", href: "/o-nas" },
          { label: "Terminarz rekrutacji", href: "/o-nas" },
          { label: "Limit przyjęć na studia", href: "/o-nas" },
          { label: "Opłata rekrutacyjna", href: "/o-nas" },
        ]}
        submenuWidth={10}
      >
        Rekrutacja
      </NavigationLink>
      <NavigationLink href="/instytut">Instytut</NavigationLink>
      <NavigationLink href="/instytut">Współpraca</NavigationLink>
      <NavigationLink href="/instytut">Kontakt</NavigationLink>
    </div>
  );
}
