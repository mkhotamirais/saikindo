import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Container, H2, Title } from "@/components/wrapper";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const productList = [
  { image: "/images/products/uniform1.png", label: "" },
  { image: "/images/products/uniform2.png", label: "" },
  { image: "/images/products/uniform3.png", label: "" },
  { image: "/images/products/uniform4.png", label: "" },
  { image: "/images/products/uniform5.png", label: "" },
  { image: "/images/products/uniform6.png", label: "" },
  { image: "/images/products/uniform7.png", label: "" },
  { image: "", label: "" },
  { image: "", label: "" },
  { image: "", label: "" },
  { image: "", label: "" },
  { image: "", label: "" },
];

export function HomeProduct() {
  return (
    <section>
      <Container>
        <div className="bg-white rounded shadow">
          <div className="p-3 flex justify-between items-center">
            <H2 className="" title="Products" />
            <Button variant={"link"} className="text-green-500">
              See All <ArrowRight className="size-4 ml-2" />
            </Button>
          </div>
          <Separator />
          <div className="p-3 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-2">
            {productList.map((item, i) => (
              <div key={i} className="relative h-64 bg-white rounded shadow">
                <Image
                  src={"https://placehold.co/100x200/png"}
                  fill
                  alt="image product"
                  className="object-center object-cover h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
