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
import { FaBars, FaWhatsapp } from "react-icons/fa6";
import { Logo } from "./header";
import Link from "next/link";
import { navbarMenu } from "./desktop-nav";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";

export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild className="md:hidden flex items-center justify-center cursor-pointer">
        <div className={`transition text-saikindo-secondary-600`}>
          <Menu size={30} />
        </div>
      </SheetTrigger>
      <SheetContent className="bg-saikindo-primary-600 border-none">
        <SheetHeader className="text-left relative">
          <SheetTitle>
            <Logo />
          </SheetTitle>
          <SheetDescription className="hidden">Nav Description</SheetDescription>
        </SheetHeader>
        <div className="flex flex-col text-sm mt-6">
          {navbarMenu.map((item, i) => (
            <SheetClose asChild key={i}>
              <Link href={item.href} className="text-white hover:text-saikindo-secondary-500 py-3">
                {item.title}
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
