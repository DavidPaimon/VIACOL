import React from "react";
// import { useNavigate } from "react-router-dom";
// import { ArrowLeft } from "lucide-react";
import curvaSuperior from "@/assets/svg/curva-superior.svg";
import curvaInferior from "@/assets/svg/curva-inferior.svg";

const TermsOfUse: React.FC = () => {
//   const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-white dark:bg-black px-4 py-12 md:py-20 lg:px-20 text-black dark:text-white overflow-hidden">
      <img
        src={curvaSuperior}
        alt="Decoración superior"
        className="absolute top-0 right-0 w-1/2 max-w-[500px] z-0 opacity-90"
      />
      <img
        src={curvaInferior}
        alt="Decoración inferior"
        className="absolute bottom-0 left-0 w-full max-h-[280px] object-cover z-0 opacity-90"
      />

      <div className="relative z-10 max-w-4xl mx-auto bg-white dark:bg-zinc-900 bg-opacity-90 dark:bg-opacity-90 p-6 md:p-10 rounded shadow-lg">
        {/* <button
          onClick={() => navigate(-1)}
          className="flex items-center mb-6 text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition font-medium"
        >
          <ArrowLeft className="mr-2" size={20} />
          Volver
        </button> */}

        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Términos de Uso
        </h1>

        <p className="mb-4 text-justify leading-relaxed">
          Estos Términos de Uso rigen su acceso y uso del sitio web de VIACOL. Al navegar o interactuar con nuestra plataforma, usted acepta estas condiciones.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">1. Responsabilidad del usuario</h2>
        <p className="mb-4 text-justify">
          Usted se compromete a utilizar el sitio web de manera adecuada y legal. Cualquier uso indebido, como la manipulación, acceso no autorizado o ataques, será penalizado conforme a la ley.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">2. Acceso y disponibilidad</h2>
        <p className="mb-4 text-justify">
          El acceso a nuestro sitio puede estar sujeto a interrupciones por mantenimiento o causas técnicas. VIACOL no se hace responsable por cualquier indisponibilidad temporal del servicio.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">3. Cambios al contenido</h2>
        <p className="mb-4 text-justify">
          Nos reservamos el derecho de modificar o eliminar cualquier contenido del sitio sin previo aviso.
        </p>

        <p className="mt-8 text-sm text-center text-gray-500 dark:text-gray-400">
          Última actualización: Julio 2025
        </p>
      </div>
    </div>
  );
};

export default TermsOfUse;
