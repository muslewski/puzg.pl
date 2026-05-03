export default function HeroTitle({
  slogan,
  sloganMobile,
}: {
  slogan: React.ReactNode;
  sloganMobile: React.ReactNode;
}) {
  return (
    <h1 className="text-brandInk text-2xl sm:text-3xl md:text-4xl xl:text-5xl 3xl:text-6xl leading-[1.1] md:leading-[1.05] xl:leading-[1.02] font-montserrat font-bold tracking-tight">
      <span className="hidden sm:flex">{slogan}</span>
      <span className="flex sm:hidden">{sloganMobile}</span>
    </h1>
  );
}
