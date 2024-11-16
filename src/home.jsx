import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    // Manejar la configuración inicial del tema según el sistema operativo
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    if (mediaQuery.matches) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Escuchar los cambios de preferencia del tema
    const handleThemeChange = (e) => {
      if (e.matches) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    };

    mediaQuery.addEventListener("change", handleThemeChange);

    // Limpiar el event listener cuando el componente se desmonte
    return () => mediaQuery.removeEventListener("change", handleThemeChange);
  }, []);

  const handleLogin = () => {
    navigate("/home"); // Redirige al componente Home después del login
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-[#242424] text-gray-900 dark:text-gray-100">
 

     {/* Contenido Principal */}
      <main className="w-full max-w-4xl min-h-[600px] p-16 mt-8 bg-[#1a1a1a] rounded-xl shadow-none">
        <h1 className="text-4xl font-bold text-center text-white mb-4">
          Bienvenido a la Página de Inicio de Las Cobayas
        </h1>
        <p className="text-center text-gray-300">
          Este es el componente de inicio donde puedes mostrar información importante sobre Cobayas.
        </p>
      </main>
    </div>
  );
}
