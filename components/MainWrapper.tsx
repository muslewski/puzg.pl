import SubpageHero from "@/components/layout/SubpageHero";
import { Link } from "@/i18n/routing";
import clsx from "clsx";
import { ComponentProps, ReactNode } from "react";

type Crumb = {
  label: string;
  href?: ComponentProps<typeof Link>["href"];
};

type MainWrapperProps = {
  children: ReactNode;
  /** Page heading. Renders the SubpageHero with this as h1. */
  topTitle: string;
  /** Optional small label above the title (e.g. section/category name) */
  eyebrow?: string;
  /** Optional breadcrumb trail above the eyebrow */
  breadcrumbs?: Crumb[];
  /** Optional intro paragraph below the title */
  description?: ReactNode;
  /** Hero visual variant */
  heroVariant?: "default" | "ink" | "minimal" | "image";
  /** Background image (when heroVariant="image") */
  heroImage?: string;
  heroImageAlt?: string;
  /** Decorative serif accent (year, roman numeral, single word) — bottom-right of hero */
  heroMark?: ReactNode;
  /** Pass content rendered inside the hero (under title/description) */
  heroMeta?: ReactNode;
  /** Override the gap between content blocks */
  zeroGap?: string;
  /** When true, skip rendering the hero (useful when the page provides its own) */
  noHero?: boolean;
};

export default function MainWrapper({
  children,
  topTitle,
  eyebrow,
  breadcrumbs,
  description,
  heroVariant,
  heroImage,
  heroImageAlt,
  heroMark,
  heroMeta,
  zeroGap,
  noHero,
}: MainWrapperProps) {
  return (
    <main className="flex flex-col items-center w-full">
      {!noHero && (
        <SubpageHero
          eyebrow={eyebrow}
          breadcrumbs={breadcrumbs}
          title={topTitle}
          description={description}
          variant={heroVariant}
          image={heroImage}
          imageAlt={heroImageAlt}
          mark={heroMark}
          meta={heroMeta}
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
