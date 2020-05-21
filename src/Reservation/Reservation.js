import React from "react";
import "./Reservation.css"

const Reservation = (props) => {
  console.log('reservation', props)

  // name = {reservation.name}
  // date = {reservation.date}
  // number = {reservation.number}
  // time = {reservation.time}
  // id = {reservation.id}
  // key = {reservation.id}
  // removeReservation={removeReservation} />
  // <h3>Title: {title}</h3>
  // <p>Description: {description}</p>
  // <button onClick={()=>{deleteIdea(id)}}>🗑</button>
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
