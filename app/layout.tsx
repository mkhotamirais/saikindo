import type { Metadata } from "next";
import "./globals.css";
import { ClientWrapper } from "@/components/wrapper";
import { Header } from "@/components/home/header";
import { Footer } from "@/components/home/footer";
import BackToTop from "@/components/back-to-top";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { CustomAuthor } from "./types";

export const metadata: Metadata = {
  // title: "PT. Saikindo Surya Gumiwang - Uniform, Power, Event Organizer, and Health Services in Bogor",
  title: {
    absolute: "PT. Saikindo Surya Gumiwang - Uniform, Power, Event Organizer, and Health Services in Bogor", // menimpa semua value yang lain
    default: "PT. Saikindo Surya Gumiwang", // default untuk page ini dan childnya
    template: "%s | PT. Saikindo Surya Gumiwang", // nilai dinamis tergantung childnya
  },
  description:
    "PT. Saikindo Surya Gumiwang offers professional services including custom uniform supply, power solutions, event organizing, and workplace health services in Bogor, Indonesia.",
  keywords: [
    "saikindo",
    "saikindo surya gumiwang",
    "uniform supplier Bogor",
    "custom uniforms",
    "professional uniforms Bogor",
    "power services Bogor",
    "electrical maintenance Bogor",
    "event organizer Bogor",
    "corporate event organizer",
    "health services Bogor",
    "workplace health and safety solutions",
    "industrial uniforms",
    "FTTH materials",
    "sustainable uniforms",
    "event management Bogor",
  ],
  authors: [
    {
      name: "PT. Saikindo Surya Gumiwang",
      role: "Company",
      url: "https://saikindo.co.id",
      image: "https://saikindo.co.id/logo.png",
      contact: {
        email: "office.saikindosg@gmail.com",
        phone: "+628111775774",
      },
      address: {
        street: "Komp. LPTI Jl. Paneli No.13A RT03/08 Kel Ciparigi Kecamatan Bogor Utara",
        city: "Bogor",
        state: "West Java",
        country: "Indonesia",
      },
      socialProfiles: {
        facebook: "https://facebook.com/saikindo",
        linkedin: "https://linkedin.com/company/saikindo",
      },
      description: "PT. Saikindo Surya Gumiwang specializes in professional cleaning, maintenance, and FTTH services.",
    },
    {
      name: "Tamionweb",
      role: "Web Developer",
      url: "https://tamionweb.my.id",
      image: "https://tamionweb.my.id/logo.svg",
      bio: "I Built dynamic, responsive web applications and created seamless user experiences with efficient code.",
      skills: ["JavaScript", "React", "Next.js", "CSS", "SEO"],
      socialProfiles: {
        linkedin: "https://linkedin.com/in/mkhotami-rais/",
        github: "https://github.com/mkhotamirais",
      },
      contact: {
        email: "tami01.job@gmail.com",
      },
    },
  ] as CustomAuthor[],
  creator: "PT. Saikindo Surya Gumiwang",
  publisher: "PT. Saikindo Surya Gumiwang",
  openGraph: {
    title: "PT. Saikindo Surya Gumiwang - Quality Services You Can Trust",
    description: "Professional cleaning, maintenance, and FTTH services.",
    url: "https://saikindo.co.id",
    siteName: "Saikindo",
    images: [{ url: "/og-image.jpg", alt: "Saikindo" }],
    type: "website",
  },
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
      <body className={`*:font-ptsans flex flex-col min-h-screen`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header />
          <ClientWrapper>{children}</ClientWrapper>
          <Footer />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
