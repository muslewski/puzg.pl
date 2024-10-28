"use client";

import { motion } from "framer-motion";

export default function PageAnimation({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ y: 15, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className=" min-h-screen pt-[100px] lg:pt-0"
    >
      {children}
    </motion.div>
  );
}
