import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Container, Title } from "@/components/wrapper";
import {
  FaBriefcase,
  FaBuilding,
  FaHotel,
  FaIndustry,
  FaMusic,
  FaSchool,
  FaServicestack,
  FaUtensils,
} from "react-icons/fa6";

const serviceList = [
  {
    icon: FaSchool,
    label: "SCHOOLS AND NURSERIES",
  },
  {
    icon: FaUtensils,
    label: "RESTAURANTS AND CAFES",
  },
  {
    icon: FaHotel,
    label: "HOTELS AND RESORT",
  },
  {
    icon: FaMusic,
    label: "CLUBS",
  },
  {
    icon: FaIndustry,
    label: "MANUFACTURING FACILITIES",
  },
  {
    icon: FaBuilding,
    label: "ORGANIZATIONS",
  },
  {
    icon: FaServicestack,
    label: "SERVICES PROVIDER’S",
  },
  {
    icon: FaBriefcase,
    label: "CORPORATE",
  },
  {
    icon: FaBuilding,
    label: "OFFICE",
  },
];

const title = `OUR SERVICES`;
const description = `We Custom/design and manufactureuniforms and work wear, including allrelated services from printing andembroidery to packaking and shipping`;

export function HomeServices() {
  return (
    <section>
      <Container>
        <div className="py-16">
          <Title title={title} description={description} />
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {serviceList.map((item, i) => (
              <div key={i} className="inline-flex justify-center flex-col items-center gap-4">
                <item.icon size={32} />
                <h3 className="text-sm font-medium font-roboto text-center">{item.label}</h3>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
