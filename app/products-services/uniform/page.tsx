import UniformProducts from "./(components)/uniform-products";
import UniformHero from "./(components)/uniform-hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Saikindo Uniform",
};

export default function UniformPage() {
  return (
    <>
      <UniformHero />
      <UniformProducts />
    </>
  );
}
