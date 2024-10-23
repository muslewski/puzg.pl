"use client";

import { Link, Pathnames, usePathname } from "@/i18n/routing";
import clsx from "clsx";
import { ComponentProps, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";

// Define the structure for submenu items
type SubmenuItem = {
  label: string;
  href: Pathnames;
};

// Extend the props to include submenu items
type NavigationLinkProps<Pathname extends Pathnames> = Omit<
  ComponentProps<typeof Link>,
  "href"
> & {
  href?: Pathnames;
  submenu?: SubmenuItem[];
  submenuWidth?: number;
  children: React.ReactNode;
};

export function CustomUnderline() {
  return (
    <span className="absolute -bottom-0 -left-2 -right-2 h-1 origin-left rounded-full bg-gradient-to-r from-brandWashedBlue to-brandWashedBlue/85 transition-all duration-500 ease-out pointer-events-none" />
  );
}

export default function NavigationLink<Pathname extends Pathnames>({
  href,
  submenu,
  submenuWidth = 36,
  children,
  ...rest
}: NavigationLinkProps<Pathname>) {
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();

  // <CustomUnderline /> need to be a children of item with linkStyle
  const linkStyle =
    "relative py-2 text-white font-outfit hover:text-brandWashedBlue active:scale-105 active:text-white  transition-all duration-500 [&>span]:scale-x-0 [&>span]:hover:scale-x-100 [&>span]:focus:bg-brandPrimaryBlue [&>span]:focus:scale-x-0 [&>span]:focus:origin-right w-fit";

  if (submenu) {
    return (
      <div className="relative">
        <button
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          className="inline-flex items-center gap-2 p-2 transition-colors font-outfit text-lg text-white hover:text-gray-200"
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
              className="absolute left-4 bg-brandPrimaryBlue rounded-t-md rounded-b-3xl py-6 px-8 shadow-md"
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
            >
              <div
                className="flex flex-col gap-6"
                style={{ width: `${submenuWidth}rem` }}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                {submenu.map((item, index) => (
                  <Link
                    key={item.href}
                    aria-current={path === item.href ? "page" : undefined}
                    className={clsx("text-base", linkStyle)}
                    style={{ color: path === item.href ? "#ADCAEC" : "" }}
                    href={item.href}
                    role="menuitem"
                  >
                    <CustomUnderline />
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.1, // Add stagger effect with delay
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
      style={{ color: path === href ? "#ADCAEC" : "" }}
      href={href}
      {...rest}
    >
      {children}
      <CustomUnderline />
    </Link>
  );
}
