"use client";

import { Container } from "@/components/wrapper";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const productServiceList = [
  { href: "/uniform", title: "Uniform", image: "/images/uniform2.png" },
  { href: "/power", title: "Power", image: "/images/saiki-power-1.png" },
  { href: "/event-organizer", title: "Event Organizer", image: "/images/saiki-event-1.png" },
  { href: "/health", title: "Health", image: "/images/saiki-porto-3.png" },
];

export default function HomeProductService() {
  return (
    <section id="product-service" className="py-20 scroll-mt-16">
      <Container>
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-josefin text-5xl font-medium text-green-600 mb-4 text-center"
          >
            Product & Service
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
            className="grid grid-cols-1 md:grid-cols-4 gap-3 my-4"
          >
            {productServiceList.map((item, i) => (
              <div key={i} className="group relative shadow-md hover:shadow-lg rounded-md overflow-hidden">
                <div className="z-10 absolute bg-black/15 inset-0 opacity-0 group-hover:opacity-100 transition duration-500" />
                <Image
                  src={item.image}
                  width={500}
                  height={500}
                  className="h-72 w-full object-cover object-center"
                  alt="image saiki"
                />
                <div className="transition p-4">
                  <h3 className="font-josefin font-semibold text-2xl text-center">{item.title}</h3>
                </div>
                <Link
                  href={item.href}
                  className="scale-0 hover:p-5 group-hover:scale-100 transition p-4 z-20 absolute text-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg border bg-black/50"
                >
                  Visit
                </Link>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
