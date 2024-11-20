import Card from "@/components/card/Card";
import MainWrapper from "@/components/MainWrapper";
import { getDocuments } from "@/data/documents";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { FaFileDownload } from "react-icons/fa";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale },
}: Props): Promise<Metadata> {
  const t = await getTranslations({
    locale,
    namespace: "BipPage",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function BipDokumentyPage({ params: { locale } }: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("BipPage");

  const documents = getDocuments();

  return (
    <MainWrapper topTitle="Dokumenty">
      <Card
        border="tr"
        customInsideBorder="bg-gradient-to-br from-brandWashedBlue/10"
        customWrapperWidth="w-full"
      >
        <div className="flex items-center justify-between mb-6 gap-12">
          <h3>Lista Dokumentów</h3>
        </div>
        <div className="space-y-4">
          {documents.map((doc, index) => (
            <a
              key={index}
              href={`/files/${doc.href}`}
              target="_blank"
              className="flex items-center justify-between p-4 rounded-md 
            hover:bg-brandWashedBlue/20 transition-all group"
            >
              <div className="flex items-center gap-3">
                <span className="text-brandPrimaryBlue">{doc.icon}</span>
                <span
                  className="text-brandDark group-hover:text-brandPrimaryBlue 
              transition-colors"
                >
                  {doc.title}
                </span>
              </div>
              <div className="flex items-center justify-end gap-4 min-w-52">
                <span className="text-sm text-gray-500">{doc.date}</span>
                <FaFileDownload className="text-brandPrimaryBlue" />
              </div>
            </a>
          ))}
        </div>
      </Card>
    </MainWrapper>
  );
}
