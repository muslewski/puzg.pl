import FooterContent from "@/components/footer/FooterContent";
import FooterCopyright from "@/components/footer/FooterCopyright";
import FooterHr from "@/components/footer/FooterHr";
import FooterTitle from "@/components/footer/FooterTitle";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="w-full bg-brandDark border-t-[5px] border-brandNeutrals-1000 rounded-t-2xl text-white py-24 mt-52 font-outfit flex justify-center">
      <div className="flex flex-col gap-16 w-4/5 text-lg">
        <FooterTitle title={t("title")} iconAlt={t("titleAlt")} />
        <FooterHr />
        <FooterContent />
        <FooterHr />
        <FooterCopyright title={t("title")} />
      </div>
    </footer>
  );
}
