"use client";

import clsx from "clsx";
import { IoIosArrowDown } from "react-icons/io";
import { Action } from "@/components/slide/SlideShow";

export default function SlideArrow({
  direction,
  dispatch,
  customClassName,
}: {
  direction: "left" | "right";
  dispatch: React.Dispatch<Action>;
  customClassName?: string;
}) {
  const handleClick = () => {
    dispatch({ type: direction === "right" ? "NEXT" : "PREV" });
  };

  return (
    <button
      className={clsx(
        "border-4 p-2 sm:p-3 rounded-2xl border-brandPrimaryBlue text-primaryBlue-400 hover:bg-brandWashedBlue/15 active:bg-brandWashedBlue/30 transition-all hover:scale-105 active:scale-110",
        customClassName
      )}
      onClick={handleClick}
    >
      <IoIosArrowDown
        className={clsx(
          "text-3xl sm:text-4xl",
          direction === "left" ? "rotate-90" : "-rotate-90"
        )}
      />
    </button>
  );
}
