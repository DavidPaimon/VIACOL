import React from "react";
// import { useNavigate } from "react-router-dom";
// import { ArrowLeft } from "lucide-react";
import curvaSuperior from "@/assets/svg/curva-superior.svg";
import curvaInferior from "@/assets/svg/curva-inferior.svg";

const PrivacyPolicy: React.FC = () => {
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
          Política de Privacidad
        </h1>

        <p className="mb-4 text-justify leading-relaxed">
          En VIACOL nos tomamos en serio la privacidad de sus datos personales. Esta política describe cómo recopilamos, usamos y protegemos su información.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">1. Recopilación de datos</h2>
        <p className="mb-4 text-justify">
          Podemos recopilar datos como nombre, correo electrónico, teléfono y otros detalles relevantes a través de formularios o interacciones en el sitio.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">2. Uso de la información</h2>
        <p className="mb-4 text-justify">
          Utilizamos sus datos únicamente para fines administrativos, comerciales o de mejora del servicio, y no los compartimos con terceros sin su consentimiento.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">3. Seguridad de los datos</h2>
        <p className="mb-4 text-justify">
          Implementamos medidas técnicas y organizativas para proteger su información contra accesos no autorizados, pérdidas o modificaciones.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">4. Derechos del usuario</h2>
        <p className="mb-4 text-justify">
          Usted tiene derecho a acceder, actualizar o eliminar sus datos personales en cualquier momento, conforme a la legislación vigente.
        </p>

        <p className="mt-8 text-sm text-center text-gray-500 dark:text-gray-400">
          Última actualización: Julio 2025
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
