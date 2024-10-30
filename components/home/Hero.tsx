"use client";

import HeroArrow from "@/components/home/HeroArrow";
import HeroImage from "@/components/home/HeroImage";
import HeroTitle from "@/components/home/HeroTitle";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="min-h-[75vh] lg:min-h-screen w-full">
      <div className="relative md:rounded-b-[20%] bg-gradient-to-r from-brandPrimaryBlue via-brandBrightBlue/25 to-brandBrightBlue/0 pb-2 shadow-lg">
        <div className="md:rounded-b-[20%] relative w-full h-[50vh] lg:h-[66vh] xl:h-[75vh] overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/65 sm:before:from-white/100 before:to-transparent before:z-10">
          <HeroImage />
          <motion.div
            className="absolute left-0 bottom-0 flex items-center justify-center z-20 h-44 md:h-52 lg:h-64 xl:h-80 3xl:h-96 sm:max-w-[90%] px-12 sm:px-24 md:px-32 lg:px-36 xl:px-52 3xl:px-72 bg-gradient-to-r from-white/0 via-white/85 to-white rounded-tr-[100px] sm:rounded-tr-[200px] border-r-8 border-washedBlue-100 border-double"
            initial={{ x: "-30%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 70 }}
          >
            <HeroTitle />
          </motion.div>
        </div>

        <div className="absolute left-[60%] sm:left-[52%] -bottom-32 xl:-bottom-44 3xl:-bottom-40 z-20">
          <HeroArrow />
        </div>
      </div>
    </div>
  );
}
