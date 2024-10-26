"use client";

import Links from "@/components/nav/Links";
import LocaleButtons from "@/components/nav/LocaleButtons";
import TopBar from "@/components/nav/TopBar";
import { useState } from "react";

export default function Navigation() {
  const [active, setActive] = useState(false);

  return (
    <div className="w-screen flex justify-center fixed z-10">
      <nav className="flex flex-col items-center gap-5 w-screen 2xl:w-10/12 3xl:w-4/5 max-w-[2000px] py-6 lg:py-12 px-8 lg:px-24 3xl:px-36 bg-brandPrimaryBlue lg:bg-transparent ">
        <LocaleButtons />
        <TopBar active={active} setActive={setActive} />
        <Links active={active} />
      </nav>
    </div>
  );
}
