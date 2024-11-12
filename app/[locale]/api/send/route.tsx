import { EmailTemplate } from "@/components/email-template";
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

    const translations = {
      titleLabel: t("labelTitle"),
      messageLabel: t("labelMessage"),
      emailLabel: t("labelEmail"),

      sender: t("Email.sender"),
      thanksForMessage: t("Email.thanksForMessage"),
      greeting: t("Email.greeting"),
      weReceived: t("Email.weReceived"),
      detailsOfMessage: t("Email.detailsOfMessage"),
      ifQuestions: t("Email.ifQuestions"),
      buttonVisitPage: t("Email.buttonVisitPage"),
      copyright: t("Email.copyright"),
      privacyPolicy: t("Email.privacyPolicy"),
      Bip: t("Email.Bip"),
    };

    const { data, error } = await resend.emails.send({
      from: `${t("Email.sender")} <onboarding@resend.dev>`,
      to: [email],
      subject: t("Email.subject"),
      react: EmailTemplate({
        message,
        title,
        name,
        email,
        translations,
      }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
