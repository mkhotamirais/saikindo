"use client";

import Link from "next/link";
import { ContactSales } from "./header";

export const navbarMenu = [
  { href: "/", title: "Home" },
  { href: "/about", title: "About" },
  { href: "/uniform", title: "Uniform" },
  { href: "/power", title: "Power" },
  { href: "/event-organizer", title: "Event Organizer" },
  { href: "/health", title: "Health" },
];

export function DesktopNav() {
  return (
    <nav className={`transition hidden md:block bg-white md:bg-inherit p-4`}>
      <div className="flex flex-col md:flex-row gap-0 md:gap-4 items-center">
        {navbarMenu.map((item, i) => (
          <Link
            href={item.href}
            key={i}
            className="text-sm text-white hover:text-saikindo-secondary-300 py-3 md:py-0 hover:text-primary"
          >
            {item.title}
          </Link>
        ))}
        <ContactSales className="flex self-start ml-4" />
      </div>
    </nav>
  );
}
