import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/png/viacol-logo.png";
import simitLogo from "@/assets/png/simit.png";
import mintransporteLogo from "@/assets/png/mintransporte.png";
import runtLogo from "@/assets/png/runt.png";
import InstitutionalHeader from "@/components/ui/institutionalHeader";
import AnimatedSlogan from "@/components/ui/animatedSlogan";

const Landing: React.FC = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col relative overflow-hidden">
      <div className="hidden md:block">
        <InstitutionalHeader />
      </div>

      {/* Contenido principal */}
      <div className="flex-grow flex items-center justify-center px-6 py-16">
        <div className="w-full px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-20">
          <div className="md:w-1/2 text-center md:text-left z-10">
            <AnimatedSlogan />
            <p className="text-gray-800 text-lg mb-6 leading-relaxed">
              Somos una entidad dedicada a formar ciudadanos responsables y reducir la accidentalidad vial. Gracias a su talento, la innovación y la transparencia, somos un referente en educación vial. Juntos, conducimos el futuro con inteligencia.
            </p>
            <button
              onClick={handleLoginClick}
              className="bg-[#F2C92F] hover:bg-yellow-500 text-white font-bold py-3 px-7 text-lg rounded-lg transition duration-300"
            >
              Iniciar Sesión
            </button>
          </div>

          <div className="md:w-1/2 flex justify-center md:justify-end z-10">
            <img
              src={logo}
              alt="Logo VIACOL"
              className="w-[28rem] max-w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Logos visibles solo en móvil */}
      <div className="md:hidden w-full flex flex-col items-center gap-2 pb-5 px-4 z-10">
        <span className="text-sm text-gray-600 text-center">
          Avalados y vigilados por:
        </span>
        <div className="flex gap-4 justify-center flex-wrap">
          <img src={runtLogo} alt="RUNT" className="h-6 object-contain" />
          <img src={mintransporteLogo} alt="MinTransporte" className="h-6 object-contain" />
          <img src={simitLogo} alt="SIMIT" className="h-6 object-contain" />
        </div>
      </div>

      {/* SVG decorativo inferior */}
      <div className="absolute bottom-0 right-0 w-[250px] h-[200px] pointer-events-none select-none z-0">
        <img
          src="/src/assets/svg/decorativo-inferior.svg"
          alt="Decoración inferior"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Landing;
