import { ListObjectItem, SimpleListItem } from "@/components/card/Card";
import ListItem from "@/components/card/ListItem";
import clsx from "clsx";
import Image from "next/image";

export default function CardList({
  listObject,
  simpleList,
  richTextColor,
  iconsSize,
  flexSettings,
}: {
  listObject?: ListObjectItem[];
  simpleList?: SimpleListItem[];
  richTextColor?: string;
  iconsSize?: string;
  flexSettings?: string;
}) {
  if (listObject)
    return (
      <ul className="flex flex-col lg:flex-row gap-24 pt-12">
        {listObject?.map((item, index) => (
          <ListItem
            key={index}
            title={item.title}
            description={item.description}
            icon={item.icon}
            iconAlt={item.iconAlt}
          />
        ))}
      </ul>
    );

  if (simpleList)
    return (
      <ul
        className={clsx(
          "flex list-none",
          flexSettings ? flexSettings : "flex-col gap-8"
        )}
      >
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
            {item.description}
          </li>
        ))}
      </ul>
    );
}
