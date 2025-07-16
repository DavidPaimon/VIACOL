import React from "react";
import { Typewriter } from "react-simple-typewriter";

const AnimatedSlogan: React.FC = () => {
  return (
    <h1 className="text-4xl font-extrabold text-black mb-4 leading-tight">
      Movilidad con{" "}
      <span className="text-[#F2C92F]">
        <Typewriter
          words={[
            "inteligencia",
            "responsabilidad",
            "seguridad",
            "conciencia",
            "respeto",
          ]}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </span>
    </h1>
  );
};

export default AnimatedSlogan;
