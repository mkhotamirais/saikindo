import { Container } from "../wrapper";
import { Logo } from "./header";
import { FaEnvelope, FaWhatsapp, FaGlobe } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="border-t">
      <Container>
        <div className="py-8 flex justify-between items-center">
          <div>
            <Logo />
            <address>Komp. LPTI Jl. Paneli No.13A RT03/08 Kel Ciparigi Kecamatan Bogor Utara Email: </address>
          </div>
          <div className="flex gap-4">
            <a title="Email" href="">
              <FaEnvelope size={24} />
            </a>
            <a title="Email" href="">
              <FaWhatsapp size={24} />
            </a>
            <a title="Email" href="">
              <FaGlobe size={24} />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
