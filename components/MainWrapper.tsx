import TopTitle from "@/components/TopTitle";
import clsx from "clsx";

export default function MainWrapper({
  children,
  topTitle,
  zeroGap,
}: {
  children: React.ReactNode;
  topTitle: string;
  zeroGap?: string;
}) {
  return (
    <main
      className={clsx(
        "pt-48 lg:pt-[22rem] flex flex-col items-center",
        zeroGap ?? "gap-20 lg:gap-36"
      )}
    >
      <TopTitle>{topTitle}</TopTitle>
      <div className="flex flex-col items-center w-full gap-32 lg:gap-52">
        {children}
      </div>
    </main>
  );
}
