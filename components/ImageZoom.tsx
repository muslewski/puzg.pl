"use client";

import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";

interface ImageZoomProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ImageZoom({
  src,
  alt,
  className = "",
}: ImageZoomProps) {
  const [isZoomed, setIsZoomed] = useState(false);
  const [portalContainer, setPortalContainer] = useState<HTMLElement | null>(
    null
  );
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    setPortalContainer(document.body);
  }, []);

  const handleZoomToggle = () => {
    setIsZoomed(!isZoomed);
  };

  useEffect(() => {
    if (isZoomed) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isZoomed]);

  const getImagePosition = () => {
    if (!imageRef.current) return { top: 0, left: 0, width: 0, height: 0 };
    const rect = imageRef.current.getBoundingClientRect();
    return {
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height,
    };
  };

  return (
    <>
      <Image
        ref={imageRef}
        src={src}
        alt={alt}
        className={`cursor-zoom-in ${className}`}
        onClick={handleZoomToggle}
        fill
      />
      {portalContainer &&
        createPortal(
          <AnimatePresence>
            {isZoomed && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black bg-opacity-90 z-50 cursor-zoom-out"
                onClick={handleZoomToggle}
              >
                <motion.div
                  initial={getImagePosition()}
                  animate={{
                    top: "50%",
                    left: "50%",
                    x: "-50%",
                    y: "-50%",
                    width: "90vw",
                    height: "90vh",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="absolute overflow-hidden drop-shadow-2xl"
                >
                  <div className="relative w-full h-full p-4">
                    <Image
                      src={src}
                      alt={alt}
                      className="object-contain rounded-lg"
                      fill
                      sizes="90vw"
                      priority
                    />
                  </div>
                </motion.div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleZoomToggle();
                  }}
                  className="absolute top-6 right-6 bg-brandDark bg-opacity-50 rounded-full p-2 text-white hover:bg-opacity-70 transition-colors"
                  aria-label="Close zoom view"
                >
                  <IoClose size={24} />
                </button>
              </motion.div>
            )}
          </AnimatePresence>,
          portalContainer
        )}
    </>
  );
}
