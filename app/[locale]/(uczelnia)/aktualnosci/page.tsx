import { use } from "react";
import MainWrapper from "@/components/MainWrapper";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import RichText from "@/components/RichText";
import NewsList from "@/components/news/NewsList";
import { newsData, newsKeys } from "@/data/newsItems";
import { ImageOrientation } from "@/components/card/Card";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;

  const {
    locale
  } = params;

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

export default function AktualnosciPage(props: Props) {
  const params = use(props.params);

  const {
    locale
  } = params;

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
    <MainWrapper
      topTitle={t("title")}
      eyebrow={t("hero.eyebrow")}
      description={t("description")}
      heroVariant="image"
      heroImage={t("hero.image")}
      heroImageAlt=""
      zeroGap="gap-8 lg:gap-8 pt-12 sm:pt-16 lg:pt-20 pb-12"
    >
      <NewsList news={news} buttonText={t("button")} />
    </MainWrapper>
  );
}
