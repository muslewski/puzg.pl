"use client";

import Links from "@/components/nav/Links";
import LocaleButtons from "@/components/nav/LocaleButtons";
import TopBar from "@/components/nav/TopBar";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Navigation() {
  const [active, setActive] = useState(false);

  return (
    <div className="w-screen flex justify-center fixed z-10">
      <motion.nav
        className="flex flex-col items-center gap-5 w-screen 2xl:w-10/12 3xl:w-4/5 max-w-[2000px] py-6 lg:py-12 px-8 lg:px-24 3xl:px-36 bg-brandPrimaryBlue lg:bg-transparent overflow-hidden"
        initial={false}
        animate={active ? "open" : "closed"}
        variants={{
          open: {
            height: "auto",
            transitionEnd: {
              overflow: "visible",
            },
          },
          closed: {
            height: "9.5rem",
          },
        }}
      >
        <LocaleButtons />
        <TopBar active={active} setActive={setActive} />
        <Links />
      </motion.nav>
    </div>
  );
}
