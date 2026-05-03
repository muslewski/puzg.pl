import FooterContent from "@/components/footer/FooterContent";
import FooterCopyright from "@/components/footer/FooterCopyright";
import FooterTitle from "@/components/footer/FooterTitle";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="relative w-full mt-40 lg:mt-52 font-outfit text-white overflow-hidden">
      {/* Hairline top edge */}
      <div className="absolute inset-x-0 top-0 h-px bg-white/[0.06]" />

      <div className="relative bg-brandDark">
        <div className="mx-auto w-11/12 lg:w-10/12 max-w-7xl pt-20 pb-10">
          <FooterTitle title={t("title")} iconAlt={t("titleAlt")} tagline={t("tagline")} />

          <div className="mt-14 mb-12 h-px bg-white/[0.08]" aria-hidden />

          <FooterContent />

          <div className="mt-14 mb-8 h-px bg-white/[0.08]" aria-hidden />

          <FooterCopyright title={t("title")} />
        </div>
      </div>
    </footer>
  );
}
