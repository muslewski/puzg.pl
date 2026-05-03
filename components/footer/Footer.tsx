import FooterContent from "@/components/footer/FooterContent";
import FooterCopyright from "@/components/footer/FooterCopyright";
import FooterHr from "@/components/footer/FooterHr";
import FooterTitle from "@/components/footer/FooterTitle";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="relative w-full mt-52 font-outfit text-white overflow-hidden">
      {/* Top decorative edge */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brandBrightBlue/40 to-transparent" />

      {/* Background — layered mesh on dark navy */}
      <div className="relative bg-brandDark bg-mesh-dark rounded-t-[2.5rem] pt-20 pb-12 flex justify-center">
        {/* Subtle grid pattern overlay */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-grid-faint bg-grid-24 opacity-[0.04]"
        />

        {/* Soft top glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 w-[60%] h-32 rounded-full bg-brandBrightBlue/20 blur-3xl"
        />

        <div className="relative flex flex-col gap-14 w-11/12 lg:w-4/5 max-w-7xl text-lg">
          <FooterTitle title={t("title")} iconAlt={t("titleAlt")} />
          <FooterHr />
          <FooterContent />
          <FooterHr />
          <FooterCopyright title={t("title")} />
        </div>
      </div>
    </footer>
  );
}
