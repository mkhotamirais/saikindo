import { Badge } from "@/components/ui/badge";
import { Container, H2 } from "@/components/wrapper";
import { HomeClient } from "../../(root)/(components)/home-client";
import { Banner } from "@/components/banner";
import Maintenence from "@/components/maintenence";
import Image from "next/image";
import UniformProducts from "./(components)/uniform-products";
import UniformHero from "./(components)/uniform-hero";

export default function UniformPage() {
  return (
    <div>
      <UniformHero />
      <UniformProducts />
    </div>
  );
}
