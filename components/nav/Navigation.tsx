import Links from "@/components/nav/Links";
import LocaleButtons from "@/components/nav/LocaleButtons";
import TopBar from "@/components/nav/TopBar";

export default function Navigation() {
  return (
    <div className="w-screen flex justify-center fixed z-10">
      <nav className="flex flex-col items-center gap-5 w-screen 2xl:w-10/12 3xl:w-4/5 max-w-[2000px] py-12 px-12 lg:px-24 3xl:px-36 bg-brandPrimaryBlue lg:bg-transparent">
        <LocaleButtons />
        <TopBar />
        <Links />
      </nav>
    </div>
  );
}
