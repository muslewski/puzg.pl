import Card from "@/components/card/Card";
import CardVertical from "@/components/card/CardVertical";
import MainTitle from "@/components/card/MainTitle";
import SimpleText from "@/components/card/SimpleText";
import LocalizationIframe from "@/components/LocalizationIframe";
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
    namespace: "UczelnianaKomisjaWyborczaPage",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function PlanZajecPage({ params: { locale } }: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("UczelnianaKomisjaWyborczaPage");

  return (
    <MainWrapper topTitle={t("title")}>
      <CardVertical>
        <Card border="bl">
          <MainTitle>{t("mainTitle")}</MainTitle>
          <ol>
            <li className="h3fake text-base sm:text-lg md:text-xl 3xl:text-2xl font-outfit font-normal text-nowrap">
              <h3 className="h3fakeLess text-wrap">
                Jacek Nalaskowski - {t("text-1")}
              </h3>
            </li>
            <li className="h3fake text-base sm:text-lg md:text-xl 3xl:text-2xl font-outfit font-normal">
              <h3 className="h3fakeLess">Andrzej Neubauer</h3>
            </li>
            <li className="h3fake text-base sm:text-lg md:text-xl 3xl:text-2xl font-outfit font-normal">
              <h3 className="h3fakeLess">Andrzej Michalak</h3>
            </li>
          </ol>
        </Card>
        <Card border="tl">
          <MainTitle>{t("mainTitle2")}</MainTitle>

          <SimpleText>
            {t("text-2")} <br />
            {t("street")} Czarnieckiego 5/7
            <br />
            86-300 Grudziądz
          </SimpleText>
          <LocalizationIframe />
        </Card>
      </CardVertical>
    </MainWrapper>
  );
}
