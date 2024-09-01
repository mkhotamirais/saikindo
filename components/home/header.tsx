import Link from "next/link";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Container } from "../wrapper";
import { Navbar, NavbarBtn } from "./navbar";
import { FaEnvelope, FaGlobe, FaWhatsapp } from "react-icons/fa6";

export function Header() {
  return (
    <header className="z-50 bg-white h-16 sticky top-0 border-b">
      <Container>
        <div className="h-full flex items-center justify-between">
          <Logo />
          <Navbar />
          <NavbarBtn />
          <Socials size={20} className="hidden sm:block" />
        </div>
      </Container>
    </header>
  );
}

export function Logo() {
  return (
    <Link href="/">
      <Avatar className="rounded-none w-32">
        <AvatarImage src="/logo.png" alt="saiki logo" className="object-contain object-center" />
      </Avatar>
    </Link>
  );
}

export function Socials({ size = 24, className }: { size: number; className?: string }) {
  return (
    <div className={`${className}`}>
      <div className="flex gap-4">
        <a title="Email" href="">
          <FaEnvelope size={size} />
        </a>
        <a title="Email" href="">
          <FaWhatsapp size={size} />
        </a>
        <a title="Email" href="">
          <FaGlobe size={size} />
        </a>
      </div>
    </div>
  );
}
