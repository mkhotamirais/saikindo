import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: {
    absolute: "Products & Service", // menimpa semua value yang lain
    default: "Products & Service", // default untuk page ini dan childnya
    template: "%s | Products & Service", // nilai dinamis tergantung childnya
  },
};

export default function ProductsServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
