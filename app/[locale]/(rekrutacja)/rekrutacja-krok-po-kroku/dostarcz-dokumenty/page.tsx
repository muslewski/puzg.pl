import Card from "@/components/card/Card";
import CardHorizontal from "@/components/card/CardHorizontal";
import { CardImage } from "@/components/card/CardImage";
import MainTitle from "@/components/card/MainTitle";
import SimpleText from "@/components/card/SimpleText";
import FancyButton from "@/components/FancyButton";
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
    namespace: "DostarczDokumentyPage",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function DostarczDokumentyPage({ params: { locale } }: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("DostarczDokumentyPage");

  return (
    <MainWrapper topTitle={t("title")}>
      <Card border="bl">
        <MainTitle>Gratulujemy zdania matury.</MainTitle>
        <CardImage
          image="/images/dostarcz-dokumenty/graduation.jpg"
          imageAlt="a"
          imageOrientation="full"
        />
        <SimpleText>
          Teraz należy dokończyć proces rekrutacyjny i dostarczyć dokumenty.
        </SimpleText>
        <SimpleText>
          Dokumenty należy złożyć osobiście w białej nieopisanej teczce.
        </SimpleText>
        <SimpleText>
          Przed przyjazdem na uczelnię należy sprawdzić godziny dyżurowania
          Uczelnianej Komisji Rekrutacyjnej, która przyjmuje dokumenty.
        </SimpleText>

        <FancyButton
          text="Sprawdź dyżury"
          link={
            "/rekrutacja-krok-po-kroku/godziny-dyzurowania-uczelnianej-komisji-rekrutacyjnej"
          }
        />
      </Card>

      <Card border="tr">
        <MainTitle>Komplet dokumentów powinien zawierać:</MainTitle>
        <ol>
          <li>
            oryginał podania na studia załączany podczas rekrutacji
            elektronicznej,
          </li>
          <li>
            oryginał świadectwa dojrzałości wraz z ewentualnym aneksem do
            świadectwa (do wglądu),
          </li>
          <li>
            kserokopię świadectwa dojrzałości wraz z ewentualnym aneksem do
            świadectwa oryginał dyplomu potwierdzającego kwalifikacje
            zawodowe/dyplomu zawodowego, jeśli ukończyłeś/aś Technikum (do
            wglądu),
          </li>
          <li>
            kserokopię dyplomu potwierdzającego kwalifikacje zawodowe/dyplomu
            zawodowego, jeśli ukończyłeś/aś Technikum,
          </li>
          <li>
            kolorowe zdjęcie na papierze w formacie 35 x 45 mm (zgodne z
            formatem wymaganym podczas składania dokumentów o wydanie dowodu
            osobistego).
          </li>
        </ol>

        <h3>Dodatkowo, od wybranych kandydatów mogą być wymagane również:</h3>
        <ol>
          <li>
            kserokopia dokumentu potwierdzającego uzyskanie tytułu laureata lub
            finalistyolimpiady lub konkursu jeżeli było brane pod uwagę w
            rekrutacji na dane studia wraz z jego oryginałem do wglądu,
          </li>
          <li>
            kserokopia dokumentu potwierdzającego osiągnięcia sportowe uzyskane
            w dyscyplinach olimpijskich lub ujętych w programie Akademickich
            Mistrzostw Polski,
          </li>
          <li>
            zgoda rodzica na podjęcie studiów przez osobę niepełnoletnią (WZÓR).
          </li>
        </ol>
        <SimpleText>
          Podczas wpisu na studia kandydat musi potwierdzić swoją tożsamość i
          okazać dowód osobisty bądź paszport. W szczególnych przypadkach
          kandydata może reprezentować pełnomocnik, który podczas składnia
          dokumentów w imieniu kandydata okaże pełnomocnictwo z podpisem oraz
          legitymuje się swoim dowodem osobistym lub paszportem (zgodnie z
          treścią pełnomocnictwa).
        </SimpleText>

        <h3>Do pobrania:</h3>
        <CardHorizontal>
          <FancyButton
            icon="/images/icons/circle.svg"
            iconAlt="a"
            small
            text="Pełnomocnictwo"
            outsideLink="/files/rekrutacja/dostarcz-dokumenty/pelnomocnictwo-do-zlozenia-dokumentow-w-procesie-rekrutacji.docx"
          />
          <FancyButton
            icon="/images/icons/circle.svg"
            iconAlt="a"
            small
            text="Zgoda rodziców"
            outsideLink="/files/rekrutacja/dostarcz-dokumenty/zgoda-rodzicow-na-podjecie-studiow.docx"
          />
        </CardHorizontal>
      </Card>
    </MainWrapper>
  );
}
