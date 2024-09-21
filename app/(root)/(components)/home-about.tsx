"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong, FaPlay } from "react-icons/fa6";
import { motion, useInView } from "framer-motion";
import { H2 } from "@/components/wrapper";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

export function HomeAbout() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  
  return (
    <section ref={ref} className="py-16 lg:py-20 bg-gray-50">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-16">
        <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} className="order-2 flex flex-col">
          <motion.div animate={{ x: isInView ? 0 : -200, transition: { duration: 0.5 } }}>
            <H2 className="text-center lg:text-left" title="About Us" />
          </motion.div>
          <motion.div animate={{ y: isInView ? 0 : -100, opacity: isInView ? 1 : 0, transition: { duration: 0.5 } }}>
            <Image
              src="/images/building-1.jpg"
              width={500}
              height={500}
              alt="building"
              className="object-cover object-center rounded-lg block lg:hidden w-full h-72"
            />
            <div className="flex-1 leading-relaxed space-y-2 py-3">
              <p>
                PT. Saikindo Surya Gumiwang is a company that professional and reliable in the field of cleaning and
                building maintenance, power service, FTTH material supply, uniform, and event organizers.
              </p>
              <p>
                PT. Saikindo Surya Gumiwang has a focus on delivering the right solution for all types of related needs
                building cleaning and maintenance, electrical service, provision FTTH materials, uniform, and event
                organizers.
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <Button className="flex gap-2 rounded-full bg-saikindo-secondary-600 hover:bg-saikindo-secondary-500">
                <FaPlay />
                Watch Video
              </Button>
              <Button variant={"link"} asChild>
                <Link href="/about" className="group text-saikindo-secondary-600 flex items-center max-w-fit mt-auto">
                  <div className="group-hover:underline">View More</div>
                  <FaArrowRightLong className="ml-2 group-hover:translate-x-2 transition" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0, scale: isInView ? 1 : 0.8, transition: { delay: 0.2 } }}
        >
          <Image
            src="/images/building-1.jpg"
            width={500}
            height={500}
            alt="building"
            className="order-1 object-cover object-center rounded-lg hidden lg:block h-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
