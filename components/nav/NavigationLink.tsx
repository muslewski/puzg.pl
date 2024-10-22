"use client";

import { Link, Pathnames } from "@/i18n/routing";
import clsx from "clsx";
import { useSelectedLayoutSegment } from "next/navigation";
import { ComponentProps, useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";

// Define the structure for submenu items
type SubmenuItem = {
  label: string;
  href: Pathnames;
};

// Extend the props to include submenu items
type NavigationLinkProps<Pathname extends Pathnames> = Omit<
  ComponentProps<typeof Link<Pathname>>,
  "href"
> & {
  href?: Pathnames;
  submenu?: SubmenuItem[];
  submenuWidth?: number;
};

export default function NavigationLink<Pathname extends Pathnames>({
  href,
  submenu,
  submenuWidth = 36,
  children,
  ...rest
}: NavigationLinkProps<Pathname>) {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : "/";
  const isActive = href ? pathname === href : false;
  const [isOpen, setIsOpen] = useState(false);

  if (submenu) {
    return (
      <div className="relative">
        <button
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          className="inline-flex items-center gap-2 px-4 py-4 transition-colors font-outfit text-lg text-white hover:text-gray-200"
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
                    className="font-outfit text-base text-white hover:text-gray-200"
                    href={item.href}
                    role="menuitem"
                  >
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
      aria-current={isActive ? "page" : undefined}
      className={clsx(
        "inline-block px-4 py-4 transition-colors font-outfit text-lg",
        isActive ? "text-gray-200" : "text-white hover:text-gray-200"
      )}
      href={href}
      {...rest}
    >
      {children}
    </Link>
  );
}
