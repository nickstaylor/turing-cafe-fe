import React from "react";
import "./Reservation.css"

const Reservation = (props) => {
  console.log('reservation', props)

  return (
    <div className="reservation-card">
    <h3>{props.name}</h3>
    <p>{props.date}</p>
    <p>{props.time}</p>
    <p>Number of Guests: {props.number}</p>
    <button className="res-button" onClick={()=>{props.removeReservation(props.id)}}>Cancel</button>
    </div>
  )
}
export default Reservation
