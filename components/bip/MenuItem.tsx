"use client";

import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@/i18n/routing"; //! Change to next-intl
import { MenuItem as MenuItemType } from "@/data/bipStructure";
import clsx from "clsx";
import { usePathname } from "@/i18n/routing";

interface MenuItemProps {
  item: MenuItemType;
  level?: number;
}

export const MenuItem = ({ item, level = 0 }: MenuItemProps) => {
  const [isOpen, setIsOpen] = useState(level === 0);
  const pathname = usePathname();
  const isActive = item.href === pathname;
  const hasChildren = item.items && item.items.length > 0;

  const itemClasses = clsx(
    "flex items-center py-2 rounded-md cursor-pointer transition-colors",
    "hover:bg-brandWashedBlue/10",
    { "ml-4": level > 0 }
  );

  const textClasses = clsx("transition-colors", {
    "text-brandDark": level === 0,
    "text-brandPrimaryBlue": level > 0 && item.href,
    "text-brandBrightBlue": isActive,
    "hover:text-brandBrightBlue": !isActive && item.href,
  });

  return (
    <div>
      {item.href ? (
        <Link
          href={item.href}
          className={itemClasses}
          style={{ paddingLeft: `${level * 16}px` }}
        >
          <div>
            {hasChildren && (
              <motion.div
                initial={false}
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="mr-2"
              >
                <IoIosArrowDown className={clsx("w-4 h-4", textClasses)} />
              </motion.div>
            )}
            <span className={textClasses}>{item.title}</span>
          </div>
        </Link>
      ) : (
        <div
          className={itemClasses}
          style={{ paddingLeft: `${level * 16}px` }}
          onClick={() => hasChildren && setIsOpen(!isOpen)}
        >
          {hasChildren && (
            <motion.div
              initial={false}
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="mr-2"
            >
              <IoIosArrowDown className={clsx("w-4 h-4", textClasses)} />
            </motion.div>
          )}
          <span className={textClasses}>{item.title}</span>
        </div>
      )}

      <AnimatePresence>
        {isOpen && item.items && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{ overflow: "hidden" }}
          >
            {item.items.map((subItem, index) => (
              <MenuItem key={index} item={subItem} level={level + 1} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
