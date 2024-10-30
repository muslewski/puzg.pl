import Card from "@/components/card/Card";
import Hero from "@/components/home/Hero";
import SlideShow from "@/components/home/SlideShow";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale },
}: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "HomePage" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function HomePage({ params: { locale } }: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("HomePage");

  return (
    <main className="flex flex-col items-center">
      <Hero />

      <div className="w-full flex flex-col gap-48 lg:gap-64 items-center">
        <SlideShow />
        <Card mainTitle="Dlaczego warto wybrać naszą uczelnię?" border="bl" />
      </div>
    </main>
  );
}
