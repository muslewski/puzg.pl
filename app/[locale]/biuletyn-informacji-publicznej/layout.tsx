import { bipStructure } from "@/data/bipStructure";
import { MenuItem } from "@/components/bip/MenuItem";
import { Link } from "@/i18n/routing";
import Image from "next/image";

export default function BiuletynLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <aside className="w-80 h-fit bg-white shadow-lg rounded-xl py-6 px-10 mt-52 lg:mt-[24rem] z-20">
        <Link
          href="/biuletyn-informacji-publicznej"
          className="w-fit h-fit flex items-center gap-4 mb-4"
        >
          <h2 className="text-lg font-bold text-brandDark">Nawigacja</h2>
          <div className="relative w-[48px] h-[20px]">
            <Image
              src="/images/bip.png"
              fill
              sizes="72px"
              className="object-contain"
              alt="bip logo"
            />
          </div>
        </Link>
        <nav className="flex flex-col gap-4">
          {bipStructure.map((item, index) => (
            <MenuItem key={index} item={item} />
          ))}
        </nav>
      </aside>

      <main className="flex-1">{children}</main>
    </div>
  );
}
