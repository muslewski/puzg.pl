"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroArrow({ arrowAlt }: { arrowAlt: string }) {
  return (
    <motion.div
      className="relative min-w-[130px] sm:min-w-[174px] w-[48px] xl:w-[261px] min-h-[200px] sm:min-h-[247px] h-[50px] xl:h-[371px]"
      initial={{ x: "50%", opacity: 0 }} // Start off-screen to the left
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
        sizes="261px"
        alt={arrowAlt}
        className="object-contain"
      />
    </motion.div>
  );
}
