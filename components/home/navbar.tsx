"use client";

import { useHome } from "@/hooks/use-home";
import { FaBars, FaXmark } from "react-icons/fa6";
import { Button } from "../ui/button";
import Link from "next/link";
import { Socials } from "./header";

export function NavbarBtn() {
  const { nav, openNav, closeNav } = useHome();
  const onClick = () => {
    if (nav) {
      closeNav();
    } else openNav();
  };
  return (
    <Button onClick={onClick} variant={"outline"} className="flex items-center justify-center sm:hidden" size={"icon"}>
      <div className={`${nav ? "rotate-180" : ""} transition`}>
        {nav ? <FaXmark size={24} /> : <FaBars size={24} />}
      </div>
    </Button>
  );
}

const navbarMenu = [
  { href: "/", title: "Home" },
  { href: "/", title: "About" },
  { href: "/", title: "Products" },
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
      } origin-top transition sm:scale-y-100 fixed sm:static top-16 left-0 right-0 bg-white sm:bg-inherit p-4 sm:p-0 shadow sm:shadow-none`}
    >
      <div className="flex flex-col sm:flex-row gap-0 sm:gap-4">
        {navbarMenu.map((item, i) => (
          <Link
            onClick={onClick}
            href={item.href}
            key={i}
            className="text-sm text-muted-foreground py-2 sm:py-0 hover:text-primary"
          >
            {item.title}
          </Link>
        ))}
        <Socials size={18} className="block mt-4 sm:hidden" />
      </div>
    </nav>
  );
}
