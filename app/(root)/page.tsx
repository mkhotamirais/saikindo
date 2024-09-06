import { HomeHero } from "./(components)/home-hero";
import { HomeProduct } from "./(components)/home-product";
import { HomeServices } from "./(components)/home-services";
import { HomeQuote } from "./(components)/home-quote";
import { HomeProfessionalism } from "./(components)/home-professionalism";
import HomeCategory from "./(components)/home-category";
import { HomeAbout } from "./(components)/home-about";

export default function HomePage() {
  return (
    <div>
      <HomeHero />
      <HomeAbout />
      <HomeQuote />
      <HomeCategory />
      <HomeProduct />
      <HomeServices />
      <HomeProfessionalism />
      {/* <HomeClient /> */}
    </div>
  );
}
