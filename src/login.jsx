// src/Login.jsx

import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Aquí podrías agregar la lógica para autenticar al usuario
    navigate("/home"); // Redirige al componente Home después del login
  };

  return (
    <div className="flex items-center justify-center h-screen bg-customDark text-gray-100">
      <div className="w-full max-w-md p-12 space-y-8 bg-gray-800 rounded-xl shadow-2xl">
        <h2 className="text-3xl font-bold text-center text-white">
          Iniciar sesión
        </h2>
        <form className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-lg font-medium text-gray-200"
            >
              Correo electrónico
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full px-4 py-3 mt-1 border rounded-md shadow-sm border-gray-600 focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-gray-900 text-gray-100"
              placeholder="ejemplo@correo.com"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-lg font-medium text-gray-200"
            >
              Contraseña
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="w-full px-4 py-3 mt-1 border rounded-md shadow-sm border-gray-600 focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-gray-900 text-gray-100"
              placeholder="Contraseña"
            />
          </div>

          <div>
            <button
              type="button"
              onClick={handleLogin}
              className="w-full px-6 py-3 text-lg font-medium text-white bg-blue-500 border border-transparent rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
            >
              Iniciar sesión
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
