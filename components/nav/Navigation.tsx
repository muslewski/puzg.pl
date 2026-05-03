"use client";

import Links from "@/components/nav/Links";
import LocaleButtons from "@/components/nav/LocaleButtons";
import TopBar from "@/components/nav/TopBar";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "@/i18n/routing";
import { motion } from "framer-motion";

export default function Navigation() {
  const [active, setActive] = useState(false);

  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    /**
     * Close navigation if clicked outside of element when active is true
     */
    function handleClickOutside(event: MouseEvent) {
      if (
        navRef.current &&
        !navRef.current.contains(event.target as Node) &&
        active
      ) {
        setActive(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navRef, active]);

  useEffect(() => {
    /**
     * Close navigation if the pathname changes while active is true
     */

    if (active) {
      setActive(false);
    }
  }, [pathname]);

  return (
    <div className="w-screen flex justify-center fixed z-30 pointer-events-none">
      <motion.nav
        ref={navRef}
        className="flex flex-col items-center gap-5 w-screen 3xl:w-10/12  max-w-[2000px] py-5 lg:py-8 px-6 sm:px-8 lg:px-24 3xl:px-36 bg-brandPrimaryBlue/95 backdrop-blur-md supports-[backdrop-filter]:bg-brandPrimaryBlue/80 lg:bg-transparent lg:supports-[backdrop-filter]:bg-transparent shadow-lg lg:shadow-none ring-1 ring-white/10 lg:ring-0 rounded-b-3xl pointer-events-auto lg:pointer-events-none"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 14,
          duration: 0.5,
        }}
      >
        <LocaleButtons active={active} />
        <TopBar active={active} setActive={setActive} />
        <Links active={active} />
      </motion.nav>
    </div>
  );
}
