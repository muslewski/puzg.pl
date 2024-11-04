"use client";

import { ImageOrientation } from "@/app/[locale]/(uczelnia)/aktualnosci/page";
import ListItem from "@/components/card/ListItem";
import clsx from "clsx";
import Image from "next/image";
import React from "react";

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
  richText,
  simpleTextWordsLimit,
  richTextWordsLimit,
  image,
  images,
  imageAlt,
  imagesAlt,
  imageOrientation,
  imagesOrientation,
  imageBlock = false,
  customElement,
  customElementIfWordsLimit = false,
  customGradient,
  customInsideBorder,
}: {
  mainTitle?: string;
  border: "bl" | "br" | "tl" | "tr";
  listObject?: ListObjectItem[];
  simpleText?: string;
  richText?: React.ReactNode;
  simpleTextWordsLimit?: number;
  richTextWordsLimit?: number;
  image?: string;
  images?: string[];
  imageAlt?: string;
  imagesAlt?: string[];
  imageOrientation?: "portrait" | "landscape";
  imagesOrientation?: ImageOrientation[];
  imageBlock?: boolean;
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

  // Recursive function to slice richText by word limit
  const sliceRichText = (
    node: React.ReactNode,
    limit: number,
    count: {
      words: number;
    } = { words: 0 }
  ): React.ReactNode | null => {
    if (count.words >= limit) return null;

    if (typeof node === "string") {
      const words = node.split(" ");
      const remainingWords = limit - count.words;

      if (words.length > remainingWords) {
        count.words += remainingWords;
        return words.slice(0, remainingWords).join(" ") + "...";
      } else {
        count.words += words.length;
        return node;
      }
    }

    if (React.isValidElement(node)) {
      return React.cloneElement(node, {
        children: React.Children.map(node.props.children, (child) =>
          sliceRichText(child, limit, count)
        ),
      } as React.Attributes);
    }

    return node;
  };

  richText = richTextWordsLimit
    ? sliceRichText(richText, richTextWordsLimit)
    : richText;

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
            {image && imageAlt && image && !imageBlock && (
              <div
                className={clsx(
                  "relative overflow-hidden rounded-lg flex-shrink-0",
                  imageOrientation === "landscape" &&
                    "w-full max-w-[300px] sm:max-w-none sm:w-[450px] h-[200px] sm:h-[300px]",
                  imageOrientation === "portrait" &&
                    "w-[200px] sm:w-[300px] h-[300px] sm:h-[450px]"
                )}
              >
                <Image
                  src={image}
                  fill
                  className="object-cover"
                  alt={imageAlt}
                />
              </div>
            )}

            <div className="flex flex-col gap-10">
              {images &&
                imagesAlt &&
                imagesOrientation &&
                images.length > 0 &&
                imagesAlt.length > 0 && (
                  <div className="flex gap-4 flex-wrap max-w-full">
                    {" "}
                    {/* Add some space between images */}
                    {images.map((image, index) => (
                      <div
                        key={index}
                        className={clsx(
                          "relative overflow-hidden rounded-lg flex-shrink-0",
                          imagesOrientation[index] === "landscape" &&
                            "w-full max-w-[300px] sm:max-w-none sm:w-[450px] h-[200px] sm:h-[300px]",
                          imagesOrientation[index] === "portrait" &&
                            "w-[200px] sm:w-[300px] h-[300px] sm:h-[450px]"
                        )}
                      >
                        <Image
                          src={image}
                          fill
                          className="object-cover"
                          alt={imagesAlt[index]} // Use the corresponding alt text
                        />
                      </div>
                    ))}
                  </div>
                )}

              {image && imageAlt && imageBlock && (
                <div className="relative w-[500px] lg:max-w-[700px] h-[300px] lg:h-[500px] rounded-xl overflow-hidden shadow-md">
                  <Image
                    src={image}
                    fill
                    className="object-cover w-auto h-full"
                    alt={imageAlt}
                  />
                </div>
              )}

              <h2>{mainTitle}</h2>

              {simpleText && <p>{simpleText}</p>}
              {richText && <div>{richText}</div>}

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
