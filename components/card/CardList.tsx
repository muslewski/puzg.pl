import { ListObjectItem, SimpleListItem } from "@/components/card/Card";
import ListItem from "@/components/card/ListItem";
import Image from "next/image";

export default function CardList({
  listObject,
  simpleList,
}: {
  listObject?: ListObjectItem[];
  simpleList?: SimpleListItem[];
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
      <ul className="flex flex-col list-none gap-8">
        {simpleList?.map((item, index) => (
          <li className="flex gap-3 sm:gap-6 items-center">
            <div className="relative h-6 sm:h-8 w-6 sm:w-8">
              <Image
                src={item.icon}
                fill
                className="object-cover"
                alt={item.iconAlt}
              />
            </div>
            <div className="hover:[&_a]:text-brandPrimaryBlue [&_a]:transition-colors">
              {item.richText}
            </div>
          </li>
        ))}
      </ul>
    );
}
