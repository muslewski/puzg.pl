"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HomeArrow() {
  return (
    <motion.div
      className="relative w-[48px] h-[50px] min-w-[174px] xl:w-[261px] min-h-[247px] xl:h-[371px]"
      animate={{
        filter: ["brightness(1.6) blur(16px)", "brightness(1) blur(0px)"],
      }}
      transition={{
        duration: 1.5, // Duration of one complete cycle
        ease: "easeInOut", // Easing function for smoothness
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
