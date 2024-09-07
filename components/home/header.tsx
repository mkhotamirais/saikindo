"use client";

import Link from "next/link";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Container } from "../wrapper";
import { Button } from "../ui/button";
import { FaPhone } from "react-icons/fa6";
import { Navbar, NavbarBtn } from "./navbar";
import { motion } from "framer-motion";

export function Header() {
  return (
    <header className="z-50 h-16 sticky top-0 w-full shadow hover:shadow-md shadow-green-50 hover:shadow-green-100 bg-white transition">
      <Container>
        <div className="h-full flex items-center justify-between">
          <motion.div initial={{ opacity: 0, x: -150 }} animate={{ opacity: 1, x: 0 }}>
            <Logo />
          </motion.div>
          <motion.div initial={{ scale: 0, y: 150 }} animate={{ scale: 1, y: 0 }}>
            <Navbar />
          </motion.div>
          <NavbarBtn />
          <motion.div initial={{ opacity: 0, x: 150 }} animate={{ opacity: 1, x: 0 }}>
            <ContactSales className="hidden md:flex" />
          </motion.div>
        </div>
      </Container>
    </header>
  );
}

export function Logo() {
  return (
    <Link href="/" className="inline-block max-w-min">
      <Avatar className="rounded-none w-24">
        <AvatarImage src="/logo.png" alt="saiki logo" className="object-contain object-center" />
      </Avatar>
    </Link>
  );
}

export function ContactSales({ className }: { className: string }) {
  return (
    <Button size={"sm"} className={`${className} bg-green-600 rounded-full hover:bg-green-500 gap-2`}>
      <FaPhone />
      Contact sales
    </Button>
  );
}
