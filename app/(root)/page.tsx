import { Hero } from "./(components)/Hero";
import { About } from "./(components)/About";
import { ProductService } from "./(components)/ProductService";
import { Client } from "./(components)/Client";
import { Contact } from "./(components)/Contact";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <About />
      <ProductService />
      <Client />
      <Contact />
    </div>
  );
}
