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
        <Card grayCard grayCardPosition="left">
          <CardList
            simpleList={[
              {
                richText: <h2 className="h3fake">{t("itemTitle-1")}</h2>,
                richDescription: (
                  <>
                    <SimpleText>
                      {t("text-1")}{" "}
                      <a href="https://puzg.pl">https://puzg.pl</a>.<br />
                      {t("text-2")}
                    </SimpleText>

                    <ul>
                      <li>{t("text-3")}</li>
                      <li>NIP 8762507517</li>
                      <li>REGON 526881565</li>
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
                richText: <h2 className="h3fake">{t("itemTitle-2")}</h2>,
                richDescription: (
                  <>
                    <SimpleText>{t("text-4")}</SimpleText>
                    <SimpleText>
                      {t("text-5")}{" "}
                      <a href="https://puzg.pl">https://puzg.pl</a>{" "}
                      {t("text-6")}
                    </SimpleText>
                    <SimpleText>{t("text-7")}</SimpleText>
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
                richText: <h2 className="h3fake">{t("itemTitle-3")}</h2>,
                richDescription: <SimpleText>{t("text-8")}</SimpleText>,
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
                richText: <h2 className="h3fake">{t("itemTitle-4")}</h2>,
                richDescription: <SimpleText>{t("text-9")}</SimpleText>,
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
                richText: <h2 className="h3fake">{t("itemTitle-5")}</h2>,
                richDescription: (
                  <SimpleText>
                    {t("text-10")} <a href="https://puzg.pl">https://puzg.pl</a>{" "}
                    {t("text-11")}{" "}
                    <a href="https://github.com/muslewski/puzg.pl">
                      https://github.com/muslewski/puzg.pl
                    </a>
                    . {t("text-12")}{" "}
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
                richText: <h2 className="h3fake">{t("itemTitle-6")}</h2>,
                richDescription: (
                  <SimpleText>
                    {t("text-13")}{" "}
                    <a
                      href="mailto:sekretariat@puzg.pl"
                      className="hover:text-gray-500 transition-colors"
                    >
                      sekretariat@puzg.pl
                    </a>
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
                richText: <h2 className="h3fake">{t("itemTitle-7")}</h2>,
                richDescription: (
                  <SimpleText>
                    {t("text-14")}{" "}
                    <a href="https://puzg.pl/polityka-prywatnosci">
                      https://puzg.pl/polityka-prywatnosci
                    </a>
                  </SimpleText>
                ),
                icon: "/images/icons/Book.svg",
                iconAlt: t("iconAlt"),
              },
            ]}
          />
        </Card>
      </div>
    </MainWrapper>
  );
}
