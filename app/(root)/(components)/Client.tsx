"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { H2 } from "@/components/wrapper";
import { clientMenu } from "@/lib/menu";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function Client() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <section ref={ref} className="py-16 bg-secondary">
      <div className="container">
        <motion.div animate={{ x: isInView ? 0 : -200, transition: { duration: 0.5 } }}>
          <H2>Our Clients</H2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
          className="bg-white p-6 rounded-xl shadow-md"
        >
          <motion.div
            animate={{ scale: isInView ? 1 : 0.8, opacity: isInView ? 1 : 0, transition: { duration: 0.5 } }}
            className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-8"
          >
            {clientMenu.map((item, i) => (
              <Avatar key={i} className="rounded-none h-16 w-full">
                <AvatarImage src={item.iconPath} className="object-contain object-center" />
              </Avatar>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
