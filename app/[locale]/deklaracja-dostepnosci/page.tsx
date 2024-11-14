import Card from "@/components/card/Card";
import MainTitle from "@/components/card/MainTitle";
import SimpleText from "@/components/card/SimpleText";
import MainWrapper from "@/components/MainWrapper";
import RichText from "@/components/RichText";
import SubtleHr from "@/components/SubtleHr";
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
    namespace: "DeklaracjaDostepnosciPage",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function PolitykaPrywatnosciPage({ params: { locale } }: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("DeklaracjaDostepnosciPage");

  return (
    <MainWrapper topTitle={t("title")}>
      <Card grayCard grayCardPosition="left">
        <SimpleText>{t("simpleText")}</SimpleText>
        <SimpleText>
          {t("text-1")}{" "}
          <a
            href="https://puzg.pl"
            className="hover:text-gray-500 transition-colors"
          >
            https://puzg.pl
          </a>
          .
        </SimpleText>
      </Card>

      <Card border="bl">
        <MainTitle>{t("mainTitle-1")}</MainTitle>
        <RichText gap="0rem">{(tags) => t.rich("list-1", tags)}</RichText>
      </Card>

      <Card border="tl">
        <MainTitle>{t("mainTitle-2")}</MainTitle>
        <RichText gap="0rem">{(tags) => t.rich("list-2", tags)}</RichText>

        <SubtleHr />

        <MainTitle>{t("mainTitle-3")}</MainTitle>
        <RichText gap="0rem">{(tags) => t.rich("list-3", tags)}</RichText>
      </Card>

      <Card grayCard grayCardPosition="right">
        <MainTitle>{t("mainTitle-4")}</MainTitle>

        <RichText gap="0rem">{(tags) => t.rich("list-4", tags)}</RichText>
      </Card>

      <Card border="bl">
        <MainTitle>{t("mainTitle-5")}</MainTitle>
        <SimpleText>{t("simpleText-2")}</SimpleText>
        <ul>
          <li>
            e-mail:{" "}
            <a
              href="mailto:sekretariat@puzg.pl"
              className="hover:text-gray-500 transition-colors"
            >
              sekretariat@puzg.pl
            </a>
          </li>
          <li>
            {t("phone")}{" "}
            <a
              href="tel:+48 576-060-123"
              className="hover:text-gray-500 transition-colors"
            >
              +48 576-060-123
            </a>
          </li>
        </ul>
        <SimpleText>{t("simpleText-3")}</SimpleText>
        <SubtleHr />

        <MainTitle>{t("mainTitle-6")}</MainTitle>
        <SimpleText>{t("simpleText-4")}</SimpleText>

        <SimpleText>{t("simpleText-5")}</SimpleText>
        <RichText gap="0rem">{(tags) => t.rich("list-5", tags)}</RichText>

        <SimpleText>{t("simpleText-6")}</SimpleText>

        <SimpleText>{t("simpleText-7")}</SimpleText>
      </Card>

      <Card border="tl">
        <MainTitle>{t("mainTitle-7")}</MainTitle>
        <SimpleText>{t("simpleText-8")} Czarnieckiego 5/7.</SimpleText>

        <RichText gap="0rem">{(tags) => t.rich("list-6", tags)}</RichText>
      </Card>

      <Card border="bl">
        <MainTitle>{t("mainTitle-8")}</MainTitle>
        <RichText gap="0rem">{(tags) => t.rich("list-7", tags)}</RichText>
      </Card>
    </MainWrapper>
  );
}
