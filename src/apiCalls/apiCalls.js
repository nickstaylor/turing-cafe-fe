
export const fetchCall = () => {
 return fetch("http://localhost:3001/api/v1/reservations")
.then(response => response.json())

}

export const postToApi = (newReservation)=>{
  fetch("http://localhost:3001/api/v1/reservations", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id: newReservation.id,
      name: newReservation.name,
      date: newReservation.date,
      time: newReservation.time,
      number: newReservation.number
    })
  })
  .then(response => response.json())
  .catch(err => console.log("error", err.message))
}
