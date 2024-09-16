"use client";

import Link from "next/link";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { FaWhatsapp } from "react-icons/fa6";
import { motion } from "framer-motion";
import MobileNav from "./mobile-nav";
import { DesktopNav } from "./desktop-nav";
import { useScrollDirection } from "@/hooks/use-scroll-direaction";

export function Header() {
  const scrollDirection = useScrollDirection();

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: scrollDirection === "up" ? -100 : 0, transition: { duration: 0.3 } }}
      className={`z-50 h-16 fixed top-0 left-0 right-0 w-full bg-saikindo-primary-700`}
    >
      <div className="container mx-auto h-full flex items-center justify-between font-ptsans">
        <motion.div initial={{ opacity: 0, x: -150 }} animate={{ opacity: 1, x: 0 }}>
          <Logo />
        </motion.div>
        <div className="flex items-center gap-6">
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
      <Avatar className="rounded-none w-20">
        <AvatarImage src="/logo.png" alt="saiki logo" className="object-contain object-center" />
      </Avatar>
    </Link>
  );
}

export function ContactSales({ className }: { className?: string }) {
  return (
    <Button
      size={"sm"}
      asChild
      className={`${className} bg-saikindo-secondary-600 rounded-full hover:bg-saikindo-secondary-500 gap-2`}
    >
      <Link href="https://wa.me/628111775774" title="Contact Us" target="_blank" className="flex items-center gap-2">
        <FaWhatsapp size={22} />
        Contact sales
      </Link>
    </Button>
  );
}
