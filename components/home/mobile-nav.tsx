"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { FaWhatsapp } from "react-icons/fa6";
import { Logo } from "./header";
import Link from "next/link";
import { navbarMenu } from "./desktop-nav";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function MobileNav() {
  const pathname = usePathname();
  const [activeHover, setActiveHover] = useState<string | null>(null);
  const [activeClick, setActiveClick] = useState<string | null>(null);

  const path1 = pathname.split("/")[1];
  useEffect(() => {
    setActiveClick(path1);
  }, [path1]);

  return (
    <Sheet>
      <SheetTrigger asChild className="md:hidden flex items-center justify-center cursor-pointer">
        <div className={`transition text-saikindo-secondary-600`}>
          <Menu size={30} />
        </div>
      </SheetTrigger>
      <SheetContent className="bg-saikindo-primary-600/50 border-none">
        <SheetHeader className="text-left relative">
          <SheetTitle>
            <Logo />
          </SheetTitle>
          <SheetDescription className="hidden">Nav Description</SheetDescription>
        </SheetHeader>
        <div className="flex flex-col text-sm mt-6">
          {navbarMenu.map((item, i) => (
            <SheetClose asChild key={i}>
              <Link
                onMouseEnter={() => setActiveHover(item?.title)}
                onMouseLeave={() => setActiveHover("")}
                onClick={() => setActiveClick(item?.href.split("/")[1])}
                href={item.href}
                className="relative text-white py-3"
              >
                <div className="px-3">{item.title}</div>
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
            </SheetClose>
          ))}
        </div>
        <div className="absolute right-0 p-3 bottom-0">
          <SheetClose asChild>
            <Button
              size={"sm"}
              asChild
              className={`bg-saikindo-secondary-600 rounded-full hover:bg-saikindo-secondary-500 gap-2`}
            >
              <Link href="/#contact-us" title="Contact Us" className="flex items-center gap-2">
                <FaWhatsapp size={22} />
                Contact Us
              </Link>
            </Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}
