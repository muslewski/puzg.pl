import Image from "next/image";

export default function ListItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <li className="flex flex-col gap-6 items-center w-full ">
      <Image src="/images/Logo.svg" width={100} height={100} alt="" />
      <div className="flex flex-col gap-2">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </li>
  );
}
