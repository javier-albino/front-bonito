// src/App.jsx

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home";
import SobreNosotros from "./SobreNosotros";
import Contacto from "./Contacto";
import Login from "./login";
import { Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="bg-customDark min-h-screen text-gray-100">
      <Router>
        <Routes>
          {/* Página de Login sin barra de navegación */}
          <Route path="/" element={<Login />} />

          {/* Rutas con barra de navegación */}
          <Route path="/home" element={
            <>
              <NavBar />
              <Home />
            </>
          } />
          <Route path="/sobre-nosotros" element={
            <>
              <NavBar />
              <SobreNosotros />
            </>
          } />
          <Route path="/contacto" element={
            <>
              <NavBar />
              <Contacto />
            </>
          } />
        </Routes>
      </Router>
    </div>
  );
}

// Componente de Barra de Navegación
function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-900 text-white shadow-md p-4 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Mi Aplicación De Cobayas
        </Link>
        <div className="flex space-x-4">
          <Link to="/home" className="text-gray-300 hover:text-white">
            Inicio
          </Link>
          <Link to="/sobre-nosotros" className="text-gray-300 hover:text-white">
            Sobre Nosotros
          </Link>
          <Link to="/contacto" className="text-gray-300 hover:text-white">
            Contacto
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default App;
