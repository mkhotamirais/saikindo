import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa6";
import { Logo } from "./header";
import Link from "next/link";

const contactUsMenu = [
  {
    icon: null,
    href: "https://maps.app.goo.gl/2pxVdjk4N2VjyqTC9",
    label: "Komp. LPTI Jl. Paneli No.13A RT03/08 Kel Ciparigi Kecamatan Bogor Utara",
    title: "Our Location",
  },
  {
    icon: FaEnvelope,
    href: "mailto:office.saikindosg@gmail.com",
    label: "office.saikindosg@gmail.com",
    title: "Email Us",
  },
  { icon: FaWhatsapp, href: "https://wa.me/628111775774", label: "62-8111-7757-74", title: "Whatsapp Us" },
];

const followUsMenu = [
  { icon: FaLinkedin, href: "", label: "", title: "Youtube Account" },
  { icon: FaYoutube, href: "", label: "", title: "Youtube Account" },
  { icon: FaInstagram, href: "", label: "", title: "Instagram Account" },
  { icon: FaTwitter, href: "", label: "", title: "Twitter Account" },
  { icon: FaFacebook, href: "", label: "", title: "Facebook Account" },
];

const linksMenu = [
  {
    title: "Uniform",
    menus: [
      { href: "/products-services/uniform", label: "Portfolio" },
      { href: "/products-services/uniform", label: "Our Client" },
      { href: "/products-services/uniform", label: "Info Lainnya" },
    ],
  },
  {
    title: "Power",
    menus: [
      { href: "/products-services/power", label: "Maintenence" },
      { href: "/products-services/power", label: "General Supply" },
      { href: "/products-services/power", label: "Fiber Optic and Telecommunication" },
    ],
  },
  {
    title: "Event Organizer",
    menus: [
      { href: "/products-services/event-organizer", label: "Booth Production" },
      { href: "/products-services/event-organizer", label: "Backdrop" },
      { href: "/products-services/event-organizer", label: "Outbond" },
      { href: "/products-services/event-organizer", label: "Gathering" },
    ],
  },
  {
    title: "Health",
    menus: [
      { href: "/products-services/health", label: "Equipment" },
      { href: "/products-services/health", label: "Supply" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="font-ptsans">
      <div className="bg-muted">
        <div className="container mx-auto py-12 flex flex-col md:grid md:grid-cols-3 gap-8">
          <div className="col-span-1">
            <Logo />
            <div className="space-y-4 mt-4">
              {contactUsMenu.map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  title={item.title}
                  className="text-sm hover:text-primary transition flex items-center gap-2 max-w-fit"
                >
                  {item?.icon && <item.icon size={16} className="min-w-max" />}
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="col-span-2 grid md:grid-cols-2 xl:grid-cols-4 gap-10 mt-8 sm:mt-0">
            {linksMenu.map((item, i) => (
              <div key={i} className="space-y-4">
                <h4 className="text-lg font-bold font-josefin">{item.title}</h4>
                <div className="space-y-2 flex flex-col">
                  {item.menus.map((menu, i) => (
                    <Link
                      key={i}
                      href={menu.href}
                      title={menu.label}
                      className="font-ptsans text-sm hover:text-primary transition w-fit"
                    >
                      {menu.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-background">
        <div className="container mx-auto py-6 flex flex-col sm:flex-row gap-4 justify-between items-center">
          <small className="min-w-max font-ptsans">
            Copyright &copy; {new Date().getFullYear()}{" "}
            <a title="homepage saikindosg" href="/" className="font-semibold text-primary hover:underline">
              PT Saikindo Surya Gumiwang
            </a>
          </small>
          <div className={``}>
            <div className="flex gap-4">
              {followUsMenu.map((item, i) => (
                <Link
                  href={item.href}
                  key={i}
                  title={item.title}
                  className="bg-primary rounded-full p-2 hover:scale-110 transition"
                >
                  <item.icon size={14} className="text-zinc-900" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
