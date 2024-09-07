"use client";

import { useHome } from "@/hooks/use-home";
import { FaBars, FaXmark } from "react-icons/fa6";
import { Button } from "../ui/button";
import Link from "next/link";
import { ContactSales } from "./header";

export function NavbarBtn() {
  const { nav, openNav, closeNav } = useHome();
  const onClick = () => {
    if (nav) {
      closeNav();
    } else openNav();
  };
  return (
    <Button onClick={onClick} variant={"outline"} className="flex items-center justify-center md:hidden" size={"icon"}>
      <div className={`${nav ? "rotate-180" : ""} transition`}>
        {nav ? <FaXmark size={24} /> : <FaBars size={24} />}
      </div>
    </Button>
  );
}

const navbarMenu = [
  { href: "/", title: "Home" },
  { href: "/about", title: "About" },
  { href: "/uniform", title: "Uniform" },
  { href: "/power", title: "Power" },
  { href: "/event-organizer", title: "Event Organizer" },
  { href: "/health", title: "Health" },
];

export function Navbar() {
  const { nav, closeNav } = useHome();
  const onClick = () => {
    if (nav) closeNav();
  };
  return (
    <nav
      className={`${
        nav ? "scale-y-100" : "scale-y-0"
      } origin-top transition md:scale-y-100 fixed md:static top-16 left-0 right-0 bg-white md:bg-inherit p-4 md:p-0 shadow md:shadow-none`}
    >
      <div className="flex flex-col md:flex-row gap-0 md:gap-4">
        {navbarMenu.map((item, i) => (
          <Link
            onClick={onClick}
            href={item.href}
            key={i}
            className="text-sm text-muted-foreground py-3 md:py-0 hover:text-primary"
          >
            {item.title}
          </Link>
        ))}
        <ContactSales className="flex self-start mt-4 md:hidden" />
        {/* <Socials size={18} className="block mt-4 sm:hidden" /> */}
      </div>
    </nav>
  );
}
