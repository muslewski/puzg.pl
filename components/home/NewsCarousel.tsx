"use client";

import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export type NewsSlide = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

export default function NewsCarousel({
  slides,
  eyebrow,
}: {
  slides: NewsSlide[];
  eyebrow: string;
}) {
  return (
    <Carousel
      opts={{ align: "start", loop: true }}
      className="w-full 2xl:w-4/5 px-4 sm:px-6 lg:px-12 2xl:px-0"
    >
      <CarouselContent>
        {slides.map((slide, idx) => (
          <CarouselItem key={idx}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-stretch">
              {/* Text panel */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <div className="rounded-3xl bg-white shadow-soft ring-1 ring-brandWashedBlue/40 p-6 sm:p-8 lg:p-10 flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <span className="h-px w-7 bg-brandPrimaryBlue/70" />
                    <span className="text-[11px] sm:text-xs font-outfit font-semibold uppercase tracking-[0.2em] text-brandPrimaryBlue">
                      {eyebrow}
                    </span>
                  </div>
                  <h2 className="!leading-[1.1]">{slide.title}</h2>
                  <p className="text-brandInkSoft text-base sm:text-lg leading-relaxed">
                    {slide.description}
                  </p>
                </div>
              </div>

              {/* Image panel */}
              <div className="lg:col-span-7">
                <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-full min-h-[280px] rounded-3xl overflow-hidden shadow-elevated ring-1 ring-white/40">
                  <Image
                    src={slide.imageSrc}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    alt={slide.imageAlt}
                    className="object-cover"
                    priority={idx === 0}
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-tr from-brandPrimaryBlue/30 via-transparent to-transparent mix-blend-multiply"
                  />
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="mt-8 lg:mt-10 flex flex-col sm:flex-row items-center sm:items-center justify-between gap-6">
        <CarouselDots />
        <div className="flex items-center gap-3">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </div>
    </Carousel>
  );
}
