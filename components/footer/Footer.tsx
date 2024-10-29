import FooterContent from "@/components/footer/FooterContent";
import FooterCopyright from "@/components/footer/FooterCopyright";
import FooterHr from "@/components/footer/FooterHr";
import FooterTitle from "@/components/footer/FooterTitle";

export default function Footer() {
  return (
    <footer className="w-full bg-brandDark border-t-[5px] border-brandNeutrals-1000 rounded-t-2xl text-white py-24 mt-24 font-outfit flex justify-center">
      <div className="flex flex-col gap-16 w-4/5 text-lg">
        <FooterTitle />
        <FooterHr />
        <FooterContent />
        <FooterHr />
        <FooterCopyright />
      </div>
    </footer>
  );
}
