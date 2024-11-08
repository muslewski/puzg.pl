import Card from "@/components/card/Card";
import { CardImage } from "@/components/card/CardImage";
import MainTitle from "@/components/card/MainTitle";
import SimpleText from "@/components/card/SimpleText";
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
  const t = await getTranslations({
    locale,
    namespace: "TerminarzRekrutacjiPage",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function TerminarzRekrutacjiPage({ params: { locale } }: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("TerminarzRekrutacjiPage");

  return (
    <MainWrapper topTitle={t("title")}>
      <Card border="bl">
        <MainTitle>
          Terminarz rekrutacji na rok akademicki 2024/2025 na stacjonarne studia
          pierwszego stopnia - Kierunek Mechatronika
        </MainTitle>
        <Card border="btlr">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-sm sm:text-base max-w-md">
              rejestracja w ERK (elektronicznej rejestracji kandydata) oraz
              wniesienie opłaty rekrutacyjnej
            </div>
            <div className="rounded-[20px] bg-[#1B4754] px-4 py-2 text-right text-sm text-white sm:text-base">
              <div>od 03.06.2024r.</div>
              <div>do 18.08.2024r.</div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex-1 text-sm sm:text-base max-w-md">
              składanie dokumentów
            </div>
            <div className="rounded-[20px] bg-[#1B4754] px-4 py-2 text-right text-sm text-white sm:text-base">
              <div>od 01.07.2024r.</div>
              <div>do 18.08.2024r.</div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex-1 text-sm sm:text-base max-w-md">
              ogłoszenie wyników rekrutacji
            </div>
            <div className="rounded-[20px] bg-[#1B4754] px-4 py-2 text-right text-sm text-white sm:text-base">
              <div>19-20.08.2024r.</div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex-1 text-sm sm:text-base max-w-md">
              rekrutacja uzupełniająca
            </div>
            <div className="rounded-[20px] bg-[#1B4754] px-4 py-2 text-right text-sm text-white sm:text-base">
              <div>od 21.08.2024r.</div>
              <div>do 20.09.2024r.</div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex-1 text-sm sm:text-base max-w-md">
              ogłoszenie wyników rekrutacji uzupełniającej
            </div>
            <div className="rounded-[20px] bg-[#1B4754] px-4 py-2 text-right text-sm text-white sm:text-base">
              <div>26.09.2024r.</div>
            </div>
          </div>
        </Card>

        <SimpleText>
          Ogłoszenie wyników klasyfikacji nastąpi w formie elektronicznej na
          adres e-mail podany przez kandydata w formularzu, niezwłocznie po
          weryfikacji przez Uczelnianą Komisję Rekrutacyjną. Prawidłowo
          przesłany formularz rekrutacyjny uzyska status „zakwalifikowany”.
        </SimpleText>

        <SimpleText>
          Forma oraz miejsce składania dokumentów opublikowane zostaną na
          stronie internetowej Publicznej Uczelni Zawodowej w Grudziądzu
          (https://puzg.pl).
        </SimpleText>

        <SimpleText>
          Rekrutacja uzupełniająca odbędzie się w przypadku nie wypełnienia
          limitu miejsc.
        </SimpleText>

        <SimpleText>
          Uczelnia zastrzega sobie prawo do zmiany terminów.
        </SimpleText>

        <CardImage
          image="/images/terminarz-rekrutacji/calendar.jpg"
          imageAlt="a"
          imageOrientation="full"
        />
      </Card>
    </MainWrapper>
  );
}
