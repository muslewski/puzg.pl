export default function SlideDot({
  isOpen = false,
  onClick,
}: {
  isOpen?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      className="w-8 sm:w-10 h-8 sm:h-10 border-4 border-brandPrimaryBlue rounded-full flex items-center justify-center"
      onClick={onClick}
    >
      {isOpen && (
        <div className="w-4 sm:w-5 h-4 sm:h-5 bg-primaryBlue-400 rounded-full"></div>
      )}
    </button>
  );
}
