"use client";

import { Link } from "@/i18n/routing";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { ComponentProps, memo } from "react";
import { motion } from "framer-motion";

function FancyButton({
  text,
  link,
  outsideLink,
  buttonType,
  icon,
  iconAlt,
  customGradient,
  borderColor,
  textColor,
  customClass,
  small = false,
  disabled,
  style,
  circle,
  stopAnimation,
  iconBg,
}: {
  text: string;
  link?: ComponentProps<typeof Link>["href"];
  outsideLink?: string;
  buttonType?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  icon?: string;
  iconAlt?: string;
  customGradient?: string;
  borderColor?: `border-${string}`;
  textColor?: `text-${string}`;
  customClass?: string;
  small?: boolean;
  disabled?: boolean;
  style?: React.CSSProperties;
  circle?: boolean;
  stopAnimation?: boolean;
  iconBg?: string;
}) {
  const t = useTranslations("Helper");

  if (link && outsideLink) {
    throw new Error("Only one of `link` or `outsideLink` should be provided.");
  }

  if (circle) {
    icon = "/images/icons/circle.svg";
    iconAlt = t("circleIconAlt");
  }
  if ((icon && !iconAlt) || (!icon && iconAlt)) {
    throw new Error("You need to provide icon path and alt for an icon.");
  }

  const animationVariants = {
    hidden: { opacity: 0.5, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  function ButtonContent() {
    return (
      <motion.div
        {...(!stopAnimation && {
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true, amount: 0.8 },
          variants: animationVariants,
        })}
        className="w-fit"
      >
        <div
          className={clsx(
            "group relative px-7 sm:px-9 py-3 sm:py-4 w-fit font-outfit font-semibold rounded-2xl flex items-center transition-all duration-300 ease-out text-center shadow-soft ring-1 ring-white/15 hover:shadow-elevated hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brandBrightBlue overflow-hidden",
            small
              ? "text-base md:text-lg 3xl:text-xl gap-3"
              : "text-lg md:text-xl 3xl:text-2xl gap-4",
            textColor ?? "text-white",
            borderColor ?? "border-transparent",
            customGradient ??
              "bg-gradient-to-br from-brandPrimaryBlue via-brandPrimaryBlue to-brandBrightBlue",
            customClass
          )}
        >
          {/* Sheen on hover */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/15 to-transparent"
          />
          {icon && iconAlt && (
            <div
              className={clsx(
                "w-fit h-fit rounded-lg",
                iconBg ?? "bg-transparent"
              )}
            >
              <div
                className={clsx(
                  "relative h-10 w-10 flex-shrink-0",
                  small ? "h-7 w-7" : "h-10 w-10"
                )}
              >
                <Image
                  src={icon}
                  fill
                  sizes="72px"
                  className="object-cover"
                  alt={iconAlt}
                />
              </div>
            </div>
          )}
          {text}
        </div>
      </motion.div>
    );
  }

  if (link) {
    return (
      <Link href={link} className="w-fit">
        <ButtonContent />
      </Link>
    );
  }

  if (outsideLink) {
    return (
      <a
        href={outsideLink}
        className="w-fit"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ButtonContent />
      </a>
    );
  }

  return (
    <button
      className="w-fit"
      type={buttonType ?? "button"}
      disabled={disabled}
      style={style}
    >
      <ButtonContent />
    </button>
  );
}

// Export FancyButton as a memoized component
export default memo(FancyButton);
