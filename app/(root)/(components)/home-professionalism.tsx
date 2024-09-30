import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Container, H2, Title } from "@/components/wrapper";

const ProfessionalismList = [
  {
    title: "PROVIDING QUALITY UNIFORMS",
    description: `We provide comfortable,durable, and high-qualityuniforms for a variety ofindustry needs.`,
  },
  {
    title: "INNOVATIVE DESIGNS",
    description: `We offer modern andfunctional designs thatare in line with the latesttrends and specificcustomer needs.`,
  },
  {
    title: "SUSTAINABILITY AND ETHICS",
    description: `We practice environmentallyfriendly and sociallyresponsible manufacturing.`,
  },
  {
    title: "CUSTOMER SATISFACTION",
    description: `We focus on customersatisfaction by providingproducts that meet theirexpectations and needs.`,
  },
];

const title = `PROFESSIONALISM AND SUCCESS`;
const description = `We are committed to being a trusted partner in providing uniforms, helping customers achieve`;

export function HomeProfessionalism() {
  return (
    <section className="py-6">
      <Container>
        <div className="p-3 bg-white">
          <H2>Professionalism And Success</H2>
          <Separator />
          <div className="py-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
            {ProfessionalismList.map((item, i) => (
              <Card key={i} className="shadow border-none">
                <CardHeader className="font-poppins font-bold text-lg">{item.title}</CardHeader>
                <CardContent className="font-roboto text-muted-foreground">{item.description}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
