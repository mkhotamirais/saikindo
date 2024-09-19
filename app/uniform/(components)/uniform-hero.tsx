import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { FaPlay } from "react-icons/fa6";

export default function UniformHero() {
  return (
    <section className="bg-[url('/images/pix-uniform.jpg')] bg-cover bg-center -translate-y-16">
      <div className="bg-gradient-to-t from-black/50 to-black/50">
        <div className="container flex items-center justify-center min-h-screen max-w-3xl mx-auto text-white">
          <div className="flex flex-col items-center text-center space-y-4">
            <h1 className="text-4xl font-bold font-josefin">Find the Perfect Uniform for Style and Function</h1>
            <p>
              Explore our range of high-quality wear packs and shirts designed to support every activity with style and
              comfort.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 pt-4">
              <Button
                asChild
                size={"lg"}
                className="w-40 rounded-full bg-saikindo-secondary-600 hover:bg-saikindo-secondary-500"
              >
                <Link href="#our-uniforms">Our Uniforms</Link>
              </Button>
              <Button
                size="lg"
                variant={"outline"}
                className="w-40 text-saikindo-secondary-600 hover:text-saikindo-secondary-500 bg-inherit hover:bg-inherit hover:border-saikindo-secondary-500 rounded-full border-saikindo-secondary-600"
              >
                <FaPlay className="mr-2" />
                Watch Video
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
