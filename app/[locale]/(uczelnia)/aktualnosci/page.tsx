import Card from "@/components/card/Card";
import FancyButton from "@/components/FancyButton";
import MainWrapper from "@/components/MainWrapper";

import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import RichText from "@/components/RichText";
import NewsList from "@/components/news/NewsList";

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

export type ImageOrientation = "portrait" | "landscape" | "full";

type NewsItem = {
  imagesSrc: string[];
  imagesOrientation: ImageOrientation[];
};

export const newsData: NewsItem[] = [
  {
    imagesSrc: ["/images/aktualnosci/post0.0.jpg"],
    imagesOrientation: ["landscape"],
  },
  {
    imagesSrc: ["/images/aktualnosci/post1.0.png"],
    imagesOrientation: ["portrait"],
  },
  {
    imagesSrc: ["/images/aktualnosci/post2.0.png"],
    imagesOrientation: ["landscape"],
  },
  {
    imagesSrc: [
      "/images/aktualnosci/post3.0.jpg",
      "/images/aktualnosci/post3.1.jpg",
      "/images/aktualnosci/post3.2.jpg",
      "/images/aktualnosci/post3.3.jpg",
    ],
    imagesOrientation: ["landscape", "portrait", "landscape", "portrait"],
  },
  {
    imagesSrc: ["/images/aktualnosci/post4.0.png"],
    imagesOrientation: ["landscape"],
  },
  {
    imagesSrc: [
      "/images/aktualnosci/post5.0.png",
      "/images/aktualnosci/post5.1.png",
    ],
    imagesOrientation: ["portrait", "portrait"],
  },
];

export type newsProps = {
  title: string;
  imagesSrc: string[];
  imagesOrientation: ImageOrientation[];
  imagesAlt: string[];
  description: React.ReactNode;
};

// Add number of posts
export const newsKeys = ["0", "1", "2", "3", "4", "5"] as const;

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
