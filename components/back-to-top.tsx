"use client";

import { useScrollDirection } from "@/hooks/use-scroll-direaction";
import { useScrollThreshold } from "@/hooks/use-scroll-treshold";
import { FaChevronUp } from "react-icons/fa6";
import { Button } from "./ui/button";
import { useMaxScrollReached } from "@/hooks/use-max-scroll-reached";
import Link from "next/link";

export default function BackToTop() {
  const { hasReachedThreshold } = useScrollThreshold(100);
  const { maxScrollReached } = useMaxScrollReached();
  if (maxScrollReached) {
    console.log(maxScrollReached);
  }

  return (
    <Button
      size={"icon"}
      asChild
      className={`${
        hasReachedThreshold ? "fixed" : "hidden"
      } bottom-4 right-4 rounded-full transition-none bg-primary/50 backdrop-blur ${
        maxScrollReached ? "-translate-y-12" : ""
      } transition`}
    >
      <Link href="#top">
        <FaChevronUp />
      </Link>
    </Button>
  );
}
