import Card from "@/components/card/Card";
import { CardImage } from "@/components/card/CardImage";
import ContactData from "@/components/card/ContactData";
import PersonalData from "@/components/card/PersonalData";
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
        border="bl"
        leftProps={[
          <CardImage
            key={0}
            image="/images/wladze-uczelni/rektor.jpg"
            imageAlt={t("imageAlt-1")}
            imageOrientation="portrait"
            customImageBorder="border-8 border-brandPrimaryBlue border-double"
          />,
        ]}
        customWrapperWidth="lg:w-3/4"
      >
        <PersonalData
          personalData={{
            title: t("dataTitle-1"),
            fullData: t("dataDesc-1"),
          }}
        />
        <ContactData
          contactData={{
            mail: "michal.sojka@puzg.pl",
            phone: "+48 123 456 789",
          }}
        />
      </Card>

      <Card
        border="tr"
        leftProps={[
          <CardImage
            key={0}
            image="/images/wladze-uczelni/kwestor.jpg"
            imageAlt={t("imageAlt-2")}
            imageOrientation="portrait"
            customImageBorder="border-8 border-brandPrimaryBlue border-double"
          />,
        ]}
        customWrapperWidth="lg:w-3/4"
      >
        <PersonalData
          personalData={{
            title: t("dataTitle-2"),
            fullData: t("dataDesc-2"),
          }}
        />
        <ContactData
          contactData={{
            mail: "malgorzata.kosinska@puzg.pl",
            phone: "+48 123 456 789",
          }}
        />
      </Card>

      <Card
        border="tl"
        leftProps={[
          <CardImage
            key={0}
            image="/images/wladze-uczelni/kanclerz.jpg"
            imageAlt={t("imageAlt-3")}
            imageOrientation="portrait"
            customImageBorder="border-8 border-brandPrimaryBlue border-double"
          />,
        ]}
        customWrapperWidth="lg:w-3/4"
      >
        <PersonalData
          personalData={{ title: t("dataTitle-3"), fullData: t("dataDesc-3") }}
        />
        <ContactData
          contactData={{ mail: "artur.mach@puzg.pl", phone: "+48 123 456 789" }}
        />
      </Card>
    </MainWrapper>
  );
}
