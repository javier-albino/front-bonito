// src/Contacto.jsx

import React from "react";

export default function Contacto() {
  return (
    <div className="bg-gray-100 dark:bg-customDark min-h-screen text-gray-900 dark:text-gray-100">
      {/* Contenido del componente Contacto */}
      <div className="flex items-center justify-center min-h-screen pt-32">
        <div className="text-center p-12 bg-white dark:bg-gray-800 rounded-xl shadow-md">
          <h1 className="text-4xl font-bold">
            Contacto
          </h1>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
            ignacio.desarrollador@gmail.com y alonso.desarrollador@gmail.com.
          </p>
        </div>
      </div>
    </div>
  );
}
