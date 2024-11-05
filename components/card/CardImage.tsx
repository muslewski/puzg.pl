import { ImageOrientation } from "@/components/card/Card";
import ImageItem from "@/components/card/ImageItem";
import { Link } from "@/i18n/routing";
import { ComponentProps } from "react";

type CardImageProps = {
  image?: string;
  imageAlt?: string;
  imageOrientation?: ImageOrientation;
  imageLink?: ComponentProps<typeof Link>["href"];
  customImageBorder?: string;
};

export function CardImage({
  image,
  imageAlt,
  imageOrientation,
  imageLink,
  customImageBorder,
}: CardImageProps) {
  if (!image || !imageAlt || !imageOrientation) return null;

  return imageLink ? (
    <Link
      href={imageLink}
      className="transition-all hover:drop-shadow-xl hover:scale-[1.01]"
    >
      <ImageItem
        imageSrc={image}
        imageAlt={imageAlt}
        imageOrientation={imageOrientation}
        customImageBorder={customImageBorder}
      />
    </Link>
  ) : (
    <ImageItem
      imageSrc={image}
      imageAlt={imageAlt}
      imageOrientation={imageOrientation}
      customImageBorder={customImageBorder}
    />
  );
}
