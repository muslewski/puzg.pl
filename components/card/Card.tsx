import ListItem from "@/components/card/ListItem";
import clsx from "clsx";
import { button } from "framer-motion/client";
import Image from "next/image";

export type ListObjectItem = {
  title: string;
  description: string;
  icon: string;
  iconAlt: string;
};

export default function Card({
  mainTitle,
  border,
  listObject,
  simpleText,
  simpleTextWordsLimit,
  image,
  imageAlt,
  customElement,
  customElementIfWordsLimit = false,
  customGradient,
  customInsideBorder,
}: {
  mainTitle: string;
  border: "bl" | "br" | "tl" | "tr";
  listObject?: ListObjectItem[];
  simpleText?: string;
  simpleTextWordsLimit?: number;
  image?: string;
  imageAlt?: string;
  customElement?: React.ReactNode;
  customElementIfWordsLimit?: boolean;
  customGradient?: `from-${string}`;
  customInsideBorder?: `border-${string}`;
}) {
  if ((image && !imageAlt) || (!image && imageAlt)) {
    throw new Error("You need to provide image path and alt for an image.");
  }
  if (simpleTextWordsLimit && !simpleText) {
    throw new Error(
      "You need to provide simpleText if you want to use simpleTextWordsLimit"
    );
  }

  let tooMuchWords = false;

  if (simpleText && simpleTextWordsLimit) {
    const words = simpleText.split(" ");
    if (words.length > simpleTextWordsLimit) {
      simpleText = words.slice(0, simpleTextWordsLimit).join(" ") + "...";
      tooMuchWords = true;
    }
  }

  return (
    <div className="w-full 2xl:w-4/5 px-6 lg:px-12 2xl:px-0">
      <div
        className={clsx(
          "rounded-2xl w-fit",
          customGradient ??
            "from-brandBrightBlue/55 via-brandWashedBlue/35 to-brandWashedBlue/0",
          border === "bl" && "pb-1 pl-1 bg-gradient-to-tr",
          border === "br" && "pb-1 pr-1 bg-gradient-to-tl",
          border === "tl" && "pt-1 pl-1 bg-gradient-to-br",
          border === "tr" && "pt-1 pr-1 bg-gradient-to-bl"
        )}
      >
        <div
          className={clsx(
            "flex flex-col gap-12 sm:gap-20 bg-white p-6 sm:p-12 rounded-xl",
            customInsideBorder ?? "border-washedBlue-300 border-double",
            border === "bl" &&
              "shadow-[inset_15px_-15px_12px_-15px_rgba(9,84,124,0.1)] border-b-4 border-l-4",
            border === "br" &&
              "shadow-[inset_-15px_-15px_12px_-15px_rgba(9,84,124,0.1)] border-b-4 border-r-4",
            border === "tl" &&
              "shadow-[inset_15px_15px_12px_-15px_rgba(9,84,124,0.1)] border-t-4 border-l-4",
            border === "tr" &&
              "shadow-[inset_-15px_15px_12px_-15px_rgba(9,84,124,0.1)] border-t-4 border-r-4"
          )}
        >
          <div className="flex flex-col xl:flex-row gap-12 xl:items-center">
            {image && imageAlt && (
              <div className="relative h-full  w-auto max-w-64 xl:max-w-96 flex items-center justify-center overflow-hidden rounded-lg bg-black">
                <Image
                  src={image}
                  width={2500}
                  height={1024}
                  className="object-contain w-auto h-full max-h-[64rem]"
                  alt={imageAlt}
                />
              </div>
            )}

            <div className="flex flex-col gap-10">
              <h2>{mainTitle}</h2>

              {simpleText && <p>{simpleText}</p>}
              {customElement && !customElementIfWordsLimit && customElement}
              {customElement &&
                customElementIfWordsLimit &&
                tooMuchWords &&
                customElement}

              {listObject && (
                <ul className="pt-2 sm:pt-10 flex flex-col lg:flex-row gap-x-24 gap-y-16 sm:gap-y-24 justify-between">
                  {listObject.map((object, index) => (
                    <ListItem
                      key={index}
                      title={object.title}
                      description={object.description}
                      icon={object.icon}
                      iconAlt={object.iconAlt}
                    />
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
