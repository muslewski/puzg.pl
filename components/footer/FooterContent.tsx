"use client";

import FooterSocialMedia from "@/components/footer/FooterSocialMedia";
import FooterLink from "@/components/footer/FooterLink";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function FooterContent() {
  const t = useTranslations("Footer");

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
      {/* Contact column */}
      <div className="flex flex-col gap-5">
        <h3 className="!bg-none !text-white text-[11px] uppercase tracking-[0.18em] font-semibold font-outfit">
          {t("sections.contact")}
        </h3>
        <address className="not-italic flex flex-col gap-3 text-sm text-white/65">
          <span>
            ul. Czarnieckiego 5/7
            <br />
            86-300 Grudziądz
          </span>
          <span className="text-white/40">
            ul. Hoffmanna 1-7
            <br />
            86-300 Grudziądz
          </span>
          <a
            href="mailto:rekrutacja@puzg.pl"
            className="text-white/80 hover:text-white transition-colors"
          >
            rekrutacja@puzg.pl
          </a>
          <span className="flex flex-col">
            <a
              href="tel:576060123"
              className="text-white/80 hover:text-white transition-colors"
            >
              576 060 123
            </a>
            <a
              href="tel:576060124"
              className="text-white/65 hover:text-white transition-colors"
            >
              576 060 124
            </a>
          </span>
        </address>
      </div>

      {/* Explore column */}
      <div className="flex flex-col gap-5">
        <h3 className="!bg-none !text-white text-[11px] uppercase tracking-[0.18em] font-semibold font-outfit">
          {t("sections.explore")}
        </h3>
        <ul className="list-none !pl-0 flex flex-col gap-3 text-sm">
          <li><FooterLink href="/aktualnosci">{t("links.news")}</FooterLink></li>
          <li><FooterLink href="/o-uczelni">{t("links.about")}</FooterLink></li>
          <li><FooterLink href="/kierunki-studiow">{t("links.programs")}</FooterLink></li>
          <li><FooterLink href="/rekrutacja-krok-po-kroku">{t("links.recruitment")}</FooterLink></li>
          <li><FooterLink href="/kontakt">{t("links.contactPage")}</FooterLink></li>
        </ul>
      </div>

      {/* Documents column */}
      <div className="flex flex-col gap-5">
        <h3 className="!bg-none !text-white text-[11px] uppercase tracking-[0.18em] font-semibold font-outfit">
          {t("sections.documents")}
        </h3>
        <ul className="list-none !pl-0 flex flex-col gap-3 text-sm">
          <li>
            <Link
              href="/biuletyn-informacji-publicznej"
              className="text-white/65 hover:text-white transition-colors inline-flex items-center gap-2.5"
            >
              {t("bip")}
              <span className="relative w-[34px] h-[14px] flex-shrink-0">
                <Image
                  src="/images/bip.png"
                  fill
                  sizes="34px"
                  className="object-contain"
                  alt=""
                />
              </span>
            </Link>
          </li>
          <li><FooterLink href="/biuletyn-informacji-publicznej/dostepnosc/deklaracja-dostepnosci">{t("accessibilityDeclaration")}</FooterLink></li>
          <li><FooterLink href="/polityka-prywatnosci">{t("privacyPolicy")}</FooterLink></li>
          <li><FooterLink href="/prawa-autorskie">{t("copyright")}</FooterLink></li>
        </ul>
      </div>

      {/* Social column */}
      <div className="flex flex-col gap-5">
        <FooterSocialMedia findUs={t("findUs")} />
      </div>
    </div>
  );
}
