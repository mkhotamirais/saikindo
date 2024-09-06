import { FaEnvelope, FaGlobe, FaWhatsapp } from "react-icons/fa6";

const socialsMenu = [
  { icon: FaEnvelope, href: "mailto:office.saikindosg@gmail.com", title: "our email link" },
  { icon: FaWhatsapp, href: "https://wa.me/628111775774", title: "our whatsapp contact" },
  { icon: FaGlobe, href: "https://saikindo.co.id", title: "our website homepage" },
];

export function Socials({ size = 20, className }: { size?: number; className?: string }) {
  return (
    <div className={`${className}`}>
      <div className="flex gap-4">
        {socialsMenu.map((item, i) => (
          <a key={i} title={item.title} href={item.href}>
            <item.icon size={size} className="hover:scale-110 transition" />
          </a>
        ))}
      </div>
    </div>
  );
}
