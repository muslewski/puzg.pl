"use client";

import { newsProps } from "@/app/[locale]/(uczelnia)/aktualnosci/page";
import Card from "@/components/card/Card";
import { CardImage } from "@/components/card/CardImage";
import MainTitle from "@/components/card/MainTitle";
import { RichTextSlicer } from "@/components/card/RichTextSlicer";
import SimpleText from "@/components/card/SimpleText";
import FancyButton from "@/components/FancyButton";
import SortOptions from "@/components/news/SortOptions";
import RichText from "@/components/RichText";
import { useMemo, useState } from "react";

export default function NewsList({
  news,
  buttonText,
}: {
  news: newsProps[];
  buttonText: string;
}) {
  const [sortLatest, setSortLatest] = useState(true);

  const sortedNews = useMemo(() => {
    const newsEntries = Object.entries(news);
    return sortLatest ? newsEntries.reverse() : newsEntries;
  }, [news, sortLatest]);

  return (
    <div className="flex flex-col items-center w-full gap-32 lg:gap-52">
      <SortOptions sortLatest={sortLatest} setSortLatest={setSortLatest} />

      {sortedNews.map(([key, post]) => {
        const number = Number(key);

        return (
          <Card
            key={key}
            grayCard={number % 2 === 0}
            grayCardPosition={
              number % 2 === 0
                ? number % 4 === 0
                  ? "left"
                  : "right"
                : undefined
            }
            border={
              number % 2 === 0 // check if grayCard is true
                ? undefined // no border when grayCard is true
                : number % 4 === 1
                ? "bl"
                : number % 4 === 2
                ? "tl"
                : number % 4 === 3
                ? "tr"
                : "br"
            }
            leftProps={
              number % 2 !== 0
                ? [
                    <CardImage
                      key={0}
                      image={post.imagesSrc[0]}
                      imageAlt={post.imagesAlt[0]}
                      imageOrientation={post.imagesOrientation[0]}
                      imageLink={{
                        pathname: "/aktualnosci/[slug]",
                        params: { slug: key },
                      }}
                    />,
                  ]
                : []
            }
            rightProps={
              number % 2 == 0
                ? [
                    <CardImage
                      key={0}
                      image={post.imagesSrc[0]}
                      imageAlt={post.imagesAlt[0]}
                      imageOrientation={post.imagesOrientation[0]}
                      imageLink={{
                        pathname: "/aktualnosci/[slug]",
                        params: { slug: key },
                      }}
                    />,
                  ]
                : []
            }
          >
            <MainTitle>{post.title}</MainTitle>
            <RichTextSlicer limit={40}>{post.description}</RichTextSlicer>
            <FancyButton
              customGradient={
                number % 2 === 0
                  ? "bg-gradient-to-br from-brandNeutrals-1000 to-brandNeutrals-800"
                  : undefined
              }
              text={buttonText}
              link={{
                pathname: "/aktualnosci/[slug]",
                params: { slug: key },
              }}
              small
            />
          </Card>
        );
      })}
    </div>
  );
}
