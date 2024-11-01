import Image from "next/image";

export default function FooterTitle({
  title,
  iconAlt,
}: {
  title: string;
  iconAlt: string;
}) {
  return (
    <div className="text-xl sm:text-2xl font-semibold flex items-center gap-6">
      <div className="relative w-[48px] h-[50px] sm:w-[72px] sm:h-[74px] min-w-[48px] min-h-[50px]">
        <Image
          src="/images/Logo.svg"
          fill
          sizes="72px"
          alt={iconAlt}
          className="object-contain brightness-0 invert "
        />
      </div>
      {title}
    </div>
  );
}
