"use client";

export default function SlideDot({
  isOpen = false,
  onClick,
}: {
  isOpen?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      aria-label={isOpen ? "Aktualny slajd" : "Przejdź do slajdu"}
      aria-current={isOpen}
      className="group relative flex h-11 w-11 items-center justify-center rounded-full transition-transform hover:scale-110 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brandBrightBlue focus-visible:ring-offset-2"
      onClick={onClick}
    >
      <span
        className={`block rounded-full transition-all duration-300 ease-out ${
          isOpen
            ? "h-3 w-8 bg-gradient-to-r from-brandPrimaryBlue to-brandBrightBlue"
            : "h-2.5 w-2.5 bg-brandWashedBlue/70 group-hover:bg-brandPrimaryBlue/70"
        }`}
      />
    </button>
  );
}
