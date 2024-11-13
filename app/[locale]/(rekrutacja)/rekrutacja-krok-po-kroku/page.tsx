import Card from "@/components/card/Card";
import { CardImage } from "@/components/card/CardImage";
import CardList from "@/components/card/CardList";
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
    namespace: "RekrutacjaKrokPoKrokuPage",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function RekrutacjaKrokPoKrokuPage({
  params: { locale },
}: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("RekrutacjaKrokPoKrokuPage");

  return (
    <MainWrapper topTitle={t("title")}>
      <Card border="bl">
        <MainTitle>{t("mainTitle")}</MainTitle>
        <CardImage
          image="/images/rekrutacja-krok-po-kroku/grudziadz2.jpg"
          imageAlt={t("cardImageAlt")}
          imageOrientation="full"
        />
        <SimpleText>{t("simpleText")}</SimpleText>
        <SimpleText>{t("simpleText-2")}</SimpleText>
        <FancyButton
          icon="/images/icons/MailWhite.svg"
          iconAlt={t("fancyButtonAlt")}
          text={t("fancyButton")}
          customGradient="bg-gradient-to-br from-brandBrightBlue to-brandNavyBlue"
          link="/elektroniczna-rejestracja-kandydata"
        />
      </Card>

      <Card border="tr">
        <MainTitle>{t("mainTitle-2")}</MainTitle>
        <CardList
          flexSettings="flex flex-col flex-wrap lg:flex-row gap-24 pt-12 justify-around"
          listItemSettings="max-w-xl"
          listObject={[
            {
              title: t("listTitle-1"),
              richDescription: (
                <RichText gap="0rem">
                  {(tags) => t.rich("listDesc-1", tags)}
                </RichText>
              ),
              icon: "/images/rekrutacja-krok-po-kroku/form.png",
              iconAlt: t("listAlt-1"),
            },
            {
              title: t("listTitle-2"),
              richDescription: (
                <RichText gap="0rem">
                  {(tags) => t.rich("listDesc-2", tags)}
                </RichText>
              ),
              icon: "/images/rekrutacja-krok-po-kroku/attached-file.png",
              iconAlt: t("listAlt-2"),
            },
            {
              title: t("listTitle-3"),
              richDescription: (
                <RichText gap="0rem">
                  {(tags) => t.rich("listDesc-3", tags)}
                </RichText>
              ),
              icon: "/images/rekrutacja-krok-po-kroku/payment-method.png",
              iconAlt: t("listAlt-3"),
            },
            {
              title: t("listTitle-4"),
              richDescription: (
                <RichText gap="0rem">
                  {(tags) => t.rich("listDesc-4", tags)}
                </RichText>
              ),
              icon: "/images/rekrutacja-krok-po-kroku/submit.png",
              iconAlt: t("listAlt-4"),
            },
            {
              title: t("listTitle-5"),
              richDescription: (
                <>
                  <RichText gap="0rem">
                    {(tags) => t.rich("listDesc-5", tags)}
                  </RichText>
                  <br></br>
                  <FancyButton
                    small
                    link={"/rekrutacja-krok-po-kroku/dostarcz-dokumenty"}
                    text={t("listDesc-5-fancyButton")}
                  />
                </>
              ),
              icon: "/images/rekrutacja-krok-po-kroku/handover.png",
              iconAlt: t("listAlt-5"),
            },
            {
              title: t("listTitle-6"),
              richDescription: (
                <RichText gap="0rem">
                  {(tags) => t.rich("listDesc-6", tags)}
                </RichText>
              ),
              icon: "/images/rekrutacja-krok-po-kroku/evaluation.png",
              iconAlt: t("listAlt-6"),
            },
            {
              title: t("listTitle-7"),
              richDescription: (
                <RichText gap="0rem">
                  {(tags) => t.rich("listDesc-7", tags)}
                </RichText>
              ),
              icon: "/images/rekrutacja-krok-po-kroku/happy-face.png",
              iconAlt: t("listAlt-7"),
            },
          ]}
        />
      </Card>
    </MainWrapper>
  );
}
