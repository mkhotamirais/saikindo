import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { H2 } from "@/components/wrapper";
import Link from "next/link";
import { FaWhatsapp, FaPaperPlane } from "react-icons/fa6";

const contactList = [
  { title: "Uniform", href: "https://wa.me/628111775774", label: "628111775774" },
  { title: "Power", href: "", label: "08123456789" },
  { title: "Event Organizer", href: "", label: "08123456789" },
  { title: "Health", href: "", label: "08123456789" },
];

export default function HomeContact() {
  return (
    <section id="contact-us" className="bg-[url('/images/building-1.jpg')] bg-cover bg-center bg-fixed">
      <div className="bg-black/70 py-16">
        <div className="container">
          <H2 title="Contact Us" />
          <p className="text-center text-white">
            You can contact us directly via email at{" "}
            <Link href="mailto:office.saikindosg@gmail.com" className="text-saikindo-secondary-600">
              office.saikindosg@gmail.com
            </Link>
            , fill out the form below, or get in touch with us through WhatsApp.
          </p>
          <div className="flex flex-col lg:flex-row gap-2 mt-8">
            <div className="flex-1">
              <form className="border rounded-lg p-4 space-y-3 h-full bg-white/70">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input placeholder="Your Name" />
                  <Input type="email" placeholder="Your Email" />
                </div>
                <Input type="text" placeholder="Subject" />
                <Textarea placeholder="Message" />
                <Button type="submit" className="bg-saikindo-secondary-600 hover:bg-saikindo-secondary-500">
                  <FaPaperPlane className="mr-2" />
                  Submit
                </Button>
              </form>
            </div>

            <div className="flex-1 flex flex-col sm:flex-row gap-2">
              <div className="flex-1 border rounded-lg p-3 text-center bg-white/70">
                {contactList.map((item, i) => (
                  <div key={i} className="mb-1">
                    <h3 className="font-josefin text-lg">{item.title}</h3>
                    <Button asChild variant={"link"} size={"sm"} className="px-0">
                      <Link href={item.href} className="flex items-center gap-2 text-saikindo-secondary-600">
                        <FaWhatsapp size={20} />
                        <p className="font-bold">{item.label}</p>
                      </Link>
                    </Button>
                  </div>
                ))}
              </div>
              <div className="flex-1 border rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.7837369608883!2d106.8144100744145!3d-6.548967364019989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c5cefbdcff11%3A0x8478b2957beb67a9!2sPT%20SAIKINDO%20SURYA%20GUMIWANG!5e0!3m2!1sen!2sid!4v1726520845525!5m2!1sen!2sid"
                  width="200"
                  height="200"
                  className="w-full h-48 sm:h-full"
                  // style="border:0;"
                  // allowfullscreen=""
                  loading="lazy"
                  // referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
