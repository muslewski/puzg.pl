import { ImageOrientation } from "@/components/card/Card";
import clsx from "clsx";
import Image from "next/image";

export default function ImageItem({
  imageSrc,
  imageAlt,
  imageOrientation,
  customImageBorder,
}: {
  imageSrc: string;
  imageAlt: string;
  imageOrientation: ImageOrientation;
  customImageBorder?: string;
}) {
  return (
    <div
      className={clsx(
        "relative overflow-hidden rounded-lg flex-shrink-0",
        customImageBorder,
        imageOrientation === "landscape" &&
          "w-full max-w-[300px] sm:max-w-none sm:w-[450px] h-[200px] sm:h-[300px]",
        imageOrientation === "portrait" &&
          "w-[200px] sm:w-[300px] h-[300px] sm:h-[450px]",
        imageOrientation === "square" &&
          "w-full sm:w-[450px] h-[300px] sm:h-[450px]",
        imageOrientation === "full" && "w-full max-w-5xl h-[200px] sm:h-[450px]"
      )}
    >
      <Image src={imageSrc} fill className="object-cover" alt={imageAlt} />
    </div>
  );
}
