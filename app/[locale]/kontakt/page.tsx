import Card from "@/components/card/Card";
import CardList from "@/components/card/CardList";
import MainTitle from "@/components/card/MainTitle";
import SimpleText from "@/components/card/SimpleText";
import Contact from "@/components/form/Contact";
import LocalizationIframe from "@/components/LocalizationIframe";
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
  const t = await getTranslations({ locale, namespace: "KontaktPage" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function KontaktPage({ params: { locale } }: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("KontaktPage");

  return (
    <MainWrapper topTitle={t("title")}>
      <Card customWrapperWidth="w-full" border="l">
        <MainTitle>Formularz kontaktowy</MainTitle>
        <SimpleText>
          Jesteśmy tutaj, aby Ci pomóc. Masz pytania dotyczące naszej oferty lub
          rekrutacji? Skontaktuj się z nami, a z przyjemnością udzielimy
          odpowiedzi na wszystkie Twoje wątpliwości!
        </SimpleText>
        <Contact />
      </Card>

      <Card border="bl">
        <CardList
          simpleList={[
            {
              icon: "/images/icons/Mail.svg",
              iconAlt: "a",
              richText: (
                <span>
                  <b>Email:</b>{" "}
                  <a href="mailto:sekretariat@puzg.pl">sekretariat@puzg.pl</a>
                </span>
              ),
            },
            {
              icon: "/images/icons/Calling.svg",
              iconAlt: "a",
              richText: (
                <span>
                  <b>Telefon 1:</b>{" "}
                  <a href="tel:+48 576-060-123">+48 576-060-123</a>
                </span>
              ),
            },
            {
              icon: "/images/icons/Calling.svg",
              iconAlt: "a",
              richText: (
                <span>
                  <b>Telefon 2:</b>{" "}
                  <a href="tel:+48 576-060-124">+48 576-060-124</a>
                </span>
              ),
            },
          ]}
        />
      </Card>

      <Card border="tr">
        <MainTitle>Gdzie nas znajdziesz?</MainTitle>
        <SimpleText>
          Znajdziesz nas na ulicy Czarnieckiego 5/7 oraz Hoffmanna 1-7, gdzie
          mieści się nasza nowoczesna infrastruktura edukacyjna.
        </SimpleText>
        <LocalizationIframe />
      </Card>
    </MainWrapper>
  );
}
