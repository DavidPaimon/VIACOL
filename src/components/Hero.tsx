import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
import { FaFileDownload } from "react-icons/fa";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-16 md:py-22 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F2C92F]  to-[#f1e83c] text-transparent bg-clip-text">
              Reglamento
            </span>{" "}
            interno del
          </h1>{" "}
          trabajo.{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#F2C92F] via-[#dcbd62] to-[#f1e83c] text-transparent bg-clip-text">
             VIACOL
            </span>{" "}
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Descarga nuestro Reglamento Interno de Trabajo y conoce las normas que guían nuestra convivencia y compromiso laboral.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className="w-full md:w-1/3">Contáctanos</Button>

          <a
            rel="noreferrer noopener"
            href="https://github.com/leoMirandaa/shadcn-landing-page.git"
            target="_blank"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            Reglamento interno
            <FaFileDownload className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
