import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import viacolLogo from "@/assets/png/viacol-logo.png";
import logoViacol from "@/assets/png/logo-viacol.png";
import { MissionVisionModal } from "@/components/modals/MissionVisionModal";
import { StrategicFocusModal } from "@/components/modals/StrategicFocusModal";

export const HeroCards = () => {
  return (
    <div className="relative flex flex-col gap-6 items-center lg:block lg:w-[700px] lg:h-[500px]">
      {/* Misión y Visión */}
      <MissionVisionModal
        trigger={
          <Card className="w-[90%] max-w-[340px] lg:absolute lg:w-[340px] lg:-top-[32px] lg:right-[325px] drop-shadow-xl shadow-black/10 dark:shadow-white/10 cursor-pointer hover:scale-[1.02] transition-transform duration-200">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <img
                src={viacolLogo}
                alt="Logo Viacol"
                className="w-12 h-12 object-contain"
              />
              <div className="flex flex-col">
                <CardTitle className="text-lg">Misión y visión</CardTitle>
                <CardDescription>VIACOL S.A.S.</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="text-sm leading-snug">
              Formamos ciudadanos responsables, comprometidos con la movilidad segura.
            </CardContent>
          </Card>
        }
      />

      {/* Código de ética */}
      <Card className="w-[90%] max-w-[320px] lg:absolute lg:right-[20px] lg:-top-[8px] flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="mt-2 flex justify-center items-center pb-2">
          <CardTitle className="text-center">
            Código de ética y comportamiento organizacional
          </CardTitle>
          <CardDescription className="font-normal text-[#F2C92F]">
            CIA Viacol S.A.S.
          </CardDescription>
        </CardHeader>

        <CardContent className="text-center pb-2">
          <p>
            1. Propósito del Código<br />
            2. Compromisos Éticos del Personal<br />
            3. Aplicabilidad y Alcance<br />
            4. Mecanismos de Seguimiento y Evaluación
          </p>
        </CardContent>

        <CardFooter className="w-full flex justify-center">
          <Link to="/codes-of-ethics" className="w-full max-w-[200px]">
            <Button className="w-full">Visualizar códigos</Button>
          </Link>
        </CardFooter>
      </Card>

      {/* Valores corporativos */}
      <Card className="w-[90%] max-w-[320px] lg:absolute lg:top-[128px] lg:left-[50px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader>
          <CardTitle className="flex item-center justify-between">
            Valores corporativos
          </CardTitle>
          <CardDescription>
            Promovemos una cultura basada en la inteligencia para construir una movilidad más consciente.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Link to="/corporate-values">
            <Button className="w-full -mb-3 -mt-3">Ver listado de valores</Button>
          </Link>
        </CardContent>

        <hr className="w-4/5 m-auto mb-1" />

        <CardFooter className="flex">
          <div className="space-y-1">
            {[
              "Respeto",
              "Lealtad",
              "Confidencialidad",
              "Compromiso con la calidad",
              "Responsabilidad social",
              "Integridad",
              "Vocación de servicio",
            ].map((benefit) => (
              <span key={benefit} className="flex">
                <Check className="text-[#F2C92F]" />
                <h3 className="ml-2">{benefit}</h3>
              </span>
            ))}
          </div>
        </CardFooter>
      </Card>

      {/* Enfoque estratégico */}
      <StrategicFocusModal
        trigger={
          <Card className="w-[90%] max-w-[340px] lg:absolute lg:-right-[1px] lg:bottom-[3px] drop-shadow-xl shadow-black/10 dark:shadow-white/10 cursor-pointer hover:scale-[1.02] transition-transform duration-200">
            <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
              <div className="">
                <img
                  src={logoViacol}
                  alt="Logo Viacol"
                  className="w-25 h-25 object-contain"
                />
              </div>
              <div>
                <CardTitle className="-mt-3 text-md">
                  Enfoque estratégico y política de calidad
                </CardTitle>
                <CardDescription className="text-sm mt-3">
                  Promovemos una formación vial consciente en la transformación ciudadana.
                </CardDescription>
              </div>
            </CardHeader>
          </Card>
        }
      />
    </div>
  );
};
