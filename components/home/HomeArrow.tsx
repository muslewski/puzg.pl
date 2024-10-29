"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HomeArrow() {
  const { scrollY } = useScroll();
  const rotateTransform = useTransform(scrollY, [0, 500], [0, 15]); // Adjust rotation range for subtle effect

  return (
    <motion.div
      className="relative w-[48px] h-[50px] min-w-[174px] xl:w-[261px] min-h-[247px] xl:h-[371px]"
      style={{ rotate: rotateTransform }}
      transition={{
        type: "spring",
        stiffness: 100,
      }}
    >
      <Image
        src="/images/home/arrow.png"
        fill
        alt="Strzałka"
        className="object-contain"
      />
    </motion.div>
  );
}
