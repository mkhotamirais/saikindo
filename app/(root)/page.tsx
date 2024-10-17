import { HomeHero } from "./(components)/home-hero";
import { HomeAbout } from "./(components)/home-about";
import HomeProductService from "./(components)/home-product-service";
import { HomeClient } from "./(components)/home-client";
import HomeContact from "./(components)/home-contact";

export default function HomePage() {
  return (
    <div>
      <HomeHero />
      <HomeAbout />
      <HomeProductService />
      <HomeClient />
      <HomeContact />
    </div>
  );
}
