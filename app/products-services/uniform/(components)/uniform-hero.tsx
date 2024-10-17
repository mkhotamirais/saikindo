"use client";

import { Button } from "@/components/ui/button";
import { useUniform } from "@/hooks/use-uniform";
import { uniformList } from "@/lib/uniform-list";
import Link from "next/link";
import React from "react";
import { FaPlay } from "react-icons/fa6";

export default function UniformHero() {
  const cats = Array.from(new Set(uniformList.map((item) => item.cat)));
  // const allCats = [...cats, "restauran", "polo kaos", "hotel", "almamater & blazer", "perawat"];
  const { cat, setCat, setCurrentPage } = useUniform();

  return (
    <section className="bg-[url('/images/pix-uniform.jpg')] bg-cover bg-center -translate-y-16 text-white">
      <div className="bg-gradient-to-t from-black/50 to-black/50">
        <div className="container min-h-[calc(100vh-6rem)] py-24 md:py-32">
          <div className="flex flex-col md:flex-row item-center gap-12 h-auto sm:h-72 justify-center">
            <div className="flex-1 flex flex-col justify-between">
              <h1 className="text-4xl font-bold font-josefin leading-snug ">
                Find the Perfect Uniform for Style and Function
              </h1>
              <p className="leading-relaxed">
                Explore our range of high-quality wear packs and shirts designed to support every activity with style
                and comfort.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 pt-4">
                <Button asChild size={"lg"} className="w-40 primary text-lg font-medium">
                  <Link href="#our-uniforms" onClick={() => setCat("")}>
                    Our Uniforms
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant={"link"}
                  className="bg-inherit text-lg font-medium hover:bg-inherit border-primary"
                >
                  <FaPlay className="mr-2" />
                  Watch Video
                </Button>
              </div>
            </div>
            <div className="flex-1 border rounded-xl p-6 bg-black/50">
              <div className="">
                <h3 className="text-3xl pb-2 font-josefin text-center border-b border-primary">
                  Here are our <span className="text-primary">{cats.length} uniform</span> categories
                </h3>

                <div
                  id="category-uniform"
                  className="flex flex-col gap-2 h-56 sm:h-40 xl:h-48 w-full overflow-y-scroll pt-2"
                >
                  {cats.map((item, i) => (
                    <button
                      onClick={() => {
                        setCat(item);
                        setCurrentPage(1);
                      }}
                      type="button"
                      key={i}
                      className={`rounded ${
                        cat === item ? "bg-gradient-to-tr from-primary via-primary/50 to-primary" : ""
                      } capitalize text-lg p-2 px-4 rounded-full w-full sm:w-64 mx-auto hover:bg-gradient-to-tr from-primary via-primary/50 to-primary text-ptsans transition border border-primary`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
