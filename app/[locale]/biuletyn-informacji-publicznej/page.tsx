import Card from "@/components/card/Card";
import MainTitle from "@/components/card/MainTitle";
import SimpleText from "@/components/card/SimpleText";
import MainWrapper from "@/components/MainWrapper";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";

// import { FaUniversity, FaBookOpen, FaGavel } from "react-icons/fa";
// import { IoMdDocument } from "react-icons/io";
// import { BsFileEarmarkText, BsBuilding } from "react-icons/bs";
// import { MdOutlineAccessibility } from "react-icons/md";
import CardVertical from "@/components/card/CardVertical";

import {
  FaUniversity,
  FaBookOpen,
  FaGavel,
  FaSearch,
  FaFileDownload,
  FaCalendarAlt,
  FaUser,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

import { MdOutlineAccessibility } from "react-icons/md";
import { getDocuments, getLastFiveDocuments } from "@/data/documents";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale },
}: Props): Promise<Metadata> {
  const t = await getTranslations({
    locale,
    namespace: "BipPage",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function PolitykaPrywatnosciPage({ params: { locale } }: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("BipPage");

  const allDocuments = getDocuments();
  const lastFiveDocuments = getLastFiveDocuments(allDocuments);

  const quickAccessItems = [
    {
      icon: <FaUniversity className="w-8 h-8 text-brandPrimaryBlue" />,
      title: "Struktura organizacyjna",
      href: "/biuletyn-informacji-publicznej/uczelnia/struktura",
      description:
        "Poznaj schemat organizacyjny uczelni, wydziały oraz jednostki",
    },
    {
      icon: <FaBookOpen className="w-8 h-8 text-brandPrimaryBlue" />,
      title: "Studia i rekrutacja",
      href: "/biuletyn-informacji-publicznej/studia",
      description: "Informacje o rekrutacji, opłatach i regulaminach",
    },
    {
      icon: <FaGavel className="w-8 h-8 text-brandPrimaryBlue" />,
      title: "Prawo i dokumenty",
      href: "/biuletyn-informacji-publicznej/prawo",
      description: "Statut, uchwały, zarządzenia i regulaminy",
    },
  ];

  const recentUpdates = [
    {
      title: "Nowe zarządzenie rektora",
      date: "15.04.2024",
      category: "Zarządzenia",
      href: "#",
    },
    {
      title: "Aktualizacja regulaminu rekrutacji",
      date: "12.04.2024",
      category: "Rekrutacja",
      href: "#",
    },
    {
      title: "Sprawozdanie finansowe za 2023",
      date: "10.04.2024",
      category: "Finanse",
      href: "#",
    },
  ];

  return (
    <MainWrapper topTitle={t("title")}>
      <CardVertical customGap="gap-24 lg:gap-32">
        <Card border="bl">
          <MainTitle>Witamy w Biuletynie Informacji Publicznej</MainTitle>

          <SimpleText>
            Biuletyn Informacji Publicznej (BIP) Publicznej Uczelni Zawodowej w
            Grudziądzu to urzędowy publikator zapewniający dostęp do informacji
            publicznej. Strona działa w oparciu o ustawę o dostępie do
            informacji publicznej.
          </SimpleText>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {quickAccessItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                className="group p-6 rounded-lg border border-brandWashedBlue/20 
                  hover:border-brandPrimaryBlue/30 transition-all 
                  hover:shadow-lg hover:shadow-brandWashedBlue/10 bg-white"
              >
                <div className="flex flex-col items-center text-center gap-4">
                  {item.icon}
                  <h3
                    className="text-lg font-semibold text-brandDark 
                    group-hover:text-brandPrimaryBlue transition-colors"
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </a>
            ))}
          </div>
          <div className="mb-6">
            <div className="relative">
              <input
                type="search"
                placeholder="Szukaj w BIP..."
                className="w-full p-4 pl-12 rounded-lg border border-brandWashedBlue/20 focus:border-brandPrimaryBlue/30 focus:ring-2 focus:ring-brandPrimaryBlue/20 transition-all"
              />
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </Card>
        <Card
          border="tr"
          customInsideBorder="bg-gradient-to-br from-brandWashedBlue/10"
          customWrapperWidth="w-full"
        >
          <div className="flex items-center justify-between mb-6 gap-12">
            <h3>Ostatnie dokumenty</h3>
            <a
              href="/biuletyn-informacji-publicznej/dostepnosc/dokumenty"
              className="text-sm text-brandPrimaryBlue hover:text-brandBrightBlue"
            >
              Zobacz wszystkie →
            </a>
          </div>
          <div className="space-y-4">
            {lastFiveDocuments.map((doc, index) => (
              <a
                key={index}
                href={`/files/${doc.href}`}
                target="_blank"
                className="flex items-center justify-between p-4 rounded-md 
                    hover:bg-brandWashedBlue/20 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <span className="text-brandPrimaryBlue">{doc.icon}</span>
                  <span
                    className="text-brandDark group-hover:text-brandPrimaryBlue 
                      transition-colors"
                  >
                    {doc.title}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-500">{doc.date}</span>
                  <FaFileDownload className="text-brandPrimaryBlue" />
                </div>
              </a>
            ))}
          </div>
        </Card>

        {/* <Card border="bl" customWrapperWidth="w-full">
          <div className="flex items-center justify-between mb-6">
            <h3>Ostatnie aktualizacje</h3>
            <FaCalendarAlt className="w-5 h-5 text-brandPrimaryBlue" />
          </div>
          <div className="space-y-4">
            {recentUpdates.map((update, index) => (
              <a
                key={index}
                href={update.href}
                className="block p-4 rounded-md hover:bg-brandWashedBlue/20 
                    transition-all group"
              >
                <div className="flex justify-between items-start mb-2 gap-12">
                  <h4
                    className="font-medium group-hover:text-brandPrimaryBlue 
                      transition-colors"
                  >
                    {update.title}
                  </h4>
                  <span className="text-sm text-gray-500">{update.date}</span>
                </div>
                <span
                  className="text-sm text-brandPrimaryBlue bg-brandWashedBlue/20 
                    px-2 py-1 rounded"
                >
                  {update.category}
                </span>
              </a>
            ))}
          </div>
        </Card> */}

        <Card grayCard grayCardPosition="right">
          <div className="flex items-center gap-4 mb-6">
            <MdOutlineAccessibility className="w-8 h-8 text-brandPrimaryBlue" />
            <MainTitle>Dostępność</MainTitle>
          </div>
          <SimpleText>
            Dokładamy wszelkich starań, aby nasza strona BIP była dostępna dla
            wszystkich użytkowników. Strona spełnia wymogi WCAG 2.1 i jest
            dostosowana do potrzeb osób z niepełnosprawnościami.
          </SimpleText>
          <div className="flex gap-4 mt-6">
            <a
              href="/biuletyn-informacji-publicznej/dostepnosc"
              className="inline-block text-brandPrimaryBlue hover:text-brandBrightBlue
                transition-colors"
            >
              Deklaracja dostępności →
            </a>
            <a
              href="/kontakt"
              className="inline-block text-brandPrimaryBlue hover:text-brandBrightBlue
                transition-colors"
            >
              Zgłoś problem z dostępnością →
            </a>
          </div>
        </Card>

        <Card border="tl" customWrapperWidth="w-full">
          <div className="flex items-center gap-4 mb-6">
            <FaUser className="w-6 h-6 text-brandPrimaryBlue" />
            <h3>Redaktor Biuletynu Informacji Publicznej</h3>
          </div>
          <div className="space-y-6">
            <div className="flex flex-col space-y-4 p-6 bg-brandWashedBlue/10 rounded-lg">
              <div className="flex items-center gap-3">
                <FaUser className="w-5 h-5 text-brandPrimaryBlue" />
                <span className="font-medium">mgr Jan Kowalski</span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="w-5 h-5 text-brandPrimaryBlue" />
                <a
                  href="mailto:bip@uczelnia.edu.pl"
                  className="text-brandPrimaryBlue hover:text-brandBrightBlue"
                >
                  bip@puzg.pl
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="w-5 h-5 text-brandPrimaryBlue" />
                <a
                  href="tel:+48123456789"
                  className="text-brandPrimaryBlue hover:text-brandBrightBlue"
                >
                  +48 123 456 789
                </a>
              </div>
            </div>
            <SimpleText>
              Redaktor BIP odpowiada za prowadzenie i aktualizację Biuletynu
              Informacji Publicznej zgodnie z wymogami ustawy o dostępie do
              informacji publicznej.
            </SimpleText>
          </div>
        </Card>
      </CardVertical>
    </MainWrapper>
  );
}
