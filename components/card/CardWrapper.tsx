import clsx from "clsx";

export default function CardWrapper({
  border,
  children,
  customGradient,
  customInsideBorder,
  customWrapperWidth,
}: {
  border: "bl" | "br" | "tl" | "tr";
  children: React.ReactNode;
  customGradient?: `from-${string}`;
  customInsideBorder?: `border-${string}`;
  customWrapperWidth?: string;
}) {
  return (
    <div className="w-full 2xl:w-4/5 px-6 lg:px-12 2xl:px-0">
      <div
        className={clsx(
          "rounded-2xl",
          customWrapperWidth ? customWrapperWidth : "w-fit",
          customGradient ??
            "from-brandBrightBlue/55 via-brandWashedBlue/35 to-brandWashedBlue/0",
          border === "bl" && "pb-1 pl-1 bg-gradient-to-tr",
          border === "br" && "pb-1 pr-1 bg-gradient-to-tl",
          border === "tl" && "pt-1 pl-1 bg-gradient-to-br",
          border === "tr" && "pt-1 pr-1 bg-gradient-to-bl"
        )}
      >
        <div
          className={clsx(
            "flex flex-col gap-12 sm:gap-20 bg-white p-6 sm:p-12 rounded-xl",
            customInsideBorder ?? "border-washedBlue-300 border-double",
            border === "bl" &&
              "shadow-[inset_15px_-15px_12px_-15px_rgba(9,84,124,0.1)] border-b-4 border-l-4",
            border === "br" &&
              "shadow-[inset_-15px_-15px_12px_-15px_rgba(9,84,124,0.1)] border-b-4 border-r-4",
            border === "tl" &&
              "shadow-[inset_15px_15px_12px_-15px_rgba(9,84,124,0.1)] border-t-4 border-l-4",
            border === "tr" &&
              "shadow-[inset_-15px_15px_12px_-15px_rgba(9,84,124,0.1)] border-t-4 border-r-4"
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
