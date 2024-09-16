"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { H2 } from "@/components/wrapper";
import { motion } from "framer-motion";

const clientList = [
  { iconPath: "/images/clients/client-1.png", label: "" },
  { iconPath: "/images/clients/client-2.png", label: "" },
  { iconPath: "/images/clients/client-3.png", label: "" },
  { iconPath: "/images/clients/client-4.png", label: "" },
  { iconPath: "/images/clients/client-5.png", label: "" },
  { iconPath: "/images/clients/client-6.png", label: "" },
  { iconPath: "/images/clients/client-7.png", label: "" },
  { iconPath: "/images/clients/client-8.png", label: "" },
  { iconPath: "/images/clients/client-9.png", label: "" },
  { iconPath: "/images/clients/client-10.png", label: "" },
  { iconPath: "/images/clients/client-11.png", label: "" },
  { iconPath: "/images/clients/client-12.png", label: "" },
  { iconPath: "/images/clients/client-13.png", label: "" },
  { iconPath: "/images/clients/client-14.png", label: "" },
  { iconPath: "/images/clients/client-15.png", label: "" },
  { iconPath: "/images/clients/client-16.png", label: "" },
];

export function HomeClient() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <H2 title="Our Clients" />
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
          className="bg-white p-4 rounded-xl shadow-md"
        >
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-8">
            {clientList.map((item, i) => (
              <Avatar key={i} className="rounded-none h-20 w-full">
                <AvatarImage src={item.iconPath} className="object-contain object-center" />
              </Avatar>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
