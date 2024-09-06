"use client";

import Link from "next/link";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Container } from "../wrapper";
import { Button } from "../ui/button";

export function Header() {
  return (
    <header className="z-50 h-16 sticky top-0 w-full shadow hover:shadow-md shadow-green-50 hover:shadow-green-100 bg-white transition">
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
