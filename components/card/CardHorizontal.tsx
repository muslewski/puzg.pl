export default function CardHorizontal({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-12 w-full flex-col lg:flex-row">{children}</div>
  );
}
