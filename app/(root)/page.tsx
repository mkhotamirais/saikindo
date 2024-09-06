import { HomeHero } from "./(components)/home-hero";
import { HomeServices } from "./(components)/home-services";
import { HomeQuote } from "./(components)/home-quote";
import { HomeProfessionalism } from "./(components)/home-professionalism";
import HomeCategory from "./(components)/home-category";
import { HomeAbout } from "./(components)/home-about";
import HomeProductService from "./(components)/home-product-service";
import { HomeClient } from "./(components)/home-client";

export default function HomePage() {
  return (
    <div>
      <HomeHero />
      <HomeAbout />
      {/* <HomeQuote /> */}
      <HomeProductService />
      {/* <HomeCategory /> */}
      {/* <HomeServices /> */}
      {/* <HomeProfessionalism /> */}
      <HomeClient />
    </div>
  );
}
