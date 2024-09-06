"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";

const contentList = [
  "/images/saiki-booth-1.png",
  "/images/saiki-cleaning-1.png",
  "/images/saiki-event-1.png",
  "/images/saiki-flooring-1.png",
  "/images/saiki-power-1.png",
  "/images/uniform2.png",
];

export default function SwiperPage() {
  return (
    <Swiper
      autoplay={{ delay: 5000 }}
      effect={"coverflow"}
      loop={true}
      modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
      spaceBetween={-200}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      grabCursor
      coverflowEffect={{
        rotate: 20,
        stretch: 0,
        depth: 200,
        modifier: 3,
        slideShadows: true,
      }}
      className="h-full w-full"
    >
      {contentList.map((item, i) => (
        <SwiperSlide key={i} className={``}>
          <Image
            src={item}
            width={500}
            height={500}
            alt="saikindo hero sider"
            className="object-cover object-center h-full rounded-2xl shadow border-y"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
