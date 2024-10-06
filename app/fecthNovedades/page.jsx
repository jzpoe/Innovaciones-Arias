"use client"
import RenderisadoNovedades from "@/components/RenderisadoNovedades";
import axios from "axios";
import { useEffect, useState } from "react";

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

 
    const handleDelete = async(id)=>{
      try {
      const response = await axios.delete(`https://innovacion-backend.vercel.app/novedades/${id}`)

      if (response.status === 200) {
         setNovedades(novedades.filter((novedad)=> novedad._id !==id ))
         alert("novedad eliminada correctamente")
        
      }
      alert("Error al eliminar");
  } catch (error) {
    console.error("Error al eliminar la novedad:", error);
      alert("Error al eliminar el elemento");

  }
  

  }

  return (
   <>
   <RenderisadoNovedades novedades={novedades} loading={loading} onDelete={handleDelete} />
   </>
  );
}

export default DataFetcher;