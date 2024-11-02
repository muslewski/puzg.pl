import { Link, Pathnames } from "@/i18n/routing";
import clsx from "clsx";
import Image from "next/image";

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
  link?: Pathnames;
  outsideLink?: string;
  icon?: string;
  iconAlt?: string;
  customGradient?: `bg-gradient-${string}`;
  borderColor?: `border-${string}`;
}) {
  if (link && outsideLink) {
    throw new Error("Only one of `link` or `outsideLink` should be provided.");
  }

  if (icon && !iconAlt) {
    throw new Error("You also need to provide alt for icon.");
  }

  function ButtonContent() {
    return (
      <>
        <div
          className={clsx(
            "px-8 sm:px-10 py-3 sm:py-4 w-fit border-l-4 border-b-4 text-white text-lg md:text-xl 3xl:text-2xl font-outfit font-semibold rounded-xl flex gap-5 items-center transition-transform hover:scale-105 active:scale-110 text-center",
            borderColor ? borderColor : "border-brandDark/50",
            customGradient
              ? customGradient
              : "bg-gradient-to-br from-brandPrimaryBlue to-brandBrightBlue"
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
      <a href={outsideLink} target="_blank">
        <ButtonContent />
      </a>
    );
  }

  return (
    <button>
      <ButtonContent />
    </button>
  );
}
