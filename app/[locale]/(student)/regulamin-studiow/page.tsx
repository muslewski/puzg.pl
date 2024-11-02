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
    namespace: "RegulaminStudiowPage",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function RegulaminStudiowPage({ params: { locale } }: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("RegulaminStudiowPage");

  return <MainWrapper topTitle={t("title")}>nothing</MainWrapper>;
}
