"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { slideProps } from "@/components/slide/SlideShow";

export default function Slide({ data }: { data: slideProps }) {
  return (
    <div className="relative w-full h-[28rem]">
      <motion.div
        className="absolute w-5/6 lg:w-3/5 h-2/3 lg:h-full bottom-1/4 lg:bottom-auto right-0 bg-gradient-to-br from-brandPrimaryBlue to-cyan-400 rounded-l-2xl lg:rounded-2xl overflow-hidden flex"
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
        className="absolute w-5/6 lg:w-3/5 h-fit left-0 bottom-0 flex flex-col gap-0"
        initial={{
          opacity: 0,
          x: -200,
          y: 15,
          rotate: -1,
        }}
        animate={{
          opacity: 1,
          x: 0,
          y: 0,
          rotate: 0,
          filter: "drop-shadow(-4px -4px 3px rgb(0 21 46 / 0.05))",
        }}
        exit={{ opacity: 0, x: -200, y: 15, rotate: -1 }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
      >
        <div className="lg:w-fit lg:max-w-[85%] pb-3 pt-6 px-6 sm:px-12 bg-white/85 rounded-tr-2xl lg:rounded-t-2xl">
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
        <div className="lg:w-fit min-w-[95%] pt-3 pb-6 px-6 sm:px-12 bg-white/85 rounded-br-2xl lg:rounded-tr-2xl lg:rounded-b-2xl lg:rounded-br-none">
          <motion.p
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="xl:text-2xl"
          >
            {data.description}
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}
