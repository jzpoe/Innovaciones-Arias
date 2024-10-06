"use client"
import RenderisadoNovedades from "@/components/RenderisadoNovedades";
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

  

  return (
   <>
   <RenderisadoNovedades novedades={novedades} loading={loading}  />
   </>
  );
}

export default DataFetcher;