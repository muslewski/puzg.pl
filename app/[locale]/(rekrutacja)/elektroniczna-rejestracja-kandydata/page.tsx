import Card from "@/components/card/Card";
import CardHorizontal from "@/components/card/CardHorizontal";
import CardList from "@/components/card/CardList";
import MainTitle from "@/components/card/MainTitle";
import SimpleText from "@/components/card/SimpleText";
import FancyButton from "@/components/FancyButton";
import RecrutationForm from "@/components/form/RecrutationForm";
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
    namespace: "ElektronicznaRejestracjaPage",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function ElektronicznaRejestracjaPage({
  params: { locale },
}: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("ElektronicznaRejestracjaPage");

  return (
    <MainWrapper topTitle={t("title")}>
      <Card border="bl">
        <MainTitle>Informacje</MainTitle>
        <SimpleText>
          Postępowanie kwalifikacyjne na studia pierwszego stopnia na kierunku
          Mechatronika wymaga wypełnienia formularza rekrutacyjnego. <br></br>W
          formularzu należy podać następujące dane:
        </SimpleText>
        <CardList
          flexSettings="gap-8 [&>*]:max-w-3xl"
          richTextColor="bg-gradient-to-br from-brandPrimaryBlue via-brandPrimaryBlue/95 to-brandBrightBlue/65 text-transparent bg-clip-text w-fit"
          simpleList={[
            {
              icon: "/images/elektroniczna-rejestracja-kandydata/profile.png",
              iconAlt: "",
              richText: <p>Imię i Nazwisko</p>,
            },
            {
              icon: "/images/elektroniczna-rejestracja-kandydata/email.png",
              iconAlt: "",
              richText: <p>E-mail</p>,
            },
            {
              icon: "/images/elektroniczna-rejestracja-kandydata/phone-call.png",
              iconAlt: "",
              richText: <p>Numer kontaktowy</p>,
            },
            {
              icon: "/images/elektroniczna-rejestracja-kandydata/certificate.png",
              iconAlt: "",
              richText: <p>Informacje na temat ukończonych szkół</p>,
            },
            {
              icon: "/images/elektroniczna-rejestracja-kandydata/assessment.png",
              iconAlt: "",
              richText: (
                <p>Informacje dotyczące przedmiotów zdawanych na maturze</p>
              ),
            },
            {
              icon: "/images/elektroniczna-rejestracja-kandydata/award.png",
              iconAlt: "",
              richText: (
                <p>
                  Informacje dotyczące olimpiad, konkursów i osiągnięć
                  sportowych
                </p>
              ),
            },
            {
              icon: "/images/elektroniczna-rejestracja-kandydata/information.png",
              iconAlt: "",
              richText: <p>Informacje dodatkowe</p>,
              richDescription: (
                <>
                  <p className="text_ul">
                    W informacjach dodatkowy kandydat wskazuje tryb kształcenia:
                  </p>
                  <ul>
                    <li>stacjonarny w trybie standardowym,</li>
                    <li>
                      stacjonarny w trybie popołudniowym (dla osób pracujących).
                    </li>
                  </ul>
                </>
              ),
            },
            {
              icon: "/images/elektroniczna-rejestracja-kandydata/file.png",
              iconAlt: "",
              richText: <p>W miejscu „wybierz plik” należy załączyć</p>,
              richDescription: (
                <ol>
                  <li>
                    zdjęcie w postaci elektronicznej (jak do dowodu osobistego)
                    o rozdzielczości co najmniej 492 x 610 pikseli i wielkości
                    maksymalnie 2,5 MB, przesłane jako osobny plik JPG,
                  </li>
                  <li>skan podpisanych oświadczeń kandydata w formacie PDF,</li>
                  <li>
                    skan uzupełnionego i podpisanego podania o przyjęcie na
                    studia w formacie PDF,
                  </li>
                  <li>potwierdzenie wniesienia opłaty rekrutacyjnej.</li>
                </ol>
              ),
            },
          ]}
        />
        <h3>Dokumenty do pobrania:</h3>
        <CardHorizontal>
          <FancyButton circle small text="Podanie na studia" />
          <FancyButton circle small text="Oświadczenie kandydata" />
        </CardHorizontal>
      </Card>

      <Card customWrapperWidth="w-full" border="l">
        <MainTitle>Formularz rekrutacyjny</MainTitle>
        <SimpleText>
          Formularz rekrutacyjny umożliwia zgłoszenie swojej kandydatury na
          studia pierwszego stopnia na kierunku Mechatronika. Prosimy o dokładne
          wypełnienie wszystkich pól, aby proces rekrutacyjny mógł przebiegać
          sprawnie i bez opóźnień. Upewnij się, że dołączasz wymagane załączniki
          w odpowiednich formatach.
        </SimpleText>
        <RecrutationForm />
      </Card>
    </MainWrapper>
  );
}
