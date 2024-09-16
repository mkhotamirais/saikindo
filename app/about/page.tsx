import { Container } from "@/components/wrapper";

export default function AboutPage() {
  return (
    <section>
      <div className="container">
        <div className="bg-[url('/images/building-1.jpg')] bg-cover bg-center h-56 lg:h-72 w-full my-2 rounded-md">
          <div className="bg-gradient-to-t from-black/50 to-black/10 h-full flex items-center justify-center">
            <h1 className="font-josefin text-4xl lg:text-6xl font-bold text-green-500 backdrop-blur rounded-xl p-3">
              About Us
            </h1>
          </div>
        </div>
        <div className="max-w-3xl py-8 space-y-4">
          <h2 className="text-green-600 font-josefin text-3xl font-bold">Introduction</h2>
          <div className="space-y-3">
            <p>
              PT. Saikindo Surya Gumiwang is a company that professional and reliable in the field of cleaning and
              building maintenance, power service, FTTH material supply, uniform, and event organizers.
            </p>
            <p>
              PT. Saikindo Surya Gumiwang has a focus on delivering the right solution for all types of related needs
              building cleaning and maintenance, electrical service, provision FTTH materials, uniform, and event
              organizers.
            </p>
            <p>
              Our commitment is to provide the best service and high quality for customers. In addition, we are also
              very paying attention to quality and safety in providing FTTH materials and power services are needed. In
              carrying out the cleaning and maintenance of the building, weusing modern and up-to-date equipment make it
              more effective and efficient.In providing event organizer services, we are also very trusted and very
              attentive to detail and quality inevery event they organize. In meeting needscustomers, we always hide
              good cooperation with customers and up hold deep humanity every action is taken.
            </p>
            <p>
              With all these things, PT. Saikindo Surya Gumiwang It is hoped that it will be the right choice for all
              people who need the best solution in the field of cleaning andbuilding maintenance, electrical service,
              provision of FTTH materials, uniform,and event organizers
            </p>
          </div>
        </div>
        <div className="max-w-3xl py-8 space-y-4">
          <h2 className="text-green-600 font-josefin text-3xl font-bold">Vision</h2>
          <div className="space-y-3">
            <p>
              To become a leading company in the field of services and provision that provides the best solutions for
              customer needs
            </p>
          </div>
        </div>
        <div className="max-w-3xl py-8 space-y-4">
          <h2 className="text-green-600 font-josefin text-3xl font-bold">Mision</h2>
          <div className="space-y-3">
            <p>
              Providing high quality services and innovative solutions to meet customer needs effectively and
              efficiently by prioritizing customer satisfaction and improving the welfare of the company&apos;s
              employees.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
