import { useState } from "react"
import viacolLogo from "@/assets/png/viacol-logo.png"
import { ChevronDown } from "lucide-react"
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6"

export const Footer = () => {
  const [openSection, setOpenSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section)
  }

  return (
    <footer className="bg-[#F2C92F] text-black text-sm mt-10">
      <div className="container py-6 flex justify-center xl:justify-start">
        <a href="/">
          <img src={viacolLogo} alt="Viacol logo" className="h-20 w-auto" />
        </a>
      </div>

      {/* Secciones móviles */}
      <div className="xl:hidden container px-4 pb-6 space-y-4">
        {/* Sobre nosotros */}
        <div>
          <button
            className="flex justify-between w-full font-bold"
            onClick={() => toggleSection("about")}
          >
            Sobre nosotros
            <ChevronDown className={`transition-transform ${openSection === "about" ? "rotate-180" : ""}`} />
          </button>
          {openSection === "about" && (
            <ul className="mt-2 pl-4 flex flex-col gap-2">
              <li><a href="#">Misión y visión</a></li>
              <li><a href="#">Código de ética</a></li>
              <li><a href="#">Enfoque estratégico</a></li>
              <li><a href="#">Valores corporativos</a></li>
            </ul>
          )}
        </div>

        {/* Plataformas */}
        <div>
          <button
            className="flex justify-between w-full font-bold"
            onClick={() => toggleSection("platforms")}
          >
            ¿Necesitas ayuda?
            <ChevronDown className={`transition-transform ${openSection === "platforms" ? "rotate-180" : ""}`} />
          </button>
          {openSection === "platforms" && (
            <ul className="mt-2 pl-4 flex flex-col gap-2">
              <li><a href="#">Mapa del sitio</a></li>
              <li><a href="#">Contáctanos</a></li>
            </ul>
          )}
        </div>

        {/* Redes sociales */}
        <div>
          <button
            className="flex justify-between w-full font-bold"
            onClick={() => toggleSection("redes")}
          >
            Síguenos
            <ChevronDown className={`transition-transform ${openSection === "redes" ? "rotate-180" : ""}`} />
          </button>
          {openSection === "redes" && (
            <ul className="mt-2 pl-4 flex flex-col gap-2">
              <li className="flex items-center gap-2"><FaInstagram /> Instagram</li>
              <li className="flex items-center gap-2"><FaXTwitter /> X</li>
              <li className="flex items-center gap-2"><FaFacebookF /> Facebook</li>
            </ul>
          )}
        </div>

        <div>
          <button
            className="flex justify-between w-full font-bold"
            onClick={() => toggleSection("legal")}
          >
            Legal
            <ChevronDown className={`transition-transform ${openSection === "legal" ? "rotate-180" : ""}`} />
          </button>
          {openSection === "legal" && (
            <ul className="mt-2 pl-4 flex flex-col gap-2">
              <li><a href="/terms-and-conditions" target="_blank" rel="noopener noreferrer">Términos y condiciones</a></li>
              <li><a href="/privacy-policy" target="_blank" rel="noopener noreferrer">Politicas de privacidad</a></li>
              <li><a href="/terms-of-use" target="_blank" rel="noopener noreferrer">Términos de uso</a></li>
            </ul>
          )}
        </div>
      </div>

      {/* Secciones escritorio */}
      <div className="hidden xl:grid grid-cols-4 gap-6 container pb-10 text-right">
        {/* Sobre nosotros */}
        <div className="flex flex-col gap-2 items-end">
          <h3 className="font-bold text-base">Sobre nosotros</h3>
          <a href="#" className="opacity-90 hover:opacity-100">Misión y visión</a>
          <a href="#" className="opacity-90 hover:opacity-100">Código de ética</a>
          <a href="#" className="opacity-90 hover:opacity-100">Enfoque estratégico</a>
          <a href="#" className="opacity-90 hover:opacity-100">Valores corporativos</a>
        </div>

        {/* Plataformas */}
        <div className="flex flex-col gap-2 items-end">
          <h3 className="font-bold text-base">¿Necesitas ayuda?</h3>
          <a href="#" className="opacity-90 hover:opacity-100">Mapa del sitio</a>
          <a href="#" className="opacity-90 hover:opacity-100">Contáctanos</a>
        </div>

        {/* Redes sociales */}
        <div className="flex flex-col gap-2 items-end">
          <h3 className="font-bold text-base">Síguenos</h3>
          <a href="#" className="flex items-center gap-2 opacity-90 hover:opacity-100 justify-end">
            <FaInstagram /> Instagram
          </a>
          <a href="#" className="flex items-center gap-2 opacity-90 hover:opacity-100 justify-end">
            <FaXTwitter /> X
          </a>
          <a href="#" className="flex items-center gap-2 opacity-90 hover:opacity-100 justify-end">
            <FaFacebookF /> Facebook
          </a>
        </div>

        <div className="flex flex-col gap-2 items-end">
          <h3 className="font-bold text-base">Legal</h3>
          <a href="/terms-and-conditions" target="_blank" rel="noopener noreferrer" className="opacity-90 hover:opacity-100">Términos y condiciones</a>
          <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="opacity-90 hover:opacity-100">Politicas de privacidad</a>
          <a href="/terms-of-use" target="_blank" rel="noopener noreferrer" className="opacity-90 hover:opacity-100">Términos de uso</a>
        </div>
      </div>

      <hr className="border-black/20 w-11/12 mx-auto" />

      <section className="container text-center py-4 text-xs text-black">
        Copyright &copy; 2025 - {" "}
        <a
          rel="noreferrer noopener"
          target="_blank"
          href="https://www.linkedin.com/in/davidflorido/"
          className="text-[#000] font-semibold border-black hover:border-b"
        >
          Viacol
        </a>
      </section>
    </footer>
  )
}
