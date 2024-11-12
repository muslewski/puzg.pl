import { EmailTemplate } from "@/components/form/email-template";
import { getTranslations } from "next-intl/server";
import { NextRequest } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type Props = {
  params: {
    locale: string;
  };
};

export async function POST(
  request: NextRequest,
  { params }: { params: { locale: string } }
) {
  try {
    const { message, title, name, email } = await request.json();
    const { locale } = params;

    const t = await getTranslations({ locale, namespace: "KontaktPage" });

    const userEmailTranslations = {
      titleLabel: t("labelTitle"),
      messageLabel: t("labelMessage"),
      emailLabel: t("labelEmail"),

      sender: t("Email.sender"),
      heading: t("Email.thanksForMessage"),
      greeting: t("Email.greeting"),
      weReceived: t("Email.weReceived"),
      detailsOfMessage: t("Email.detailsOfMessage"),
      ifQuestions: t("Email.ifQuestions"),
      buttonVisitPage: t("Email.buttonVisitPage"),
      copyright: t("Email.copyright"),
      privacyPolicy: t("Email.privacyPolicy"),
      Bip: t("Email.Bip"),
    };

    // Email to the user
    const { data, error } = await resend.emails.send({
      from: `${t("Email.sender")} <onboarding@resend.dev>`,
      to: [email],
      subject: t("Email.subjectClient"),
      react: EmailTemplate({
        message,
        title,
        name,
        email,
        translations: userEmailTranslations,
      }),
    });

    const sekretariatEmailTranslations = {
      titleLabel: "Tytuł",
      messageLabel: "Wiadomość",
      nameLabel: "Imię i Nazwisko",
      emailLabel: "Email",
      localeLabel: "Język",

      sender: "Publiczna Uczelnia Zawodowa w Grudziądzu",
      heading: "Nowa wiadomość!",
      greeting: "Witaj, masz nową wiadomość od",
      weReceived:
        'Odpowiedz na wiadomość, klikając guzik "Odpowiedź" lub tworząc odpowiedź do tej wiadomości.',
      detailsOfMessage: "Szczegóły wiadomości:",
      buttonReply: "Odpowiedź",
      copyright: "Wszelkie prawa zastrzeżone.",
      privacyPolicy: "Polityka Prywatności",
      Bip: "Biuletyn Informacji Publicznej",
    };

    // Email to the sekretariat
    const { data: sekretariatData, error: sekretariatError } =
      await resend.emails.send({
        from: `${name} <onboarding@resend.dev>`,
        to: ["mateusz.mus@proton.me"],
        subject: `${title} - Wiadomość z formularza kontaktowego - puzg.pl`,
        replyTo: email,
        react: EmailTemplate({
          message,
          title,
          name,
          email,
          locale,
          translations: sekretariatEmailTranslations,
        }),
      });

    if (error || sekretariatError) {
      return Response.json(
        { error: error || sekretariatError },
        { status: 500 }
      );
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
