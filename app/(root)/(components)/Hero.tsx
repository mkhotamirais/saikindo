"use client";

import { Button } from "@/components/ui/button";
import { HeroFlipText } from "./HeroFlipText";
import { motion } from "framer-motion";
import Link from "next/link";
import Carousel from "@/components/carousel";

const carouselData = [
  { label: "", description: "", image: "/images/carousel1.jpg" },
  { label: "", description: "", image: "/images/carousel2.jpg" },
  { label: "", description: "", image: "/images/carousel3.jpg" },
  { label: "", description: "", image: "/images/carousel4.jpg" },
  { label: "", description: "", image: "/images/carousel5.jpg" },
  { label: "", description: "", image: "/images/carousel6.jpg" },
];

export function Hero() {
  return (
    <section className="relative">
      <div className="-z-10 left-10 top-5 absolute size-40 lg:size-64 rounded-full bg-primary/10 blur-3xl" />
      <div className="-z-10 left-1/2 top-1/2 absolute size-40 lg:size-64 rounded-full bg-primary/10 blur-3xl" />
      <div className="container py-12 lg:py-20 text-center lg:text-left h-auto lg:h-[calc(100vh-12rem)] w-full grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 gap-24">
        <div className="flex-1 flex flex-col h-fit lg:h-auto">
          <div className="grow leading-relaxed">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-josefin text-4xl lg:text-5xl font-bold mb-4"
            >
              Your Complete Solution for <br />{" "}
              <span className="text-primary">
                <HeroFlipText />
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
              className="font-ptsans mb-8"
            >
              We focus on delivering the right solutions for all types of related needs, including building cleaning and
              maintenance, electrical services, FTTH material provision, uniforms, and event organization.
            </motion.p>
          </div>
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.4 } }}>
            <Button asChild className="self-start bg-primary border-none text-lg font-semibold" size={"lg"}>
              <Link href="#product-service">Our Products</Link>
            </Button>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0, transition: { delay: 0.6 } }}
          className="flex-1 relative w-full h-80 lg:h-full"
        >
          <Carousel carouselData={carouselData} />
        </motion.div>
      </div>
    </section>
  );
}
