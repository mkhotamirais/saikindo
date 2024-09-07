"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function Banner({ title, image }: { title: string; image: string }) {
  return (
    // <div className="bg-[url('https://placehold.co/800x300/png')] bg-cover bg-center ">
    <motion.div
      initial={{ opacity: 0, y: -200 }}
      animate={{ opacity: 1, y: 0 }}
      className="shadow-lg rounded-xl relative overflow-hidden bg-gray-50 w-full h-56 lg:h-64 my-4"
    >
      <div className="w-48 h-48 blur-xl bg-green-200 absolute top-0 -right-12 rounded-full" />
      <div className="w-24 h-24 blur-xl bg-green-100 absolute top-5 left-5 rounded-full" />
      <div className="w-56 h-56 blur-xl bg-green-200 absolute -top-1/2 left-1/2 -translate-x-1/2 rounded-full hidden md:block" />
      <svg
        className="absolute shadow-6xl right-0 left-0 bottom-0 scale-y-125"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,192L40,197.3C80,203,160,213,240,224C320,235,400,245,480,240C560,235,640,213,720,202.7C800,192,880,192,960,186.7C1040,181,1120,171,1200,154.7C1280,139,1360,117,1400,106.7L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
      <div className="z-20 absolute inset-0">
        <div className="grid grid-cols-2 h-full">
          <div className="flex items-center justify-center">
            <motion.h1
              initial={{ scale: 0 }}
              animate={{ scale: 1, transition: { delay: 0.2 } }}
              className="text-4xl lg:text-6xl font-bold text-green-600 font-josefin"
            >
              {title}
            </motion.h1>
          </div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, transition: { delay: 0.4 } }}
            className="flex items-center justify-center h-full"
          >
            <Image
              src={image}
              alt="banner image"
              width={500}
              height={500}
              className="absolute size-64 lg:scale-110 scale-75 object-cover object-center h-full"
              priority
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
    // </div>
  );
}
