// src/SobreNosotros.jsx

import React from "react";

export default function SobreNosotros() {
  return (
    <div className="bg-gray-100 dark:bg-customDark min-h-screen text-gray-900 dark:text-gray-100">
      {/* Contenido del componente Sobre Nosotros */}
      <div className="flex items-center justify-center min-h-screen pt-32">
        <div className="text-center p-12 bg-white dark:bg-gray-800 rounded-xl shadow-md">
          <h1 className="text-4xl font-bold">
            Sobre Nosotros
          </h1>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
            Somos las cobayas.
          </p>
        </div>
      </div>
    </div>
  );
}
