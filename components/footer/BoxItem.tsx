import { motion } from "framer-motion";
import { ReactNode } from "react";

interface BoxItemProps {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function BoxItem({ icon, title, children }: BoxItemProps) {
  return (
    <motion.div
      variants={itemVariants}
      className="bg-gray-800/30 p-6 lg:px-10 rounded-lg backdrop-blur-sm shadow-lg"
    >
      <motion.div
        className="flex items-center gap-2 mb-2"
        whileHover={{ scale: 1.02 }}
      >
        {icon}
        <span className="font-semibold">{title}</span>
      </motion.div>
      <div className="text-gray-300 text-lg pt-2">{children}</div>
    </motion.div>
  );
}
