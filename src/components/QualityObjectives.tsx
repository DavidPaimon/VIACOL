import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Card } from "@/components/ui/card";

export const QualityObjectives = () => {
  const navigate = useNavigate();

  const data = [
    {
      objetivo: "Garantizar la satisfacción del usuario mediante un servicio pedagógico eficaz y humanizado.",
      indicador: "Nivel de satisfacción del usuario (encuestas)",
      meta: "≥ 90%",
      responsable: "Coordinador Académico / Coordinador de Calidad",
      frecuencia: "Trimestral",
      medio: "Resultados de encuestas de satisfacción, análisis de PQRS"
    },
    {
      objetivo: "Asegurar el cumplimiento del 100% de los requisitos legales y reglamentarios aplicables.",
      indicador: "Porcentaje de cumplimiento normativo",
      meta: "100%",
      responsable: "Dirección General / Área Jurídica",
      frecuencia: "Semestral",
      medio: "Listado de requisitos legales actualizado, actas de revisión legal, informes de auditoría"
    },
    {
      objetivo: "Mejorar la eficacia de los procesos educativos y administrativos.",
      indicador: "Número de mejoras implementadas / reducción de reprocesos",
      meta: "≥ 10% de mejora anual",
      responsable: "Coordinador de Calidad / Direcciones de área",
      frecuencia: "Semestral",
      medio: "Informes de auditoría interna, planes de mejora, análisis de indicadores"
    },
    {
      objetivo: "Capacitar al 100% del personal en temas clave para la prestación del servicio.",
      indicador: "% de personal capacitado anualmente",
      meta: "100%",
      responsable: "Coordinador de Talento Humano",
      frecuencia: "Anual",
      medio: "Plan de formación, registros de asistencia, evaluaciones"
    },
    {
      objetivo: "Reducir al mínimo (0%) las no conformidades significativas detectadas.",
      indicador: "No conformidades significativas detectadas en auditoría",
      meta: "0",
      responsable: "Coordinador de Calidad",
      frecuencia: "Semestral",
      medio: "Informes de auditoría interna/externa, planes de acción"
    },
    {
      objetivo: "Desarrollar e implementar nuevas estrategias de mejora del servicio.",
      indicador: "Número de estrategias implementadas por año",
      meta: "≥ 1 anual",
      responsable: "Dirección General / Área de Innovación",
      frecuencia: "Anual",
      medio: "Plan estratégico, informes de gestión, actas de comité de calidad"
    }
  ];

  return (
    <>
      <Navbar />
      <section className="container py-10">
        <div className="mb-6">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition font-medium"
          >
            <ArrowLeft className="mr-2" size={20} />
            Volver
          </button>
        </div>

        <h1 className="text-3xl font-bold mb-6 text-center">Objetivos de Calidad</h1>

        <div className="overflow-x-auto">
          <Card className="w-full overflow-x-auto">
            <table className="min-w-full text-sm text-left border-collapse">
              <thead className="bg-[#F2C92F] text-black dark:bg-yellow-600 dark:text-white">
                <tr>
                  <th className="p-3 border">Objetivo de Calidad</th>
                  <th className="p-3 border">Indicador</th>
                  <th className="p-3 border">Meta</th>
                  <th className="p-3 border">Responsable</th>
                  <th className="p-3 border">Frecuencia</th>
                  <th className="p-3 border">Medio de Verificación</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, i) => (
                  <tr key={i} className="odd:bg-white even:bg-gray-100 dark:odd:bg-gray-800 dark:even:bg-gray-900">
                    <td className="p-3 border align-top">{item.objetivo}</td>
                    <td className="p-3 border align-top">{item.indicador}</td>
                    <td className="p-3 border align-top">{item.meta}</td>
                    <td className="p-3 border align-top">{item.responsable}</td>
                    <td className="p-3 border align-top">{item.frecuencia}</td>
                    <td className="p-3 border align-top">{item.medio}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </div>
      </section>
    </>
  );
};
