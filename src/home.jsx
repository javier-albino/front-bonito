// src/Home.jsx

import React from "react";

export default function Home() {
  return (
    <div className="bg-customDark min-h-screen text-gray-100">
      {/* Barra de navegación fija */}
      <nav className="fixed top-0 left-0 right-0 bg-gray-900 text-white shadow-md p-4 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className="text-xl font-bold">
            Mi Aplicación De Cobayas
          </a>
          <div className="flex space-x-4">
            <a href="/home" className="text-gray-300 hover:text-white">
              Inicio
            </a>
            <a href="/sobre-nosotros" className="text-gray-300 hover:text-white">
              Sobre Nosotros
            </a>
            <a href="/contacto" className="text-gray-300 hover:text-white">
              Contacto
            </a>
          </div>
        </div>
      </nav>

      {/* Contenido del componente Home */}
      <div className="flex items-center justify-center min-h-screen pt-32">
        <div className="text-center p-8 bg-gray-800 rounded-lg shadow-md">
          <h1 className="text-4xl font-bold text-white">
            Bienvenido a la Página de Inicio de Las Cobayas
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Este es el componente de inicio donde puedes mostrar información importante sobre Cobayas.
          </p>
        </div>
      </div>
    </div>
  );
}
