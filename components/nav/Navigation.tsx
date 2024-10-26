"use client";

import Links from "@/components/nav/Links";
import LocaleButtons from "@/components/nav/LocaleButtons";
import TopBar from "@/components/nav/TopBar";
import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "@/i18n/routing";

export default function Navigation() {
  const [active, setActive] = useState(false);

  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    /**
     * Close navigation if clicked outside of element when active is true
     */
    function handleClickOutside(event: MouseEvent) {
      if (
        navRef.current &&
        !navRef.current.contains(event.target as Node) &&
        active
      ) {
        setActive(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navRef, active]);

  useEffect(() => {
    /**
     * Close navigation if the pathname changes while active is true
     */
    if (active) {
      setActive(false);
    }
  }, [pathname]);

  return (
    <div className="w-screen flex justify-center fixed z-10">
      <nav
        ref={navRef}
        className="flex flex-col items-center gap-5 w-screen 2xl:w-10/12 3xl:w-4/5 max-w-[2000px] py-6 lg:py-12 px-8 lg:px-24 3xl:px-36 bg-brandPrimaryBlue lg:bg-transparent border-[#1B7CB0] border-b-[5px] lg:border-b-0 rounded-b-2xl"
      >
        <LocaleButtons active={active} />
        <TopBar active={active} setActive={setActive} />
        <Links active={active} />
      </nav>
    </div>
  );
}
