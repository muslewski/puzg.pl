import TopTitle from "@/components/TopTitle";

export default function MainWrapper({
  children,
  topTitle,
}: {
  children: React.ReactNode;
  topTitle: string;
}) {
  return (
    <main className="pt-48 lg:pt-[22rem] flex flex-col gap-20 lg:gap-36 items-center">
      <TopTitle>{topTitle}</TopTitle>
      <div className="flex flex-col items-center w-full gap-32 lg:gap-52">
        {children}
      </div>
    </main>
  );
}
