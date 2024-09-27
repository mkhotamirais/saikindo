import { HomeClient } from "@/app/(root)/(components)/home-client";
import { Badge } from "@/components/ui/badge";
import { H2 } from "@/components/wrapper";
import React from "react";

const portofolioList = ["Seragam/uniform", "Jaket", "Polo", "Wearpack", "Rompi", "Denim", "shoes"];
const infoLainnyaList = ["Contoh design", "Cara order", "Bahan", "Standart ukuran"];

export default function UniformLainnya() {
  return (
    <div>
      <div className="flex flex-col gap-4">
        <div className="bg-white p-4 shadow rounded">
          <H2 className="" title="Portofolio" />
          <div className="flex gap-1 flex-wrap py-2">
            {portofolioList.map((item, i) => (
              <Badge key={i} className="bg-green-600">
                {item}
              </Badge>
            ))}
          </div>
          <div className="w-full h-56 bg-gray-100 flex items-center justify-center">content</div>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <H2 title="Our Client" />
          <HomeClient />
        </div>
        <div className="bg-white p-4 shadow rounded">
          <H2 className="" title="Info Lainnya" />
          <div className="flex gap-1 flex-wrap">
            {infoLainnyaList.map((item, i) => (
              <Badge key={i} className="bg-green-600">
                {item}
              </Badge>
            ))}
          </div>
          <div className="w-full h-56 bg-gray-100 flex items-center justify-center">content</div>
        </div>
      </div>
    </div>
  );
}