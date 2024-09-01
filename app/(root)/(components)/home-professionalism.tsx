import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Container, Title } from "@/components/wrapper";

const ServiceList = [
  {
    title: "PROVIDING QUALITY UNIFORMS",
    description: `We provide comfortable,
durable, and high-quality
uniforms for a variety of
industry needs.`,
  },
  {
    title: "INNOVATIVE DESIGNS",
    description: `We offer modern and
functional designs that
are in line with the latest
trends and specific
customer needs.`,
  },
  {
    title: "SUSTAINABILITY AND ETHICS",
    description: `We practice environmentally
friendly and socially
responsible manufacturing.`,
  },
  {
    title: "CUSTOMER SATISFACTION",
    description: `We focus on customer
satisfaction by providing
products that meet their
expectations and needs.`,
  },
];

const title = `PROFESSIONALISM AND SUCCESS`;
const description = `We are committed to being a trusted partner in providing uniforms, helping customers achieve`;

export function HomeProfessionalism() {
  return (
    <section className="bg-gray-200">
      <Container>
        <div className="py-12">
          <Title title={title} description={description} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
            {ServiceList.map((item, i) => (
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
