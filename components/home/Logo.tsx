import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex gap-2 items-center">
      <Image
        src={"/logos/ssg-logo-square.png"}
        alt="logo saikindo surya gumiwang"
        width={56}
        height={56}
        className="h-10 w-auto object-contain object-center"
        priority
      />
      <div className="flex flex-col leading-none">
        <div className="text-xl">Saikindo</div>
        <div className="text-primary font-semibold">Surya Gumiwang</div>
      </div>
    </Link>
  );
}
