"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroArrow() {
  const { scrollY } = useScroll();
  const rotateTransform = useTransform(scrollY, [0, 200], [0, 11]); // Adjust rotation range for subtle effect

  return (
    <motion.div
      className="relative min-w-[130px] sm:min-w-[174px] w-[48px] xl:w-[261px] min-h-[200px] sm:min-h-[247px] h-[50px] xl:h-[371px]"
      style={{ rotate: rotateTransform }}
      initial={{ x: "30%", rotate: 20, opacity: 0 }} // Start off-screen to the left
      animate={{ x: 0, rotate: 0, opacity: 1 }} // Animate to on-screen position
      transition={{
        duration: "0.5",
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
