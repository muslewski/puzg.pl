"use client";

import { Link, Pathnames } from "@/i18n/routing";
import clsx from "clsx";
import { useSelectedLayoutSegment } from "next/navigation";
import {
  ComponentProps,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
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
  const [animate, setAnimate] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const clearTimeoutSafely = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  const handleMouseEnter = useCallback(() => {
    clearTimeoutSafely();
    setIsOpen(true);
    setAnimate(false);
  }, [clearTimeoutSafely]);

  const handleMouseLeave = useCallback(() => {
    setAnimate(true);
    clearTimeoutSafely();
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
      setAnimate(false);
    }, 500); // Adjust delay time as needed
  }, [clearTimeoutSafely]);

  // Cleanup on unmount
  useEffect(() => {
    return () => clearTimeoutSafely();
  }, [clearTimeoutSafely]);

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
              isOpen && "rotate-180",
              animate && "rotate-0"
            )}
          />
        </button>

        {isOpen && (
          <div
            className={clsx(
              "absolute left-4 bg-brandPrimaryBlue rounded-t-md rounded-b-3xl py-4 px-8 shadow-md",
              isOpen
                ? "animate-flip-down ease-in-out animate-duration-300"
                : " hidden", //
              animate &&
                "animate-fade-down -z-10 animate-reverse pointer-events-none animate-duration-300"
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
        )}
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
