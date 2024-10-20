import SearchBox from "@/components/nav/SearchBox";
import { Link } from "@/i18n/routing";
import Image from "next/image";

export default function TopBar() {
  return (
    <div className="w-full flex justify-between items-center">
      <Link
        href="/"
        title="Przejdź na stronę główną"
        className="flex items-center gap-6 h-16"
      >
        <div className="relative w-[50px] h-[59px]">
          <Image
            src="/images/Herb_Polski.svg"
            fill
            sizes="50px"
            alt="Herb Polski"
            className="object-contain"
          />
        </div>
        <div className="relative w-[62px] h-[64px]">
          <Image
            src="/images/Logo.svg"
            fill
            sizes="62px"
            alt="Logo Publicznej Uczelni Zawodowej w Grudziądzu"
            className="object-contain"
          />
        </div>
        <h3 className="font-outfit text-xl font-normal max-w-56 text-brandDark">
          Publiczna Uczelnia Zawodowa w Grudziądzu
        </h3>
      </Link>

      <SearchBox />
    </div>
  );
}
