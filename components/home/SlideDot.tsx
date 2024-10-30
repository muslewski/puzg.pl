"use client";

import { AnimatePresence, motion } from "framer-motion";

export default function SlideDot({
  isOpen = false,
  onClick,
}: {
  isOpen?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      className="w-8 sm:w-10 h-8 sm:h-10 border-4 border-brandPrimaryBlue rounded-full flex items-center justify-center hover:scale-105 active:scale-110 transition-transform"
      onClick={onClick}
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="w-4 sm:w-5 h-4 sm:h-5 bg-primaryBlue-400 rounded-full"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
          ></motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
