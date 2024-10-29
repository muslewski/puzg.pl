import HeroImage from "@/components/home/HeroImage";
import HomeArrow from "@/components/home/HomeArrow";
import HomeTitle from "@/components/home/HomeTittle";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";

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

  return (
    <main>
      <div className="relative rounded-b-[40%] bg-gradient-to-r from-brandPrimaryBlue via-brandBrightBlue/25 to-brandBrightBlue/0 pb-2 pl-1">
        <div className="rounded-b-[40%] relative w-full h-[40vh] md:h-[50vh] lg:h-[66vh] xl:h-[75vh] overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/55 sm:before:from-white/95 before:to-transparent before:z-10">
          <HeroImage />
          <div className="absolute left-0 bottom-0 flex items-center justify-center z-20 h-44 md:h-52 lg:h-64 xl:h-80 3xl:h-96 sm:max-w-[90%] px-12 sm:px-24 md:px-32 lg:px-36 xl:px-52 3xl:px-72 bg-gradient-to-r from-transparent via-white/85 to-white/95 rounded-tr-[100px] sm:rounded-tr-[200px]">
            <HomeTitle />
          </div>
        </div>

        <div className="absolute left-[40%] sm:left-[52%] -bottom-32 xl:-bottom-52 3xl:-bottom-40 z-20 brightness-50">
          <HomeArrow />
        </div>
      </div>
    </main>
  );
}
