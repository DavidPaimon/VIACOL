import React from "react";
import curvaDecorativa from "@/assets/svg/curva-decorativa.svg";

const SimpleHeader: React.FC = () => {
  return (
    <div className="relative w-full h-20 bg-white shadow-sm overflow-hidden z-0">
      {/* Fondo decorativo con SVG */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <img
          src={curvaDecorativa}
          alt="Fondo decorativo"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default SimpleHeader;
