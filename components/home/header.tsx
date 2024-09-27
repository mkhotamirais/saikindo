"use client";

import Link from "next/link";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { FaWhatsapp } from "react-icons/fa6";
import { motion } from "framer-motion";
import MobileNav from "./mobile-nav";
import { DesktopNav } from "./desktop-nav";
import { useScrollDirection } from "@/hooks/use-scroll-direaction";
import { useMaxScrollReached } from "@/hooks/use-max-scroll-reached";

export function Header() {
  const scrollDirection = useScrollDirection();
  const { maxScrollReached } = useMaxScrollReached();

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: scrollDirection === "up" && !maxScrollReached ? "-100%" : 0, transition: { duration: 0.3 } }}
      className={`z-50 h-16 overflow-hidden hover:overflow-visible fixed top-0 left-0 right-0 w-full bg-background/80 backdrop-blur-sm`}
    >
      <div className="container mx-auto h-full flex items-center justify-between font-ptsans">
        <motion.div initial={{ opacity: 0, x: -150 }} animate={{ opacity: 1, x: 0 }}>
          <Logo />
        </motion.div>
        <div className="relative flex items-center gap-6">
          <MobileNav />
          <DesktopNav />
        </div>
      </div>
    </motion.header>
  );
}

export function Logo() {
  return (
    <Link href="/" className="inline-block max-w-min">
      <div className="flex gap-2 items-center">
        <Avatar className="rounded-none w-20">
          <AvatarImage src="/ssg-logo-edit.png" alt="saiki logo" className="object-contain object-center" />
        </Avatar>
        {/* <h1 className="text-primary font-josefin text">Saikindo</h1> */}
      </div>
    </Link>
  );
}

export function ContactSales({ className }: { className?: string }) {
  return (
    <Button asChild className={`${className} gap-2`}>
      <Link href="/#contact-us" title="Contact Us" className="flex items-center gap-2">
        <FaWhatsapp size={22} />
        Contact Us
      </Link>
    </Button>
  );
}
