import Image from "next/image";
import { useState } from "react";

export const ImageWithSkeleton = ({ src, alt }: { src: string; alt: string }) => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="group relative hover:scale-105 rounded shadow hover:shadow-lg shadow-primary transition overflow-hidden mt-2">
      {loading && (
        <div className="absolute inset-0 animate-pulse bg-gray-300 h-full w-full rounded"></div> // Skeleton loader
      )}
      {src && (
        <Image
          src={src}
          alt={alt}
          width={500}
          height={500}
          priority
          className={`transition-all duration-300 ${loading ? "opacity-0" : "opacity-100"}`}
          onLoad={() => setLoading(false)} // Trigger when image is fully loaded
        />
      )}
    </div>
  );
};
