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
          className="inline-flex items-center gap-2 p-2 transition-colors duration-500 font-outfit text-lg text-brandDark lg:text-white hover:text-brandPrimaryBlue lg:hover:text-brandWashedBlue"
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
                  ease: "easeInOut",
                },
                pointerEvents: "none",
              }}
              className="absolute left-0 w-full lg:w-fit lg:left-2 top-0 lg:top-full  bg-white/85 backdrop-blur-md lg:bg-brandPrimaryBlue rounded-t-md rounded-b-3xl py-6 px-8 shadow-md z-30"
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
            >
              <div
                className="w-full flex flex-row flex-wrap lg:flex-col gap-y-4 gap-x-6"
                style={{
                  width: isTabletOrMobile ? "100%" : `${submenuWidth}rem`,
                }}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                {submenu.map((item, index) => (
                  <Link
                    key={index}
                    aria-current={path === item.href ? "page" : undefined}
                    className={clsx("text-base", linkStyle)}
                    style={{ opacity: path === item.href ? "70%" : "" }}
                    href={item.href}
                    role="menuitem"
                  >
                    <CustomUnderline />
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.3,
                          delay: index * 0.1, // Add stagger effect with delay
                          ease: "easeOut",
                        },
                      }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{
                        duration: 0.3,
                        ease: "easeOut",
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
      className={clsx("p-2 text-lg", linkStyle)}
      style={{ opacity: path === href ? "70%" : "" }}
      href={href}
      {...rest}
    >
      {children}
      <CustomUnderline />
    </Link>
  );
}
