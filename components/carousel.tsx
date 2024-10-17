"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface CarouselProps {
  image: string;
  label?: string;
  description?: string;
}

export default function Carousel({ carouselData }: { carouselData: CarouselProps[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => setCurrentIndex((prevIndex) => (prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1));
  const handleNext = () => setCurrentIndex((prevIndex) => (prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1));

  return (
    <div className="shadow-xl group relative w-full h-full rounded-lg overflow-hidden">
      {/* carousel content */}
      <div className="flex h-full overflow-hidden">
        {carouselData.map((item, index) => (
          <div
            key={index}
            className="relative min-w-full transition-transform duration-300"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            <Image
              src={item?.image}
              alt={`${index}` || "saiki slide"}
              width={500}
              height={500}
              className="object-cover object-bottom w-full h-full"
              priority
            />
            <div className="absolute top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 text-3xl">{item.label}</div>
          </div>
        ))}
      </div>
      {/* prev/next */}
      <div className="pl-4 absolute top-1/2 left-0 -translate-x-full group-hover:translate-x-0 transition -translate-y-1/2">
        <Button size="icon" variant={"ghost"} onClick={handlePrev} className="text-primary rounded-full">
          <ChevronLeft />
        </Button>
      </div>
      <div className="pr-4 absolute top-1/2 right-0 translate-x-full group-hover:translate-x-0 transition -translate-y-1/2">
        <Button size="icon" variant={"ghost"} onClick={handleNext} className="text-primary rounded-full">
          <ChevronRight />
        </Button>
      </div>
      {/* dots */}
      <div className="opacity-40 group-hover:opacity-100 transition absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
        {carouselData.map((item, i) => (
          <div
            title="dots"
            onClick={() => setCurrentIndex(i)}
            key={i}
            className={`${
              currentIndex === i ? "bg-primary" : ""
            } border border-primary aspect-square w-3 cursor-pointer rounded-full`}
          ></div>
        ))}
      </div>
    </div>
  );
}
