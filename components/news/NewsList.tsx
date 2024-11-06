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
            border={
              number % 4 === 0
                ? "bl"
                : number % 4 === 1
                ? "tl"
                : number % 4 === 2
                ? "tr"
                : "br"
            }
            key={key}
            leftProps={[
              <CardImage
                image={post.imagesSrc[0]}
                imageAlt={post.imagesAlt[0]}
                imageOrientation={post.imagesOrientation[0]}
                imageLink={{
                  pathname: "/aktualnosci/[slug]",
                  params: { slug: key },
                }}
              />,
            ]}
          >
            <MainTitle>{post.title}</MainTitle>
            <RichTextSlicer limit={40}>{post.description}</RichTextSlicer>
            <FancyButton
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
