import Card from "@/components/card/Card";
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
  const t = await getTranslations({ locale, namespace: "PrawaAutorskiePage" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function PrawaAutorskiePage({ params: { locale } }: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("PrawaAutorskiePage");

  return (
    <MainWrapper topTitle={t("title")}>
      <Card border="bl" customWrapperWidth="w-full">
        <MainTitle>{t("mainTitle")}</MainTitle>
        <SimpleText>{t("simpleText")}</SimpleText>
        <ul className="flex flex-row flex-wrap gap-6 w-full">
          {/* Home */}
          <FancyButton
            text="handshake_2618623"
            outsideLink=" https://www.flaticon.com/free-icon/handshake_2618623"
            icon="/images/home/card3.png"
            iconAlt="a"
            small
          />
          <FancyButton
            text="place_1692037"
            outsideLink=" https://www.flaticon.com/free-icon/place_1692037"
            icon="/images/home/card2.png"
            iconAlt="a"
            small
          />
          <FancyButton
            text="suitcase_3281307"
            outsideLink="https://www.flaticon.com/free-icon/suitcase_3281307"
            icon="/images/home/card1.png"
            iconAlt="a"
            small
          />

          {/* Kierunki Studiów */}
          <FancyButton
            text="certificate_4710673"
            outsideLink="https://www.flaticon.com/free-icon/certificate_4710673"
            icon="/images/kierunki-studiow/certificateIcon.png"
            iconAlt="a"
            small
            iconBg="bg-white p-1"
          />
          <FancyButton
            text="checklist_11671894"
            outsideLink="https://www.flaticon.com/free-icon/checklist_11671894"
            icon="/images/kierunki-studiow/checklistIcon.png"
            iconAlt="a"
            small
            iconBg="bg-white p-1"
          />
          <FancyButton
            text="learning_12669348"
            outsideLink="https://www.flaticon.com/free-icon/learning_12669348"
            icon="/images/kierunki-studiow/learningIcon.png"
            iconAlt="a"
            small
            iconBg="bg-white p-1"
          />
          <FancyButton
            text="number-blocks_4002502"
            outsideLink="https://www.flaticon.com/free-icon/number-blocks_4002502"
            icon="/images/kierunki-studiow/number-blockIcon.png"
            iconAlt="a"
            small
            iconBg="bg-white p-1"
          />
          <FancyButton
            text="worker_1839274"
            outsideLink="https://www.flaticon.com/free-icon/worker_1839274"
            icon="/images/kierunki-studiow/workerIcon.png"
            iconAlt="a"
            small
            iconBg="bg-white p-1"
          />
          <FancyButton
            text="language_3269817"
            outsideLink="https://www.flaticon.com/free-icon/language_3269817"
            icon="/images/kierunki-studiow/languageIcon.png"
            iconAlt="a"
            small
            iconBg="bg-white p-1"
          />

          {/* Kierunki Studiów */}
          <FancyButton
            text="factory_16469388"
            outsideLink="https://www.flaticon.com/free-icon/factory_16469388"
            icon="/images/kierunki-studiow/factory2Icon.png"
            iconAlt="a"
            small
            iconBg="bg-white p-1"
          />
          <FancyButton
            text="motorcycle_2829159"
            outsideLink="https://www.flaticon.com/free-icon/motorcycle_2829159"
            icon="/images/kierunki-studiow/motorcycleIcon.png"
            iconAlt="a"
            small
            iconBg="bg-white p-1"
          />
          <FancyButton
            text="factory_699404"
            outsideLink="https://www.flaticon.com/free-icon/factory_699404"
            icon="/images/kierunki-studiow/factoryIcon.png"
            iconAlt="a"
            small
            iconBg="bg-white p-1"
          />
          <FancyButton
            text="robot_2942639"
            outsideLink="https://www.flaticon.com/free-icon/robot_2942639"
            icon="/images/kierunki-studiow/robotIcon.png"
            iconAlt="a"
            small
            iconBg="bg-white p-1"
          />
          <FancyButton
            text="analytic_2920230"
            outsideLink="https://www.flaticon.com/free-icon/analytic_2920230"
            icon="/images/kierunki-studiow/analyticIcon.png"
            iconAlt="a"
            small
            iconBg="bg-white p-1"
          />

          {/* Jakość Kształcenia */}
          <FancyButton
            text="service_9375453"
            outsideLink="https://www.flaticon.com/free-icon/service_9375453"
            icon="/images/jakosc-ksztalcenia/serviceIcon.png"
            iconAlt="a"
            small
            iconBg="bg-white p-1"
          />
          <FancyButton
            text="consistency_5181959"
            outsideLink="https://www.flaticon.com/free-icon/consistency_5181959"
            icon="/images/jakosc-ksztalcenia/consistencyIcon.png"
            iconAlt="a"
            small
            iconBg="bg-white p-1"
          />
          <FancyButton
            text="graduation-hat_4645013"
            outsideLink="https://www.flaticon.com/free-icon/graduation-hat_4645013"
            icon="/images/jakosc-ksztalcenia/graduation-hatIcon.png"
            iconAlt="a"
            small
            iconBg="bg-white p-1"
          />
          <FancyButton
            text="skills_8991885"
            outsideLink="https://www.flaticon.com/free-icon/skills_8991885"
            icon="/images/jakosc-ksztalcenia/skillsIcon.png"
            iconAlt="a"
            small
            iconBg="bg-white p-1"
          />
          <FancyButton
            text="deal_2449806"
            outsideLink="https://www.flaticon.com/free-icon/deal_2449806"
            icon="/images/jakosc-ksztalcenia/dealIcon.png"
            iconAlt="a"
            small
            iconBg="bg-white p-1"
          />
          <FancyButton
            text="report_2912773"
            outsideLink="https://www.flaticon.com/free-icon/report_2912773"
            icon="/images/jakosc-ksztalcenia/reportIcon.png"
            iconAlt="a"
            small
            iconBg="bg-white p-1"
          />
          <FancyButton
            text="flask_3655543"
            outsideLink="https://www.flaticon.com/free-icon/flask_3655543"
            icon="/images/jakosc-ksztalcenia/flaskIcon.png"
            iconAlt="a"
            small
            iconBg="bg-white p-1"
          />

          {/* Jakość Kształcenia */}
          <FancyButton
            text="feedback_813419"
            outsideLink="https://www.flaticon.com/free-icon/feedback_813419"
            icon="/images/jakosc-ksztalcenia/feedbackIcon.png"
            iconAlt="a"
            small
            iconBg="bg-white p-1"
          />
          <FancyButton
            text="research_857779"
            outsideLink="https://www.flaticon.com/free-icon/research_857779"
            icon="/images/jakosc-ksztalcenia/researchIcon.png"
            iconAlt="a"
            small
            iconBg="bg-white p-1"
          />
          <FancyButton
            text="satisfaction_4701305"
            outsideLink="https://www.flaticon.com/free-icon/satisfaction_4701305"
            icon="/images/jakosc-ksztalcenia/satisfactionIcon.png"
            iconAlt="a"
            small
            iconBg="bg-white p-1"
          />

          {/* Rekrutacja krok po kroku */}
          <FancyButton
            text="form_8898686"
            outsideLink="https://www.flaticon.com/free-icon/form_8898686"
            icon="/images/rekrutacja-krok-po-kroku/form.png"
            iconAlt="a"
            small
          />
          <FancyButton
            text="attached-file_6125400"
            outsideLink="https://www.flaticon.com/free-icon/attached-file_6125400"
            icon="/images/rekrutacja-krok-po-kroku/attached-file.png"
            iconAlt="a"
            small
          />
          <FancyButton
            text="payment-method_5097344"
            outsideLink="https://www.flaticon.com/free-icon/payment-method_5097344"
            icon="/images/rekrutacja-krok-po-kroku/payment-method.png"
            iconAlt="a"
            small
          />
          <FancyButton
            text="submit_5307921"
            outsideLink="https://www.flaticon.com/free-icon/submit_5307921"
            icon="/images/rekrutacja-krok-po-kroku/submit.png"
            iconAlt="a"
            small
          />
          <FancyButton
            text="handover_14594174"
            outsideLink="https://www.flaticon.com/free-icon/handover_14594174"
            icon="/images/rekrutacja-krok-po-kroku/handover.png"
            iconAlt="a"
            small
          />
          <FancyButton
            text="evaluation_9912341"
            outsideLink="https://www.flaticon.com/free-icon/evaluation_9912341"
            icon="/images/rekrutacja-krok-po-kroku/evaluation.png"
            iconAlt="a"
            small
          />
          <FancyButton
            text="happy-face_10851235"
            outsideLink="https://www.flaticon.com/free-icon/happy-face_10851235"
            icon="/images/rekrutacja-krok-po-kroku/happy-face.png"
            iconAlt="a"
            small
          />

          {/* Limit przyjęć na studia */}
          <FancyButton
            text="sunset_1213140"
            outsideLink="https://www.flaticon.com/free-icon/sunset_1213140"
            icon="/images/icons/sunset.png"
            iconAlt="a"
            small
            iconBg="bg-white p-1"
          />

          {/* Współpraca */}
          <FancyButton
            text="electrical-panel_4152823"
            outsideLink="https://www.flaticon.com/free-icon/electrical-panel_4152823"
            icon="/images/wspolpraca/electrical-panel.png"
            iconAlt="a"
            small
            iconBg="bg-white p-1"
          />
          <FancyButton
            text="sonar_10898126"
            outsideLink="https://www.flaticon.com/free-icon/sonar_10898126"
            icon="/images/wspolpraca/sonar.png"
            iconAlt="a"
            small
            iconBg="bg-white p-1"
          />
          <FancyButton
            text="test_782711"
            outsideLink="https://www.flaticon.com/free-icon/test_782711"
            icon="/images/wspolpraca/test.png"
            iconAlt="a"
            small
            iconBg="bg-white p-1"
          />
          <FancyButton
            text="fighter-jet_4357188"
            outsideLink="https://www.flaticon.com/free-icon/fighter-jet_4357188"
            icon="/images/wspolpraca/fighter-jet.png"
            iconAlt="a"
            small
            iconBg="bg-white p-1"
          />
          <FancyButton
            text="missiles_3856985"
            outsideLink="https://www.flaticon.com/free-icon/missiles_3856985"
            icon="/images/wspolpraca/missiles.png"
            iconAlt="a"
            small
            iconBg="bg-white p-1"
          />
          <FancyButton
            text="production_3712190"
            outsideLink="https://www.flaticon.com/free-icon/production_3712190"
            icon="/images/wspolpraca/production.png"
            iconAlt="a"
            small
            iconBg="bg-white p-1"
          />
          <FancyButton
            text="manufacturing_1814475"
            outsideLink="https://www.flaticon.com/free-icon/manufacturing_1814475"
            icon="/images/wspolpraca/manufacturing.png"
            iconAlt="a"
            small
            iconBg="bg-white p-1"
          />
          <FancyButton
            text="processor_2353989"
            outsideLink="https://www.flaticon.com/free-icon/processor_2353989"
            icon="/images/wspolpraca/processor.png"
            iconAlt="a"
            small
            iconBg="bg-white p-1"
          />

          {/* Not Found */}
          <FancyButton
            text="home_25694"
            outsideLink="https://www.flaticon.com/free-icon/home_25694"
            icon="/images/icons/home.png"
            iconAlt="a"
            small
          />
        </ul>
      </Card>
    </MainWrapper>
  );
}
