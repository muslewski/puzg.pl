import Card from "@/components/card/Card";
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
  const t = await getTranslations({ locale, namespace: "WladzeUczelniPage" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function WladzeUczelniPage({ params: { locale } }: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("WladzeUczelniPage");

  return (
    <MainWrapper topTitle={t("title")}>
      <Card
        personalData={{ title: "Rektor", fullData: "dr inż. Michał Sójka" }}
        contactData={{ mail: "michal.sojka@puzg.pl", phone: "+48 123 456 789" }}
        border="bl"
        image="/images/wladze-uczelni/rektor.jpg"
        imageAlt="Zdjęcie Rektora"
        imageOrientation="portrait"
        customWrapperWidth="lg:w-3/4"
        customImageBorder="border-8 border-brandPrimaryBlue border-double"
      />
      <Card
        personalData={{ title: "Kwestor", fullData: "mgr Małgorzata Kosińska" }}
        contactData={{
          mail: "malgorzata.kosinska@puzg.pl",
          phone: "+48 123 456 789",
        }}
        border="tr"
        image="/images/wladze-uczelni/kwestor.jpg"
        imageAlt="Zdjęcie Kwestora"
        imageOrientation="portrait"
        customWrapperWidth="lg:w-3/4"
        customImageBorder="border-8 border-brandPrimaryBlue border-double"
      />
      <Card
        personalData={{ title: "Kanclerz", fullData: "mgr Artur Mach" }}
        contactData={{ mail: "artur.mach@puzg.pl", phone: "+48 123 456 789" }}
        border="tl"
        image="/images/wladze-uczelni/kanclerz.jpg"
        imageAlt="Zdjęcie Kanclerza"
        imageOrientation="portrait"
        customWrapperWidth="lg:w-3/4"
        customImageBorder="border-8 border-brandPrimaryBlue border-double"
      />
    </MainWrapper>
  );
}
