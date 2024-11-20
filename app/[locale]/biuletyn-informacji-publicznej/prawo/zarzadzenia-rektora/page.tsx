import Card from "@/components/card/Card";
import CardHorizontal from "@/components/card/CardHorizontal";
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

export default function BipZarzadzeniaRektoraPage({
  params: { locale },
}: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("BipPage");

  return (
    <MainWrapper topTitle="Zarządzenia Rektora">
      <Card border="bl">
        <SimpleText>
          Akty prawne dotyczące procesu rekrutacji w Publicznej Uczelni
          Zawodowej w Grudziądzu:
        </SimpleText>
        <CardHorizontal>
          <FancyButton
            small
            circle
            text="Z.11.2024.2025"
            outsideLink="/files/akty-prawne/Z.11.2024.2025.pdf"
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
          <FancyButton
            small
            text="Z.12.2024.2025"
            outsideLink="/files/akty-prawne/Z.12.2024.2025.pdf"
            circle
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
          <FancyButton
            small
            text="Z.13.2024.2025"
            outsideLink="/files/akty-prawne/Z.13.2024.2025.pdf"
            circle
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
          <FancyButton
            small
            text="Z.14.2024.2025"
            outsideLink="/files/akty-prawne/Z.14.2024.2025.pdf"
            circle
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
          <FancyButton
            small
            text="Z.15.2024.2025"
            outsideLink="/files/akty-prawne/Z.15.2024.2025.pdf"
            icon="/images/icons/circle.svg"
            circle
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
          <FancyButton
            small
            text="Z.17.2024.2025"
            outsideLink="/files/akty-prawne/Z.17.2024.2025.pdf"
            icon="/images/icons/circle.svg"
            circle
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
          <FancyButton
            small
            text="Z.19.2024.2025"
            outsideLink="/files/akty-prawne/Z.19.2024.2025_z-zalacznikami.pdf"
            icon="/images/icons/circle.svg"
            circle
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
        </CardHorizontal>
      </Card>
    </MainWrapper>
  );
}
