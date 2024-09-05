import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Container, H2 } from "@/components/wrapper";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const categoryList = [
  { icon: "/category-icon/flaticon-renewable-energy.png", label: "POWER", href: "/power" },
  { icon: "/category-icon/flaticon-uniform.png", label: "UNIFORM", href: "/uniform" },
  { icon: "/category-icon/flaticon-packaging.png", label: "MERCHANDISER", href: "/merchandiser" },
  { icon: "/category-icon/flaticon-planner.png", label: "EVENT ORGANIZER", href: "/event-organizer" },
  { icon: "/category-icon/flaticon-health-insurance.png", label: "HEALTH", href: "/health" },
];

export default function HomeCategory() {
  return (
    <section className="py-6">
      <Container>
        <div className="bg-white rounded shadow">
          <H2 title="Categories" />
          <Separator />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:grid-cols-5 p-4">
            {categoryList.map((item, i) => (
              <Link href={item.href} key={i} className="flex flex-col items-center gap-1 hover:scale-105 transition">
                <Avatar className="rounded-none">
                  <AvatarImage src={item.icon} />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>{item.label}</div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
