import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClientWrapper } from "@/components/wrapper";
import { Header } from "@/components/home/header";
import { Footer } from "@/components/home/footer";
import BackToTop from "@/components/back-to-top";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PT. Saikindo Surya Gumiwang - Professional Cleaning, Maintenance, and FTTH Services",
  description:
    "PT. Saikindo Surya Gumiwang offers professional cleaning and building maintenance, power services, FTTH material supply, uniforms, and event organizing with a focus on quality, safety, and customer satisfaction.",
  keywords: [
    "saikindo",
    "saikindosg",
    "saikindo surya gumiwang",
    "surya gumiwang",
    "cleaning services",
    "building maintenance",
    "electrical services",
    "FTTH materials",
    "uniform supply",
    "event organizer",
    "Saikindo",
    "professional services",
    "quality uniforms",
    "sustainable manufacturing",
  ],
  authors: [{ name: "PT. Saikindo Surya Gumiwang" }],
  creator: "PT. Saikindo Surya Gumiwang",
  publisher: "PT. Saikindo Surya Gumiwang",
  // openGraph: {
  //   title: "PT. Saikindo Surya Gumiwang",
  //   description: "Your trusted partner in cleaning services, building maintenance, electrical services, FTTH material supply, uniforms, and event organizing.",
  //   url: "https://www.saikindosg.com",
  //   siteName: "Saikindo Surya Gumiwang",
  //   images: [
  //     {
  //       url: "/og-image.jpg",
  //       width: 1200,
  //       height: 630,
  //       alt: "PT. Saikindo Surya Gumiwang - Professional Services",
  //     },
  //   ],
  //   locale: "en_US",
  //   type: "website",
  // },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "PT. Saikindo Surya Gumiwang",
  //   description: "Professional and reliable services in cleaning, maintenance, FTTH, and event organizing.",
  //   images: ["/twitter-image.jpg"],
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} *:font-ptsans flex flex-col min-h-screen`}>
        <Header />
        <ClientWrapper>{children}</ClientWrapper>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
