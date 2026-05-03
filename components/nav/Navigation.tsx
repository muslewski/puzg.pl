"use client";

import Hamburger from "@/components/nav/Hamburger";
import Links, { ListOfLinks } from "@/components/nav/Links";
import LocaleButtons, { LocaleButtonsLogic } from "@/components/nav/LocaleButtons";
import { Link } from "@/i18n/routing";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import clsx from "clsx";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "@/i18n/routing";
import { useMediaQuery } from "react-responsive";

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
  const t = useTranslations("TopBar");

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1023px)" });
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useMotionValueEvent(scrollY, "change", (current) => {
    setIsScrolled(current > SCROLLED_THRESHOLD);

    const previous = lastY.current;
    const delta = current - previous;

    if (active) {
      lastY.current = current;
      setIsHidden(false);
      return;
    }

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
      // Outer wrapper: full width, fixed at top, with breathing room from edges
      className="w-screen fixed top-0 z-30 pointer-events-none px-3 sm:px-4 lg:px-6 pt-3 lg:pt-4"
      animate={{ y: isHidden ? "-130%" : "0%" }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as const }}
    >
      <motion.nav
        ref={navRef}
        className={clsx(
          // Floating pill: centered, rounded, with shadow + subtle ring
          "mx-auto pointer-events-auto rounded-2xl lg:rounded-[1.5rem]",
          "bg-brandPrimaryBlue ring-1 ring-white/15",
          "transition-[padding,box-shadow] duration-300 ease-out",
          isScrolled
            ? "py-2 lg:py-2.5 shadow-[0_18px_44px_-18px_rgba(11,27,51,0.55)]"
            : "py-3 lg:py-3.5 shadow-[0_10px_28px_-12px_rgba(11,27,51,0.40)]",
          // Width: float in the middle on desktop, full width on tiny screens
          "w-full max-w-7xl"
        )}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] as const }}
      >
        {/* Inner content padding */}
        <div className="px-4 sm:px-6 lg:px-8">
          {/* Desktop: single-row floating pill */}
          {isMounted && !isTabletOrMobile && (
            <div className="flex items-center justify-between gap-6">
              <Link
                href="/"
                title={t("homeLinkTitle")}
                className="flex items-center gap-3 flex-shrink-0 transition-transform active:scale-[1.02]"
              >
                <div className="relative w-9 h-9 flex-shrink-0">
                  <Image
                    src="/images/Logo.svg"
                    fill
                    sizes="36px"
                    alt={t("logoAlt")}
                    className="object-contain brightness-0 invert"
                  />
                </div>
                <span className="hidden xl:block font-montserrat text-[13px] font-bold leading-[1.15] tracking-tight text-white max-w-44">
                  {t("home")}
                </span>
              </Link>

              <div className="flex items-center gap-1 flex-1 justify-end">
                <ListOfLinks />
              </div>

              <div className="flex-shrink-0">
                <LocaleButtonsLogic />
              </div>
            </div>
          )}

          {/* Mobile/tablet: brand + hamburger; menu opens below */}
          {(!isMounted || isTabletOrMobile) && (
            <>
              <div className="flex items-center justify-between gap-3">
                <Link
                  href="/"
                  title={t("homeLinkTitle")}
                  className="flex items-center gap-3 flex-shrink-0"
                >
                  <div className="relative w-9 h-9 flex-shrink-0">
                    <Image
                      src="/images/Logo.svg"
                      fill
                      sizes="36px"
                      alt={t("logoAlt")}
                      className="object-contain brightness-0 invert"
                    />
                  </div>
                  <span className="font-montserrat text-sm font-bold leading-[1.15] tracking-tight text-white max-w-56">
                    {t("home")}
                  </span>
                </Link>

                <Hamburger active={active} setActive={setActive} />
              </div>

              {active && (
                <div className="mt-4 flex flex-col gap-4 pb-2">
                  <LocaleButtons active={active} />
                  <Links active={active} />
                </div>
              )}
            </>
          )}
        </div>
      </motion.nav>
    </motion.div>
  );
}
