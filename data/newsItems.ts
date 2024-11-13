import { ImageOrientation } from "@/components/card/Card";

type NewsItem = {
  imagesSrc: string[];
  imagesOrientation: ImageOrientation[];
};

// Add number of posts
export const newsKeys = ["0", "1", "2", "3", "4", "5"] as const;

export const newsData: NewsItem[] = [
  {
    imagesSrc: ["/images/aktualnosci/post0.0.jpg"],
    imagesOrientation: ["landscape"],
  },
  {
    imagesSrc: ["/images/aktualnosci/post1.0.png"],
    imagesOrientation: ["portrait"],
  },
  {
    imagesSrc: ["/images/aktualnosci/post2.0.png"],
    imagesOrientation: ["landscape"],
  },
  {
    imagesSrc: [
      "/images/aktualnosci/post3.0.jpg",
      "/images/aktualnosci/post3.1.jpg",
      "/images/aktualnosci/post3.2.jpg",
      "/images/aktualnosci/post3.3.jpg",
    ],
    imagesOrientation: ["landscape", "portrait", "landscape", "portrait"],
  },
  {
    imagesSrc: ["/images/aktualnosci/post4.0.png"],
    imagesOrientation: ["landscape"],
  },
  {
    imagesSrc: [
      "/images/aktualnosci/post5.0.png",
      "/images/aktualnosci/post5.1.png",
    ],
    imagesOrientation: ["portrait", "portrait"],
  },
];
