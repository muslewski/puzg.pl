"use client";

import FancyButton from "@/components/FancyButton";
import { useMemo } from "react";

export default function RecrutationForm() {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  };

  const fancyButtonProps = useMemo(
    () => ({
      text: "Wyślij",
      buttonType:
        "submit" as React.ButtonHTMLAttributes<HTMLButtonElement>["type"],
      icon: "/images/icons/Send.svg",
      iconAlt: "Ikona wysyłania",
      //   disabled: isSubmitting,
      style: {
        // opacity: isSubmitting ? "0.8" : "1",
        transition: "opacity 0.3s ease",
      },
    }),
    [
      // t, isSubmitting
    ]
  );

  return (
    <form className="flex flex-col gap-12" onSubmit={handleSubmit}>
      <div className="flex flex-col lg:flex-row gap-12 h-fit w-full lg:items-end">
        <div className="lg:w-1/2"></div>
        <div className="lg:w-1/2"></div>
      </div>

      {/* Render memoized FancyButton */}
      <FancyButton {...fancyButtonProps} />
    </form>
  );
}
