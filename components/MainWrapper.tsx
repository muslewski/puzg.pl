export default function MainWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="pt-48 lg:pt-[22rem] flex flex-col gap-32 lg:gap-52 items-center">
      {children}
    </main>
  );
}
