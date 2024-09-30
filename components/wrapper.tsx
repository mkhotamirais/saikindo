"use client";

import React from "react";
import { useHome } from "@/hooks/use-home";
import { motion } from "framer-motion";

export const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="h-full px-4 max-w-6xl mx-auto">{children}</div>;
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

  return (
    <main onClick={onClick} className="relative pt-16 grow">
      {children}
    </main>
  );
};

export function H2({ children, className = "text-center" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      className={`font-josefin capitalize text-3xl lg:text-5xl font-medium text-primary mb-4 ${className}`}
    >
      {children}
    </motion.h2>
  );
}
