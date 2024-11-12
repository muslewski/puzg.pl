import FooterSocialMedia from "@/components/footer/FooterSocialMedia";
import { Link } from "@/i18n/routing";
import Image from "next/image";

export default function FooterContent({
  localization,
  contact,
  bip,
  accessibilityDeclaration,
  privacyPolicy,
  findUs,
}: {
  localization: string;
  contact: string;
  bip: string;
  accessibilityDeclaration: string;
  privacyPolicy: string;
  findUs: string;
}) {
  return (
    <div className="flex flex-col gap-10 gap-y-24">
      <div className="flex flex-col lg:flex-row gap-x-10 gap-y-16 justify-between">
        <div>
          {localization} Czarnieckiego 5/7,
          <br /> 86-300 Grudziądz
        </div>

        <div>
          Email:
          <ul className="text-white pt-2 gap-2">
            <li>rekrutacja@puzg.pl</li>
          </ul>
        </div>

        <div>
          {contact}
          <ul className="text-white pt-2 gap-2">
            <li>576-060-123</li>
            <li>576-060-124</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-x-10 gap-y-16 justify-between">
        <div className="flex flex-col gap-4">
          <Link
            href="/biuletyn-informacji-publicznej"
            className="flex items-center gap-3"
          >
            {bip}
            <div className="relative w-[48px] h-[20px]">
              <Image
                src="/images/bip.png"
                fill
                sizes="72px"
                className="object-contain"
                alt="bip logo"
              />
            </div>
          </Link>
          <Link href="/deklaracja-dostepnosci">{accessibilityDeclaration}</Link>
          <Link href="/polityka-prywatnosci">{privacyPolicy}</Link>
        </div>

        <FooterSocialMedia findUs={findUs} />
      </div>
    </div>
  );
}
