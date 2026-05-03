import { use } from "react";
import Card from "@/components/card/Card";
import SimpleText from "@/components/card/SimpleText";
import MainWrapper from "@/components/MainWrapper";
import RichText from "@/components/RichText";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;

  const {
    locale
  } = params;

  const t = await getTranslations({
    locale,
    namespace: "OrganizacjaRokuAkademickiegoPage",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function OrganizacjaRokuAkademickiegoPage(props: Props) {
  const params = use(props.params);

  const {
    locale
  } = params;

  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("OrganizacjaRokuAkademickiegoPage");

  return (
    <MainWrapper
      topTitle={t("title")}
      eyebrow={t("hero.eyebrow")}
      description={t("description")}
      heroVariant="image"
      heroImage={t("hero.image")}
      heroImageAlt=""
    >
      <Card border="l">
        <SimpleText>
          <RichText>{(tags) => t.rich("simpleText", tags)}</RichText>
        </SimpleText>
      </Card>
    </MainWrapper>
  );
}
