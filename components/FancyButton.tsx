import { Link, Pathnames } from "@/i18n/routing";
import clsx from "clsx";
import Image from "next/image";
import { ComponentProps } from "react";

export default function FancyButton({
  text,
  link,
  outsideLink,
  icon,
  iconAlt,
  customGradient,
  borderColor,
}: {
  text: string;
  link?: ComponentProps<typeof Link>["href"];
  outsideLink?: string;
  icon?: string;
  iconAlt?: string;
  customGradient?: `bg-gradient-${string}`;
  borderColor?: `border-${string}`;
}) {
  if (link && outsideLink) {
    throw new Error("Only one of `link` or `outsideLink` should be provided.");
  }

  if ((icon && !iconAlt) || (!icon && iconAlt)) {
    throw new Error("You need to provide icon path and alt for an icon.");
  }

  function ButtonContent() {
    return (
      <>
        <div
          className={clsx(
            "px-8 sm:px-10 py-3 sm:py-4 w-fit border-l-2 border-b-2 text-white text-lg md:text-xl 3xl:text-2xl font-outfit font-semibold rounded-xl flex gap-5 items-center transition-transform hover:scale-105 active:scale-110 text-center",
            borderColor ?? "border-brandDark/50",
            customGradient ??
              "bg-gradient-to-br from-brandPrimaryBlue to-brandBrightBlue"
          )}
        >
          {icon && iconAlt && (
            <div className="relative h-10 w-10">
              <Image src={icon} fill className="object-cover" alt={iconAlt} />
            </div>
          )}
          {text}
        </div>
      </>
    );
  }

  if (link) {
    return (
      <Link href={link}>
        <ButtonContent />
      </Link>
    );
  }

  if (outsideLink) {
    return (
      <a href={outsideLink} target="_blank" rel="noopener noreferrer">
        <ButtonContent />
      </a>
    );
  }

  return (
    <button type="button">
      <ButtonContent />
    </button>
  );
}
