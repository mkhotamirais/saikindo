"use client";

import Link from "next/link";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Container } from "../wrapper";
import { Navbar, NavbarBtn } from "./navbar";
import { FaEnvelope, FaGlobe, FaWhatsapp } from "react-icons/fa6";
import { Button } from "../ui/button";

export function Header() {
  return (
    <header className="z-50 h-16 sticky top-0 w-full shadow-sm bg-white/70 backdrop-blur">
      <Container>
        <div className="h-full flex items-center justify-between">
          <Logo />
          {/* <Navbar /> */}
          {/* <NavbarBtn /> */}
          <Button className="bg-green-600 rounded-full hover:bg-green-500">Order Now</Button>
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

const socialsMenu = [
  { icon: FaEnvelope, href: "mailto:office.saikindosg@gmail.com", title: "our email link" },
  { icon: FaWhatsapp, href: "https://wa.me/628111775774", title: "our whatsapp contact" },
  { icon: FaGlobe, href: "https://saikindosg.vercel.app/", title: "our website homepage" },
];

export function Socials({ size = 24, className }: { size: number; className?: string }) {
  return (
    <div className={`${className}`}>
      <div className="flex gap-4">
        {socialsMenu.map((item, i) => (
          <a key={i} title={item.title} href={item.href}>
            <item.icon size={size} className="text-saiki-accent hover:scale-110 transition" />
          </a>
        ))}
      </div>
    </div>
  );
}
