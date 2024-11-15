import { montserrat, outfit, galindo, rubik_vinyl } from "@/app/fonts";
import { NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import { routing } from "@/i18n/routing";
import Navigation from "@/components/nav/Navigation";
import { notFound } from "next/navigation";
import Footer from "@/components/footer/Footer";
import { ToastContainer } from "react-toastify";

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: Omit<Props, "children">) {
  const t = await getTranslations({ locale, namespace: "LocaleLayout" });

  return {
    title: {
      template: `%s | ${t("title")}`,
      default: t("title"),
    },
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: Props) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon/favicon-48x48.png"
          sizes="48x48"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="PUZG" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body
        className={`${montserrat.variable} ${outfit.variable} ${rubik_vinyl.variable} ${galindo.variable}`}
      >
        <NextIntlClientProvider messages={messages}>
          <ToastContainer position="top-right" autoClose={3000} />
          <Navigation />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
