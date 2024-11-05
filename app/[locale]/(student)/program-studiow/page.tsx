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
  const t = await getTranslations({ locale, namespace: "ProgramStudiowPage" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function ProgramStudiowPage({ params: { locale } }: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("ProgramStudiowPage");

  return (
    <MainWrapper topTitle={t("title")}>
      <Card
        border="bl"
        mainTitle="Program studiów kierunku Mechatronika obowiązujący od roku akademickiego 2024/2025:"
      />
    </MainWrapper>
  );
}
