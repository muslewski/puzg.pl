import ListItem from "@/components/card/ListItem";

export default function Card() {
  return (
    <div className="w-full 2xl:w-4/5 lg:px-12 flex flex-col gap-24">
      <h2>Dlaczego warto wybrać naszą uczelnię</h2>
      <ul className="flex flex-col lg:flex-row gap-x-32 gap-y-24 justify-between">
        <ListItem title="Perspektywy zatrudnienia" />
        <ListItem title="Wygodna lokalizacja" />
        <ListItem title="Dostosowane dla pracujących" />
      </ul>
    </div>
  );
}
