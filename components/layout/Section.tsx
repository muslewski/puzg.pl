import clsx from "clsx";
import { ElementType, ReactNode } from "react";

type Width = "narrow" | "default" | "wide" | "full";

const widthMap: Record<Width, string> = {
  narrow: "max-w-3xl",
  default: "max-w-7xl",
  wide: "max-w-[88rem]",
  full: "max-w-none",
};

type SectionProps = {
  as?: ElementType;
  width?: Width;
  className?: string;
  innerClassName?: string;
  children: ReactNode;
  id?: string;
};

export default function Section({
  as: As = "section",
  width = "default",
  className,
  innerClassName,
  children,
  id,
}: SectionProps) {
  return (
    <As id={id} className={clsx("w-full px-6 sm:px-8 lg:px-12", className)}>
      <div className={clsx("mx-auto w-full", widthMap[width], innerClassName)}>
        {children}
      </div>
    </As>
  );
}
