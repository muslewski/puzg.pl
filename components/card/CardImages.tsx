import ImageCarousel from "@/components/carousel/ImageCarousel";
import ImageItem from "@/components/card/ImageItem";
import { ImageOrientation } from "@/components/card/Card";

type CardImagesProps = {
  images?: string[];
  imagesAlt?: string[];
  imagesOrientation?: ImageOrientation[];
  zoom?: boolean;
};

export function CardImages({
  images,
  imagesAlt,
  imagesOrientation,
  zoom,
}: CardImagesProps) {
  if (!images || !imagesAlt || !imagesOrientation) return null;

  return images.length < 3 ? (
    <div className="flex gap-4 flex-wrap max-w-full">
      {images.map((image, index) => (
        <ImageItem
          key={index}
          imageSrc={image}
          imageAlt={imagesAlt[index]}
          imageOrientation={imagesOrientation[index]}
          zoom={zoom}
        />
      ))}
    </div>
  ) : (
    <ImageCarousel images={images} altImages={imagesAlt} small />
  );
}
