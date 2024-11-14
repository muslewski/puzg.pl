import Card from "@/components/card/Card";
import CardHorizontal from "@/components/card/CardHorizontal";
import { CardImage } from "@/components/card/CardImage";
import MainTitle from "@/components/card/MainTitle";
import FancyButton from "@/components/FancyButton";
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
  const t = await getTranslations({ locale, namespace: "ProgramStudiowPage" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function ProgramStudiowPage({ params: { locale } }: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("ProgramStudiowPage");

  return (
    <MainWrapper topTitle={t("title")}>
      <Card border="bl">
        <MainTitle>{t("mainTitle")}</MainTitle>
        <div className="flex flex-col gap-6">
          <FancyButton
            small
            text={t("button-1")}
            outsideLink="/files/program-studiow-MS.pdf"
            circle
          />
          <FancyButton
            small
            text={t("button-2")}
            outsideLink="/files/program-studiow-AiSM.pdf"
            circle
          />
        </div>

        <br />

        <CardHorizontal>
          <div className="w-full lg:w-5/12 flex flex-col gap-6">
            <h3>{t("h3-1")}</h3>
            <div className="flex flex-col gap-6">
              <FancyButton
                small
                text={t("button-1")}
                outsideLink="/files/sylabusy-specjalnosc-MS.pdf"
                circle
              />
              <FancyButton
                small
                text={t("button-2")}
                outsideLink="/files/sylabusy-specjalnosc-AiSM.pdf"
                circle
              />
            </div>
          </div>
          <div className="w-full lg:w-5/12 flex flex-col gap-6">
            <h3>{t("h3-2")}</h3>
            <div className="flex flex-col gap-6">
              <FancyButton
                small
                text={t("button-3")}
                outsideLink="/files/efekty-uczenia-mechatronika.pdf"
                circle
              />
            </div>
          </div>
        </CardHorizontal>

        <br />

        <CardImage
          image="/images/program-studiow/plan.jpg"
          imageAlt={t("imageAlt")}
          imageOrientation="full"
        />
      </Card>
    </MainWrapper>
  );
}
