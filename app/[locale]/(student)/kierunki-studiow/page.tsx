import Card from "@/components/card/Card";
import CardHorizontal from "@/components/card/CardHorizontal";
import { CardImage } from "@/components/card/CardImage";
import CardList from "@/components/card/CardList";
import MainTitle from "@/components/card/MainTitle";
import SimpleText from "@/components/card/SimpleText";
import MainWrapper from "@/components/MainWrapper";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale },
}: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "KierunkiStudiowPage" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function KierunkiStudiowPage({ params: { locale } }: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("KierunkiStudiowPage");

  return (
    <MainWrapper topTitle={t("title")}>
      <Card border="bl">
        <MainTitle>{t("mainTitle")}</MainTitle>
        <CardList
          iconsSize="h-8 w-8 sm:h-12 sm:w-12"
          flexSettings="flex-row gap-x-32 gap-y-16 flex-wrap lg:justify-around"
          simpleList={[
            {
              icon: "/images/kierunki-studiow/certificateIcon.png",
              iconAlt: t("listItemAlt-1"),
              richText: <h3 className="font-medium">{t("listItemTitle-1")}</h3>,
              description: t("listItemDescription-1"),
            },
            {
              icon: "/images/kierunki-studiow/checklistIcon.png",
              iconAlt: t("listItemAlt-2"),
              richText: <h3 className="font-medium">{t("listItemTitle-2")}</h3>,
              description: t("listItemDescription-2"),
            },
            {
              icon: "/images/kierunki-studiow/learningIcon.png",
              iconAlt: t("listItemAlt-3"),
              richText: <h3 className="font-medium">{t("listItemTitle-3")}</h3>,
              description: t("listItemDescription-3"),
            },
            {
              icon: "/images/kierunki-studiow/number-blockIcon.png",
              iconAlt: t("listItemAlt-4"),
              richText: <h3 className="font-medium">{t("listItemTitle-4")}</h3>,
              description: t("listItemDescription-4"),
            },
            {
              icon: "/images/kierunki-studiow/workerIcon.png",
              iconAlt: t("listItemAlt-5"),
              richText: <h3 className="font-medium">{t("listItemTitle-5")}</h3>,
              description: t("listItemDescription-5"),
            },
            {
              icon: "/images/kierunki-studiow/languageIcon.png",
              iconAlt: t("listItemAlt-6"),
              richText: <h3 className="font-medium">{t("listItemTitle-6")}</h3>,
              description: t("listItemDescription-6"),
            },
          ]}
        />
        <SimpleText>{t("simpleText-1")}</SimpleText>
        <SimpleText>{t("simpleText-2")}</SimpleText>
        <SimpleText>{t("simpleText-3")}</SimpleText>
      </Card>

      <Card border="tr">
        <MainTitle>{t("mainTitle-2")}</MainTitle>

        <CardHorizontal>
          <div className="w-full lg:w-5/12 flex flex-col gap-6 items-center">
            <div className="relative w-full h-[200px] sm:h-[350px] rounded-xl overflow-hidden">
              <Image
                src="/images/kierunki-studiow/mechatronika.png"
                alt={t("imageAlt-1")}
                fill
                sizes="1261px"
                className="object-cover"
              />
            </div>
            <h3>{t("h3-1")}</h3>
          </div>
          <div className="w-full lg:w-5/12 flex flex-col gap-6 items-center">
            <div className="relative w-full h-[200px] sm:h-[350px] rounded-xl overflow-hidden">
              <Image
                src="/images/kierunki-studiow/automatyka.png"
                alt={t("imageAlt-2")}
                fill
                sizes="1261px"
                className="object-cover"
              />
            </div>
            <h3>{t("h3-2")}</h3>
          </div>
        </CardHorizontal>

        <SimpleText>
          <b>{t("h3-2")}</b> - {t("text-1")}
        </SimpleText>
        <SimpleText>
          <b>{t("h3-1")}</b> - {t("text-2")}
        </SimpleText>
      </Card>

      <Card border="tl">
        <MainTitle>{t("mainTitle-3")}</MainTitle>
        <SimpleText>{t("simpleText-4")}</SimpleText>

        <CardList
          richTextColor="bg-gradient-to-br from-brandPrimaryBlue via-brandPrimaryBlue/95 to-brandBrightBlue/65 text-transparent bg-clip-text w-fit"
          iconsSize="h-8 w-8 sm:h-10 sm:w-10"
          simpleList={[
            {
              icon: "/images/kierunki-studiow/factory2Icon.png",
              iconAlt: t("listItemAlt-2-1"),
              richText: <p>{t("text-2-1")}</p>,
            },
            {
              icon: "/images/kierunki-studiow/motorcycleIcon.png",
              iconAlt: t("listItemAlt-2-2"),
              richText: <p>{t("text-2-2")}</p>,
            },
            {
              icon: "/images/kierunki-studiow/factoryIcon.png",
              iconAlt: t("listItemAlt-2-3"),
              richText: <p>{t("text-2-3")}</p>,
            },
            {
              icon: "/images/kierunki-studiow/robotIcon.png",
              iconAlt: t("listItemAlt-2-4"),
              richText: <p>{t("text-2-4")}</p>,
            },
            {
              icon: "/images/kierunki-studiow/analyticIcon.png",
              iconAlt: t("listItemAlt-2-5"),
              richText: <p>{t("text-2-5")}</p>,
            },
          ]}
        />

        <SimpleText>{t("simpleText-5")}</SimpleText>
      </Card>

      <Card
        grayCard
        grayCardPosition="left"
        leftProps={[
          <CardImage
            key={0}
            image="/images/kierunki-studiow/blueInformatic.jpg"
            imageOrientation="square"
            imageAlt={t("cardImageAlt")}
          />,
        ]}
      >
        <MainTitle>{t("mainTitle-4")}</MainTitle>
        <SimpleText>{t("simpleText-6")}</SimpleText>
      </Card>
    </MainWrapper>
  );
}
