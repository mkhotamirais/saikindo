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
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ModeToggle } from "../theme/mode-toggle";
import { navbarMenu } from "@/lib/navbar-menu";

export default function MobileNav() {
  const pathname = usePathname();
  const [activeHover, setActiveHover] = useState<string | null>(null);
  const [activeClick, setActiveClick] = useState<string | null>(null);

  const path1 = pathname.split("/")[1];
  useEffect(() => {
    setActiveClick(path1);
  }, [path1]);

  return (
    <div className="md:hidden flex">
      <Sheet>
        <SheetTrigger className="items-center justify-center cursor-pointer">
          <div className={`transition text-primary`}>
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
                        className="-z-10 absolute inset-0 bg-primary/25 rounded"
                      />
                    )}
                  </AnimatePresence>
                  {activeClick === item.href.split("/")[1] && (
                    <motion.div
                      layoutId="activeClick"
                      className="absolute h-0.5 left-0 right-0 bg-primary rounded-full bottom-0"
                    />
                  )}
                </Link>
              </SheetClose>
            ))}
          </div>
          <div className="absolute right-0 p-4 bottom-0 flex justify-between w-full gap-2">
            <SheetClose asChild>
              <Button asChild className={`bg-primary gap-2`}>
                <Link href="/#contact-us" title="Contact Us" className="flex items-center gap-2">
                  <FaWhatsapp size={22} />
                  Contact Us
                </Link>
              </Button>
            </SheetClose>
            <ModeToggle />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
