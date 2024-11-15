import { bipStructure } from "@/data/bipStructure";
import { MenuItem } from "@/components/bip/MenuItem";
import clsx from "clsx";

export default function BiuletynLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <aside className="w-80 h-fit bg-white shadow-lg rounded-xl py-6 px-10 mt-52 lg:mt-[24rem] z-20">
        <h2 className="text-lg font-bold mb-4 text-brandDark">Nawigacja</h2>
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
