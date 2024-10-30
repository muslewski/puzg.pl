"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type slideProps = {
  data: {
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
  };
};

export default function Slide({ data }: slideProps) {
  return (
    <div className="relative w-full h-96">
      <motion.div
        className="absolute w-5/6 lg:w-3/5 h-2/3 lg:h-full right-0 bg-brandPrimaryBlue rounded-l-2xl lg:rounded-2xl overflow-hidden flex"
        initial={{ opacity: 0, x: 200, y: -15, rotate: 1 }}
        animate={{
          opacity: 1,
          x: 0,
          y: 0,
          rotate: 0,
        }}
        exit={{ opacity: 0, x: 200, y: -15, rotate: 1 }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
      >
        <Image
          src={data.imageSrc}
          fill
          sizes="(max-width: 1024px) 83.333vw, 60vw"
          alt={data.imageAlt}
          className="object-cover shadow-inner3"
        />
      </motion.div>

      <motion.div
        className="absolute w-5/6 lg:w-3/5 h-fit left-0 top-2/4 lg:top-auto bottom-0 bg-green-400/5 flex flex-col gap-0"
        initial={{ opacity: 0, x: -200, y: 15, rotate: -1 }}
        animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
        exit={{ opacity: 0, x: -200, y: 15, rotate: -1 }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
      >
        <div className="lg:w-fit lg:max-w-[85%] pb-3 pt-4 px-4 bg-white/85 rounded-tr-2xl lg:rounded-t-2xl">
          <motion.h2
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
            }}
          >
            {data.title}
          </motion.h2>
        </div>
        <div className="lg:w-fit min-w-[95%] pt-3 pb-4 px-4 bg-white/85 rounded-br-2xl lg:rounded-tr-2xl lg:rounded-b-2xl lg:rounded-br-none">
          <motion.p
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
            }}
          >
            {data.description}
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}
