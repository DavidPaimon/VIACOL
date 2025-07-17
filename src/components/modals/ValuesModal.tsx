import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Props {
  trigger: React.ReactNode
}

export const ValuesModal = ({ trigger }: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-3xl w-[95%] md:w-full overflow-y-auto max-h-[90vh] rounded-lg p-6 relative">
        <div className="flex justify-between items-center mb-4">
          <DialogTitle className="text-2xl font-bold text-[#F2C92F]">Valores Corporativos</DialogTitle>
          <Button variant="ghost" size="icon" className="rounded-full absolute top-4 right-4">
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="space-y-4 text-sm md:text-base">
          <div>
            <h3 className="font-semibold text-[#F2C92F]">Respeto</h3>
            <p>
              Reconocemos la dignidad de cada persona, promovemos un trato justo, equitativo y humano hacia nuestros usuarios,
              colaboradores y aliados. Valoramos la diversidad y fomentamos ambientes de formación empáticos e inclusivos.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-[#F2C92F]">Lealtad</h3>
            <p>
              Actuamos con fidelidad hacia nuestra misión institucional, cumpliendo con responsabilidad los compromisos adquiridos con
              nuestros usuarios, el equipo de trabajo y las entidades que nos regulan.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-[#F2C92F]">Confidencialidad</h3>
            <p>
              Protegemos la información personal y organizacional con estricta reserva, garantizando el manejo ético y seguro de los
              datos conforme a la ley y a los principios de transparencia y confianza.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-[#F2C92F]">Compromiso con la calidad</h3>
            <p>
              Nos esforzamos por ofrecer servicios pedagógicos eficientes, innovadores y alineados con los más altos estándares técnicos
              y normativos, promoviendo la mejora continua y la excelencia.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-[#F2C92F]">Responsabilidad social</h3>
            <p>
              Contribuimos activamente a la transformación positiva de la cultura vial en Colombia, educando para la vida y fomentando
              comportamientos ciudadanos seguros y conscientes.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-[#F2C92F]">Integridad</h3>
            <p>
              Actuamos con honestidad, ética y coherencia en todas nuestras acciones, fortaleciendo la confianza de quienes interactúan
              con nuestra organización.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-[#F2C92F]">Vocación de servicio</h3>
            <p>
              Escuchamos y atendemos con disposición y calidez a nuestros usuarios, brindando soluciones oportunas que aporten a su
              desarrollo y bienestar.
            </p>
          </div>
        </div>

        <div className="w-full -mt-6">
          <svg viewBox="0 0 1440 320" className="w-full h-20" preserveAspectRatio="none">
            <path
              fill="#F2C92F"
              fillOpacity="1"
              d="M0,224L60,192C120,160,240,96,360,101.3C480,107,600,181,720,197.3C840,213,960,171,1080,154.7C1200,139,1320,149,1380,154.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            />
          </svg>
        </div>
      </DialogContent>
    </Dialog>
  )
}
