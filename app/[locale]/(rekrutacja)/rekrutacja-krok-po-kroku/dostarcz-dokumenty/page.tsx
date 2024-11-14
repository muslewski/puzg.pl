import Card from "@/components/card/Card";
import CardHorizontal from "@/components/card/CardHorizontal";
import { CardImage } from "@/components/card/CardImage";
import MainTitle from "@/components/card/MainTitle";
import SimpleText from "@/components/card/SimpleText";
import FancyButton from "@/components/FancyButton";
import MainWrapper from "@/components/MainWrapper";
import RichText from "@/components/RichText";
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
    namespace: "DostarczDokumentyPage",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function DostarczDokumentyPage({ params: { locale } }: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("DostarczDokumentyPage");

  return (
    <MainWrapper topTitle={t("title")}>
      <Card border="bl">
        <MainTitle>{t("mainTitle")}</MainTitle>
        <CardImage
          image="/images/dostarcz-dokumenty/graduation.jpg"
          imageAlt={t("cardImageAlt")}
          imageOrientation="full"
        />
        <SimpleText>{t("simpleText-1")}</SimpleText>
        <SimpleText>{t("simpleText-2")}</SimpleText>
        <SimpleText>{t("simpleText-3")}</SimpleText>

        <FancyButton
          text={t("fancyButton")}
          link={
            "/rekrutacja-krok-po-kroku/godziny-dyzurowania-uczelnianej-komisji-rekrutacyjnej"
          }
        />
      </Card>

      <Card border="tr">
        <MainTitle>{t("mainTitle-2")}</MainTitle>

        <RichText gap="1.75rem">{(tags) => t.rich("richText", tags)}</RichText>

        <SimpleText>{t("simpleText-4")}</SimpleText>

        <h3>{t("h3")}</h3>
        <CardHorizontal>
          <FancyButton
            circle
            small
            text={t("fancyButton-2")}
            outsideLink="/files/rekrutacja/dostarcz-dokumenty/pelnomocnictwo-do-zlozenia-dokumentow-w-procesie-rekrutacji.docx"
          />
          <FancyButton
            circle
            small
            text={t("fancyButton-3")}
            outsideLink="/files/rekrutacja/dostarcz-dokumenty/zgoda-rodzicow-na-podjecie-studiow.docx"
          />
        </CardHorizontal>
      </Card>
    </MainWrapper>
  );
}
