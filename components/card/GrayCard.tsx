export default function GrayCard({
  mainTitle,
  simpleText,
  customElement,
}: {
  mainTitle: string;
  simpleText?: string;
  customElement?: React.ReactNode;
}) {
  return (
    <div className="w-full 2xl:w-4/5 pr-6 sm:pr-12 2xl:pr-0 relative">
      <div className="flex flex-col gap-10 py-8 sm:py-12  p-6 pl-14 sm:pl-20 lg:pl-[6.4rem] pr-10 lg:pr-20 2xl:px-[3.7rem]  rounded-r-2xl shadow-[inset_-2px_2px_4px_0_rgb(0,0,0,0.1)] before:shadow-[inset_4px_2px_4px_0_rgb(0,0,0,0.1)] bg-brandNeutrals-300 before:absolute before:bg-brandNeutrals-300 before:w-full before:top-0 before:h-full before:right-[99%]">
        <h2>{mainTitle}</h2>
        {simpleText && <p>{simpleText}</p>}
        {customElement}
      </div>
    </div>
  );
}
