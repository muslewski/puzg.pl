"use client";

import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

interface SocialMediaLink {
  href: string;
  icon: JSX.Element;
  color: string;
  shadow: string;
  label: string;
}

const socialMediaLinks: SocialMediaLink[] = [
  {
    href: "",
    icon: <FaFacebook size="42" />,
    color: "#3b82f6",
    shadow: "rgba(59,130,246,0.5)",
    label: "Facebook",
  },
  {
    href: "",
    icon: <FaInstagram size="42" />,
    color: "#e85ea3",
    shadow: "rgba(236,72,153,0.5)",
    label: "Instagram",
  },
  {
    href: "",
    icon: <FaYoutube size="42" />,
    color: "#df4242",
    shadow: "rgba(219, 53, 53, 0.5)",
    label: "YouTube",
  },
  {
    href: "",
    icon: <FaLinkedin size="42" />,
    color: "#2187b6",
    shadow: "rgba(14,118,168,0.5)",
    label: "LinkedIn",
  },
  {
    href: "",
    icon: <FaXTwitter size="42" />,
    color: "#657786",
    shadow: "rgba(101,119,134,0.5)",
    label: "Twitter",
  },
];

export default function FooterSocialMedia({ findUs }: { findUs: string }) {
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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const hoverEffect = (color: string, shadow: string) => ({
    scale: 1.2,
    rotate: 3,
    color: color,
    filter: `drop-shadow(0 10px 20px ${shadow})`,
    transition: {
      duration: 0.3,
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  });

  return (
    <motion.div
      className="flex flex-col gap-6"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      variants={container}
    >
      <motion.span className="font-semibold" variants={item}>
        {findUs}
      </motion.span>
      <div className="flex flex-wrap gap-10 text-white">
        {socialMediaLinks.map(({ href, icon, color, shadow, label }, index) => (
          <motion.a
            key={index}
            href={href}
            whileHover={hoverEffect(color, shadow)}
            custom={color}
            variants={item}
            style={{ color: "#ffffff" }}
            aria-label={label}
          >
            {icon}
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}
