import Card from "@/components/card/Card";
import FancyButton from "@/components/FancyButton";
import MainWrapper from "@/components/MainWrapper";

import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import RichText from "@/components/RichText";

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
  imageAlt: string;
  imageSrc: string;
  description: React.ReactNode;
};

export const newsKeys = ["0", "1", "2", "3"] as const;

export default function AktualnosciPage({ params: { locale } }: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("AktualnosciPage");

  // Get translation for news component
  const news: newsProps[] = newsKeys.map((key) => ({
    title: t(`news.${key}.title`),
    imageSrc: t(`news.${key}.imageSrc`),
    imageAlt: t(`news.${key}.imageAlt`),
    description: (
      <RichText>{(tags) => t.rich(`news.${key}.description`, tags)}</RichText>
    ),
  }));

  return (
    <MainWrapper topTitle={t("title")}>
      {Object.entries(news).map(([key, post], index) => (
        <Card
          border={
            index % 4 === 0
              ? "bl"
              : index % 4 === 1
              ? "tl"
              : index % 4 === 2
              ? "br"
              : "tr"
          }
          key={key}
          mainTitle={post.title}
          richText={post.description}
          richTextWordsLimit={40}
          image={post.imageSrc}
          imageAlt={post.imageAlt}
          customElement={
            <FancyButton
              text="Zobacz Więcej"
              link={{
                pathname: "/aktualnosci/[slug]",
                params: { slug: key },
              }}
            />
          }
        />
      ))}
    </MainWrapper>
  );
}
