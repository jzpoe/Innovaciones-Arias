function FiltrarFecha({ novedad }) {
  const formatoFecha = (fecha) => {
    const opciones = { year: "numeric", month: "long", day: "numeric" };
    return fecha ? new Date(fecha).toLocaleDateString("es-ES", opciones) : "Fecha no disponible";
  };

  if (!novedad) {
    return <p>No hay datos disponibles para mostrar.</p>;
  }

  return (
    <div className="">
    <li className="bg-white rounded-lg shadow-md p-4  list-none">
    <p><strong>Nombre:</strong> {novedad.nombre || "No disponible"}</p>
      <p><strong>Compras:</strong> {novedad.compras || "No disponible"}</p>
      <p><strong>Proveedores:</strong> {novedad.proveedores || "No disponible"}</p>
      <p><strong>Empleado:</strong> {novedad.empleado || "No disponible"}</p>
      <p><strong>Arriendo:</strong> {novedad.arriendo || "No disponible"}</p>
      <p><strong>Gastos:</strong> {novedad.gastos || "No disponible"}</p>
      <p><strong>Transporte:</strong> {novedad.transporte || "No disponible"}</p>
      <p><strong>Ganancia:</strong> {novedad.ganancia || "No disponible"}</p>
      <p><strong>Fecha:</strong> {formatoFecha(novedad.fecha)}</p>
    </li>
  </div>
  );
}

export default FiltrarFecha;