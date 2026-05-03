import { use } from "react";
import Card from "@/components/card/Card";
import CardList from "@/components/card/CardList";
import MainTitle from "@/components/card/MainTitle";
import FancyButton from "@/components/FancyButton";
import Hero from "@/components/home/Hero";
import LocationCard from "@/components/home/LocationCard";
import NewsCarousel, { NewsSlide } from "@/components/home/NewsCarousel";
import ProgramsPreview from "@/components/home/ProgramsPreview";
import RecruitmentCTA from "@/components/home/RecruitmentCTA";
import TrustStrip from "@/components/home/TrustStrip";
import Image from "next/image";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;

  const {
    locale
  } = params;

  const t = await getTranslations({ locale, namespace: "HomePage" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function HomePage(props: Props) {
  const params = use(props.params);

  const {
    locale
  } = params;

  setRequestLocale(locale);

  const t = useTranslations("HomePage");

  const slideKeys = ["0", "1", "2", "3"] as const;
  const slides: NewsSlide[] = slideKeys.map((key) => ({
    title: t(`slides.${key}.title`),
    description: t(`slides.${key}.description`),
    imageSrc: t(`slides.${key}.imageSrc`),
    imageAlt: t(`slides.${key}.imageAlt`),
  }));

  return (
    <main className="flex flex-col items-center">
      <Hero
        slogan={t.rich("slogan", { br: () => <br /> })}
        sloganMobile={t.rich("sloganMobile", { br: () => <br /> })}
        heroImageAlt={t("heroImageAlt")}
        arrowAlt={t("arrowAlt")}
        eyebrow={t("heroEyebrow")}
        description={t("heroDescription")}
      />

      <div className="relative w-full flex flex-col gap-24 lg:gap-36 items-center pt-20 lg:pt-28">
        {/* News carousel */}
        <NewsCarousel slides={slides} eyebrow={t("slidesEyebrow")} />

        {/* Trust / credibility strip */}
        <TrustStrip />

        {/* Why choose us — existing 3-icon card, kept */}
        <Card border="bl">
          <MainTitle>{t("card1.mainTitle")}</MainTitle>
          <CardList
            multiplyNumber={0.2}
            listObject={[
              {
                title: t("card1.0.title"),
                description: t("card1.0.description"),
                icon: t("card1.0.icon"),
                iconAlt: t("card1.0.iconAlt"),
              },
              {
                title: t("card1.1.title"),
                description: t("card1.1.description"),
                icon: t("card1.1.icon"),
                iconAlt: t("card1.1.iconAlt"),
              },
              {
                title: t("card1.2.title"),
                description: t("card1.2.description"),
                icon: t("card1.2.icon"),
                iconAlt: t("card1.2.iconAlt"),
              },
            ]}
          />
        </Card>

        {/* Programs preview — most important call to action target */}
        <ProgramsPreview />

        {/* Location with rich contact info + map */}
        <LocationCard />

        {/* Final recruitment CTA */}
        <RecruitmentCTA />

        {/* Microsoft Teams — secondary, compact */}
        <section className="w-full 2xl:w-4/5 px-4 sm:px-6 lg:px-12 2xl:px-0">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 rounded-2xl bg-white ring-1 ring-brandWashedBlue/40 px-6 sm:px-8 py-6 sm:py-7 shadow-soft">
            <div className="flex-shrink-0 h-14 w-14 rounded-xl bg-gradient-to-br from-[#1c1f4a] to-[#7B83EB] flex items-center justify-center p-3">
              <Image
                src="/images/icons/teams.png"
                width={36}
                height={36}
                alt="Microsoft Teams"
                className="object-contain"
              />
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <h3 className="!bg-none !text-brandInk font-semibold text-lg">
                {t("card2.mainTitle")}
              </h3>
              <p className="text-sm sm:text-base text-brandInkSoft">
                {t("card2.simpleText")}
              </p>
            </div>
            <div className="flex-shrink-0">
              <FancyButton
                text={t("card2.buttonText")}
                outsideLink="https://teams.microsoft.com/"
                small
                customGradient="bg-gradient-to-br from-[#1c1f4a] to-[#7B83EB]"
                stopAnimation
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
