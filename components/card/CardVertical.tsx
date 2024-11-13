export default function CardVertical({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-12 lg:gap-24 w-full 2xl:w-4/5 px-6 lg:px-12 2xl:px-0">
      {children}
    </div>
  );
}
