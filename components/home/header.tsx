import Link from "next/link";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Container } from "../wrapper";

export function Header() {
  return (
    <header className="z-50 bg-white h-16 sticky top-0 border-b">
      <Container>
        <div className="h-full flex items-center justify-between">
          <Logo />
          <nav>
            <div>menu</div>
          </nav>
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
