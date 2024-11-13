import Card from "@/components/card/Card";
import { CardImage } from "@/components/card/CardImage";
import MainTitle from "@/components/card/MainTitle";
import SimpleText from "@/components/card/SimpleText";
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
    namespace: "OplataRekrutacyjnaPage",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function OplataRekrutacyjnaPage({ params: { locale } }: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("OplataRekrutacyjnaPage");

  return (
    <MainWrapper topTitle={t("title")}>
      <Card border="bl">
        <SimpleText>{t("simpleText")}</SimpleText>
        <MainTitle>{t("mainTitle")}</MainTitle>
        <SimpleText>
          <RichText gap="0rem">
            {(tags) => t.rich("simpleText-2", tags)}
          </RichText>
        </SimpleText>
        <ul className="-mt-4">
          <li>{t("li-1")}</li>
          <li>{t("li-2")}</li>
        </ul>

        <SimpleText>
          <RichText gap="0rem">
            {(tags) => t.rich("simpleText-3", tags)}
          </RichText>
        </SimpleText>

        <CardImage
          image="/images/oplata-rekrutacyjna/online-payment.jpg"
          imageAlt={t("cardImageAlt")}
          imageOrientation="full"
        />
      </Card>
    </MainWrapper>
  );
}
