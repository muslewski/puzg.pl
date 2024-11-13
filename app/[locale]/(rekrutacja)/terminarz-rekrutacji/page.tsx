import Card from "@/components/card/Card";
import { CardImage } from "@/components/card/CardImage";
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
    namespace: "TerminarzRekrutacjiPage",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function TerminarzRekrutacjiPage({ params: { locale } }: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("TerminarzRekrutacjiPage");

  return (
    <MainWrapper topTitle={t("title")}>
      <Card border="bl">
        <MainTitle>{t("mainTitle")}</MainTitle>
        <Card border="btlr">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-sm sm:text-base max-w-md">
              {t("text-1")}
            </div>
            <div className="rounded-[20px] bg-[#1B4754] px-4 py-2 text-right text-sm text-white sm:text-base">
              <div>{t("from")} 03.06.2024r.</div>
              <div>{t("to")} 18.08.2024r.</div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex-1 text-sm sm:text-base max-w-md">
              {t("text-2")}
            </div>
            <div className="rounded-[20px] bg-[#1B4754] px-4 py-2 text-right text-sm text-white sm:text-base">
              <div>{t("from")} 01.07.2024r.</div>
              <div>{t("to")} 18.08.2024r.</div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex-1 text-sm sm:text-base max-w-md">
              {t("text-3")}
            </div>
            <div className="rounded-[20px] bg-[#1B4754] px-4 py-2 text-right text-sm text-white sm:text-base">
              <div>19-20.08.2024r.</div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex-1 text-sm sm:text-base max-w-md">
              {t("text-4")}
            </div>
            <div className="rounded-[20px] bg-[#1B4754] px-4 py-2 text-right text-sm text-white sm:text-base">
              <div>{t("from")} 21.08.2024r.</div>
              <div>{t("to")} 20.09.2024r.</div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex-1 text-sm sm:text-base max-w-md">
              {t("text-5")}
            </div>
            <div className="rounded-[20px] bg-[#1B4754] px-4 py-2 text-right text-sm text-white sm:text-base">
              <div>26.09.2024r.</div>
            </div>
          </div>
        </Card>

        <SimpleText>{t("simpleText-1")}</SimpleText>
        <SimpleText>{t("simpleText-2")}</SimpleText>
        <SimpleText>{t("simpleText-3")}</SimpleText>
        <SimpleText>{t("simpleText-4")}</SimpleText>

        <CardImage
          image="/images/terminarz-rekrutacji/calendar.jpg"
          imageAlt={t("cardImageAlt")}
          imageOrientation="full"
        />
      </Card>
    </MainWrapper>
  );
}
