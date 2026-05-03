import Card from "@/components/card/Card";
import MainTitle from "@/components/card/MainTitle";
import SimpleText from "@/components/card/SimpleText";
import ContactForm from "@/components/form/ContactForm";
import CTABanner from "@/components/layout/CTABanner";
import LocalizationIframe from "@/components/LocalizationIframe";
import MainWrapper from "@/components/MainWrapper";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale },
}: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "KontaktPage" });
  return { title: t("title"), description: t("description") };
}

export default function KontaktPage({ params: { locale } }: Props) {
  setRequestLocale(locale);
  const t = useTranslations("KontaktPage");

  return (
    <MainWrapper
      topTitle={t("title")}
      eyebrow={t("hero.eyebrow")}
      description={t("description")}
    >
      {/* Quick contact methods - clean institutional grid */}
      <section className="w-full px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <ContactCard
            label={t("contactCards.phoneLabel")}
            primary="576 060 123"
            secondary="576 060 124"
            href="tel:576060123"
            icon={
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            }
          />
          <ContactCard
            label={t("contactCards.emailLabel")}
            primary="sekretariat@puzg.pl"
            secondary="rekrutacja@puzg.pl"
            href="mailto:sekretariat@puzg.pl"
            icon={
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            }
          />
          <ContactCard
            label={t("contactCards.addressLabel")}
            primary="ul. Czarnieckiego 5/7"
            secondary="86-300 Grudziądz"
            icon={
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            }
          />
        </div>
      </section>

      {/* Form */}
      <section className="w-full px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <Card customWrapperWidth="w-full" border="l">
            <MainTitle>{t("mainTitle")}</MainTitle>
            <SimpleText>{t("simpleText")}</SimpleText>
            <ContactForm />
          </Card>
        </div>
      </section>

      {/* Location */}
      <section className="w-full px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <Card border="tr">
            <MainTitle>{t("mainTitle-2")}</MainTitle>
            <SimpleText>{t("simpleText-2")}</SimpleText>
            <LocalizationIframe />
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <CTABanner
        eyebrow={t("cta.eyebrow")}
        title={t("cta.title")}
        description={t("cta.description")}
        primary={{ text: t("cta.primary"), outsideLink: "tel:576060123" }}
        secondary={{ text: t("cta.secondary"), link: "/rekrutacja-krok-po-kroku" }}
      />
    </MainWrapper>
  );
}

function ContactCard({
  label,
  primary,
  secondary,
  href,
  icon,
}: {
  label: string;
  primary: string;
  secondary?: string;
  href?: string;
  icon: React.ReactNode;
}) {
  const content = (
    <div className="group h-full flex flex-col gap-3 rounded-2xl bg-white p-6 sm:p-7 ring-1 ring-brandWashedBlue/40 shadow-soft hover:shadow-elevated hover:-translate-y-0.5 transition-all duration-300">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brandPrimaryBlue/10 text-brandPrimaryBlue">
          {icon}
        </div>
        <span className="text-[11px] uppercase tracking-[0.18em] font-semibold text-brandInkSoft">
          {label}
        </span>
      </div>
      <div className="flex flex-col gap-1">
        <span className="font-medium text-brandInk text-base sm:text-lg">
          {primary}
        </span>
        {secondary && (
          <span className="text-sm text-brandInkSoft">{secondary}</span>
        )}
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brandBrightBlue rounded-2xl">
        {content}
      </a>
    );
  }
  return content;
}
