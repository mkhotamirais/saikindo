"use client";

import { H2 } from "@/components/wrapper";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaArrowRightLong, FaPlay } from "react-icons/fa6";

const productServiceList = [
  {
    href: "/uniform",
    title: "Uniform",
    image: "/images/uniform2.png",
    description: "Providing high-quality, custom-made uniforms for various industries and organizations.",
  },
  {
    href: "/power",
    title: "Power",
    image: "/images/saiki-power-2.png",
    description: "Empowering your business with innovative energy solutions for a sustainable future.",
  },
  {
    href: "/event-organizer",
    title: "Event Organizer",
    image: "/images/saiki-event-2.png",
    description: "Expert event planning services to ensure your events are memorable and successful.",
  },
  {
    href: "/health",
    title: "Health",
    image: "/images/saiki-porto-3.png",
    description: "Comprehensive health solutions designed to improve well-being and promote a healthy lifestyle.",
  },
];

export default function HomeProductService() {
  return (
    <section id="product-service" className="py-16 scroll-mt-16">
      <div className="container">
        <H2 title="Products & Services" />
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mt-8"
        >
          {productServiceList.map((item, i) => (
            <div key={i} className="relative overflow-hidden flex flex-col items-center mt-4 xl:mt-0">
              <Image
                src={item.image}
                width={500}
                height={500}
                className="h-56 w-56 object-cover object-center rounded-full shadow-lg"
                alt="image saiki"
              />
              <div className="transition p-4">
                <h3 className="font-josefin font-semibold text-2xl text-center text-saikindo-secondary-600">
                  {item.title}
                </h3>
              </div>
              <p className="text-center">{item.description}</p>
              <div className="flex gap-3 mt-3 flex-col justify-center items-center">
                <Button variant={"link"} asChild>
                  <Link href="/about" className="group text-saikindo-secondary-600 flex items-center max-w-fit mt-auto">
                    <div className="group-hover:underline">View More</div>
                    <FaArrowRightLong className="ml-2 group-hover:translate-x-2 transition" />
                  </Link>
                </Button>
                <Button
                  size="sm"
                  className="flex gap-2 rounded-full bg-saikindo-secondary-600 hover:bg-saikindo-secondary-500"
                >
                  <FaPlay />
                  Watch Video
                </Button>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
