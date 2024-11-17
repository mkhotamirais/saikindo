import Link from "next/link";
import { Button } from "./ui/button";
import { SiWhatsapp } from "react-icons/si";
import Image from "next/image";
import { waUrl } from "@/lib/menu";

export function ContactBtn() {
  return (
    <>
      <Button className="font-semibold hidden md:flex" asChild>
        <Link href={waUrl}>
          <SiWhatsapp className="size-4 mr-2" />
          Contact Us
        </Link>
      </Button>
      <Link href={waUrl} className="flex md:hidden">
        <Image
          src="https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/whatsapp.svg"
          alt="saikindo whatsapp"
          width={24}
          height={24}
          className="size-8"
          priority
        />
      </Link>
    </>
  );
}
