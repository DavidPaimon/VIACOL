import { Button } from "./ui/button"
import { HeroCards } from "./HeroCards"
import { FaFileDownload } from "react-icons/fa"
import MiniModal from "@/components/modals/DownloadModal"

export const Hero = () => {
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
              VIACOL.
            </span>{" "}
          </h2>
        </main>

        <p className="text-lg text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Descarga nuestro Reglamento Interno de Trabajo y conoce las normas que guían nuestra convivencia y compromiso laboral.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row">
          <Button className="w-full md:w-1/3">Contáctanos</Button>

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
  )
}
