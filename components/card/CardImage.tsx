import ImageItem from "@/components/card/ImageItem";
import { Link } from "@/i18n/routing";
import { ComponentProps } from "react";

type CardImageProps = {
  image?: string;
  imageAlt?: string;
  imageOrientation?: "portrait" | "landscape";
  imageLink?: ComponentProps<typeof Link>["href"];
};

export function CardImage({
  image,
  imageAlt,
  imageOrientation,
  imageLink,
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
      />
    </Link>
  ) : (
    <ImageItem
      imageSrc={image}
      imageAlt={imageAlt}
      imageOrientation={imageOrientation}
    />
  );
}
