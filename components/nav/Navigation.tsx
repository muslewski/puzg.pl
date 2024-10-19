import Links from "@/components/nav/Links";
import LocaleButtons from "@/components/nav/LocaleButtons";
import TopBar from "@/components/nav/TopBar";

export default function Navigation() {
  return (
    <div className="w-full flex justify-center">
      <nav className="flex flex-col gap-4 w-full max-w-[2000px] py-12 px-36">
        <LocaleButtons />
        <TopBar />
        <Links />
      </nav>
    </div>
  );
}
