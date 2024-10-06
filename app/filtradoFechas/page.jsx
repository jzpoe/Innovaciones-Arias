'use client'
import { useState } from "react";
import axios from "axios";
import FiltrarFecha from "@/components/FiltrarFecha";

function FiltradoFechas() {
  const [busquedaUsuario, setBusquedaUsuario] = useState("");
  const [filtrarName, setFiltrarName] = useState([]);
  
  // Función para manejar la entrada del usuario
  const handleSearch = (e) => {
    setBusquedaUsuario(e.target.value);
  };

  // Función para hacer la solicitud al backend
  const fetchFilter = async () => {
    try {
      const response = await axios.get('https://innovacion-backend.vercel.app/novedades/filtrar', {
        params: {
          filterFront: busquedaUsuario // Envía el valor del input al backend
        }
      });
      setFiltrarName(response.data); // Actualiza el estado con los resultados filtrados
    } catch (error) {
      console.error('Error al filtrar novedades:', error);
    }
  };

  // Solo ejecutar la búsqueda si hay algo en el input
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevenir recarga de la página
    if (busquedaUsuario.trim()) {
      fetchFilter();
    } else {
      setFiltrarName([]); // Limpia el resultado si no hay búsqueda
    }
  };

  return (
    <>
    <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center mt-10">
      <label htmlFor="busqueda" className="mb-2 text-lg font-semibold">Ingrese el criterio de búsqueda</label>
      <input
        type="text"
        id="busqueda"
        value={busquedaUsuario}
        onChange={handleSearch}
        className="border border-gray-300 rounded-lg p-2 mb-4 w-full max-w-xs focus:outline-none focus:ring focus:ring-blue-300"
        placeholder="Buscar..."
      />
      <button
        type="submit"
        className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 transition duration-200"
      >
        Buscar
      </button>
    </form>
  
    <div className="flex flex-wrap justify-center gap-6 p-6 max-w-5xl mx-auto">
      {filtrarName.length > 0 ? (
        filtrarName.map((novedad, index) => (
          <FiltrarFecha key={index} novedad={novedad} />
        ))
      ) : (
        <p>No hay resultados para mostrar</p>
      )}
    </div>
  </>
  );
}

export default FiltradoFechas;