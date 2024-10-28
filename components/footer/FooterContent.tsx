import FooterSocialMedia from "@/components/footer/FooterSocialMedia";
import { Link } from "@/i18n/routing";
import Image from "next/image";

export default function FooterContent() {
  return (
    <div className="flex flex-col gap-10 gap-y-24">
      <div className="flex flex-col lg:flex-row gap-x-10 gap-y-16 justify-between">
        <div>
          ul. Czarnieckiego 5/7,
          <br /> 86-300 Grudziądz
        </div>

        <div>
          Email:
          <ul>
            <li>rekrutacja@puzg.pl</li>
          </ul>
        </div>

        <div>
          Kontakt telefoniczny (Rekrutacja):
          <ul>
            <li>576-060-123</li>
            <li>576-060-124</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-x-10 gap-y-16 justify-between">
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-3">
            Biuletyn Informacji Publicznej{" "}
            <div className="relative w-[48px] h-[20px]">
              <Image
                src="/images/bip.png"
                fill
                sizes="72px"
                className="object-contain "
                alt="Logo Publicznej Uczelni Zawodowej w Grudziądzu"
              />
            </div>
          </Link>
          <Link href="/">Deklaracja dostępności</Link>
          <Link href="/">Polityka prywatności</Link>
        </div>

        <FooterSocialMedia />
      </div>
    </div>
  );
}
