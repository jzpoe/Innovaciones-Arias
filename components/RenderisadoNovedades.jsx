
function RenderisadoNovedades ({novedades, loading, onDelete}) {
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl font-semibold">Cargando...</p>
      </div>
    );
  }

  const formatoFecha= (fechaISO)=>{
    const fecha = new Date(fechaISO)
    return fecha.toLocaleDateString("es-ES",{
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return(
    
    <div >
      <div className="flex justify-center items-center mt-10">
    <h2 className="text-xl font-semibold text-gray-700 mb-4">
      Datos obtenidos de la API:
    </h2>
    </div>
    <div class="flex flex-wrap gap-6 p-6 max-w-5xl mx-auto justify-center">
    {novedades.length > 0 ? (
        novedades.map((novedades, index) => (
          <li key={index} class="bg-white rounded-lg shadow-md p-4 list-none">
            <p><strong>Compras:</strong> {novedades.compras}</p>
            <p><strong>Proveedores:</strong> {novedades.provedores}</p>
            <p><strong>Empleado:</strong> {novedades.empleado}</p>
            <p><strong>Arriendo:</strong> {novedades.arriendo}</p>
            <p><strong>Gastos:</strong> {novedades.gastos}</p>
            <p><strong>Transporte:</strong> {novedades.transporte}</p>
            <p><strong>Ganancia:</strong> {novedades.ganancia}</p>
            <p><strong>Fecha: </strong>{formatoFecha(novedades.fecha)}</p>
            <button 
            class="bg-red-500 text-white px-4 py-2 mt-2 rounded"
            onClick={()=>onDelete(novedades._id)} >borrar
            </button>
          </li>
        ))
        
      ) : (
        <p>No se encontraron datos o aún se están cargando...</p>
      )}
    </div>
  </div>
)}

export default RenderisadoNovedades
