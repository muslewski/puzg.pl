import { CiSearch } from "react-icons/ci";

export default function SearchBox() {
  return (
    <div className="h-12 border-2 rounded-2xl border-brandDark/25 overflow-hidden relative flex items-center font-outfit">
      <CiSearch className="absolute left-3 w-6 h-6 pointer-events-none text-brandPrimaryBlue" />
      <input
        className="h-full pl-12 pr-6 bg-white rounded-l-2xl shadow-inner2 text-base w-72"
        placeholder="Czego szukasz?"
      />
      <button className="h-full  px-6 bg-brandBrightBlue text-white text-sm transition-all hover:bg-brandBrightBlue/90 focus:scale-105">
        Szukaj
      </button>
    </div>
  );
}
