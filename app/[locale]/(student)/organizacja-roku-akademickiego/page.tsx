import Card from "@/components/card/Card";
import SimpleText from "@/components/card/SimpleText";
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
          Rok akademicki 2024/2025 trwa od 1 października 2024 r. do 14 września
          2025 r. i jest podzielony na dwa semestry: zimowy i letni. <br></br>
          Uroczysta inauguracja roku akademickiego odbędzie się 4 października
          2024 r.
        </SimpleText>
      </Card>
    </MainWrapper>
  );
}
