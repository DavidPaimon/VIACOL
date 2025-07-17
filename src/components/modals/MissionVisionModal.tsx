import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import ModalWaveSVG from "@/components/shared/ModalWaveSVG"

interface MissionVisionModalProps {
  trigger: React.ReactNode
}

export const MissionVisionModal = ({ trigger }: MissionVisionModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="w-[95vw] max-w-4xl p-0 overflow-hidden rounded-xl">
        <DialogTitle className="px-8 pt-6 text-3xl font-bold text-[#F2C92F]">
          Misión y Visión
        </DialogTitle>
        <DialogDescription className="sr-only">
          Contenido informativo sobre la misión y visión de CIA Viacol S.A.S.
        </DialogDescription>

        <div className="relative bg-white dark:bg-black px-8 pt-6 pb-20 text-left text-sm md:text-base max-h-[80vh] overflow-y-auto">
          <h2 className="text-2xl font-bold mb-6 text-[#F2C92F]">Visión</h2>
          <p className="mb-10">
            Para el año 2030, CIA Viacol S.A.S. será reconocida como una entidad transformadora en el ámbito de la seguridad vial, destacada por su enfoque pedagógico humanizado, su compromiso con la vida y su capacidad para generar conciencia ciudadana. Seremos un referente nacional en formación vial, contribuyendo activamente a una movilidad más segura, empática y responsable en Colombia.
          </p>

          <h2 className="text-2xl font-bold mb-6 text-[#F2C92F]">Misión</h2>
          <p>
            En CIA Viacol S.A.S. brindamos formación pedagógica en seguridad vial dirigida a ciudadanos infractores, combinando el cumplimiento normativo, la excelencia técnica y un enfoque humanizado que promueve el aprendizaje consciente y la transformación de comportamientos en la vía. Nuestra labor contribuye a la reducción de la siniestralidad, al fortalecimiento de la cultura ciudadana y al acceso oportuno a los beneficios legales establecidos, garantizando servicios de alta calidad, con responsabilidad social y mejora continua.
          </p>
        </div>

        {/* SVG decorativo abajo */}
        <ModalWaveSVG />
      </DialogContent>
    </Dialog>
  )
}
