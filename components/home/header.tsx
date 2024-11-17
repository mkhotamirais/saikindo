"use client";

import { motion } from "framer-motion";
import { MobileNav } from "./MobileNav";
import { DesktopNav } from "./DesktopNav";
import { useScrollDirection } from "@/hooks/use-scroll-direaction";
import { useMaxScrollReached } from "@/hooks/use-max-scroll-reached";
import { Logo } from "./Logo";
import { ContactBtn } from "../ContactBtn";
import { ModeToggle } from "../theme/mode-toggle";

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
          <DesktopNav />
          <ContactBtn />
          <div className="hidden md:flex">
            <ModeToggle />
          </div>
          <MobileNav />
        </div>
      </div>
    </motion.header>
  );
}
