// src/Contacto.jsx

import React from "react";

export default function Contacto() {
  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-white dark:bg-[#242424] text-gray-900 dark:text-gray-100">
      {/* Contenido del componente Contacto */}
      <div className="w-full max-w-4xl p-12 mx-4 mt-16 bg-white dark:bg-[#1a1a1a] rounded-xl shadow-md">
        <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-6">
          Contacto
        </h1>
        <p className="text-lg text-center text-gray-700 dark:text-gray-300">
          ignacio.desarrollador@gmail.com y alonso.desarrollador@gmail.com.
        </p>
      </div>
    </div>
  );
}
