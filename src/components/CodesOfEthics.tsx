import { useNavigate } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import { Navbar } from "./Navbar"

export default function CodesOfEthics() {
  const navigate = useNavigate()

  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <Navbar />
      <div className="px-4 sm:px-6 md:px-12 lg:px-36 mt-4 mb-6">
        <button
        onClick={() => navigate(-1)}
        className="flex items-center text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition font-medium"
        >
        <ArrowLeft className="mr-2" size={20} />
        Volver
        </button>
      </div>


      {/* Contenido principal */}
      <section className="px-6 md:px-12 lg:px-36 py-10 space-y-10">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-2">
            Código de Ética y Comportamiento Organizacional
          </h1>
          <p className="text-lg text-[#F2C92F] font-semibold">CIA Viacol S.A.S.</p>
        </div>

        <div className="space-y-12">
          {/* 1. Propósito */}
          <Section title="1. Propósito del Código">
            Este Código de Ética establece los principios fundamentales que rigen el comportamiento
            de todos los colaboradores de CIA Viacol S.A.S. Su finalidad es fortalecer la cultura
            organizacional, fomentar la coherencia entre valores y acciones, y promover relaciones
            éticas con usuarios, autoridades y la sociedad en general.
          </Section>

          {/* 2. Compromisos Éticos */}
          <Section title="2. Compromisos Éticos del Personal" isList>
            {[
              {
                title: "a. Respeto",
                points: [
                  "Promover relaciones armónicas basadas en la dignidad humana.",
                  "Escuchar activamente a usuarios, compañeros y superiores.",
                ],
              },
              {
                title: "b. Lealtad",
                points: [
                  "Ser fiel a la misión, visión y objetivos de CIA Viacol S.A.S.",
                  "Abstenerse de actos que perjudiquen los intereses institucionales.",
                ],
              },
              {
                title: "c. Confidencialidad",
                points: [
                  "Garantizar el manejo reservado de información.",
                  "No divulgar datos sin autorización.",
                ],
              },
              {
                title: "d. Compromiso con la calidad",
                points: [
                  "Cumplir con las responsabilidades bajo criterios de excelencia.",
                  "Participar en procesos de evaluación y mejora continua.",
                ],
              },
              {
                title: "e. Responsabilidad social",
                points: [
                  "Promover una cultura vial consciente y transformadora.",
                  "Participar en acciones educativas de impacto comunitario.",
                ],
              },
              {
                title: "f. Integridad",
                points: [
                  "Actuar con honestidad, transparencia y coherencia.",
                  "Rechazar y denunciar prácticas indebidas.",
                ],
              },
              {
                title: "g. Vocación de servicio",
                points: [
                  "Atender con empatía y respeto a los usuarios.",
                  "Brindar soluciones humanizadas a sus necesidades.",
                ],
              },
            ].map(({ title, points }) => (
              <div key={title}>
                <h3 className="font-semibold text-lg mb-1">{title}</h3>
                <ul className="list-disc ml-6 space-y-1 text-justify">
                  {points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </Section>

          {/* 3. Aplicabilidad */}
          <Section title="3. Aplicabilidad y Alcance">
            Este código aplica a todo el personal de CIA Viacol S.A.S., incluyendo directivos,
            colaboradores, contratistas y aliados. Su cumplimiento es obligatorio y forma parte del
            desempeño laboral y del Sistema de Gestión de Calidad.
          </Section>

          {/* 4. Mecanismos */}
          <Section title="4. Mecanismos de Seguimiento y Evaluación">
            <ul className="list-disc ml-6 space-y-1 text-justify">
              <li>Socialización del código en procesos de inducción y capacitación anual.</li>
              <li>Inclusión como criterio de evaluación en procesos de desempeño.</li>
              <li>Revisión periódica por el Comité de Calidad o Dirección General.</li>
            </ul>
          </Section>
        </div>
      </section>
    </main>
  )
}

function Section({
  title,
  children,
  isList = false,
}: {
  title: string
  children: React.ReactNode
  isList?: boolean
}) {
  return (
    <div className="bg-[#fef9e5] dark:bg-[#1f1f1f] border-l-4 border-[#F2C92F] p-6 rounded-md shadow-sm">
      <h2 className="text-2xl font-semibold mb-3">{title}</h2>
      {isList ? <div className="space-y-6">{children}</div> : <p className="text-justify">{children}</p>}
    </div>
  )
}
