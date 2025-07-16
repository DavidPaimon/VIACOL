import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/png/viacol-logo.png";
import InstitutionalHeader from "@/components/ui/institutionalHeader";
import AnimatedSlogan from "@/components/ui/animatedSlogan";

const Landing: React.FC = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col relative overflow-hidden">
      <InstitutionalHeader />

      <div className="flex-grow flex items-center justify-center px-6 py-16">
        <div className="w-full px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-20">
          <div className="md:w-1/2 text-center md:text-left">
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

          <div className="md:w-1/2 flex justify-center md:justify-end">
            <img
              src={logo}
              alt="Logo VIACOL"
              className="w-[28rem] max-w-full h-auto"
            />
          </div>
        </div>
      </div>

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
