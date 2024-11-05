import ListItem from "@/components/card/ListItem";

export default function CardList({
  listObject,
}: {
  listObject?: {
    title: string;
    description: string;
    icon: string;
    iconAlt: string;
  }[];
}) {
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
}
