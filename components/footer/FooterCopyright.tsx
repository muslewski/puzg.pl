"use client";

import { motion, Variants } from "framer-motion";

export default function FooterCopyright({ title }: { title: string }) {
  // Define the animation variant for a gentle text effect
  const textVariant: Variants = {
    hidden: {
      y: 20,
      opacity: 0,
      clipPath: "inset(0 0 100% 0)", // Text reveal masking effect
    },
    show: {
      y: 0,
      opacity: 1,
      clipPath: "inset(0 0 0% 0)",
      transition: {
        duration: 1,
        delay: 1,
        ease: [0.33, 1, 0.68, 1], // Using a custom cubic-bezier for a smooth effect
      },
    },
  };

  return (
    <motion.span
      className="text-lg self-center"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0 }}
      variants={textVariant}
    >
      &copy; {new Date().getFullYear()} {title}
    </motion.span>
  );
}
