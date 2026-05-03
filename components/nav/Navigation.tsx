"use client";

import Links from "@/components/nav/Links";
import LocaleButtons from "@/components/nav/LocaleButtons";
import TopBar from "@/components/nav/TopBar";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "@/i18n/routing";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import clsx from "clsx";

const SCROLLED_THRESHOLD = 60;
const HIDE_THRESHOLD = 120;
const DELTA_THRESHOLD = 8;

export default function Navigation() {
  const [active, setActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastY = useRef(0);

  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (current) => {
    setIsScrolled(current > SCROLLED_THRESHOLD);

    const previous = lastY.current;
    const delta = current - previous;

    // Never hide while mobile menu is open
    if (active) {
      lastY.current = current;
      setIsHidden(false);
      return;
    }

    // Ignore tiny scroll jitter (touchpad inertia)
    if (Math.abs(delta) < DELTA_THRESHOLD) return;

    if (current < HIDE_THRESHOLD) {
      setIsHidden(false);
    } else if (delta > 0) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }

    lastY.current = current;
  });

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        navRef.current &&
        !navRef.current.contains(event.target as Node) &&
        active
      ) {
        setActive(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navRef, active]);

  useEffect(() => {
    if (active) {
      setActive(false);
    }
  }, [pathname]);

  return (
    <motion.div
      className="w-screen flex justify-center fixed top-0 z-30 pointer-events-none"
      animate={{ y: isHidden ? "-110%" : "0%" }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.nav
        ref={navRef}
        className={clsx(
          "flex flex-col items-center w-screen 3xl:w-10/12 max-w-[2000px] px-6 sm:px-8 lg:px-24 3xl:px-36 rounded-b-3xl lg:rounded-none lg:bg-transparent lg:shadow-none lg:ring-0 pointer-events-auto lg:pointer-events-none transition-[padding,background-color,gap] duration-300 ease-out",
          isScrolled
            ? "py-3 lg:py-3 gap-3 bg-brandPrimaryBlue shadow-elevated ring-1 ring-white/10"
            : "py-5 lg:py-6 gap-5 bg-brandPrimaryBlue shadow-lg ring-1 ring-white/10"
        )}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <LocaleButtons active={active} />
        <TopBar active={active} setActive={setActive} />
        <Links active={active} />
      </motion.nav>
    </motion.div>
  );
}
