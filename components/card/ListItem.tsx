"use client";

import { ListObjectItem } from "@/components/card/CardList";
import clsx from "clsx";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ListItem({
  index,
  title,
  description,
  icon,
  iconAlt,
  settings,
  richDescription,
  multiplyNumber = 0.1,
}: ListObjectItem & { index: number }) {
  return (
    <li
      className={clsx(
        "flex flex-col gap-6 sm:gap-8 items-center sm:items-start lg:items-center w-full",
        settings
      )}
    >
      <motion.div
        className="relative h-16 sm:h-24 w-16 sm:w-24"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 7,
          delay: 0.3 + index * multiplyNumber,
        }}
      >
        <Image
          src={icon}
          fill
          sizes="16"
          className="object-cover"
          alt={iconAlt}
        />
      </motion.div>
      <div className="flex flex-col gap-2">
        <h3>{title}</h3>
        <p>{description}</p>
        {richDescription && <div>{richDescription}</div>}
      </div>
    </li>
  );
}
