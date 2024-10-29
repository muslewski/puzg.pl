import clsx from "clsx";
import { IoIosArrowDown } from "react-icons/io";
import { Action } from "@/components/home/SlideShow";

export default function SlideArrow({
  direction,
  dispatch,
}: {
  direction: "left" | "right";
  dispatch: React.Dispatch<Action>;
}) {
  const handleClick = () => {
    dispatch({ type: direction === "right" ? "NEXT" : "PREV" });
  };

  return (
    <button
      className="border-4 p-2 sm:p-3 rounded-2xl border-brandPrimaryBlue text-primaryBlue-400 transition-transform hover:scale-105 active:scale-110"
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
