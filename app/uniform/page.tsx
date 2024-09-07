import { Badge } from "@/components/ui/badge";
import { Container, H2 } from "@/components/wrapper";
import { HomeClient } from "../(root)/(components)/home-client";
import { Banner } from "@/components/banner";

const portofolioList = ["Seragam/uniform", "Jaket", "Polo", "Wearpack", "Rompi", "Denim", "shoes"];
const infoLainnyaList = ["Contoh design", "Cara order", "Bahan", "Standart ukuran"];

export default function UniformPage() {
  return (
    <div>
      <Container>
        <Banner title="Uniform" image="/images/banner/storyset-uniform.png" />
        <div className="flex flex-col gap-4">
          <div className="bg-white p-4 shadow rounded">
            <H2 className="" title="Portofolio" />
            <div className="flex gap-1">
              {portofolioList.map((item, i) => (
                <Badge key={i}>{item}</Badge>
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
            <div className="flex gap-1">
              {infoLainnyaList.map((item, i) => (
                <Badge key={i}>{item}</Badge>
              ))}
            </div>
            <div className="w-full h-56 bg-gray-100 flex items-center justify-center">content</div>
          </div>
        </div>
      </Container>
    </div>
  );
}
