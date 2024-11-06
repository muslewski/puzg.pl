import { ListObjectItem } from "@/components/card/CardList";
import Image from "next/image";

export default function ListItem({
  title,
  description,
  icon,
  iconAlt,
}: ListObjectItem) {
  return (
    <li className="flex flex-col gap-6 sm:gap-8 items-center sm:items-start lg:items-center w-full ">
      <div className="relative h-16 sm:h-24 w-16 sm:w-24">
        <Image src={icon} fill className="object-cover" alt={iconAlt} />
      </div>
      <div className="flex flex-col gap-2">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </li>
  );
}
