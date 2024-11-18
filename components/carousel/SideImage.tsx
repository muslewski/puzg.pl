"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
  }),
};

export default function SideImage({
  image,
  altImage,
  small,
  onClick,
  direction,
  isLoaded,
}: {
  image: string;
  altImage: string;
  onClick: () => void;
  small?: boolean;
  direction: number;
  isLoaded: boolean;
}) {
  return (
    <motion.div
      className={clsx(
        "relative rounded-xl overflow-hidden transition-transform cursor-pointer",
        small
          ? "w-[150px] 2xl:w-[250px] h-[90px] 2xl:h-[150px] hidden lg:block"
          : "w-[400px] h-[250px] hidden sm:block"
      )}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={image}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30, mass: 0.5 },
            opacity: { duration: 0.5 },
          }}
          className="absolute w-full h-full"
        >
          {isLoaded ? (
            <Image className="object-cover" fill src={image} alt={altImage} />
          ) : (
            <div className="w-full h-full bg-gray-200 animate-pulse" />
          )}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
