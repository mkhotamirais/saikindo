"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/wrapper";
import HomeHeroImageSlider from "./home-hero-image-slider";
import HomeHeroFlipText from "./home-hero-flip-text";
import { motion } from "framer-motion";

export function HomeHero() {
  return (
    <section>
      <Container>
        <div className="py-12 lg:py-24 text-center lg:text-left h-auto lg:h-[calc(100vh-10rem)] w-full grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 gap-16">
          <div className="flex-1 flex flex-col h-fit lg:h-auto">
            <div className="grow leading-relaxed">
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-josefin text-4xl lg:text-5xl font-bold mb-4 leading-snug"
              >
                Your Complete Solution for <br />{" "}
                <span className="text-green-600">
                  <HomeHeroFlipText />
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
                className="font-ptsans mb-8"
              >
                We focus on delivering the right solutions for all types of related needs, including building cleaning
                and maintenance, electrical services, FTTH material provision, uniforms, and event organization.
              </motion.p>
            </div>
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.4 } }}>
              <Button className="rounded-full self-start bg-green-600 border-none hover:bg-green-500" size={"lg"}>
                Our Products
              </Button>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0, transition: { delay: 0.6 } }}
            className="flex-1 relative w-full h-80 lg:h-full"
          >
            <HomeHeroImageSlider />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
