"use client";

import FooterSocialMedia from "@/components/footer/FooterSocialMedia";
import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";
import Image from "next/image";

export default function FooterContent({
  localization,
  contact,
  bip,
  accessibilityDeclaration,
  privacyPolicy,
  findUs,
}: {
  localization: string;
  contact: string;
  bip: string;
  accessibilityDeclaration: string;
  privacyPolicy: string;
  findUs: string;
}) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

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

  const hoverVariants = {
    hover: {
      scale: 1.02,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
      className="flex flex-col gap-10 gap-y-24"
    >
      <div className="flex flex-col lg:flex-row gap-x-10 gap-y-16 justify-between bg-gradient-to-tr from-gray-800/20 p-6 rounded-3xl backdrop-blur-sm">
        <motion.div
          variants={itemVariants}
          className="bg-gray-800/30 p-6 lg:px-10 rounded-lg backdrop-blur-sm"
        >
          <motion.div
            className="flex items-center gap-2 mb-2"
            whileHover="hover"
            variants={hoverVariants}
          >
            <svg
              className="w-5 h-5 text-blue-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span className="font-semibold">{localization}</span>
          </motion.div>
          <p className="text-gray-300 text-lg  pt-2">
            Czarnieckiego 5/7, <br /> 86-300 Grudziądz
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="bg-gray-800/30 p-6 lg:px-10 rounded-lg backdrop-blur-sm"
        >
          <motion.div
            className="flex items-center gap-2 mb-2"
            whileHover="hover"
            variants={hoverVariants}
          >
            <svg
              className="w-5 h-5 text-blue-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span className="font-semibold">Email:</span>
          </motion.div>
          <ul className="text-gray-300 text-lg pt-2">
            <motion.li whileHover="hover" variants={hoverVariants}>
              rekrutacja@puzg.pl
            </motion.li>
          </ul>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="bg-gray-800/30 p-6 lg:px-10 rounded-lg backdrop-blur-sm"
        >
          <motion.div
            className="flex items-center gap-2 mb-2"
            whileHover="hover"
            variants={hoverVariants}
          >
            <svg
              className="w-5 h-5 text-blue-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span className="font-semibold">{contact}</span>
          </motion.div>
          <ul className="text-gray-300 text-lg pt-2">
            <motion.li whileHover="hover" variants={hoverVariants}>
              576-060-123
            </motion.li>
            <motion.li whileHover="hover" variants={hoverVariants}>
              576-060-124
            </motion.li>
          </ul>
        </motion.div>
      </div>

      <div className="flex flex-col lg:flex-row gap-32 2xl:gap-x-64 gap-y-16 justify-start">
        <div className="flex flex-col gap-5 bg-gradient-to-br from-gray-800/20 p-6 rounded-3xl backdrop-blur-sm">
          <Link
            href="/biuletyn-informacji-publicznej"
            className="flex items-center gap-3 transition-transform hover:scale-[102%] px-6 py-3 bg-gray-800/30 rounded-lg"
          >
            {bip}
            <div className="relative w-[48px] h-[20px]">
              <Image
                src="/images/bip.png"
                fill
                sizes="72px"
                className="object-contain"
                alt="bip logo"
              />
            </div>
          </Link>
          <Link
            className="transition-transform hover:scale-[102%] px-6 py-3 bg-gray-800/30 rounded-lg"
            href="/deklaracja-dostepnosci"
          >
            {accessibilityDeclaration}
          </Link>
          <Link
            className="transition-transform hover:scale-[102%] px-6 py-3 bg-gray-800/30 rounded-lg"
            href="/polityka-prywatnosci"
          >
            {privacyPolicy}
          </Link>
        </div>

        <FooterSocialMedia findUs={findUs} />
      </div>
    </motion.div>
  );
}
