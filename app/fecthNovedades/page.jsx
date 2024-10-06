"use client"
import RenderisadoNovedades from "@/components/RenderisadoNovedades";
import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

function DataFetcher({novedades, setNovedades}) {
  
  const [loading, setLoading] = useState(true); // Estado de carga

  useEffect(() => {
    const fetchData = async () => {
      try {
        const datos = await fetch("https://innovacion-backend.vercel.app/novedades");
        const result = await datos.json();
        setNovedades(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Termina el estado de carga
      }
    };

    fetchData();
  }, []);

 
  const handleDelete = async (id) => {
    // Muestra la alerta de confirmación
    const result = await Swal.fire({
      icon: "warning",
      title: "¿Está seguro?",
      text: "¿Desea borrar la tarea?",
      showCancelButton: true, // Muestra el botón de cancelar
      confirmButtonText: "Sí, borrar", // Texto del botón de confirmación
      cancelButtonText: "No, cancelar", // Texto del botón de cancelación
    });
  
    // Si el usuario confirma la eliminación
    if (result.isConfirmed) {
      try {
        const response = await axios.delete(`https://innovacion-backend.vercel.app/novedades/${id}`);
  
        if (response.status === 200) {
          setNovedades(novedades.filter((novedad) => novedad._id !== id));
          Swal.fire({
            icon: "success",
            title: "Eliminado",
            text: "La tarea ha sido eliminada exitosamente.",
          });
        } else {
          alert("Error al eliminar");
        }
      } catch (error) {
        console.error("Error al eliminar la novedad:", error);
        alert("Error al eliminar el elemento");
      }
    
    
  };

  }

  return (
   <>
   <RenderisadoNovedades novedades={novedades} loading={loading} onDelete={handleDelete} />
   </>
  );
}

export default DataFetcher;