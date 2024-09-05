"use client";

import { useHome } from "@/hooks/use-home";
import React from "react";

export const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="h-full px-3 max-w-6xl mx-auto">{children}</div>;
};

export const Title = ({ title, description }: { title: string; description?: string }) => {
  return (
    <div className="flex flex-col justify-center items-center pb-6 space-y-4 text-center">
      <h1 className="text-3xl font-bold font-poppins text-transparent bg-gradient-to-t from-saiki-tertiary to-saiki-secondary bg-clip-text">
        {title}
      </h1>
      <p className="text-muted-foreground font-roboto text-sm">{description}</p>
    </div>
  );
};

export const ClientWrapper = ({ children }: { children: React.ReactNode }) => {
  const { nav, closeNav } = useHome();
  const onClick = () => {
    if (nav) closeNav();
  };
  return <main onClick={onClick}>{children}</main>;
};

export function Banner({ title }: { title: string }) {
  return (
    <div className="bg-[url('https://placehold.co/800x300/png')] bg-cover bg-center ">
      <div className="bg-gradient-to-t from-black/10 to-black/10 w-full h-64 border my-4 flex items-center justify-center">
        <h1 className="text-6xl font-bold text-white">{title}</h1>
      </div>
    </div>
  );
}

export function H2({ title, className = "text-center" }: { title: string; className?: string }) {
  return <h2 className={`${className} text-xl font-bold text-green-600 p-2`}>{title}</h2>;
}
