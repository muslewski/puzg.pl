import { ListObjectItem } from "@/components/card/CardList";
import clsx from "clsx";
import Image from "next/image";

export default function ListItem({
  title,
  description,
  icon,
  iconAlt,
  settings,
  richDescription,
}: ListObjectItem) {
  return (
    <li
      className={clsx(
        "flex flex-col gap-6 sm:gap-8 items-center sm:items-start lg:items-center w-full",
        settings
      )}
    >
      <div className="relative h-16 sm:h-24 w-16 sm:w-24">
        <Image src={icon} fill className="object-cover" alt={iconAlt} />
      </div>
      <div className="flex flex-col gap-2">
        <h3>{title}</h3>
        <p>{description}</p>
        {richDescription && <div>{richDescription}</div>}
      </div>
    </li>
  );
}
