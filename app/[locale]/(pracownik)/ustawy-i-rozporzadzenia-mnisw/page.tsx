import Card from "@/components/card/Card";
import CardList from "@/components/card/CardList";
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
  const t = await getTranslations({ locale, namespace: "UstawyMNiSWPage" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function UstawyMNiSWPage({ params: { locale } }: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("UstawyMNiSWPage");

  return (
    <MainWrapper topTitle={t("title")}>
      <div className="flex flex-col gap-12 lg:gap-24 w-full 2xl:w-4/5 px-6 lg:px-12 2xl:px-0">
        <Card grayCard grayCardPosition="left">
          <CardList
            simpleList={[
              {
                richText: (
                  <h2 className="h3fake">
                    Ustawa z dnia 20 lipca 2018 r. - Prawo o szkolnictwie
                    wyższym i nauce
                  </h2>
                ),
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
                  <h2 className="h3fake">
                    Ustawa z dnia 22 grudnia 2015 r. o Zintegrowanym Systemie
                    Kwalifikacji
                  </h2>
                ),
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
                    Rozporządzenie Ministra Nauki i Szkolnictwa Wyższego z dnia
                    27 września 2018 r. w sprawie studiów
                  </h2>
                ),
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
                  <h2 className="h3fake">
                    Rozporządzenie Ministra Nauki i Szkolnictwa Wyższego z dnia
                    12 września 2018 r. w sprawie kryteriów oceny programowej
                  </h2>
                ),
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
