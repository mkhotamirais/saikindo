import { Container } from "../wrapper";
import { Logo, Socials } from "./header";
import { FaEnvelope, FaWhatsapp, FaGlobe } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-yellow-400 to-blue-400/50">
      <Container>
        <div className="py-8 flex flex-col space-y-4 justify-between items-center text-center">
          <Logo />
          <address className="text-sm">
            Komp. LPTI Jl. Paneli No.13A RT03/08 Kel Ciparigi Kecamatan Bogor Utara Email:{" "}
          </address>
          <Socials size={24} />
        </div>
      </Container>
    </footer>
  );
}
