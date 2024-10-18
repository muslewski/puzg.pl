import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: Props) {
  const t = await getTranslations({ locale, namespace: "HomePage" });

  return {
    title: {
      absolute: t("title"),
    },
    description: t("description"),
  };
}

export default function HomePage({ params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = useTranslations("HomePage");

  return (
    <div className="">
      {t("title")}
      <Link href="/o-nas">{t("about")}</Link>
    </div>
  );
}
