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
    namespace: "TerminarzRekrutacjiPage",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function TerminarzRekrutacjiPage({ params: { locale } }: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("TerminarzRekrutacjiPage");

  return <div>Terminarz Rekrutacji</div>;
}
