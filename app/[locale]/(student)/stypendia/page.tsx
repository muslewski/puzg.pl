import Card from "@/components/card/Card";
import CardHorizontal from "@/components/card/CardHorizontal";
import { CardImage } from "@/components/card/CardImage";
import MainTitle from "@/components/card/MainTitle";
import SimpleText from "@/components/card/SimpleText";
import FancyButton from "@/components/FancyButton";
import MainWrapper from "@/components/MainWrapper";
import SubtleHr from "@/components/SubtleHr";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale },
}: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "StypendiaPage" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function PlanZajecPage({ params: { locale } }: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("StypendiaPage");

  return (
    <MainWrapper topTitle={t("title")}>
      <Card border="bl">
        <MainTitle>Warunki ubiegania się o stypendium socjalne</MainTitle>
        <p>
          Stypendium socjalne może być przyznane studentowi znajdującemu się w
          trudnej sytuacji materialnej na jego wniosek. W celu uzyskania
          stypendium student jest zobowiązany udokumentować swoją sytuację
          materialną.
        </p>
        <ul>
          <li>
            <strong>Limit dochodu:</strong> Studenci mogą ubiegać się o
            stypendium, jeśli dochód netto na jedną osobę w rodzinie nie
            przekracza 1.570,50 zł miesięcznie.
          </li>
          <li>
            <strong>Zaświadczenie z ośrodka pomocy społecznej:</strong> Jeśli
            miesięczny dochód na osobę w rodzinie nie przekracza 600,00 zł,
            student musi dostarczyć zaświadczenie o korzystaniu ze świadczeń
            pomocy społecznej przez siebie lub członków rodziny w 2024 roku. W
            przypadku braku korzystania z tych świadczeń, należy udokumentować
            źródło utrzymania rodziny.
          </li>
          <li>
            <strong>Wniosek:</strong> Studenci ubiegający się o stypendium muszą
            obowiązkowo złożyć wniosek.
          </li>
        </ul>
        <SubtleHr />
        <MainTitle>
          Wykaz dokumentacji obowiązującej przy ubieganiu się o stypendium
          socjalne:
        </MainTitle>
        <ol>
          <li>
            Zaświadczenia z US o dochodach uzyskanych w ubiegłym roku
            kalendarzowym przez członków rodziny uzyskujących dochody
            podlegające opodatkowaniu podatkiem dochodowym od osób fizycznych na
            zasadach ogólnych.
          </li>
          <li>
            Zaświadczenia z US o zryczałtowanym podatku dochodowym za ubiegły
            rok kalendarzowy członków rodziny rozliczających się w formie
            podatku ryczałtowego/karty podatkowej.
          </li>
          <li>
            Oświadczenia członków rodziny o wysokości uzyskanego w ubiegłym roku
            kalendarzowym innego dochodu niepodlegającego opodatkowaniu
            podatkiem (załącznik 7).
          </li>
          <li>
            Zaświadczenie właściwego organu gminy o wielkości gospodarstwa
            rolnego w ubiegłym roku Kalendarzowym.
          </li>
          <li>Kserokopia nakazu płatniczego.</li>
          <li>Zaświadczenia rodzeństwa pobierającego naukę.</li>
          <li>Oświadczenie wnioskodawcy.</li>
          <li>
            Oświadczenie wnioskodawcy o nieprowadzeniu wspólnego gospodarstwa
            domowego z żadnym z rodziców, opiekunów prawych lub faktycznych -
            dotyczy studenta, który ubiega się o stypendium bez wykazywania
            dochodów członków rodziny.
          </li>
          <li>
            Zaświadczenie wydane przez ośrodek pomocy społecznej albo przez
            centrum usług społecznych o korzystaniu w roku złożenia wniosku o
            stypendium socjalne ze świadczeń z pomocy społecznej przez studenta
            lub członków jego rodziny (dotyczy studenta, którego miesięczny
            dochód na osobę w rodzinie nie przekracza kwoty 600,00 zł.).
          </li>
          <li>Oświadczenie wnioskodawcy (załącznik 15).</li>
          <li>
            Oświadczenie o sytuacji rodzinnej i materialnej studenta będącego
            obywatelem Ukrainy.
          </li>
          <li>
            Zaświadczenia zawierające informację o wysokości składek na
            ubezpieczenie zdrowotne w roku kalendarzowym poprzedzającym rok, w
            którym student składa wniosek (zaświadczenie z ZUS-u lub zakładu
            emerytalno- rentowego MSW), dotyczy członków rodziny lub studenta,
            którzy w roku poprzednim osiągali dochody wykazane w zaświadczeniu z
            Urzędu Skarbowego podlegające opodatkowaniu podatkiem dochodowym od
            osób fizycznych na zasadach ogólnych.
          </li>
        </ol>
      </Card>

      <Card border="tl">
        <MainTitle>Zarządzenia</MainTitle>
        <p>
          Zarządzenie Rektora nr Z.22.2024.2025 w sprawie wprowadzenia
          regulaminu świadczeń dla studentów Publicznej Uczelni Zawodowej w
          Grudziądzu:
        </p>
        <CardHorizontal>
          <FancyButton
            small
            text="Z.22.2024.2025_zał.15"
            outsideLink="/files/stypendia/Z.22.2024.2025_zal.15.docx"
            icon="/images/icons/circle.svg"
            iconAlt="Circle"
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
          <FancyButton
            small
            text="Z.22.2024.2025_zał.7"
            outsideLink="/files/stypendia/Z.22.2024.2025_zal.7.docx"
            icon="/images/icons/circle.svg"
            iconAlt="Circle"
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
          <FancyButton
            small
            text="Z.22.2024.2025_zał.2"
            outsideLink="/files/stypendia/Z.22.2024.2025_zal.2.docx"
            icon="/images/icons/circle.svg"
            iconAlt="Circle"
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
          <FancyButton
            small
            text="Z.22.2024.2025_kompletne"
            outsideLink="/files/stypendia/Z.22.2024.2025_kompletne.pdf"
            icon="/images/icons/circle.svg"
            iconAlt="Circle"
            customGradient="bg-gradient-to-br from-[#14283F] to-[#26384D]"
          />
        </CardHorizontal>
      </Card>
    </MainWrapper>
  );
}
