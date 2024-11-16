// src/SobreNosotros.jsx
import React from "react";

export default function SobreNosotros() {
  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-white dark:bg-[#242424] text-gray-900 dark:text-gray-100">
      {/* Contenido del componente Sobre Nosotros */}
      <div className="w-full max-w-3xl p-20 mx-4 bg-white dark:bg-[#1a1a1a] rounded-lg shadow-md">
        <h1 className="text-5xl font-bold text-center text-gray-900 dark:text-white mb-6">
          Sobre Nosotros
        </h1>
        <p className="text-xl text-center text-gray-700 dark:text-gray-300">
          Somos las cobayas.
        </p>
      </div>
    </div>
  );
}
