import Card from "@/components/card/Card";
import SimpleText from "@/components/card/SimpleText";
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
  const t = await getTranslations({
    locale,
    namespace: "BipPage",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function BipStatutPage({ params: { locale } }: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("BipPage");

  return (
    <MainWrapper topTitle="Statut">
      <Card border="bl">
        <SimpleText>
          Statut Publicznej Uczelni Zawodowej w Grudziądzu:
        </SimpleText>
        <FancyButton
          small
          circle
          text="Statut PUZG"
          outsideLink="/files/STATUT_PUZG.pdf"
          customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
        />
      </Card>
    </MainWrapper>
  );
}
