import { Button } from "./ui/button";
import { HeroCards } from "./HeroCards";
import { FaFileDownload } from "react-icons/fa";
import MiniModal from "@/components/modals/DownloadModal";

export const Hero = () => {
  // URLs de WhatsApp con mensaje preescrito
  const whatsappTalentoHumano = `https://wa.me/573027824455?text=Hola%2C%20quiero%20comunicarme%20con%20el%20departamento%20de%20Talento%20Humano%20de%20CIA%20VIACOL%20S.A.S.`;
  const whatsappSistemas = `https://wa.me/573124749985?text=Hola%2C%20quiero%20comunicarme%20con%20el%20departamento%20de%20Sistema%20Integrado%20de%20Gesti%C3%B3n%20de%20CIA%20VIACOL%20S.A.S.`;

  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-16 md:py-22 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F2C92F] to-[#f1e83c] text-transparent bg-clip-text">
              Reglamento
            </span>{" "}
            interno de
          </h1>{" "}
          trabajo.{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#F2C92F] via-[#dcbd62] to-[#f1e83c] text-transparent bg-clip-text">
              CIA VIACOL S.A.S.
            </span>{" "}
          </h2>
        </main>

        <p className="text-lg text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Descarga nuestro Reglamento Interno de Trabajo y conoce las normas que
          guían nuestra convivencia y compromiso laboral.
        </p>

        {/* Botones */}
        <div className="space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row">
          {/* Botón Talento Humano */}
          <a
            href={whatsappTalentoHumano}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-1/3"
          >
            <Button className="w-full flex items-center justify-center">
              Talento Humano
              {/* <FaWhatsapp className="ml-2 w-5 h-5 text-green-600" /> */}
            </Button>
          </a>

          {/* Botón Sistema Integrado de Gestión */}
          <a
            href={whatsappSistemas}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-1/3"
          >
            <Button className="w-full flex items-center justify-center">
              Sistema Integrado de Gestión
              {/* <className="ml-2 w-5 h-5 text-green-600" /> */}
            </Button>
          </a>

          {/* Reglamento interno */}
          <MiniModal
            filePath="SG-SST-DIR-02 REGLAMENTO INTERNO DE TRABAJO.pdf"
            trigger={
              <Button
                variant="outline"
                className="w-full md:w-1/3 flex justify-center items-center"
              >
                Reglamento interno
                <FaFileDownload className="ml-2 w-5 h-5" />
              </Button>
            }
          />
        </div>
      </div>

      <div className="z-10">
        <HeroCards />
      </div>

      <div className="shadow"></div>
    </section>
  );
};
