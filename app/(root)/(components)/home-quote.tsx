import { Container } from "@/components/wrapper";

export function HomeQuote() {
  return (
    <section className="bg-gray-200">
      <Container>
        <div className="py-12 text-center">
          <blockquote className="max-w-3xl mx-auto text-2xl italic font-medium">
            Customers are more inclined to do business with employees who wear uniforms because they stand out as
            professionals and are seen as being more competent and knowledgeable. - results from a survey conducted by “
            <footer className="mt-6 text-base text-muted-foreground">J.D. Power and Associates</footer>
          </blockquote>
        </div>
      </Container>
    </section>
  );
}
