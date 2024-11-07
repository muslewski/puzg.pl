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
        <MainTitle>
          Program studiów kierunku Mechatronika obowiązujący od roku
          akademickiego 2024/2025:
        </MainTitle>
        <div className="flex flex-col gap-6">
          <FancyButton
            small
            text="specjalność Mechatronika Stosowana"
            outsideLink="/files/program-studiow-MS.pdf"
            icon="/images/icons/circle.svg"
            iconAlt="Circle"
          />
          <FancyButton
            small
            text="specjalność Automatyka i Sterowanie Maszyn"
            outsideLink="/files/program-studiow-AiSM.pdf"
            icon="/images/icons/circle.svg"
            iconAlt="Circle"
          />
        </div>

        <br />

        <CardHorizontal>
          <div className="w-full lg:w-5/12 flex flex-col gap-6">
            <h3>Sylabusy:</h3>
            <div className="flex flex-col gap-6">
              <FancyButton
                small
                text="specjalność Mechatronika Stosowana"
                outsideLink="/files/sylabusy-specjalnosc-MS.pdf"
                icon="/images/icons/circle.svg"
                iconAlt="Circle"
              />
              <FancyButton
                small
                text="specjalność Automatyka i Sterowanie Maszyn"
                outsideLink="/files/sylabusy-specjalnosc-AiSM.pdf"
                icon="/images/icons/circle.svg"
                iconAlt="Circle"
              />
            </div>
          </div>
          <div className="w-full lg:w-5/12 flex flex-col gap-6">
            <h3>Efekty uczenia:</h3>
            <div className="flex flex-col gap-6">
              <FancyButton
                small
                text="Kierunek Mechatronika"
                outsideLink="/files/efekty-uczenia-mechatronika.pdf"
                icon="/images/icons/circle.svg"
                iconAlt="Circle"
              />
            </div>
          </div>
        </CardHorizontal>

        <br />

        <CardImage
          image="/images/program-studiow/plan.jpg"
          imageAlt="a"
          imageOrientation="full"
        />
      </Card>
    </MainWrapper>
  );
}
