import SubpageHero from "@/components/layout/SubpageHero";
import clsx from "clsx";
import { ReactNode } from "react";

type MainWrapperProps = {
  children: ReactNode;
  /** Page heading. Renders the SubpageHero with this as h1. */
  topTitle: string;
  /** Optional small label above the title (e.g. section/category name) */
  eyebrow?: string;
  /** Optional intro paragraph below the title */
  description?: ReactNode;
  /** Hero visual variant */
  heroVariant?: "default" | "ink" | "minimal";
  /** Pass content to render in the hero (right-side aside on lg+) */
  heroAside?: ReactNode;
  /** Override the gap between content blocks */
  zeroGap?: string;
  /** When true, skip rendering the hero (useful when the page provides its own) */
  noHero?: boolean;
};

export default function MainWrapper({
  children,
  topTitle,
  eyebrow,
  description,
  heroVariant,
  heroAside,
  zeroGap,
  noHero,
}: MainWrapperProps) {
  return (
    <main className="flex flex-col items-center w-full">
      {!noHero && (
        <SubpageHero
          eyebrow={eyebrow}
          title={topTitle}
          description={description}
          variant={heroVariant}
          aside={heroAside}
        />
      )}
      <div
        className={clsx(
          "flex flex-col items-center w-full",
          zeroGap ?? "gap-20 sm:gap-24 lg:gap-32 pt-12 sm:pt-16 lg:pt-20 pb-12"
        )}
      >
        {children}
      </div>
    </main>
  );
}
