"use client";

import { H2 } from "@/components/wrapper";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaPlay } from "react-icons/fa6";
import { productServiceList } from "@/lib/menu";

export function ProductService() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const ref3 = useRef<HTMLDivElement>(null);
  const ref4 = useRef<HTMLDivElement>(null);

  const inView1 = useInView(ref1);
  const inView2 = useInView(ref2);
  const inView3 = useInView(ref3);
  const inView4 = useInView(ref4);

  const refs = [ref1, ref2, ref3, ref4];
  const inViews = [inView1, inView2, inView3, inView4];

  return (
    <section ref={ref} id="product-service" className="py-16">
      <div className="container">
        <motion.div animate={{ x: isInView ? 0 : -200, transition: { duration: 0.5 } }}>
          <H2>Products & Services</H2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8"
        >
          {productServiceList.map((item, i) => (
            <motion.div
              key={i}
              ref={refs[i]}
              // initial={{ opacity: 0, y: -200, scale: 0 }}
              // animate={{ y: isInView ? 0 : -100, opacity: isInView ? 1 : 0, transition: { duration: 0.3 * i } }}
              animate={
                inViews[i]
                  ? { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3 } }
                  : { opacity: 0, y: 100, scale: 0.8 }
              }
              className="relative overflow-hidden flex flex-col items-center mt-4 xl:mt-0 p-4 shadow xl:shadow-none rounded-xl"
            >
              <Image
                src={item.image}
                width={500}
                height={500}
                className="size-40 object-cover object-center rounded-full shadow-lg"
                alt="image saiki"
                priority
              />
              <div className="space-y-4 mt-8">
                <div className="transition">
                  <h3 className="font-josefin font-semibold text-2xl text-center text-primary">{item.title}</h3>
                </div>
                <p className="text-center">{item.description}</p>
                <div className="flex gap-4 flex-col justify-center items-center">
                  <Button asChild className="w-32">
                    <Link href={item.href} className="font-semibold">
                      Visit
                    </Link>
                  </Button>
                  <Button variant={"link"} size="sm" className="w-32">
                    <FaPlay className="size-4 mr-2" />
                    Watch Video
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
