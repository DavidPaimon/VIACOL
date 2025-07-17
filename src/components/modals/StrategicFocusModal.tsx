import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import ModalWaveSVG from "@/components/shared/ModalWaveSVG"
import firma from "@/assets/png/firma.png"

interface StrategicFocusModalProps {
  trigger: React.ReactNode
}

export const StrategicFocusModal = ({ trigger }: StrategicFocusModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>

      <DialogContent className="max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-lg shadow-xl p-6">
        <div className="text-left space-y-6">
          {/* Enfoque estratégico */}
          <div>
            <DialogTitle className="text-[#F2C92F] text-2xl font-bold mb-1">
              Enfoque estratégico
            </DialogTitle>
            <DialogDescription className="mb-4">
              Compromiso institucional con la mejora continua, la innovación educativa y la seguridad vial ciudadana.
            </DialogDescription>

            <ul className="list-disc list-inside space-y-2 text-sm leading-relaxed">
              <li><strong>Diferenciación pedagógica:</strong> Desarrollo de metodologías activas, humanizadas y centradas en el aprendizaje significativo.</li>
              <li><strong>Cumplimiento regulatorio:</strong> Operación bajo estrictos parámetros normativos (Ley 1503 de 2011, Decreto 2851 de 2013, etc.).</li>
              <li><strong>Escalabilidad:</strong> Proyección de expansión regional mediante alianzas público-privadas.</li>
              <li><strong>Impacto medible:</strong> Reducción en índices de reincidencia e incremento en la percepción positiva del servicio.</li>
              <li><strong>Gestión por calidad:</strong> Implementación de procesos certificados bajo sistemas de gestión como ISO 9001.</li>
            </ul>
          </div>

          {/* Política de Calidad */}
          <div>
            <DialogTitle className="text-[#F2C92F] text-2xl font-bold mb-1">
              Política de Calidad
            </DialogTitle>
            <DialogDescription className="mb-4">
              Principios y compromisos de CIA Viacol S.A.S. con la excelencia educativa y la normativa vial.
            </DialogDescription>

            <div className="space-y-3 text-sm leading-relaxed">
              <p>
                En CIA Viacol S.A.S., estamos comprometidos con la prestación de servicios 
                pedagógicos de formación en seguridad vial dirigidos a ciudadanos infractores, 
                garantizando el cumplimiento de los requisitos legales y reglamentarios aplicables, así 
                como las necesidades y expectativas de nuestros usuarios y partes interesadas. 
                Nuestra gestión de la calidad se fundamenta en los principios de la norma ISO 9001:2015, 
                asegurando un enfoque basado en procesos, liderazgo efectivo, participación del talento 
                humano, pensamiento basado en riesgos y mejora continua. 
              </p>
              <p className="font-bold">
                Nos comprometemos a:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Garantizar la calidad y eficacia de nuestros programas educativos, mediante metodologías actualizadas y personal competente.</li>
                <li>Fomentar una cultura de responsabilidad social, centrada en la prevención vial, la transformación de comportamientos ciudadanos y el respeto por la vida.</li>
                <li>Asegurar la mejora continua del Sistema de Gestión de la Calidad, optimizando nuestros procesos y recursos para elevar la satisfacción del usuario.</li>
                <li>Cumplir de manera rigurosa con la normativa nacional vigente en materia de tránsito y seguridad vial.</li>
                <li>Consolidar una operación sostenible, eficiente y orientada a resultados, que fortalezca nuestra posición en el sector y contribuya al desarrollo institucional.</li>
              </ul>
              <p>
                Todos los colaboradores de CIA Viacol S.A.S. están comprometidos con esta política, actuando con ética, profesionalismo y vocación de servicio para lograr los objetivos establecidos por la organización.
              </p>
            </div>
          </div>

          {/* Firma centrada */}
          <div className="w-full flex justify-center mt-6">
            <img
              src={firma}
              alt="Firma CIA Viacol"
              className="max-w-[480px] w-full h-auto object-contain"
            />
          </div>

          {/* SVG decorativo inferior */}
          <div className="w-full">
            <ModalWaveSVG />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
