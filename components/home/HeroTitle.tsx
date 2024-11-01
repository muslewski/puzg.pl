export default function HeroTitle({
  slogan,
  sloganMobile,
}: {
  slogan: React.ReactNode;
  sloganMobile: React.ReactNode;
}) {
  return (
    <h1 className="text-primaryBlue-700  text-3xl md:text-4xl xl:text-5xl 3xl:text-6xl md:leading-snug xl:leading-snug 3xl:leading-snug drop-shadow-white font-extrabold font-montserrat">
      <span className="hidden sm:flex">{slogan}</span>
      <span className="flex sm:hidden">{sloganMobile}</span>
    </h1>
  );
}
