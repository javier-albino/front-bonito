// src/login.jsx

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
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
    <div className="flex items-center justify-center w-full min-h-screen bg-white dark:bg-[#242424] text-gray-900 dark:text-gray-100">
      <div className="w-full max-w-4xl min-h-[800px] p-20 space-y-10 bg-white dark:bg-[#1a1a1a] rounded-lg shadow-md">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white">
          Iniciar sesión
        </h2>
        <form className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="block text-lg font-medium text-gray-700 dark:text-gray-300"
            >
              Correo electrónico
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full px-4 py-3 mt-2 border rounded-md shadow-sm border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
              placeholder="ejemplo@correo.com"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-lg font-medium text-gray-700 dark:text-gray-300"
            >
              Contraseña
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="w-full px-4 py-3 mt-2 border rounded-md shadow-sm border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
              placeholder="Contraseña"
            />
          </div>

          <div>
            <button
              type="button"
              onClick={handleLogin}
              className="w-full px-5 py-3 text-lg font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Iniciar sesión
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
