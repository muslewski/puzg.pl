import Card from "@/components/card/Card";
import CardHorizontal from "@/components/card/CardHorizontal";
import { CardImage } from "@/components/card/CardImage";
import CardList from "@/components/card/CardList";
import MainTitle from "@/components/card/MainTitle";
import SimpleText from "@/components/card/SimpleText";
import MainWrapper from "@/components/MainWrapper";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale },
}: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "KierunkiStudiowPage" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function KierunkiStudiowPage({ params: { locale } }: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("KierunkiStudiowPage");

  return (
    <MainWrapper topTitle={t("title")}>
      <Card border="bl">
        <MainTitle>Mechatronika</MainTitle>
        <CardList
          iconsSize="h-8 w-8 sm:h-14 sm:w-14"
          flexSettings="flex-row gap-x-32 gap-y-16 flex-wrap lg:justify-around"
          simpleList={[
            {
              icon: "/images/kierunki-studiow/certificateIcon.png",
              iconAlt: "a",
              richText: <h3 className="font-medium">Poziom studiów</h3>,
              description: "Pierwszego stopnia",
            },
            {
              icon: "/images/kierunki-studiow/checklistIcon.png",
              iconAlt: "a",
              richText: <h3 className="font-medium">Profil kształcenia</h3>,
              description: "Praktyczny",
            },
            {
              icon: "/images/kierunki-studiow/learningIcon.png",
              iconAlt: "a",
              richText: <h3 className="font-medium">Forma studiów</h3>,
              description: "Stacjonarne",
            },
            {
              icon: "/images/kierunki-studiow/number-blockIcon.png",
              iconAlt: "a",
              richText: <h3 className="font-medium">Liczba semestrów</h3>,
              description: "7",
            },
            {
              icon: "/images/kierunki-studiow/workerIcon.png",
              iconAlt: "a",
              richText: <h3 className="font-medium">Tytuł zawodowy</h3>,
              description: "Inżynier",
            },
            {
              icon: "/images/kierunki-studiow/languageIcon.png",
              iconAlt: "a",
              richText: <h3 className="font-medium">Język kształcenia</h3>,
              description: "Polski",
            },
          ]}
        />
        <p>
          Mechatronika to nauka łącząca wiedzę z zakresu mechaniki, elektroniki,
          informatyki, automatyki i robotyki. Jest to nowoczesny kierunek i
          zarazem jedna z najszybciej rozwijających się gałęzi przemysłu. Wiedza
          z tej dziedziny jest specjalistyczna i specyficzna, ale ze względu na
          duże zapotrzebowanie rynku pracy stwarza bardzo dobre perspektywy dla
          absolwentów. Mechatronika daje studentom wszechstronne wykształcenie w
          zakresie projektowania, wytwarzania oraz eksploatacji nowoczesnych
          urządzeń.
        </p>
        <p>
          Na mechatronice będziesz studiował podstawowe przedmioty nauk
          ścisłych, tj. matematykę, fizykę i chemię oraz przedmioty ogólne, tj.
          podstawy konstrukcji urządzeń specjalnych, teoria mechanizmów i
          maszyn, materiały inżynierskie, przedmioty kierunkowe, m.in. napędy
          maszyn i urządzeń, podstawy robotyki, mechatronika w systemach
          technicznych, technika mikroprocesorowa, układy i zespoły
          elektroniczne w mechatronice oraz języki programowania. Ponadto na
          poszczególnych specjalnościach prowadzone będą zajęcia z przedmiotów,
          tj. projektowanie i programowanie układów sterowania, automatyzacja
          procesów przemysłowych, panele i interfejsy komunikacyjne oraz
          mechatroniczne układy sterowania napędem.
        </p>
        <p>
          Studia trwają 3,5 roku, czyli 7 semestrów. W celu uzyskania tytułu
          zawodowego inżyniera student powinien zdobyć co najmniej 210 punktów
          ECTS (minimum po 30 punktów ECTS w każdym semestrze).
        </p>
      </Card>

      <Card border="tr">
        <MainTitle>Realizowane specjalności</MainTitle>

        <CardHorizontal>
          <div className="w-full lg:w-5/12 flex flex-col gap-6 items-center">
            <div className="relative w-full h-[200px] sm:h-[350px] rounded-xl overflow-hidden">
              <Image
                src="/images/kierunki-studiow/mechatronika.png"
                alt="Mechatronika"
                fill
                className="object-cover"
              />
            </div>
            <h3>Mechatronika stosowana</h3>
          </div>
          <div className="w-full lg:w-5/12 flex flex-col gap-6 items-center">
            <div className="relative w-full h-[200px] sm:h-[350px] rounded-xl overflow-hidden">
              <Image
                src="/images/kierunki-studiow/automatyka.png"
                alt="Mechatronika"
                fill
                className="object-cover"
              />
            </div>
            <h3>Automatyka i sterowanie maszyn</h3>
          </div>
        </CardHorizontal>

        <SimpleText>
          <b>Automatyka i sterowanie maszyn</b> - specjalność przygotowuje
          specjalistów, którzy będą posiadali wiedzę oraz umiejętności z zakresu
          projektowania, konstruowania i badań systemów sterowania, kreowania
          zachowań inteligentnych oraz zarządzania procesami produkcji,
          automatyzacji i robotyzacji. Studenci tej specjalności zostaną
          zapoznani z podstawami robotyki, programowaniem robotów, algorytmami
          sterowania, programowaniem mikrokontrolerów i sterowników swobodnie
          programowalnych oraz komputerów przemysłowych, budową układów
          sensorycznych i napędowych. Wykształcenie takich kwalifikacji będzie
          możliwe dzięki poznaniu metod programowania układów i urządzeń
          mechatronicznych, modelowania i symulacji komputerowej, programowania
          regulatorów wielofunkcyjnych.
        </SimpleText>
        <SimpleText>
          <b>Mechatronika stosowana</b> - specjalność ukierunkowana jest na
          przekazywanie wiedzy i umiejętności z zakresu: projektowania,
          eksploatacji, obsługi i diagnostyki urządzeń mechatronicznych
          stosowanych w przemyśle. Wprowadzone są przedmioty, w których student
          zdobywa wiedzę i umiejętności dotyczące z jednej strony samych
          procesów, a z drugiej, metod sterowania tymi procesami, zarówno w
          sensie logicznym jak i wykonawczym, od idei programowania poprzez
          elektronikę i mechaniczne elementy wykonawcze. Zna podstawowe języki
          programowania i rozwijane są praktycznie umiejętności w tym zakresie.
          Uzyskają wiedzę związaną z nowoczesnymi metodami pomiaru wielkości
          mechanicznych i elektrycznych, którą następnie wykorzystają do opisu
          działania urządzenia mechatronicznego. Opracowane metody opisu zostaną
          wykorzystane do symulacji działania oraz projektowania. Poznają metody
          komputerowego wspomagania prac inżynierskich, od obrabiarek
          sterowanych numerycznie do symulacji układów mechanicznych,
          elektronicznych i wizualizacji zjawisk zachodzących w urządzeniach
          mechatronicznych.
        </SimpleText>
      </Card>

      <Card border="tl">
        <MainTitle>Mechatronika i co dalej?</MainTitle>
        <SimpleText>
          Absolwent kierunku Mechatronika przygotowany będzie do pracy w
          nowoczesnych przedsiębiorstwach wymagających łączenia wiedzy z wielu
          dyscyplin naukowych. Absolwent tego kierunku będzie potrafił
          projektować, programować oraz obsługiwać nowoczesne urządzenia
          mechatroniczne.
        </SimpleText>

        <CardList
          richTextColor="bg-gradient-to-br from-brandPrimaryBlue via-brandPrimaryBlue/95 to-brandBrightBlue/65 text-transparent bg-clip-text w-fit"
          iconsSize="h-8 w-8 sm:h-10 sm:w-10"
          simpleList={[
            {
              icon: "/images/kierunki-studiow/factory2Icon.png",
              iconAlt: "a",
              richText: <p>przemysł elektromaszynowy,</p>,
            },
            {
              icon: "/images/kierunki-studiow/motorcycleIcon.png",
              iconAlt: "a",
              richText: <p>przemysł motoryzacyjny i lotniczy,</p>,
            },
            {
              icon: "/images/kierunki-studiow/factoryIcon.png",
              iconAlt: "a",
              richText: <p>przedsiębiorstwa produkcyjne,</p>,
            },
            {
              icon: "/images/kierunki-studiow/robotIcon.png",
              iconAlt: "a",
              richText: (
                <p>
                  przedsiębiorstwa zajmujące się eksploatacją nowoczesnych,
                  zautomatyzowanych i zrobotyzowanych procesów przemysłowych,
                </p>
              ),
            },
            {
              icon: "/images/kierunki-studiow/analyticIcon.png",
              iconAlt: "a",
              richText: (
                <p>
                  przedsiębiorstwa zajmujące się sprzedażą oraz diagnozowaniem
                  układów mechatronicznych.
                </p>
              ),
            },
          ]}
        />

        <SimpleText>
          Wiedza i umiejętności zdobyte na studiach pozwolą na podjęcie pracy
          przy budowie nowych, ale także modernizacji istniejących już maszyn i
          układów mechatronicznych w związku z przechodzeniem na sterowanie
          cyfrowe i implementacje nowoczesnych interfejsów.
        </SimpleText>
      </Card>

      <Card
        grayCard
        grayCardPosition="left"
        leftProps={[
          <CardImage
            image="/images/kierunki-studiow/blueInformatic.jpg"
            imageOrientation="square"
            imageAlt="a"
          />,
        ]}
      >
        <MainTitle>Dlaczego mechatronika w Grudziądzu?</MainTitle>
        <SimpleText>
          Na kierunku Mechatronika kształcenie będzie realizowane według
          nowoczesnych standardów edukacyjnych przy udziale doświadczonych
          fachowców (teoretyków i praktyków) w celu kształtowania nowoczesnego
          człowieka otwartego na nowe doświadczenia techniczne, mobilnego na
          rynku pracy, kreatywnego i skutecznego w realizacji aspiracji
          intelektualnych i zawodowych. Program studiów dużą wagę przywiązuje do
          opinii i uwag przedstawicieli pracodawców z regionu (interesariuszy
          zewnętrznych), którzy również zobowiązują się do pomocy w realizacji
          programu studiów chociażby poprzez ofertę realizacji laboratoriów i
          praktyk w ich instytucjach. Kierunek Mechatronika realizowany na
          Publicznej Uczelni Zawodowej w Grudziądzu przygotowuje także młodego
          człowieka do aktywnego i świadomego uczestnictwa w społeczeństwie
          obywatelskim.
        </SimpleText>
      </Card>
    </MainWrapper>
  );
}
