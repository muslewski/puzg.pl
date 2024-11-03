import { Locale } from "@/i18n/routing";
import MainWrapper from "@/components/MainWrapper";
import { useTranslations } from "next-intl";
import { newsKeys } from "@/app/[locale]/(uczelnia)/aktualnosci/page";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Metadata } from "next";
import RichText from "@/components/RichText";

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

// Utility function to remove HTML tags
function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "");
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

  if (isValidSlug(slug)) {
    const t = useTranslations(`AktualnosciPage.news.${slug}`);

    console.log(slug);
    return (
      <MainWrapper topTitle={t("title")}>
        <RichText>{(p) => t.rich(`description`, p)}</RichText>
      </MainWrapper>
    );
  } else {
    // Handle invalid slug
    return (
      <MainWrapper topTitle="Invalid News Item">Invalid news item</MainWrapper>
    );
  }
}
