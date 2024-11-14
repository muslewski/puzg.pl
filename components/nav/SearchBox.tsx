"use client";

import { SearchItem, searchItems } from "@/data/searchItems";
import { useRouter } from "@/i18n/routing";
import { AnimatePresence, easeIn, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useCallback, useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";

export default function SearchBox({
  placeholderText,
  buttonText,
}: {
  placeholderText: string;
  buttonText: string;
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<SearchItem[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const router = useRouter();
  const t = useTranslations();

  const handleSearch = useCallback(() => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    const filtered = searchItems.filter((item) => {
      const title = t(item.titleKey as any).toLowerCase();
      const description = t(item.descriptionKey as any).toLowerCase();
      const query = searchQuery.toLowerCase();

      return title.includes(query) || description.includes(query);
    });

    setResults(filtered.slice(0, 5)); // Limit to x results for better UX
  }, [searchQuery, t]);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleSearch();
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery, handleSearch]);

  // Close search results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".search-container")) {
        setIsSearching(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -5 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="relative w-full max-w-2xl search-container z-50">
      <div className="h-12 w-fit border-2 rounded-2xl border-brandDark/25 overflow-hidden relative flex items-center font-outfit">
        <CiSearch className="absolute left-3 w-6 h-6 pointer-events-none text-brandPrimaryBlue" />
        <input
          className="h-full pl-12 pr-6 bg-white rounded-l-2xl shadow-inner2 text-base w-full lg:w-72"
          placeholder={placeholderText}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setIsSearching(true)}
        />
        <button
          className="h-full  px-6 bg-brandBrightBlue rounded-r-[12px]  text-white text-sm transition-all hover:bg-brandBrightBlue/90 focus:scale-105"
          onClick={handleSearch}
        >
          {buttonText}
        </button>
      </div>

      {/* Search Results Dropdown */}
      <AnimatePresence>
        {isSearching && results.length > 0 && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="absolute w-full mt-2 bg-white rounded-xl shadow-lg border border-gray-200 max-h-[60vh] overflow-y-auto z-50"
          >
            {results.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-4 hover:bg-gray-50 cursor-pointer border-b last:border-b-0 transition-colors"
                onClick={() => {
                  router.push(item.href as any);
                  setIsSearching(false);
                  setSearchQuery("");
                }}
              >
                <h3 className="text-lg font-semibold text-brandDark">
                  {t(item.titleKey as any)}
                </h3>
                <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                  {t(item.descriptionKey as any)}
                </p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
