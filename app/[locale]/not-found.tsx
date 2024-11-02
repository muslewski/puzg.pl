import Card from "@/components/card/Card";
import MainWrapper from "@/components/MainWrapper";
import { Link } from "@/i18n/routing";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale },
}: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "NotFoundPage" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function NotFound() {
  const t = useTranslations("NotFoundPage");

  return (
    <MainWrapper topTitle={t("title")}>
      <Card border="bl" mainTitle={t("h1")} simpleText={t("description")} />

      <div className="w-4/5 flex flex-col gap-12">
        <div className="flex flex-col gap-6">
          <h2></h2>
          <p></p>
        </div>
        <Link href="/">Strona Główna</Link>
      </div>
    </MainWrapper>
  );
}
