import { Container } from "../wrapper";
import { Logo } from "./header";
import { Socials } from "./socials";

export function Footer() {
  return (
    <footer className="bg-gradient-to-t from-gray-800 to-gray-600 text-white mt-auto">
      <Container>
        <div className="py-4 flex flex-col space-y-4">
          <div className="py-6">
            <Logo />
            <address className="text-sm py-2">
              Komp. LPTI Jl. Paneli No.13A RT03/08 Kel Ciparigi Kecamatan Bogor Utara
            </address>
          </div>
          <div className="flex justify-between py-3">
            <small>
              Copyright &copy; {new Date().getFullYear()}{" "}
              <a title="homepage saikindosg" href="/" className="font-bold hover:underline">
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
