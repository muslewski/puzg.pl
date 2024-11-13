import Card from "@/components/card/Card";
import CardList from "@/components/card/CardList";
import CardVertical from "@/components/card/CardVertical";
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
      <CardVertical>
        <Card grayCard grayCardPosition="left">
          <CardList
            simpleList={[
              {
                richText: <h2 className="h3fake">{t("h2-1")}</h2>,
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                icon: "/images/icons/Book.svg",
                iconAlt: t("bookIconAlt"),
              },
            ]}
          />
        </Card>

        <Card grayCard grayCardPosition="right">
          <CardList
            simpleList={[
              {
                richText: <h2 className="h3fake">{t("h2-2")}</h2>,
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                icon: "/images/icons/Book.svg",
                iconAlt: t("bookIconAlt"),
              },
            ]}
          />
        </Card>

        <Card grayCard grayCardPosition="left">
          <CardList
            simpleList={[
              {
                richText: <h2 className="h3fake">{t("h2-3")}</h2>,
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                icon: "/images/icons/Book.svg",
                iconAlt: t("bookIconAlt"),
              },
            ]}
          />
        </Card>

        <Card grayCard grayCardPosition="right">
          <CardList
            simpleList={[
              {
                richText: <h2 className="h3fake">{t("h2-4")}</h2>,
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                icon: "/images/icons/Book.svg",
                iconAlt: t("bookIconAlt"),
              },
            ]}
          />
        </Card>
      </CardVertical>
    </MainWrapper>
  );
}
