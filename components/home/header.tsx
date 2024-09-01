import Link from "next/link";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Container } from "../wrapper";
import { Navbar, NavbarBtn } from "./navbar";
import { FaEnvelope, FaGlobe, FaWhatsapp } from "react-icons/fa6";

export function Header() {
  return (
    <header className="z-50 bg-white/80 backdrop-blur h-16 fixed w-full shadow-sm">
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
