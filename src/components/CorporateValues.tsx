import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ScrollToTop } from "./ScrollToTop";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function CorporateValues() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <main className="container px-4 py-10 space-y-8 max-w-5xl mx-auto">
        {/* Botón Volver */}
        <button
        onClick={() => navigate(-1)}
        className="flex items-center text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition font-medium"
        >
        <ArrowLeft className="mr-2" size={20} />
        Volver
        </button>

        {/* Título */}
        <h1 className="text-3xl font-bold text-center text-[#F2C92F] drop-shadow-md">
          Valores Corporativos
        </h1>

        {/* Lista de valores */}
        <div className="grid gap-6 md:grid-cols-2">
          {values.map((value, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all"
            >
              <h2 className="text-xl font-semibold mb-2 text-[#F2C92F]">
                {value.title}
              </h2>
              <p className="text-gray-800 text-justify">{value.description}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

// ✅ Lista de valores
const values = [
  {
    title: "Respeto",
    description:
      "Reconocemos la dignidad de cada persona, promovemos un trato justo, equitativo y humano hacia nuestros usuarios, colaboradores y aliados. Valoramos la diversidad y fomentamos ambientes de formación empáticos e inclusivos.",
  },
  {
    title: "Lealtad",
    description:
      "Actuamos con fidelidad hacia nuestra misión institucional, cumpliendo con responsabilidad los compromisos adquiridos con nuestros usuarios, el equipo de trabajo y las entidades que nos regulan.",
  },
  {
    title: "Confidencialidad",
    description:
      "Protegemos la información personal y organizacional con estricta reserva, garantizando el manejo ético y seguro de los datos conforme a la ley y a los principios de transparencia y confianza.",
  },
  {
    title: "Compromiso con la calidad",
    description:
      "Nos esforzamos por ofrecer servicios pedagógicos eficientes, innovadores y alineados con los más altos estándares técnicos y normativos, promoviendo la mejora continua y la excelencia.",
  },
  {
    title: "Responsabilidad social",
    description:
      "Contribuimos activamente a la transformación positiva de la cultura vial en Colombia, educando para la vida y fomentando comportamientos ciudadanos seguros y conscientes.",
  },
  {
    title: "Integridad",
    description:
      "Actuamos con honestidad, ética y coherencia en todas nuestras acciones, fortaleciendo la confianza de quienes interactúan con nuestra organización.",
  },
  {
    title: "Vocación de servicio",
    description:
      "Escuchamos y atendemos con disposición y calidez a nuestros usuarios, brindando soluciones oportunas que aporten a su desarrollo y bienestar.",
  },
];
