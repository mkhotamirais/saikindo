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
import { usePathname } from "next/navigation";

export function Header() {
  const scrollDirection = useScrollDirection();
  const { maxScrollReached } = useMaxScrollReached();

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: scrollDirection === "up" && !maxScrollReached ? "-100%" : 0, transition: { duration: 0.3 } }}
      className={`z-50 h-16 overflow-hidden hover:overflow-visible fixed top-0 left-0 right-0 w-full bg-background/80 backdrop-blur-sm`}
    >
      <div className="container h-full flex items-center justify-between font-ptsans">
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

function DynamicLogo({ title, logoPath }: { title: string; logoPath: string }) {
  return (
    <div className="flex gap-3 items-center">
      <Avatar className="rounded-none h-12 w-12">
        <AvatarImage
          src={logoPath}
          alt="saiki logo"
          className="object-center object-contain h-full w-full dark:invert"
        />
      </Avatar>
      <div className="min-w-max flex flex-col *:leading-none">
        <span className="font-josefin text-xl font-bold">Saikindo</span>
        <span className="font-ptsans font-semibold">{title}</span>
      </div>
    </div>
  );
}
export function Logo() {
  const pathname = usePathname();
  const path2 = pathname.split("/")[2];

  let mainLogo = (
    <div className="flex h-12 gap-3 items-center">
      <Avatar className="rounded-none">
        <AvatarImage src="/logos/ssg-logo-square.png" alt="saiki logo" className="object-center" />
      </Avatar>
      <div className="w-max flex flex-col *:leading-none">
        <span className="font-josefin text-xl font-bold">Saikindo</span>
        <span className="font-ptsans font-semibold text-primary">Surya Gumiwang</span>
      </div>
    </div>
  );

  if (path2 === "event") {
    mainLogo = <DynamicLogo title="Event" logoPath="/logos/logo-saiki-event-fit.png" />;
  } else if (path2 === "uniform") {
    mainLogo = <DynamicLogo title="Uniform" logoPath="/logos/logo-saiki-uniform-fit.png" />;
  } else if (path2 === "power") {
    mainLogo = <DynamicLogo title="Power" logoPath="/logos/logo-saiki-power-fit.png" />;
  }

  return (
    <Link href="/" className="block max-w-min">
      {mainLogo}
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
