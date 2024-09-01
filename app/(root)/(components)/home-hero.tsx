import { Button } from "@/components/ui/button";
import { Container } from "@/components/wrapper";

export function HomeHero() {
  return (
    <section className="bg-blue-500 bg-[url('/images/uniform-bg.jpg')] bg-center bg-cover">
      <div className="bg-gradient-to-t from-[rgba(0,0,0,.7)] to-[rgba(0,0,0,.4)]">
        <Container>
          <div className="min-h-screen text-white max-w-3xl mx-auto flex flex-col items-center justify-center text-center space-y-6">
            <h1 className="font-poppins text-3xl font-bold">Your Complete Solution for Building Services and Beyond</h1>
            <p className="text-gray-300">
              We focus on delivering the right solutions for all types of related needs, including building cleaning and
              maintenance, electrical services, FTTH material provision, uniforms, and event organization.
            </p>
            <Button className="rounded-full bg-saiki-accent border-none hover:opacity-80" size={"lg"}>
              Our Products
            </Button>
          </div>
        </Container>
      </div>
    </section>
  );
}
