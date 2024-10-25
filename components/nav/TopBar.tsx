import Hamburger from "@/components/nav/Hamburger";
import SearchBox from "@/components/nav/SearchBox";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function TopBar({
  active,
  setActive,
}: {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const t = useTranslations("TopBar");

  return (
    <div className="w-full flex gap-5 flex-col lg:flex-row justify-between items-end lg:items-center">
      <div className="flex justify-between items-center w-full lg:w-fit gap-6">
        <Link
          href="/"
          title={t("homeLinkTitle")}
          className="flex items-center gap-3 lg:gap-6 h-16 transition-transform  active:scale-[1.03]"
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
          <div className="relative w-[48px] h-[50px] sm:w-[62px] sm:h-[64px] min-w-[48px] min-h-[50px]">
            <Image
              src="/images/Logo.svg"
              fill
              sizes="62px"
              alt={t("logoAlt")}
              className="object-contain brightness-0 invert lg:filter-none"
            />
          </div>
          <h3 className="font-outfit text-base sm:text-xl font-normal text-white lg:text-brandDark max-w-48 sm:max-w-56 ">
            {t("home")}
          </h3>
        </Link>

        <Hamburger active={active} setActive={setActive} />
      </div>

      <SearchBox placeholderText={t("search")} buttonText={t("searchButton")} />
    </div>
  );
}
