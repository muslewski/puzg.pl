import ListItem from "@/components/card/ListItem";
import clsx from "clsx";
import { button } from "framer-motion/client";

export type ListObjectItem = {
  title: string;
  description: string;
  icon: `/images/${string}`;
  iconAlt: string;
};

export default function Card({
  mainTitle,
  border,
  listObject,
  simpleText,
  customElement,
}: {
  mainTitle: string;
  border: "bl" | "br" | "tl" | "tr";
  listObject?: ListObjectItem[];
  simpleText?: string;
  customElement?: React.ReactNode;
}) {
  return (
    <div className="w-full 2xl:w-4/5 px-6 lg:px-12 2xl:px-0">
      <div
        className={clsx(
          "from-brandBrightBlue/55 via-brandWashedBlue/35 to-brandWashedBlue/0  rounded-2xl w-fit",
          border === "bl" && "pb-1 pl-1 bg-gradient-to-tr",
          border === "br" && "pb-1 pr-1 bg-gradient-to-tl",
          border === "tl" && "pt-1 pl-1 bg-gradient-to-br",
          border === "tr" && "pt-1 pr-1 bg-gradient-to-bl"
        )}
      >
        <div
          className={clsx(
            "flex flex-col gap-12 sm:gap-20 bg-white p-6 sm:p-12 rounded-xl border-washedBlue-300 border-double",
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
          <div className="flex flex-col gap-10">
            <h2>{mainTitle}</h2>

            {simpleText && <p>{simpleText}</p>}
            {customElement}
          </div>

          {listObject && (
            <ul className="flex flex-col lg:flex-row gap-x-24 gap-y-16 sm:gap-y-24 justify-between">
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
  );
}
