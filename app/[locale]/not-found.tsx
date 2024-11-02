import MainWrapper from "@/components/MainWrapper";
import TopTitle from "@/components/TopTitle";
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
    <MainWrapper>
      <TopTitle>{t("title")}</TopTitle>

      <div className="w-4/5 flex flex-col gap-12">
        <div className="flex flex-col gap-6">
          <h2>{t("h1")}</h2>
          <p>{t("description")}</p>
        </div>
        <Link href="/">Strona Główna</Link>
      </div>
    </MainWrapper>
  );
}
