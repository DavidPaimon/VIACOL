import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
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
import logo from "@/assets/png/viacol-logo.png";

interface RouteProps {
  label: string;
  href: string;
}

const routeList: RouteProps[] = [
  { href: "/corporate-values", label: "Nuestros valores" },
  {
    href: "/SG-SST-DIR-02%20REGLAMENTO%20INTERNO%20DE%20TRABAJO.pdf",
    label: "Reglamento interno de trabajo",
  },
  { href: "/codes-of-ethics", label: "Nuestros códigos de ética" },
  { href: "/quality-objectives", label: "Objetivos de Calidad" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (href: string) => {
    if (href.endsWith(".pdf")) {
      window.open(href, "_blank");
    } else if (href.startsWith("/")) {
      if (location.pathname === href) return;
      navigate(href);
    } else {
      window.location.hash = href;
    }
    setIsOpen(false);
  };

  const handleLogoClick = () => {
    if (location.pathname === "/home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/home", { replace: true });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#F2C92F] text-black">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-20 px-4 w-screen flex justify-between items-center">
          <NavigationMenuItem
            className="flex items-center cursor-pointer"
            onClick={handleLogoClick}
          >
            <img
              src={logo}
              alt="VIACOL Logo"
              className="h-14 w-auto object-contain"
            />
          </NavigationMenuItem>

          {/* Links desktop */}
          <nav className="hidden md:flex gap-2">
            {routeList.map((route) => (
              <button
                key={route.label}
                onClick={() => handleNavigate(route.href)}
                className={`text-[17px] ${buttonVariants({ variant: "ghost" })}`}
              >
                {route.label}
              </button>
            ))}
          </nav>

          {/* Acciones escritorio */}
          <div className="hidden md:flex gap-2 items-center">
            <a
              href="#contacto"
              className={`border border-black ${buttonVariants({
                variant: "secondary",
              })}`}
            >
              <FaEnvelope className="mr-2 mt-0.5" />
              Contáctanos
            </a>
            <ModeToggle />
          </div>

          {/* Mobile */}
          <span className="flex md:hidden items-center gap-2">
            <ModeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="p-2 rounded-md">
                <Menu className="h-5 w-5 text-black" />
              </SheetTrigger>
              <SheetContent side="left" className="bg-[#F2C92F] text-black">
                <SheetHeader>
                  <SheetTitle className="py-4">
                    <img
                      src={logo}
                      alt="VIACOL Logo"
                      className="h-14 w-auto mx-auto object-contain"
                      onClick={handleLogoClick}
                    />
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  {routeList.map((route) => (
                    <button
                      key={route.label}
                      onClick={() => handleNavigate(route.href)}
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      {route.label}
                    </button>
                  ))}
                  <a
                    href="#contacto"
                    onClick={() => setIsOpen(false)}
                    className={`w-[150px] border border-black ${buttonVariants({
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
