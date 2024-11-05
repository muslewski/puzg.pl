import { CardImage } from "@/components/card/CardImage";
import { CardImages } from "@/components/card/CardImages";
import CardList from "@/components/card/CardList";
import CardWrapper from "@/components/card/CardWrapper";
import ContactData from "@/components/card/ContactData";
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

export type SimpleListItem = {
  richText: React.ReactNode;
  description?: string;
  icon: string;
  iconAlt: string;
};

export type border = "bl" | "br" | "tl" | "tr" | "l";

export type ImageOrientation = "portrait" | "landscape" | "square" | "full";

type CardProps = {
  mainTitle?: string;
  border: border;
  listObject?: ListObjectItem[];
  simpleList?: SimpleListItem[];
  simpleText?: string;
  lastSimpleText?: string;
  richText?: React.ReactNode;
  simpleTextWordsLimit?: number;
  richTextWordsLimit?: number;
  image?: string;
  images?: string[];
  imageAlt?: string;
  imagesAlt?: string[];
  imageOrientation?: ImageOrientation;
  imagesOrientation?: ImageOrientation[];
  imageLink?: ComponentProps<typeof Link>["href"];
  customElement?: React.ReactNode;
  lastCustomElement?: React.ReactNode;
  customElementIfWordsLimit?: boolean;
  customGradient?: `from-${string}`;
  customInsideBorder?: `border-${string}`;
  personalData?: {
    title: string;
    fullData: string;
  };
  contactData?: {
    mail: string;
    phone: string;
  };
  customWrapperWidth?: string;
  customImageBorder?: string;
  simpleListRichTextColor?: string;
  simpleListIconsSize?: string;
  simpleListFlexSettings?: string;
};

export default function Card({
  mainTitle,
  border,
  listObject,
  simpleList,
  simpleText,
  lastSimpleText,
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
  lastCustomElement,
  customGradient,
  customInsideBorder,
  personalData,
  contactData,
  customWrapperWidth,
  customImageBorder,
  simpleListRichTextColor,
  simpleListIconsSize,
  simpleListFlexSettings,
}: CardProps) {
  const truncatedRichText = richTextWordsLimit
    ? RichTextSlicer(richText, richTextWordsLimit)
    : richText;

  return (
    <CardWrapper
      border={border}
      customGradient={customGradient}
      customInsideBorder={customInsideBorder}
      customWrapperWidth={customWrapperWidth}
    >
      <div className="flex flex-col xl:flex-row gap-12 xl:items-center">
        <CardImage
          image={image}
          imageAlt={imageAlt}
          imageOrientation={imageOrientation}
          imageLink={imageLink}
          customImageBorder={customImageBorder}
        />

        <div className="flex flex-col gap-6  sm:gap-10 w-full">
          <CardImages
            images={images}
            imagesAlt={imagesAlt}
            imagesOrientation={imagesOrientation}
          />

          {mainTitle && <h2>{mainTitle}</h2>}

          {personalData && <PersonalData personalData={personalData} />}
          {contactData && <ContactData contactData={contactData} />}

          {simpleText && <p>{simpleText}</p>}
          {truncatedRichText && <div>{truncatedRichText}</div>}

          {customElement}

          {listObject && <CardList listObject={listObject} />}
          {simpleList && (
            <CardList
              simpleList={simpleList}
              flexSettings={simpleListFlexSettings}
              richTextColor={simpleListRichTextColor}
              iconsSize={simpleListIconsSize}
            />
          )}

          {lastCustomElement}
          {lastSimpleText && <p>{lastSimpleText}</p>}
        </div>
      </div>
    </CardWrapper>
  );
}
