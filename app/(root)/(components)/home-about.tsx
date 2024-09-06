import { Button } from "@/components/ui/button";
import { Container } from "@/components/wrapper";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export function HomeAbout() {
  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <div className="grid grid-cols-2 gap-16">
          <div className="flex flex-col">
            <h2 className="font-josefin text-5xl font-medium text-green-600">About Us</h2>
            <div className="flex-1 text-sm leading-relaxed space-y-4 py-6">
              <p>
                PT. Saikindo Surya Gumiwang is a company that professional and reliable in the field of cleaning and
                building maintenance, power service, FTTH material supply, uniform, and event organizers.
              </p>
              <p>
                PT. Saikindo Surya Gumiwang has a focus on delivering the right solution for all types of related needs
                building cleaning and maintenance, electrical service, provision FTTH materials, uniform, and event
                organizers.
              </p>
            </div>
            <Link href="/about" className="group text-green-600 flex items-center max-w-fit mt-auto">
              <div className="group-hover:underline">View More</div>
              <FaArrowRightLong className="ml-2 group-hover:translate-x-2 transition" />
            </Link>
          </div>
          <div>
            <Image src="/images/building-1.jpg" width={500} height={500} alt="building" className="rounded-lg" />
          </div>
        </div>
      </Container>
    </section>
  );
}
