import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { buttonVariants } from "./ui/button";
import { Menu } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { FaEnvelope } from "react-icons/fa";

import curvaDecorativa from "@/assets/svg/curva-decorativa.svg";
import logo from "@/assets/png/viacol-logo.png";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  { href: "#features", label: "Nuestros valores" },
  { href: "#testimonials", label: "Reglamento interno" },
  { href: "#pricing", label: "Nuestros códigos de ética" },
  { href: "#faq", label: "Cuadro de lo que sea eso" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b dark:border-b-slate-700 dark:bg-background overflow-hidden">
      {/* SVG decorativo como fondo del navbar */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-90">
        <img
          src={curvaDecorativa}
          alt="Decoración"
          className="w-full h-full object-cover"
        />
      </div>

      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-20 px-4 w-screen flex justify-between items-center">
          {/* Logo de VIACOL */}
          <NavigationMenuItem className="flex items-center">
            <a href="/home" className="flex items-center">
              <img
                src={logo}
                alt="VIACOL Logo"
                className="h-14 w-auto object-contain"
              />
            </a>
          </NavigationMenuItem>

          {/* Enlaces desktop */}
          <nav className="hidden md:flex gap-2">
            {routeList.map((route) => (
              <a
                key={route.label}
                href={route.href}
                className={`text-[17px] ${buttonVariants({
                  variant: "ghost",
                })}`}
              >
                {route.label}
              </a>
            ))}
          </nav>

          {/* Acciones (escritorio) */}
          <div className="hidden md:flex gap-2 items-center">
            <a
              href="#contacto"
              className={`border ${buttonVariants({ variant: "secondary" })}`}
            >
              <FaEnvelope className="mr-2 mt-0.5" />
              Contáctanos
            </a>
            <ModeToggle />
          </div>

          {/* Mobile: iconos y menú hamburguesa */}
          <span className="flex md:hidden items-center">
            <ModeToggle />

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2">
                <Menu
                  className="flex md:hidden h-5 w-5"
                  onClick={() => setIsOpen(true)}
                />
              </SheetTrigger>

              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl py-2">
                    VIACOL
                  </SheetTitle>
                </SheetHeader>

                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  {routeList.map(({ href, label }) => (
                    <a
                      key={label}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      {label}
                    </a>
                  ))}

                  <a
                    href="#contacto"
                    onClick={() => setIsOpen(false)}
                    className={`w-[150px] border ${buttonVariants({
                      variant: "secondary",
                    })}`}
                  >
                    <FaEnvelope className="mr-2 mt-0.5" />
                    Contáctanos
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </span>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
