import Card from "@/components/card/Card";
import SimpleText from "@/components/card/SimpleText";
import MainWrapper from "@/components/MainWrapper";
import RichText from "@/components/RichText";
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
    namespace: "OrganizacjaRokuAkademickiegoPage",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function OrganizacjaRokuAkademickiegoPage({
  params: { locale },
}: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("OrganizacjaRokuAkademickiegoPage");

  return (
    <MainWrapper topTitle={t("title")}>
      <Card border="l">
        <SimpleText>
          <RichText>{(tags) => t.rich("simpleText", tags)}</RichText>
        </SimpleText>
      </Card>
    </MainWrapper>
  );
}
