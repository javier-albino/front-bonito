// src/Home.jsx

import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-blue-50 min-h-screen">
      {/* Barra de navegación fija */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md p-4 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-blue-700">
            Mi Aplicación De Cobayas
          </Link>
          <div className="flex space-x-4">
            <Link to="/home" className="text-gray-700 hover:text-blue-700">
              Inicio
            </Link>
            <Link to="/sobre-nosotros" className="text-gray-700 hover:text-blue-700">
              Sobre Nosotros
            </Link>
            <Link to="/contacto" className="text-gray-700 hover:text-blue-700">
              Contacto
            </Link>
          </div>
        </div>
      </nav>

      {/* Contenido del componente Home */}
      <div className="flex items-center justify-center min-h-screen pt-32">
        <div className="text-center p-8 bg-white rounded shadow-md">
          <h1 className="text-4xl font-bold text-blue-700">
            Bienvenido a la Página de Inicio de Las Cobayas
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Este es el componente de inicio donde puedes mostrar información importante sobre Cobayas.
          </p>
        </div>
      </div>
    </div>
  );
}
