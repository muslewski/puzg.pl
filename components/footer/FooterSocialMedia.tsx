"use client";

import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion, useInView } from "framer-motion";

export default function FooterSocialMedia({ findUs }: { findUs: string }) {
  // Animation variants for staggering effect
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { scale: 0.9, opacity: 0 },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="flex flex-col gap-6"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }} // Animates once when 50% is in view
      variants={container}
    >
      <motion.span className="font-semibold" variants={item}>
        {findUs}
      </motion.span>
      <div className="flex flex-wrap gap-8 text-white">
        {[
          {
            href: "",
            icon: <FaFacebook size="42" />,
            color: "hover:text-blue-600",
            shadow: "hover:drop-shadow-[0_15px_25px_rgba(59,130,246,0.5)]",
          },
          {
            href: "",
            icon: <FaInstagram size="42" />,
            color: "hover:text-pink-500",
            shadow: "hover:drop-shadow-[0_15px_25px_rgba(236,72,153,0.5)]",
          },
          {
            href: "",
            icon: <FaYoutube size="42" />,
            color: "hover:text-red-600",
            shadow: "hover:drop-shadow-[0_15px_25px_rgba(220,38,38,0.5)]",
          },
          {
            href: "",
            icon: <FaLinkedin size="42" />,
            color: "hover:text-[#0e76a8]",
            shadow: "hover:drop-shadow-[0_15px_25px_rgba(14,118,168,0.5)]",
          },
          {
            href: "",
            icon: <FaXTwitter size="42" />,
            color: "hover:text-[#657786]",
            shadow: "hover:drop-shadow-[0_15px_25px_rgba(101,119,134,0.5)]",
          },
        ].map(({ href, icon, color, shadow }, index) => (
          <motion.a
            key={index}
            href={href}
            className={`${color} transition-all hover:scale-105 ${shadow}`}
            variants={item}
          >
            {icon}
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}
