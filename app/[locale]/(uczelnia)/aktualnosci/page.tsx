import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale },
}: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "AboutPage" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function AktualnosciPage({ params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = useTranslations("AboutPage");

  return <div>Aktualności</div>;
}
