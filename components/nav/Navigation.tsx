import Links from "@/components/nav/Links";
import LocaleButtons from "@/components/nav/LocaleButtons";
import TopBar from "@/components/nav/TopBar";

export default function Navigation() {
  return (
    <div className="w-screen flex justify-center fixed">
      <nav className="flex flex-col items-center gap-4 w-screen max-w-[2000px] py-12 px-24 2xl:px-36">
        <LocaleButtons />
        <TopBar />
        <Links />
      </nav>
    </div>
  );
}
