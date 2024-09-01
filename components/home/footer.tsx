import { Separator } from "../ui/separator";
import { Container } from "../wrapper";
import { Logo, Socials } from "./header";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-yellow-400/50 to-blue-400/50">
      <Container>
        <div className="py-4 flex flex-col space-y-4">
          <div className="py-6">
            <Logo />
            <address className="text-sm">
              Komp. LPTI Jl. Paneli No.13A RT03/08 Kel Ciparigi Kecamatan Bogor Utara Email:{" "}
            </address>
          </div>
          <div className="flex justify-between">
            <small>
              Copyright &copy; {new Date().getFullYear()}{" "}
              <a title="homepage saikindosg" href="/" className="text-primary font-bold hover:underline">
                saikindosg
              </a>
            </small>
            <Socials size={20} />
          </div>
        </div>
      </Container>
    </footer>
  );
}
