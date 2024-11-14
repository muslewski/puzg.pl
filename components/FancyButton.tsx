"use client";

import { Link } from "@/i18n/routing";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { ComponentProps } from "react";
import { motion } from "framer-motion";

export default function FancyButton({
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  function ButtonContent() {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        variants={animationVariants}
        className="w-fit"
      >
        <div
          className={clsx(
            "px-8 sm:px-10 py-3 sm:py-4 w-fit border-l-2 border-b-2  font-outfit font-semibold rounded-xl flex items-center transition-transform hover:scale-105 hover:disabled:scale-95 disabled:scale-95 active:disabled:scale-95 active:scale-110 text-center",
            small
              ? "text-base md:text-lg 3xl:text-xl gap-4"
              : "text-lg md:text-xl 3xl:text-2xl gap-5",
            textColor ?? "text-white",
            borderColor ?? "border-brandDark/50",
            customGradient ??
              "bg-gradient-to-br from-brandPrimaryBlue to-brandBrightBlue",
            customClass
          )}
        >
          {icon && iconAlt && (
            <div
              className={clsx(
                "relative h-10 w-10 flex-shrink-0",
                small ? "h-7 w-7" : "h-10 w-10"
              )}
            >
              <Image src={icon} fill className="object-cover" alt={iconAlt} />
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
