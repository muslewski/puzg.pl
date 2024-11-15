import ListItem from "@/components/card/ListItem";
import clsx from "clsx";
import Image from "next/image";

export type ListObjectItem = {
  title: string;
  description?: string;
  icon: string;
  iconAlt: string;
  settings?: string;
  richDescription?: React.ReactNode;
  multiplyNumber?: number;
};

export type SimpleListItem = {
  richText: React.ReactNode;
  description?: string;
  richDescription?: React.ReactNode;
  icon: string;
  iconAlt: string;
};

export default function CardList({
  listObject,
  simpleList,
  richTextColor,
  iconsSize,
  flexSettings,
  listItemSettings,
  multiplyNumber,
}: {
  listObject?: ListObjectItem[];
  simpleList?: SimpleListItem[];
  richTextColor?: string;
  iconsSize?: string;
  flexSettings?: string;
  listItemSettings?: string;
  multiplyNumber?: number;
}) {
  if (listObject)
    return (
      <ul
        className={clsx(
          flexSettings ?? "flex flex-col lg:flex-row gap-24 pt-12"
        )}
      >
        {listObject?.map((item, index) => (
          <ListItem
            multiplyNumber={multiplyNumber}
            key={index}
            index={index}
            title={item.title}
            description={item.description}
            richDescription={item.richDescription}
            icon={item.icon}
            iconAlt={item.iconAlt}
            settings={listItemSettings}
          />
        ))}
      </ul>
    );

  if (simpleList)
    return (
      <ul className={clsx("flex list-none", flexSettings ?? "flex-col gap-8")}>
        {simpleList?.map((item, index) => (
          <li key={index} className="flex flex-col gap-3 sm:gap-3">
            <div className="flex gap-3 sm:gap-6 items-center">
              <div
                className={clsx(
                  "relative flex-shrink-0",
                  iconsSize ? iconsSize : "h-8 w-8"
                )}
              >
                <Image
                  src={item.icon}
                  fill
                  sizes="260px"
                  className="object-cover"
                  alt={item.iconAlt}
                />
              </div>
              <div
                className={clsx(
                  "hover:[&_a]:text-brandPrimaryBlue [&_a]:transition-colors",
                  richTextColor
                )}
              >
                {item.richText}
              </div>
            </div>
            <p>{item.description}</p>
            {item.richDescription}
          </li>
        ))}
      </ul>
    );
}
