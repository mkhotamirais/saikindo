"use client";

import Link from "next/link";
import { ContactSales } from "./header";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ModeToggle } from "../theme/mode-toggle";
import { navbarMenu } from "@/lib/navbar-menu";

export function DesktopNav() {
  const [activeHover, setActiveHover] = useState<string | null>(null);
  const [activeClick, setActiveClick] = useState<string | null>(null);

  const [activeHoverChild, setActiveHoverChild] = useState<string | null>(null);
  const [activeClickChild, setActiveClickChild] = useState<string | null>(null);

  const pathname = usePathname();
  const path1 = pathname.split("/")[1];
  const path2 = pathname.split("/")[2];

  useEffect(() => {
    setActiveClick(path1);
    setActiveClickChild(path2);
  }, [path1, path2]);

  return (
    <nav className={`hidden md:block`}>
      <div className="flex flex-col md:flex-row gap-0 items-center">
        <div className="flex text-sm mr-4">
          {navbarMenu.map((item, i) => (
            <div
              onMouseEnter={() => setActiveHover(item.label)}
              onMouseLeave={() => setActiveHover(null)}
              key={i}
              className="relative group"
            >
              <Link
                onClick={() => setActiveClick(item.href.split("/")[1])}
                href={item.href}
                className="z-50 px-4 py-2 block"
              >
                {item.label}
              </Link>
              {activeClick === item.href.split("/")[1] && (
                <motion.div layoutId="activeClick" className="h-0.5 w-full bottom-0.5 absolute bg-primary" />
              )}
              <AnimatePresence>
                {activeHover === item.label && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    layoutId="activeHover"
                    className="-z-10 absolute bg-primary/10 inset-0 inset-y-1 rounded-md"
                  />
                )}
              </AnimatePresence>
              {item?.subMenu && (
                <div className="p-2 absolute -z-10 translate-y-10 group-hover:translate-y-0 group-hover:z-50 opacity-0 group-hover:opacity-100 bg-background border rounded-md transition">
                  <div className="flex flex-col">
                    {item?.subMenu?.map((itm, idx) => (
                      <div
                        key={idx}
                        onMouseEnter={() => setActiveHoverChild(itm.label)}
                        onMouseLeave={() => setActiveHoverChild(null)}
                        className="relative"
                      >
                        <Link href={itm.href} className="relative min-w-max block py-2 px-4">
                          {itm.label}
                        </Link>
                        {activeClickChild === itm.href.split("/")[2] && (
                          <motion.div layoutId="activeClick" className="h-0.5 w-full bottom-0.5 absolute bg-primary" />
                        )}
                        <AnimatePresence>
                          {activeHoverChild === itm.label && (
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              layoutId="activeHoverChild"
                              className="-z-10 absolute bg-primary/10 inset-0 inset-y-1 rounded-md"
                            />
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          <ContactSales className="flex self-start ml-4" />
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
