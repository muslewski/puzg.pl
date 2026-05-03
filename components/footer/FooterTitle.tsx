import { Link } from "@/i18n/routing";
import Image from "next/image";

export default function FooterTitle({
  title,
  iconAlt,
  tagline,
}: {
  title: string;
  iconAlt: string;
  tagline?: string;
}) {
  return (
    <div className="flex flex-col gap-5 max-w-xl">
      <Link
        href="/"
        className="flex items-center gap-5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brandWashedBlue/60 rounded-lg w-fit"
      >
        <div className="relative w-[52px] h-[54px] flex-shrink-0">
          <Image
            src="/images/Logo.svg"
            fill
            sizes="52px"
            alt={iconAlt}
            className="object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity"
          />
        </div>
        <span className="font-montserrat text-xl sm:text-2xl font-semibold tracking-tight leading-tight">
          {title}
        </span>
      </Link>
      {tagline && (
        <p className="text-sm sm:text-base text-white/55 leading-relaxed font-outfit max-w-md">
          {tagline}
        </p>
      )}
    </div>
  );
}
