import React, { Component } from 'react';
import Form from '../Form/Form';
import Reservations from '../Reservations/Reservations'
import './App.css';
import { fetchCall } from '../apiCalls/apiCalls'

class App extends Component {
  constructor(){
    super()
    this.state = {
      reservations: []
    }
  }


  componentDidMount(){
    fetchCall()
    .then(data => {
      this.setState({reservations: data})
    })
    .catch(err => console.log(err))
  }

  addReservation = () => {

  }

  removeReservation = () => {

  }


  render() {
    console.log('reservation', this.state.reservations)
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
        <Form addReservation={this.addReservation} />
        </div>
        <Reservations
        reservations={this.state.reservations}
        removeReservation={this.removeReservation}
        />
      </div>
    )
  }
}

export default App;
