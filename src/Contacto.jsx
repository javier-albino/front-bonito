// src/Contacto.jsx

import React from "react";

export default function Contacto() {
  return (
    <div className="bg-customDark min-h-screen text-gray-100">
      {/* Contenido del componente Contacto */}
      <div className="flex items-center justify-center min-h-screen pt-32">
        <div className="text-center p-8 bg-gray-800 rounded-lg shadow-md">
          <h1 className="text-4xl font-bold text-white">
            Contacto
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            ignacio.desarrollador@gmail.com y alonso.desarrollador@gmail.com.
          </p>
        </div>
      </div>
    </div>
  );
}
