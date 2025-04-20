function Reserva({ reserva }) {
    const { equipo, responsable, fecha, hora, comentarios } = reserva
  
    return (
      <div className="reserva">
        <p><strong>Equipo:</strong> {equipo}</p>
        <p><strong>Responsable:</strong> {responsable}</p>
        <p><strong>Fecha:</strong> {fecha}</p>
        <p><strong>Hora:</strong> {hora}</p>
        <p><strong>Comentarios:</strong> {comentarios}</p>
      </div>
    )
  }
  
  export default Reserva
  