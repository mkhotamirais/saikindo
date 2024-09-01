import { Button } from "@/components/ui/button";
import { Container } from "@/components/wrapper";

export function HomeHero() {
  return (
    <section className="">
      <Container>
        <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center text-center space-y-6">
          <h1 className="font-poppins text-3xl font-bold">Your Complete Solution for Building Services and Beyond</h1>
          <p className="text-muted-foreground">
            We focus on delivering the right solutions for all types of related needs, including building cleaning and
            maintenance, electrical services, FTTH material provision, uniforms, and event organization.
          </p>
          <Button>Our Products</Button>
        </div>
      </Container>
    </section>
  );
}
