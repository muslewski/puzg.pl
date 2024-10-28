import HomeArrow from "@/components/HomeArrow";
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
        <div className="rounded-b-[40%] relative w-full h-[40vh] md:h-[50vh] lg:h-[66vh] xl:h-[75vh] overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/95 before:to-transparent before:z-10">
          <Image
            src="/images/home/grudziadz2.jpeg"
            fill
            alt="Tło przedstawiające miasto Grudziądz"
            priority
            className="object-cover"
          />
          <div className="absolute left-0 bottom-0 flex items-center justify-center z-20 h-44 md:h-52 lg:h-64 xl:h-80 3xl:h-96 sm:max-w-[90%] px-16 sm:px-24 md:px-32 lg:px-36 xl:px-52 3xl:px-72 bg-gradient-to-r from-transparent via-white/75 to-white rounded-tr-[100px] sm:rounded-tr-[200px]">
            <h1 className="text-brandDark font-bold text-3xl md:text-4xl xl:text-5xl 3xl:text-6xl md:leading-snug xl:leading-snug 3xl:leading-snug drop-shadow-md">
              <span className="hidden sm:flex">
                Twoja edukacyjna podróż
                <br /> zaczyna się tutaj!
              </span>
              <span className="flex sm:hidden">
                Twoja podróż
                <br />
                zaczyna się tutaj!
              </span>
            </h1>
          </div>
        </div>

        <div className="absolute left-[40%] sm:left-[52%] -bottom-40 z-20">
          <HomeArrow />
        </div>
      </div>
    </main>
  );
}
