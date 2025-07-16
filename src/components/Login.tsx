import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/lib/auth-context";
import { isLoginFormValid } from "@/lib/form-validation";
import logo from "@/assets/png/viacol-logo.png";
import curvaSuperior from "@/assets/svg/curva-superior.svg";
import curvaInferior from "@/assets/svg/curva-inferior.svg";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { PiSignInFill } from "react-icons/pi";

const MAX_ATTEMPTS = 5;
const BLOCK_TIME_MS = 1 * 60 * 60 * 1000;

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isBlocked, setIsBlocked] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const blockUntil = localStorage.getItem("blockUntil");
    if (blockUntil && Date.now() < Number(blockUntil)) {
      setIsBlocked(true);
    } else {
      localStorage.removeItem("blockUntil");
      localStorage.removeItem("attempts");
      setIsBlocked(false);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isBlocked) {
      setError("Demasiados intentos fallidos. Acceso bloqueado por 1 hora. Contacte al soporte.");
      return;
    }

    const success = login(username, password);

    if (success) {
      localStorage.removeItem("attempts");
      localStorage.removeItem("blockUntil");
      navigate("/home");
    } else {
      const currentAttempts = Number(localStorage.getItem("attempts")) || 0;
      const newAttempts = currentAttempts + 1;

      if (newAttempts >= MAX_ATTEMPTS) {
        const blockUntil = Date.now() + BLOCK_TIME_MS;
        localStorage.setItem("blockUntil", blockUntil.toString());
        setIsBlocked(true);
        setError("Demasiados intentos fallidos. Acceso bloqueado por 1 hora. Contacte al soporte.");
      } else {
        localStorage.setItem("attempts", newAttempts.toString());
        setError("Credenciales inválidas. Intente nuevamente.");
      }
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center bg-white overflow-hidden">
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

      <form
        onSubmit={handleSubmit}
        className="relative bg-white p-8 border rounded shadow-md w-full max-w-sm z-10"
      >
        <div className="flex justify-center mb-6">
          <img src={logo} alt="VIACOL Logo" className="h-16 w-auto" />
        </div>

        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

        <div className="mb-4">
          <label className="block mb-1 font-semibold text-black">Usuario</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded text-black"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            disabled={isBlocked}
          />
        </div>

        <div className="mb-4 relative">
          <label className="block mb-1 font-semibold text-black">Contraseña</label>
          <input
            type={showPassword ? "text" : "password"}
            className="w-full px-3 py-2 border rounded pr-10 text-black"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isBlocked}
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-[42px] cursor-pointer text-black"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        {/* Checkbox de términos */}
        <div className="flex items-center justify-center mb-4">
          <input
            type="checkbox"
            id="terms"
            checked={acceptTerms}
            onChange={() => setAcceptTerms(!acceptTerms)}
            className="mr-2"
          />
          <label htmlFor="terms" className="text-sm text-black">
            Acepto los términos y condiciones
          </label>
        </div>

        {/* Botón de enviar */}
        <button
          type="submit"
          disabled={!isLoginFormValid(username, password, acceptTerms) || isBlocked}
          className={`w-full flex items-center justify-center text-black font-semibold py-2 rounded transition duration-300 shadow-md
            ${
              isBlocked || !isLoginFormValid(username, password, acceptTerms)
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#F2C92F] hover:bg-[#e0b922] hover:shadow-lg"
            }`}
        >
          Entrar
          <PiSignInFill className="ml-2 mt-1 text-lg" />
        </button>

        {/* Enlace a términos */}
        <p className="text-sm text-center mt-4">
          <a
            href="/terms-and-conditions"
            className="text-blue-600 underline hover:text-blue-800 transition"
          >
            Ver términos y condiciones
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
