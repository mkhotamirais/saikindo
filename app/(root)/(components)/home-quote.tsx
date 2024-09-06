import { Container } from "@/components/wrapper";

export function HomeQuote() {
  return (
    <section className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-50 to-green-300">
      <Container>
        <div className="py-8 text-center">
          <blockquote className="max-w-3xl mx-auto text-lg sm:text-xl italic font-medium">
            <span className="text-5xl">&ldquo;</span>
            Customers are more inclined to do business with employees who wear uniforms because they stand out as
            professionals and are seen as being more competent and knowledgeable.
            <footer className="mt-6 text-base text-muted-foreground">
              - results from a survey conducted by
              <br />
              J.D. Power and Associates
            </footer>
          </blockquote>
        </div>
      </Container>
    </section>
  );
}
