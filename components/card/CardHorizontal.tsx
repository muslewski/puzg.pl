import clsx from "clsx";

export default function CardHorizontal({
  children,
  customGap,
}: {
  children: React.ReactNode;
  customGap?: string;
}) {
  return (
    <div
      className={clsx(
        "flex w-full flex-col lg:flex-row flex-wrap",
        customGap ?? "gap-12"
      )}
    >
      {children}
    </div>
  );
}
