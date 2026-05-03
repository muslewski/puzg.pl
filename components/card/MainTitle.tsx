export default function MainTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3 sm:gap-4">
      <span
        aria-hidden
        className="h-1 w-12 rounded-full bg-gradient-to-r from-brandPrimaryBlue to-brandBrightBlue"
      />
      <h2>{children}</h2>
    </div>
  );
}
