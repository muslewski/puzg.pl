import { Locale } from "@/i18n/routing";
import MainWrapper from "@/components/MainWrapper";
import { useTranslations } from "next-intl";
import { newsKeys } from "@/app/[locale]/(uczelnia)/aktualnosci/page";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Metadata } from "next";
import RichText from "@/components/RichText";
import Card from "@/components/card/Card";
import FancyButton from "@/components/FancyButton";
import { newsData } from "@/app/[locale]/(uczelnia)/aktualnosci/page";
import { CardImages } from "@/components/card/CardImages";
import MainTitle from "@/components/card/MainTitle";
import { CardImage } from "@/components/card/CardImage";
import SimpleText from "@/components/card/SimpleText";

type Props = {
  params: {
    locale: Locale;
    slug: string;
  };
};

type NewsKey = (typeof newsKeys)[number];

function isValidSlug(slug: string): slug is NewsKey {
  return newsKeys.includes(slug as NewsKey);
}

export async function generateMetadata({
  params: { locale, slug },
}: Props): Promise<Metadata> {
  if (isValidSlug(slug)) {
    const t = await getTranslations({
      locale,
      namespace: `AktualnosciPage.news.${slug}`,
    });

    return {
      title: t("title"),
      description: t("metaDescription"),
    };
  } else {
    return {
      title: "Invalid News Item",
      description: "This news item does not exist.",
    };
  }
}

export default function PostPage({ params: { locale, slug } }: Props) {
  // Enable static rendering
  setRequestLocale(locale);
  const tButtons = useTranslations(`AktualnosciPage.news.buttons`);

  if (isValidSlug(slug)) {
    const t = useTranslations(`AktualnosciPage.news.${slug}`);

    const post = newsData[slug];

    return (
      <MainWrapper topTitle={t("title")} zeroGap="gap-12 lg:gap-16">
        <Card border="bl">
          <CardImages
            images={post.imagesSrc}
            imagesAlt={t("imagesAlt").split("|")}
            imagesOrientation={post.imagesOrientation}
          />
          <RichText>{(p) => t.rich(`description`, p)}</RichText>
          <FancyButton
            link="/aktualnosci"
            icon="/images/icons/left-arrow.png"
            iconAlt={tButtons("buttonIconAlt")}
            text={tButtons("buttonText")}
            small
          />
        </Card>
      </MainWrapper>
    );
  } else {
    // Handle invalid slug
    const t = useTranslations(`AktualnosciPage.news.notFound`);

    return (
      <MainWrapper topTitle={t("title")} zeroGap="gap-10 lg:gap-16">
        <Card
          border="tr"
          leftProps={[
            <CardImage
              image="/images/aktualnosci/dog.jpg"
              imageAlt={t("imagesAlt")}
              imageOrientation="landscape"
            />,
          ]}
        >
          <MainTitle>{t("heading")}</MainTitle>
          <SimpleText>{t("description")}</SimpleText>
          <div className="flex gap-12 flex-wrap">
            <FancyButton
              link="/aktualnosci"
              icon="/images/icons/left-arrow.png"
              iconAlt={tButtons("buttonIconAlt")}
              text={tButtons("buttonText")}
              small
            />
            <FancyButton
              text={t("buttonText")}
              icon="/images/icons/home.png"
              iconAlt={t("buttonIconAlt")}
              link="/"
              small
            />
          </div>
        </Card>
      </MainWrapper>
    );
  }
}
