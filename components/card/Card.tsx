import ListItem from "@/components/card/ListItem";
import clsx from "clsx";

export default function Card({
  mainTitle,
  border,
}: {
  mainTitle: string;
  border: "bl" | "br" | "tl" | "tr";
}) {
  return (
    <div className="w-full 2xl:w-4/5 px-6 lg:px-12 2xl:px-0">
      <div
        className={clsx(
          "from-brandPrimaryBlue/65 via-brandWashedBlue/35 to-brandWashedBlue/0  rounded-2xl ",
          border === "bl" && "pb-1 pl-1 bg-gradient-to-tr",
          border === "br" && "pb-1 pr-1 bg-gradient-to-tl",
          border === "tl" && "pt-1 pl-1 bg-gradient-to-br",
          border === "tr" && "pt-1 pr-1 bg-gradient-to-bl"
        )}
      >
        <div className=" flex flex-col gap-24 bg-white px-8 py-12 rounded-xl">
          <h2>{mainTitle}</h2>
          <ul className="flex flex-col lg:flex-row gap-x-32 gap-y-24 justify-between flex-1">
            <ListItem
              title="Perspektywy zatrudnienia"
              description="Po ukończeniu studiów czekają na Ciebie liczne możliwości pracy dzięki dynamicznemu rozwojowi przemysłu i biznesu w Grudziądzu."
            />
            <ListItem
              title="Wygodna lokalizacja"
              description="Nasza uczelnia znajduje się zaledwie 15 minut spacerem od stacji PKP Grudziądz – miasto, co ułatwia dojazd."
            />
            <ListItem
              title="Dostosowane dla pracujących"
              description="Oferujemy elastyczny program studiów, który pozwala na łączenie nauki z pracą zawodową."
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
