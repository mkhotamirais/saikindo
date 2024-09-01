import { HomeAbout } from "./(components)/home-about";
import { HomeHero } from "./(components)/home-hero";
import { HomeClient } from "./(components)/home-client";
import { HomeProduct } from "./(components)/home-product";
import { HomeServices } from "./(components)/home-services";
import { HomeQuote } from "./(components)/home-quote";
import { HomeProfessionalism } from "./(components)/home-professionalism";

export default function HomePage() {
  return (
    <div>
      <HomeHero />
      <HomeQuote />
      <HomeAbout />
      <HomeProduct />
      <HomeServices />
      <HomeProfessionalism />
      <HomeClient />
    </div>
  );
}
