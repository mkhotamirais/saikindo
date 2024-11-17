import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa6";

export const uniformUrl = "https://uniform.saikindo.co.id";
export const powerUrl = "https://power.saikindo.co.id";
export const eventUrl = "https://event.saikindo.co.id";
export const waUrl = "https://wa.me/628111775774";
export const emailUrl = "mailto:office.saikindosg@gmail.com";
export const mapsUrl = "https://maps.app.goo.gl/2pxVdjk4N2VjyqTC9";

export const navMenu = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  {
    href: "/products-services",
    label: "Products & Services",
    subMenu: [
      { href: uniformUrl, label: "Saikindo Uniform" },
      { href: powerUrl, label: "Saikindo Power" },
      { href: eventUrl, label: "Saikindo Event" },
    ],
  },
];

// footer
export const contactUsMenu = [
  {
    icon: null,
    href: mapsUrl,
    label: "Komp. LPTI Jl. Paneli No.13A RT03/08 Kel Ciparigi Kecamatan Bogor Utara",
    title: "Our Location",
  },
  { icon: FaEnvelope, href: emailUrl, label: "office.saikindosg@gmail.com", title: "Email Us" },
  { icon: FaWhatsapp, href: waUrl, label: "62-8111-7757-74", title: "Whatsapp Us" },
];

export const followUsMenu = [
  { icon: FaLinkedin, href: "", label: "", title: "Youtube Account" },
  { icon: FaYoutube, href: "", label: "", title: "Youtube Account" },
  { icon: FaInstagram, href: "", label: "", title: "Instagram Account" },
  { icon: FaTwitter, href: "", label: "", title: "Twitter Account" },
  { icon: FaFacebook, href: "", label: "", title: "Facebook Account" },
];

export const linksMenu = [
  {
    title: "Uniform",
    menus: [
      { href: uniformUrl, label: "Portfolio" },
      { href: uniformUrl, label: "Our Client" },
      { href: uniformUrl, label: "More Info" },
    ],
  },
  {
    title: "Power",
    menus: [
      { href: powerUrl, label: "Maintenence" },
      { href: powerUrl, label: "General Supply" },
      { href: powerUrl, label: "Fiber Optic and Telecommunication" },
    ],
  },
  {
    title: "Event Organizer",
    menus: [
      { href: eventUrl, label: "Booth Production" },
      { href: eventUrl, label: "Backdrop" },
      { href: eventUrl, label: "Outbond" },
      { href: eventUrl, label: "Gathering" },
    ],
  },
];
// end footer

export const clientMenu = [
  { iconPath: "/images/clients/client-1.png", label: "" },
  { iconPath: "/images/clients/client-2.png", label: "" },
  { iconPath: "/images/clients/client-3.png", label: "" },
  { iconPath: "/images/clients/client-4.png", label: "" },
  { iconPath: "/images/clients/client-5.png", label: "" },
  { iconPath: "/images/clients/client-6.png", label: "" },
  { iconPath: "/images/clients/client-7.png", label: "" },
  { iconPath: "/images/clients/client-8.png", label: "" },
  { iconPath: "/images/clients/client-9.png", label: "" },
  { iconPath: "/images/clients/client-10.png", label: "" },
  { iconPath: "/images/clients/client-11.png", label: "" },
  { iconPath: "/images/clients/client-12.png", label: "" },
  { iconPath: "/images/clients/client-13.png", label: "" },
  { iconPath: "/images/clients/client-14.png", label: "" },
  { iconPath: "/images/clients/client-15.png", label: "" },
  { iconPath: "/images/clients/client-16.png", label: "" },
];

export const contactMenu = [
  { title: "Uniform", href: waUrl, label: "628111775774" },
  { title: "Power", href: "", label: "08123456789" },
  { title: "Event Organizer", href: "", label: "08123456789" },
  { title: "Health", href: "", label: "08123456789" },
];

export const productServiceList = [
  {
    href: uniformUrl,
    title: "Saikindo Uniform",
    image: "/logos/logo-saiki-uniform.jpg",
    description: "Providing high-quality, custom-made uniforms for various industries and organizations.",
  },
  {
    href: powerUrl,
    title: "Saikindo Power",
    image: "/logos/logo-saiki-power.jpg",
    description: "Empowering your business with innovative energy solutions for a sustainable future.",
  },
  {
    href: eventUrl,
    title: "Saikindo Event",
    image: "/logos/logo-saiki-event.jpg",
    description: "Expert event planning services to ensure your events are memorable and successful.",
  },
];
