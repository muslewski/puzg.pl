import Image from "next/image";

export default function ListItem({ title }: { title: string }) {
  return (
    <li className="flex flex-col gap-6 items-center  max-w-3xl">
      <Image src="/images/Logo.svg" width={100} height={100} alt="" />
      <div className="flex flex-col gap-2">
        <h3>{title}</h3>
        <p>
          Po ukończeniu studiów czekają na Ciebie liczne możliwości pracy dzięki
          dynamicznemu rozwojowi przemysłu i biznesu w Grudziądzu.
        </p>
      </div>
    </li>
  );
}
