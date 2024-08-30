import Footer from "@/components/home/footer";
import { Header } from "@/components/home/header";
import React from "react";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="grow">{children}</main>
      <Footer />
    </div>
  );
}
