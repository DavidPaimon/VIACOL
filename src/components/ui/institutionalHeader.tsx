import React from "react";
import logo from "@/assets/png/viacol-logo.png";
import runt from "@/assets/png/runt.png";
import mintransporte from "@/assets/png/mintransporte.png";
import simit from "@/assets/png/simit.png";
import curvaDecorativa from "@/assets/svg/curva-decorativa.svg";

const InstitutionalHeader: React.FC = () => {
  return (
    <div className="relative w-full bg-white py-6 shadow-sm z-10 overflow-hidden">

      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <img
          src={curvaDecorativa}
          alt="Decoración amarilla"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Contenido */}
      <div className="w-full px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo VIACOL */}
        <div className="flex items-center gap-4">
          <img src={logo} alt="VIACOL Logo" className="h-20 w-auto" />
        </div>

        {/* Logos de entidades: visibles solo en md y superior */}
        <div className="hidden md:flex flex-col md:flex-row items-center md:items-end gap-2 text-right">
          <span className="text-sm font-semibold text-gray-700 mb-1 md:mb-0">
            Avalados y vigilados por:
          </span>
          <div className="flex items-center gap-6 flex-wrap">
            <img src={runt} alt="RUNT" className="h-16 md:h-20" />
            <img src={mintransporte} alt="MinTransporte" className="h-16 md:h-20" />
            <img src={simit} alt="SIMIT" className="h-16 md:h-20" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstitutionalHeader;
