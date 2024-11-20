"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { bipStructure } from "@/data/bipStructure";
import { MenuItem } from "@/components/bip/MenuItem";
import { Link } from "@/i18n/routing";
import Image from "next/image";

export default function BiuletynLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarWidth, setSidebarWidth] = useState(320);
  const [isDragging, setIsDragging] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const handleResize = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();

    const startX = event.clientX;
    const startWidth = sidebarWidth;

    const onMouseMove = (moveEvent: MouseEvent) => {
      moveEvent.preventDefault();
      const deltaX = moveEvent.clientX - startX;
      const newWidth = Math.max(200, Math.min(startWidth + deltaX, 600));
      setSidebarWidth(newWidth);
    };

    const onMouseUp = (upEvent: MouseEvent) => {
      upEvent.preventDefault();
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
      setIsDragging(false);
      document.body.style.cursor = "default";
      document.body.style.userSelect = "auto";
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
    setIsDragging(true);
    document.body.style.cursor = "col-resize";
    document.body.style.userSelect = "none";
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <motion.aside
        ref={sidebarRef}
        initial={{ width: sidebarWidth }}
        animate={{ width: sidebarWidth }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
        className={`h-fit bg-white shadow-xl rounded-xl py-6 px-10 mt-52 lg:mt-[24rem] z-20 relative 
          ${isDragging ? "shadow-2xl" : "shadow-lg"}`}
        style={{
          width: `${sidebarWidth}px`,
          transition: "box-shadow 0.3s ease-in-out",
        }}
      >
        <Link
          href="/biuletyn-informacji-publicznej"
          className="w-fit h-fit flex items-center gap-4 mb-4"
        >
          <h2 className="text-lg font-bold text-brandDark">Nawigacja</h2>
          <div className="relative w-[48px] h-[20px]">
            <Image
              src="/images/bip.png"
              fill
              sizes="72px"
              className="object-contain"
              alt="bip logo"
            />
          </div>
        </Link>
        <nav className="flex flex-col gap-4">
          {bipStructure.map((item, index) => (
            <MenuItem key={index} item={item} />
          ))}
        </nav>

        {/* Resize Handle */}
        <motion.div
          onMouseDown={handleResize}
          whileHover={{
            width: 8,
            backgroundColor: "rgb(200 219 242)", // blue-300
          }}
          className={`absolute right-0 top-1/2 -translate-y-1/2 w-2 cursor-col-resize 
            ${
              isDragging
                ? "bg-gradient-to-t from-washedBlue-1200"
                : "bg-gradient-to-t from-washedBlue-800 hover:from-washedBlue-1100"
            }`}
          style={{
            height: "100%",
            transform: "translateX(100%) translateY(-50%)",
            zIndex: 30,
            borderRadius: "0 4px 4px 0",
          }}
        ></motion.div>
      </motion.aside>

      <main className="flex-1">{children}</main>
    </div>
  );
}
