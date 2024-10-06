"use client";
import { useState } from "react";
import DataFetcher from "./fecthNovedades/page";
import axios from "axios";

function About() {
 
  const [novedadesUpdate, setNovedadesUpdate] = useState({
    compras: "",
    provedores: "",
    empleado: "",
    arriendo: "",
    gastos: "",
    transporte: "",
    ganancia: "",
    fecha: "",
  });

  const [novedades, setNovedades] = useState([]); // Estado compartido para las novedades

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNovedadesUpdate((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const limpiarFormulario = () => {
    setNovedadesUpdate({
      nombre:"",
      compras: "",
      provedores: "",
      empleado: "",
      arriendo: "",
      gastos: "",
      transporte: "",
      ganancia: "",
      fecha: "",
    });
  };

  const sendData = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/novedades",
        novedadesUpdate
      );
      setNovedades((prevNovedades) => [...prevNovedades, response.data]);
      limpiarFormulario();
    } catch (error) {
      console.error("Error al enviar datos del formulario", error);
    }
  };

  return (
    <>
      <div className="flex justify-center mt-10">
        <form
          className="w-full max-w-screen-xl p-6 bg-white shadow-md rounded-lg border border-gray-200"
          onSubmit={sendData}
        >
          <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
            Formulario Financiero
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
              label="nombre"
              name="nombre"
              type="text"
              value={novedadesUpdate.nombre}
              onChange={handleChange}
              placeholder="Ingrese el nombre"
            />
            <input
              label="Compras"
              name="compras"
              type="number"
              value={novedadesUpdate.compras}
              onChange={handleChange}
              placeholder="Ingrese el valor de las compras"
            />
            <input
              label="Gastos"
              name="gastos"
              type="number"
              value={novedadesUpdate.gastos}
              onChange={handleChange}
              placeholder="Ingrese el valor de los gastos"
            />
            <input
              label="Proveedores"
              name="provedores"
              type="text"
              value={novedadesUpdate.provedores}
              onChange={handleChange}
              placeholder="Ingrese los proveedores"
            />
            <input
              label="Transporte"
              name="transporte"
              type="number"
              value={novedadesUpdate.transporte}
              onChange={handleChange}
              placeholder="Ingrese el valor del transporte"
            />
            <input
              label="Empleado"
              name="empleado"
              type="text"
              value={novedadesUpdate.empleado}
              onChange={handleChange}
              placeholder="Ingrese los datos del empleado"
            />
            <input
              label="Ganancia"
              name="ganancia"
              type="number"
              value={novedadesUpdate.ganancia}
              onChange={handleChange}
              placeholder="Ingrese la ganancia"
            />
            <input
              label="Arriendo"
              name="arriendo"
              type="number"
              value={novedadesUpdate.arriendo}
              onChange={handleChange}
              placeholder="Ingrese el valor del arriendo"
            />
            <input
              label="Fecha"
              name="fecha"
              type="date"
              value={novedadesUpdate.fecha}
              onChange={handleChange}
            />
          </div>

          <div className="mt-6 flex justify-center">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
      

      <DataFetcher novedades={novedades} setNovedades={setNovedades} />
    </>
  );
}

export default About;
