export default function SortOptions({
  sortLatest,
  setSortLatest,
}: {
  sortLatest: boolean;
  setSortLatest: (value: boolean) => void;
}) {
  return (
    <div className="flex items-center justify-start gap-6 w-full 2xl:w-4/5 px-6 lg:px-12 2xl:px-0">
      <select
        value={sortLatest ? "latest" : "oldest"}
        onChange={(e) => setSortLatest(e.target.value === "latest")}
        className="p-2  border-none rounded-md bg-white"
      >
        <option value="latest">Od najnowszych</option>
        <option value="oldest">Od najstarszych</option>
      </select>
    </div>
  );
}
