"use client";

import { Link, Pathnames } from "@/i18n/routing";
import clsx from "clsx";
import { useSelectedLayoutSegment } from "next/navigation";
import { ComponentProps, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

// Define the structure for submenu items
type SubmenuItem = {
  label: string;
  href: Pathnames;
};

// Extend the props to include submenu items
type NavigationLinkProps<Pathname extends Pathnames> = ComponentProps<
  typeof Link<Pathname>
> & {
  submenu?: SubmenuItem[];
  submenuWidth?: number;
};

export default function NavigationLink<Pathname extends Pathnames>({
  href,
  submenu,
  submenuWidth,
  children,
  ...rest
}: NavigationLinkProps<Pathname>) {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : "/";
  const isActive = pathname === href;
  const [isOpen, setIsOpen] = useState(false);
  let timeoutId: NodeJS.Timeout;

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setIsOpen(false);
    }, 100); // Adjust delay time as needed
  };

  if (submenu) {
    return (
      <div className="relative">
        <button
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="inline-flex items-center gap-2 px-4 py-4 transition-colors font-outfit text-lg text-white hover:text-gray-200"
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          {children}
          <IoIosArrowDown
            size="20px"
            className={clsx(
              "transition-transform duration-300",
              isOpen && "rotate-180"
            )}
          />
        </button>

        <div
          className={clsx(
            "absolute left-4 bg-brandPrimaryBlue rounded-t-md rounded-b-3xl py-4 px-8  ease-in-out animate-duration-500",
            isOpen
              ? "animate-flip-down"
              : "animate-jump-out pointer-events-none" // animate-fade-up animate-reverse
          )}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="flex flex-col gap-4"
            style={{ width: `${submenuWidth}rem` }}
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {submenu.map((item) => (
              <Link
                className="font-outfit text-base text-white hover:text-gray-200"
                key={item.href}
                href={item.href}
                role="menuitem"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }
  {
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
