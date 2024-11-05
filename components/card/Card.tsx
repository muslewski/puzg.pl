"use client";

import { ImageOrientation } from "@/app/[locale]/(uczelnia)/aktualnosci/page";
import { CardImage } from "@/components/card/CardImage";
import { CardImages } from "@/components/card/CardImages";
import CardList from "@/components/card/CardList";
import CardWrapper from "@/components/card/CardWrapper";
import PersonalData from "@/components/card/PersonalData";
import { RichTextSlicer } from "@/components/card/RichTextSlicer";
import { Link } from "@/i18n/routing";
import React, { ComponentProps } from "react";

// Types
export type ListObjectItem = {
  title: string;
  description: string;
  icon: string;
  iconAlt: string;
};

type CardProps = {
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
  imageLink?: ComponentProps<typeof Link>["href"];
  imageBlock?: boolean;
  customElement?: React.ReactNode;
  customElementIfWordsLimit?: boolean;
  customGradient?: `from-${string}`;
  customInsideBorder?: `border-${string}`;
  personalData?: {
    title: string;
    fullData: string;
  };
};

export default function Card({
  mainTitle,
  border,
  listObject,
  simpleText,
  richText,
  richTextWordsLimit,
  image,
  images,
  imageAlt,
  imagesAlt,
  imageOrientation,
  imagesOrientation,
  imageLink,
  customElement,
  customGradient,
  customInsideBorder,
  personalData,
}: CardProps) {
  const truncatedRichText = richTextWordsLimit
    ? RichTextSlicer(richText, richTextWordsLimit)
    : richText;

  return (
    <CardWrapper
      border={border}
      customGradient={customGradient}
      customInsideBorder={customInsideBorder}
    >
      <div className="flex flex-col xl:flex-row gap-12 xl:items-center">
        <CardImage
          image={image}
          imageAlt={imageAlt}
          imageOrientation={imageOrientation}
          imageLink={imageLink}
        />

        <div className="flex flex-col gap-10">
          <CardImages
            images={images}
            imagesAlt={imagesAlt}
            imagesOrientation={imagesOrientation}
          />

          <h2>{mainTitle}</h2>

          {personalData && <PersonalData personalData={personalData} />}

          {simpleText && <p>{simpleText}</p>}
          {truncatedRichText && <div>{truncatedRichText}</div>}

          {customElement}

          {listObject && <CardList listObject={listObject} />}
        </div>
      </div>
    </CardWrapper>
  );
}
