import MainWrapper from "@/components/MainWrapper";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import RichText from "@/components/RichText";
import NewsList from "@/components/news/NewsList";
import { newsData, newsKeys } from "@/data/newsItems";
import { ImageOrientation } from "@/components/card/Card";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale },
}: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "AktualnosciPage" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export type newsProps = {
  title: string;
  imagesSrc: string[];
  imagesOrientation: ImageOrientation[];
  imagesAlt: string[];
  description: React.ReactNode;
};

export default function AktualnosciPage({ params: { locale } }: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("AktualnosciPage");

  // Get translation for news component
  const news: newsProps[] = newsKeys.map((key) => {
    const numericKey = Number(key);
    return {
      title: t(`news.${key}.title`),
      imagesSrc: newsData[numericKey].imagesSrc,
      imagesOrientation: newsData[numericKey].imagesOrientation,
      imagesAlt: t(`news.${key}.imagesAlt`).split("|"),
      description: (
        <RichText>{(tags) => t.rich(`news.${key}.description`, tags)}</RichText>
      ),
    };
  });

  return (
    <MainWrapper topTitle={t("title")} zeroGap="gap-8 lg:gap-8">
      <NewsList news={news} buttonText={t("button")} />
    </MainWrapper>
  );
}
