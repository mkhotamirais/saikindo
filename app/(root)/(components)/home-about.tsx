"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong, FaPlay } from "react-icons/fa6";
import { motion, useInView } from "framer-motion";
import { H2 } from "@/components/wrapper";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

export function HomeAbout() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <section ref={ref} className="py-16 lg:py-20 bg-secondary">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-16">
        <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} className="order-2 flex flex-col">
          <motion.div animate={{ x: isInView ? 0 : -200, transition: { duration: 0.5 } }}>
            <H2 className="text-center lg:text-left">About Us</H2>
          </motion.div>
          <motion.div
            className="relative"
            animate={{ y: isInView ? 0 : -100, opacity: isInView ? 1 : 0, transition: { duration: 0.5 } }}
          >
            <div className="relative block lg:hidden">
              <Image
                src={"/images/about.jpg"}
                width={500}
                height={500}
                alt="building"
                className="object-cover object-center rounded-lg w-full h-72"
              />
              <LogoProfile />
            </div>
            <div className="flex-1 leading-relaxed space-y-2 py-3 mb-4">
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
            <div className="flex gap-3 items-center mt-auto">
              <Button className="flex gap-2 bg-primary">
                <FaPlay />
                Watch Video
              </Button>
              <Button variant={"link"} asChild>
                <Link href="/about" className="group text-primary flex items-center max-w-fit mt-auto">
                  <div className="group-hover:underline">View More</div>
                  <FaArrowRightLong className="ml-2 group-hover:translate-x-2 transition" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          className="relative hidden lg:block"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0, scale: isInView ? 1 : 0.8, transition: { delay: 0.2 } }}
        >
          <Image
            src={"/images/about.jpg"}
            width={500}
            height={500}
            alt="building"
            className="order-1 object-cover object-center rounded-lg h-full"
          />
          <LogoProfile />
        </motion.div>
      </div>
    </section>
  );
}

const LogoProfile = () => {
  return (
    <div className="absolute top-0 left-1/2 -translate-x-1/2 flex gap-2 p-4">
      <Avatar>
        <AvatarImage src="/logos/ssg-logo-square.png" alt="saiki logo" className="object-center" />
      </Avatar>
      <Avatar>
        <AvatarImage src="/logos/logo-saiki-uniform-fit.png" alt="saiki logo" className="object-center" />
      </Avatar>
      <Avatar>
        <AvatarImage src="/logos/logo-saiki-event-fit.png" alt="saiki logo" className="object-center" />
      </Avatar>
      <Avatar>
        <AvatarImage src="/logos/logo-saiki-power-fit.png" alt="saiki logo" className="object-center" />
      </Avatar>
    </div>
  );
};
