import Link from "next/link";
import { Avatar, AvatarImage } from "../ui/avatar";

export function Header() {
  return (
    <header className="h-16 sticky top-0">
      <div>
        <Logo />
        <nav>navbar</nav>
      </div>
    </header>
  );
}

export function Logo() {
  return (
    <Link href="/">
      <Avatar className="border rounded-none w-32">
        <AvatarImage src="/logo.png" alt="saiki logo" className="object-contain object-center" />
      </Avatar>
    </Link>
  );
}
