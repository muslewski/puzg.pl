import Card from "@/components/card/Card";
import CardHorizontal from "@/components/card/CardHorizontal";
import { CardImage } from "@/components/card/CardImage";
import MainTitle from "@/components/card/MainTitle";
import MainWrapper from "@/components/MainWrapper";
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
    namespace: "GodzinyDyzurowaniaPage",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function GodzinyDyzurowaniaPage({ params: { locale } }: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("GodzinyDyzurowaniaPage");

  return (
    <MainWrapper topTitle={t("title")}>
      <Card grayCard grayCardPosition="left" customWrapperWidth="w-full">
        <CardHorizontal>
          <div className="lg:w-5/12  flex flex-col gap-6">
            <MainTitle>{t("month-1")}</MainTitle>
            <CardImage
              image="/images/godziny-dyzurowania/godziny-czerwiec.jpg"
              imageAlt={t("cardImage-1")}
              imageOrientation="w-full sm:w-[306px] xl:w-[459px] 3xl:w-[536px] h-[324px] xl:h-[486px] 3xl:h-[567px]"
            />
          </div>
          <div className="lg:w-5/12 flex flex-col gap-6">
            <MainTitle>{t("month-2")}</MainTitle>
            <CardImage
              image="/images/godziny-dyzurowania/godziny-lipiec.jpg"
              imageAlt={t("cardImage-2")}
              imageOrientation="w-full sm:w-[306px] xl:w-[459px] 3xl:w-[536px] h-[324px] xl:h-[486px] 3xl:h-[567px]"
            />
          </div>
        </CardHorizontal>
      </Card>
    </MainWrapper>
  );
}
