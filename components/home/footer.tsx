import { Separator } from "../ui/separator";
import { Container } from "../wrapper";
import { Logo } from "./header";
import { Socials } from "./socials";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <Container>
        <div className="py-4 flex flex-col space-y-4">
          <div className="py-6">
            <Logo />
            <address className="text-sm py-2">
              Komp. LPTI Jl. Paneli No.13A RT03/08 Kel Ciparigi Kecamatan Bogor Utara Email:{" "}
            </address>
            <div className="space-y-3 mx-auto text-xs">
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
                very paying attention to quality and safety in providing FTTH materials and power services are needed.
                In carrying out the cleaning and maintenance of the building, weusing modern and up-to-date equipment
                make it more effective and efficient.In providing event organizer services, we are also very trusted and
                very attentive to detail and quality inevery event they organize. In meeting needscustomers, we always
                hide good cooperation with customers and up hold deep humanity every action is taken.
              </p>
              <p>
                With all these things, PT. Saikindo Surya Gumiwang It is hoped that it will be the right choice for all
                people who need the best solution in the field of cleaning andbuilding maintenance, electrical service,
                provision of FTTH materials, uniform,and event organizers
              </p>
            </div>
          </div>
          <div className="flex justify-between">
            <small>
              Copyright &copy; {new Date().getFullYear()}{" "}
              <a title="homepage saikindosg" href="/" className="text-primary font-bold hover:underline">
                saikindosg
              </a>
            </small>
            <Socials />
          </div>
        </div>
      </Container>
    </footer>
  );
}
