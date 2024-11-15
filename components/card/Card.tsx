import CardWrapper from "@/components/card/CardWrapper";

// Types

export type border = "bl" | "br" | "tl" | "tr" | "l" | "btlr";
export type ImageOrientation =
  | "portrait"
  | "landscape"
  | "square"
  | "full"
  | string;
export type grayCardPosition = "left" | "right";

type CardProps = {
  border?: border;
  customGradient?: `from-${string}`;
  customInsideBorder?: string;
  customWrapperWidth?: string;
  grayCard?: boolean;
  grayCardPosition?: grayCardPosition;
  leftProps?: React.ReactNode[];
  children?: React.ReactNode;
  rightProps?: React.ReactNode[];
};

export default function Card({
  border,
  customGradient,
  customInsideBorder,
  customWrapperWidth,
  grayCard,
  grayCardPosition,
  leftProps,
  children,
  rightProps,
}: CardProps) {
  return (
    <CardWrapper
      border={border}
      customGradient={customGradient}
      customInsideBorder={customInsideBorder}
      customWrapperWidth={customWrapperWidth}
      grayCard={grayCard}
      grayCardPosition={grayCardPosition}
    >
      <div className="flex flex-col xl:flex-row gap-12 xl:items-center">
        {leftProps?.map((element, index) => (
          <div key={index}>{element}</div>
        ))}

        <div className="flex flex-col gap-6  sm:gap-10 w-full">{children}</div>

        {rightProps?.map((element, index) => (
          <div key={index}>{element}</div>
        ))}
      </div>
    </CardWrapper>
  );
}
