import React from "react";
import Reservation from "../Reservation/Reservation"
import "./Reservations.css"

const Reservations = ({reservations, removeReservation}) => {
  console.log(reservations)
  const resCards = reservations.map(reservation=>{
    return (
      <Reservation
      name = {reservation.name}
      date = {reservation.date}
      number = {reservation.number}
      time = {reservation.time}
      id = {reservation.id}
      key = {reservation.id}
      removeReservation={removeReservation} />
    )
  })

return (
  <div className='resy-container'>
    {resCards}
  </div>
)

}

export default Reservations
