import Card from "@/components/card/Card";
import CardList from "@/components/card/CardList";
import MainTitle from "@/components/card/MainTitle";
import SimpleText from "@/components/card/SimpleText";
import ContactForm from "@/components/form/ContactForm";
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
        <MainTitle>{t("mainTitle")}</MainTitle>
        <SimpleText>{t("simpleText")}</SimpleText>
        <ContactForm />
      </Card>

      <Card border="bl">
        <CardList
          simpleList={[
            {
              icon: "/images/icons/Mail.svg",
              iconAlt: t("iconAlt-1"),
              richText: (
                <span>
                  <b>Email:</b>{" "}
                  <a href="mailto:sekretariat@puzg.pl">sekretariat@puzg.pl</a>
                </span>
              ),
            },
            {
              icon: "/images/icons/Calling.svg",
              iconAlt: t("iconAlt-2"),
              richText: (
                <span>
                  <b>{t("phone")} 1:</b>{" "}
                  <a href="tel:+48 576-060-123">+48 576-060-123</a>
                </span>
              ),
            },
            {
              icon: "/images/icons/Calling.svg",
              iconAlt: t("iconAlt-2"),
              richText: (
                <span>
                  <b>{t("phone")} 2:</b>{" "}
                  <a href="tel:+48 576-060-124">+48 576-060-124</a>
                </span>
              ),
            },
          ]}
        />
      </Card>

      <Card border="tr">
        <MainTitle>{t("mainTitle-2")}</MainTitle>
        <SimpleText>{t("simpleText-2")}</SimpleText>
        <LocalizationIframe />
      </Card>
    </MainWrapper>
  );
}
