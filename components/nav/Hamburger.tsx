"use client";

import { motion, MotionConfig } from "framer-motion";
import { useState } from "react";

export default function Hamburger({
  active,
  setActive,
}: {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <MotionConfig transition={{ duration: 0.5, ease: "easeInOut" }}>
      <motion.button
        initial={false}
        onClick={() => setActive((pv) => !pv)}
        className="lg:hidden h-8 w-12 flex items-center justify-center rounded-md bg-white/0 transition-transform duration-200 hover:scale-105 active:scale-110"
        animate={active ? "open" : "closed"}
      >
        <motion.div className="w-12 h-8 relative rounded-lg ">
          <motion.span
            style={{ left: "0%", top: "0%", x: "0%", y: "0%" }}
            className="absolute h-1 w-12 bg-white rounded-full"
            variants={{
              open: {
                rotate: ["0deg", "0deg", "40deg"],
                top: ["0%", "50%", "50%"],
                y: ["0%", "-50%", "-50%"],
              },
              closed: {
                rotate: ["40deg", "0deg", "0deg"],
                top: ["50%", "50%", "0%"],
                y: ["-50%", "-50%", "0%"],
              },
            }}
          />
          <motion.span
            style={{ right: "0%", top: "50%", x: "0%", y: "-50%" }}
            className="absolute h-1 w-8 bg-white rounded-full"
            variants={{
              open: {
                display: ["block", "none", "none"],
              },
              closed: {
                display: ["none", "none", "block"],
              },
            }}
          />
          <motion.span
            style={{ left: "0%", bottom: "0%", x: "0%", y: "0%" }}
            className="absolute h-1 w-12 bg-white rounded-full"
            variants={{
              open: {
                rotate: ["0deg", "0deg", "-40deg"],
                bottom: ["0%", "50%", "50%"],
                y: ["0%", "50%", "50%"],
              },
              closed: {
                rotate: ["-40deg", "0deg", "0deg"],
                bottom: ["50%", "50%", "0%"],
                y: ["50%", "50%", "0%"],
              },
            }}
          />
        </motion.div>
      </motion.button>
    </MotionConfig>
  );
}
