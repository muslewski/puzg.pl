import Card from "@/components/card/Card";
import GrayCard from "@/components/card/GrayCard";
import FancyButton from "@/components/FancyButton";
import Hero from "@/components/home/Hero";
import SlideShow, { slideProps } from "@/components/slide/SlideShow";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale },
}: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "HomePage" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function HomePage({ params: { locale } }: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("HomePage");

  // Get translation for SlideShow component
  const slideKeys = ["0", "1", "2", "3"] as const;
  const slides: slideProps[] = slideKeys.map((key) => ({
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
      />

      <div className="w-full flex flex-col gap-32 lg:gap-52 items-center">
        <SlideShow slides={slides} />

        <Card
          mainTitle={t("card1.mainTitle")}
          border="bl"
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

        <GrayCard
          mainTitle={t("grayCard1.mainTitle")}
          simpleText={t("grayCard1.simpleText")}
          customElement={
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d522.5370547032383!2d18.753977153923262!3d53.479048888948526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4702cfd876a65acb%3A0xe6d78eb49d59c1f1!2sCzarnieckiego%205%2F7%2C%2086-300%20Grudzi%C4%85dz!5e0!3m2!1sen!2spl!4v1730317783353!5m2!1sen!2spl"
              width="600"
              height="450"
              className="border-8 rounded-2xl border-brandPrimaryBlue border-double h-64 sm:h-96 w-full xl:w-3/4 shadow-lg"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          }
        />

        <Card
          mainTitle={t("card2.mainTitle")}
          border="tr"
          simpleText={t("card2.simpleText")}
          customElement={
            <FancyButton
              text={t("card2.buttonText")}
              outsideLink="https://login.live.com/oauth20_authorize.srf?client_id=4b3e8f46-56d3-427f-b1e2-d239b2ea6bca&scope=openId+profile+openid+offline_access&redirect_uri=https%3a%2f%2fteams.live.com%2fv2&response_type=code&state=eyJpZCI6IjAxOTI1ZDZjLTNmYTMtN2M4NS1iMmQ1LTAwNWFhNjI3ZjhiMSIsIm1ldGEiOnsiaW50ZXJhY3Rpb25UeXBlIjoicmVkaXJlY3QifX0%3d&response_mode=fragment&nonce=01925d6c-3fa3-7b17-aa06-da3212bc8a36&prompt=select_account&code_challenge=y0y6zPSLzg-tvfpm01abYr4in3HO1t4AoWAgkRt9nHw&code_challenge_method=S256&x-client-SKU=msal.js.browser&x-client-Ver=3.18.0&uaid=01925d6c3fa37766b9a7542c795e6b19&msproxy=1&issuer=mso&tenant=consumers&ui_locales=en-US&client_info=1&epct=PAQABDgEAAADW6jl31mB3T7ugrWTT8pFe0G62luMn0w2_6XEt1koW9BJheFm531kwXsfRrruQirLSUwSDtBF8QpEZZOWRiNvVjJBv3ND1XULEeKstz-7qyz7zqqNtwXY1Xm5lNRlHFaxS2TJDXup2o_iF72V-8XfY0PUAFY-FVsGONRfnqNYcJfdvrdpXzIdkI3itE3iIJG3vyJeUVwTQsjSGHXGDexKFcXgEFRK3V1XbplA1iidMkyAA&jshs=0#"
              icon="/images/teams.png"
              iconAlt="Logo Microsoft Teams"
              customGradient="bg-gradient-to-br from-[#1c1f4a] to-[#7B83EB]"
              borderColor="border-[rgba(22,21,90,0.5)]"
            />
          }
          customGradient="from-[#383d8f]/55 via-[#1c1f4a]/35 to-[#1c1f4a]/0"
          customInsideBorder="border-[#c9d4f2] border-double"
        />
      </div>
    </main>
  );
}
