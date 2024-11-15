import clsx from "clsx";

export default function CardVertical({
  children,
  customGap,
}: {
  children: React.ReactNode;
  customGap?: string;
}) {
  return (
    <div
      className={clsx(
        "flex flex-col w-full 2xl:w-4/5 px-6 lg:px-12 2xl:px-0",
        customGap ?? "gap-12 lg:gap-24"
      )}
    >
      {children}
    </div>
  );
}
