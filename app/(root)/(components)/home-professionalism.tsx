import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Container, Title } from "@/components/wrapper";

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
    <section className="bg-gray-100">
      <Container>
        <div className="py-16">
          <Title title={title} description={description} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
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
