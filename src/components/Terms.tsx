import React from "react";
// import { useNavigate } from "react-router-dom";
// import { ArrowLeft } from "lucide-react";
import curvaSuperior from "@/assets/svg/curva-superior.svg";
import curvaInferior from "@/assets/svg/curva-inferior.svg";

const Terms: React.FC = () => {
  // const navigate = useNavigate();

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
          Términos y Condiciones
        </h1>

        <p className="mb-4 text-justify leading-relaxed">
          Bienvenido a VIACOL. Al acceder a nuestros servicios, usted acepta los siguientes términos y condiciones. Es importante que lea cuidadosamente esta información antes de utilizar nuestro sitio web o participar en cualquier programa ofrecido.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">1. Aceptación de términos</h2>
        <p className="mb-4 text-justify">
          Al utilizar este sitio, usted manifiesta su conformidad con los presentes términos y condiciones. Si no está de acuerdo, le solicitamos abstenerse de utilizar nuestros servicios.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">2. Uso adecuado</h2>
        <p className="mb-4 text-justify">
          Usted se compromete a utilizar este sitio únicamente con fines legales y a no realizar ninguna acción que pueda dañar, sobrecargar o afectar el correcto funcionamiento de nuestra plataforma.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">3. Protección de datos</h2>
        <p className="mb-4 text-justify">
          La información personal que recopilamos está protegida bajo los estándares establecidos por la Ley de Protección de Datos Personales. Nos comprometemos a no compartir su información con terceros sin su consentimiento.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">4. Propiedad intelectual</h2>
        <p className="mb-4 text-justify">
          Todos los contenidos, marcas, logos y materiales presentes en este sitio son propiedad de VIACOL y están protegidos por las leyes de propiedad intelectual. Está prohibido reproducir o distribuir dichos contenidos sin autorización previa.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">5. Cambios a los términos</h2>
        <p className="mb-4 text-justify">
          VIACOL se reserva el derecho de modificar estos términos en cualquier momento. Las modificaciones serán comunicadas oportunamente a través de nuestros canales oficiales.
        </p>

        <p className="mt-8 text-sm text-center text-gray-500 dark:text-gray-400">
          Última actualización: Julio 2025
        </p>
      </div>
    </div>
  );
};

export default Terms;
