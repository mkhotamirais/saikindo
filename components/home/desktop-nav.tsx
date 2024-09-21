"use client";

import Link from "next/link";
import { ContactSales } from "./header";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const navbarMenu = [
  { href: "/", title: "Home" },
  { href: "/about", title: "About" },
  { href: "/uniform", title: "Uniform" },
  { href: "/power", title: "Power" },
  { href: "/event-organizer", title: "Event Organizer" },
  { href: "/health", title: "Health" },
];

export function DesktopNav() {
  const pathname = usePathname();
  const [activeHover, setActiveHover] = useState<string | null>(null);
  const [activeClick, setActiveClick] = useState<string | null>(null);

  const path1 = pathname.split("/")[1];
  useEffect(() => {
    setActiveClick(path1);
  }, [path1]);

  return (
    <nav className={`transition hidden md:block bg-white md:bg-inherit p-4`}>
      <div className="flex flex-col md:flex-row gap-0 items-center">
        {navbarMenu.map((item, i) => (
          <Link
            key={i}
            href={item.href}
            className="relative text-sm py-2 px-3 text-white"
            onMouseEnter={() => setActiveHover(item?.title)}
            onMouseLeave={() => setActiveHover("")}
            onClick={() => setActiveClick(item?.href.split("/")[1])}
          >
            <motion.div>{item.title}</motion.div>
            <AnimatePresence>
              {activeHover === item.title && (
                <motion.div
                  layoutId="activeHover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="-z-10 absolute inset-0 bg-saikindo-secondary-300/50 rounded"
                />
              )}
            </AnimatePresence>
            {activeClick === item.href.split("/")[1] && (
              <motion.div
                layoutId="activeClick"
                className="absolute h-0.5 left-0 right-0 bg-saikindo-secondary-500 rounded-full bottom-0"
              />
            )}
          </Link>
        ))}
        <ContactSales className="flex self-start ml-4" />
      </div>
    </nav>
  );
}
