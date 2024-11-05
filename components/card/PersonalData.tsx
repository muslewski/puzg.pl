export default function PersonalData({
  personalData: { title, fullData },
}: {
  personalData: {
    title: string;
    fullData: string;
  };
}) {
  return (
    <div className="flex flex-col gap-3">
      <h2>{title}</h2>
      <p>{fullData}</p>
    </div>
  );
}
