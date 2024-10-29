"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroImage() {
  // Use Framer Motion's useScroll to create a scroll effect
  const { scrollY } = useScroll();
  const yTransform = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <motion.div
      style={{ y: yTransform }}
      transition={{
        type: "spring",
        damping: 100, // Lower damping = more oscillation; higher damping = less oscillation
        stiffness: 100, // Adjust stiffness for responsiveness
      }}
      className="relative w-full h-full"
    >
      <Image
        src="/images/home/grudziadz2.jpeg"
        fill
        alt="Tło przedstawiające miasto Grudziądz"
        priority
        className="object-cover"
      />
    </motion.div>
  );
}
