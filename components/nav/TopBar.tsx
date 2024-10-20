import Image from "next/image";
import { CiSearch } from "react-icons/ci";

export default function TopBar() {
  return (
    <div className="w-full flex justify-between items-center">
      <div className="flex items-center gap-6 h-16">
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
      </div>

      <div className="h-12 border-2 rounded-2xl border-brandDark/25 overflow-hidden relative flex items-center">
        <CiSearch className="absolute left-3 w-6 h-6 pointer-events-none text-brandPrimaryBlue" />
        <input
          className="h-full rounded-l-2xl pl-12 pr-6"
          placeholder="Czego szukasz?"
        />
        <button className="h-full  px-6 bg-brandBrightBlue text-white">
          Szukaj
        </button>
      </div>
    </div>
  );
}
