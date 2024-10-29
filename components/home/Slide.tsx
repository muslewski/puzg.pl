import Image from "next/image";

type slideProps = {
  data: {
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
  };
};

export default function Slide({ data }: slideProps) {
  return (
    <div className="relative w-full h-96">
      <div className="absolute w-5/6 lg:w-3/5 h-2/3 lg:h-full right-0 bg-brandPrimaryBlue rounded-l-2xl lg:rounded-2xl overflow-hidden flex">
        <Image
          src={data.imageSrc}
          fill
          sizes="(max-width: 1024px) 83.333vw, 60vw"
          alt={data.imageAlt}
          className="object-cover"
        />
      </div>
      <div className="absolute w-5/6 lg:w-3/5 h-fit left-0 top-2/4 lg:top-auto bottom-0 bg-green-400/5 flex flex-col gap-0">
        <div className="lg:w-fit lg:max-w-[85%] pb-3 pt-4 px-4 bg-white/85 rounded-tr-2xl lg:rounded-t-2xl">
          <h2>{data.title}</h2>
        </div>
        <div className="lg:w-fit min-w-[95%] pt-3 pb-4 px-4 bg-white/85 rounded-br-2xl lg:rounded-tr-2xl lg:rounded-b-2xl lg:rounded-br-none">
          <p>{data.description}</p>
        </div>
      </div>
    </div>
  );
}
