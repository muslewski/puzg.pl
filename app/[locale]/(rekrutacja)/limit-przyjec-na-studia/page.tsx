import Card from "@/components/card/Card";
import { CardImage } from "@/components/card/CardImage";
import CardList from "@/components/card/CardList";
import MainTitle from "@/components/card/MainTitle";
import SimpleText from "@/components/card/SimpleText";
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
    namespace: "LimitPrzyjecNaStudiaPage",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function LimitPrzyjecNaStudiaPage({
  params: { locale },
}: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("LimitPrzyjecNaStudiaPage");

  return (
    <MainWrapper topTitle={t("title")}>
      <Card border="bl">
        <MainTitle>
          Limit przyjęć na stacjonarne studia pierwszego stopnia dla kierunku
          Mechatronika określony został w Zarządzeniu Rektora.
        </MainTitle>

        <SimpleText>Kształcenie prowadzone będzie w dwóch trybach:</SimpleText>
        <CardList
          iconsSize="h-8 w-8 sm:h-10 sm:w-10"
          simpleList={[
            {
              richText: (
                <p className="h3fakeLess">stacjonarny w trybie standardowym</p>
              ),
              icon: "/images/icons/training.png",
              iconAlt: "a",
            },
            {
              richText: (
                <p className="h3fakeLess">
                  stacjonarny w trybie popołudniowym (dla osób pracujących)
                </p>
              ),
              icon: "/images/icons/sunset.png",
              iconAlt: "a",
            },
          ]}
        />

        <SimpleText>
          Uruchomienie kierunku studiów nastąpi pod warunkiem zakwalifikowania
          się przynajmniej 25 kandydatów. W przypadku formy studiów w trybie dla
          osób pracujących otwarcie nastąpi przy utworzeniu grupy składającej
          się co najmniej z 18 kandydatów.
        </SimpleText>

        <CardImage
          image="/images/limit-przyjec-na-studia/students-happy.jpg"
          imageAlt="a"
          imageOrientation="full"
        />
      </Card>
    </MainWrapper>
  );
}
