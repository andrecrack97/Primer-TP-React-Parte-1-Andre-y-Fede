import Reserva from './Cita'

function ListadoReservas({ reservas }) {
  return (
    <div>
      <h2>Reservas Confirmadas</h2>
      {reservas.map((reserva) => (
        <Reserva key={reserva.id} reserva={reserva} />
      ))}
    </div>
  )
}

export default ListadoReservas
