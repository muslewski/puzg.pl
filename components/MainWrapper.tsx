export default function MainWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col items-center pt-48 lg:pt-[22rem]">
      {children}
    </main>
  );
}
