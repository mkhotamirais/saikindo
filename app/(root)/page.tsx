import { HomeAbout } from "./(components)/home-about";
import { HomeHero } from "./(components)/home-hero";
import { HomeClient } from "./(components)/home-client";
import { HomeProduct } from "./(components)/home-product";
import { HomeServices } from "./(components)/home-services";
import { HomeQuote } from "./(components)/home-quote";
import { HomeProfessionalism } from "./(components)/home-professionalism";
import { Hero } from "./(components)/hero";
import HomeCategory from "./(components)/home-category";

export default function HomePage() {
  return (
    <div>
      {/* <Hero /> */}
      <HomeHero />
      <HomeCategory />
      {/* <HomeQuote /> */}
      <HomeProduct />
      <HomeServices />
      <HomeProfessionalism />
      {/* <HomeClient /> */}
    </div>
  );
}
