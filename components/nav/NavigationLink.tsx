"use client";

import { Link, usePathname } from "@/i18n/routing";
import clsx from "clsx";
import { ComponentProps, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

// Define the structure for submenu items
type SubmenuItem = {
  label: string;
  href: ComponentProps<typeof Link>["href"];
};

// Extend the props to include submenu items
type NavigationLinkProps = Omit<ComponentProps<typeof Link>, "href"> & {
  href?: ComponentProps<typeof Link>["href"];
  submenu?: SubmenuItem[];
  submenuWidth?: number;
  children: React.ReactNode;
};

export function CustomUnderline() {
  return (
    <span className="absolute -bottom-0 -left-2 -right-2 h-1 origin-left rounded-full bg-gradient-to-r from-brandPrimaryBlue lg:from-brandWashedBlue to-brandPrimaryBlue/85 lg:to-brandWashedBlue/85 transition-all duration-500 ease-out pointer-events-none" />
  );
}

export default function NavigationLink({
  href,
  submenu,
  submenuWidth = 36,
  children,
  ...rest
}: NavigationLinkProps) {
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1023px)" });

  // <CustomUnderline /> need to be a children of item with linkStyle
  const linkStyle =
    "relative py-2 text-brandDark lg:text-white font-outfit hover:text-brandPrimaryBlue lg:hover:text-brandWashedBlue active:scale-105 lg:active:text-white  transition-all duration-500 [&>span]:scale-x-0 [&>span]:hover:scale-x-100 [&>span]:focus:bg-brandPrimaryBlue [&>span]:focus:scale-x-0 [&>span]:focus:origin-right w-fit";

  if (submenu) {
    return (
      <div className="lg:relative">
        <button
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          className="inline-flex items-center gap-1.5 px-2 py-2 lg:px-3 transition-colors duration-300 font-outfit lg:text-[15px] text-brandDark lg:text-white hover:text-brandPrimaryBlue lg:hover:text-brandWashedBlue whitespace-nowrap"
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          {children}
          <IoIosArrowDown
            size="20px"
            className={clsx(
              "transition-transform duration-300",
              isOpen && "rotate-180",
              !isOpen && "rotate-0"
            )}
          />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{
                opacity: 0,
                y: -10,
                scale: 0.95,
                transition: {
                  duration: 0.2,
                  ease: "easeInOut" as const,
                },
                pointerEvents: "none",
              }}
              className={clsx(
                "absolute top-0 lg:top-full z-30 shadow-elevated overflow-hidden",
                // Mobile: full width below trigger
                "left-0 w-full",
                // Desktop: align with trigger, set explicit max width per column count
                "lg:left-1/2 lg:-translate-x-1/2 lg:w-auto lg:min-w-[18rem]",
                submenu.length > 6 ? "lg:max-w-[34rem]" : "lg:max-w-[20rem]",
                "bg-white/95 backdrop-blur-md lg:bg-brandPrimaryBlue lg:ring-1 lg:ring-white/10 rounded-t-md rounded-b-2xl py-6 px-8 lg:max-h-[calc(100vh-10rem)] lg:overflow-y-auto"
              )}
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
            >
              <div
                className={clsx(
                  // Use CSS columns for natural top-down flow
                  "w-full",
                  isTabletOrMobile
                    ? "flex flex-row flex-wrap gap-x-6 gap-y-3"
                    : submenu.length > 6
                    ? "columns-2 gap-x-8 [column-fill:balance]"
                    : "flex flex-col gap-3"
                )}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                {submenu.map((item, index) => (
                  <Link
                    key={index}
                    aria-current={path === item.href ? "page" : undefined}
                    className={clsx(
                      "text-base block break-inside-avoid mb-2 last:mb-0",
                      linkStyle
                    )}
                    style={{ opacity: path === item.href ? "70%" : "" }}
                    href={item.href}
                    role="menuitem"
                  >
                    <CustomUnderline />
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.25,
                          delay: 0.05 + index * 0.04,
                          ease: "easeOut" as const,
                        },
                      }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{
                        duration: 0.2,
                        ease: "easeOut" as const,
                      }}
                    >
                      {item.label}
                    </motion.div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  if (!href) {
    throw new Error("NavigationLink without submenu must have an href prop");
  }

  return (
    <Link
      aria-current={path === href ? "page" : undefined}
      className={clsx("px-2 py-2 lg:px-3 lg:text-[15px] whitespace-nowrap", linkStyle)}
      style={{ opacity: path === href ? "70%" : "" }}
      href={href}
      {...rest}
    >
      {children}
      <CustomUnderline />
    </Link>
  );
}
