"use client";

import { newsProps } from "@/app/[locale]/(uczelnia)/aktualnosci/page";
import Card from "@/components/card/Card";
import FancyButton from "@/components/FancyButton";
import SortOptions from "@/components/news/SortOptions";
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
            mainTitle={post.title}
            richText={post.description}
            richTextWordsLimit={40}
            image={post.imagesSrc[0]}
            imageOrientation={post.imagesOrientation[0]}
            imageAlt={post.imagesAlt[0]}
            customElement={
              <FancyButton
                text={buttonText}
                link={{
                  pathname: "/aktualnosci/[slug]",
                  params: { slug: key },
                }}
                small
              />
            }
          />
        );
      })}
    </div>
  );
}