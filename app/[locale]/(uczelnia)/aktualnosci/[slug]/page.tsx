import { Locale } from "@/i18n/routing";

type Props = {
  params: {
    locale: Locale;
    slug: string;
  };
};

export default function PostPage({ params }: Props) {
  console.log(params.slug);
  return <div>test {params.slug}</div>;
}
