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
          <li key={index} className="flex flex-col gap-3 sm:gap-3">
            <div className="flex gap-3 sm:gap-6 items-center">
              <div className="relative h-8 w-8 flex-shrink-0">
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
            </div>
            {item.description}
          </li>
        ))}
      </ul>
    );
}
