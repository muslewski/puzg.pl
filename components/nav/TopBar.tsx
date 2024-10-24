import Hamburger from "@/components/nav/Hamburger";
import SearchBox from "@/components/nav/SearchBox";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function TopBar() {
  const t = useTranslations("TopBar");

  return (
    <div className="w-full flex gap-5 flex-col lg:flex-row justify-between items-end lg:items-center">
      <div className="flex justify-between items-center w-full lg:w-fit">
        <Link
          href="/"
          title={t("homeLinkTitle")}
          className="flex items-center gap-6 h-16 transition-transform  active:scale-[1.03]"
        >
          <div className="hidden lg:block relative w-[50px] h-[59px]">
            <Image
              src="/images/Herb_Polski.svg"
              fill
              sizes="50px"
              alt={t("emblemAlt")}
              className="object-contain"
            />
          </div>
          <div className="relative w-[62px] h-[64px]">
            <Image
              src="/images/Logo.svg"
              fill
              sizes="62px"
              alt={t("logoAlt")}
              className="object-contain brightness-0 invert lg:filter-none"
            />
          </div>
          <h3 className="font-outfit text-xl font-normal max-w-56 text-white lg:text-brandDark">
            {t("home")}
          </h3>
        </Link>

        <Hamburger />
      </div>

      <SearchBox placeholderText={t("search")} buttonText={t("searchButton")} />
    </div>
  );
}
