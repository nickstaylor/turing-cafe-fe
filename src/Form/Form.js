import React, { Component } from 'react';
import './Form.css'

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      date: '',
      time: '',
      guests: ''
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
    // this.setState({ [e.target.name]: e.target.value})
  }

  submitReservation = (event) => {
    event.preventDefault();
    const { addReservation } = this.props;
    const newReservation = { ...this.state, id: Date.now()};
    addReservation(newReservation);
    this.resetInputs();
  }

  resetInputs = () => {
    this.setState({
      name: '',
      date: '',
      time: '',
      guests: ''
    })
  }

  render() {
    console.log(this.state.date)
    return (
      <form>
      <input
        type='text'
        placeholder='name'
        value={this.state.name}
        name='name'
        onChange={this.handleChange}
      />
        <input
          type='date'
          placeholder='Date (mm/dd)'
          value={this.state.date}
          name='date'
          onChange={this.handleChange}
        />
        <input
          type='text'
          placeholder='Time'
          value={this.state.time}
          name='time'
          onChange={this.handleChange}
        />
        <input
          type='text'
          placeholder='Number of guests'
          value={this.state.guests}
          name='guests'
          onChange={this.handleChange}
        />
        <button
          onClick={this.submitReservation}
        >
          Make Reservation
        </button>
      </form>
    )
  }
}
