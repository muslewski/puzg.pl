import { news } from "@/app/[locale]/(uczelnia)/aktualnosci/page";

export default function PostPage({ slug }: { slug: string }) {
  console.log(slug);
  return <div>test {slug}</div>;
}
