import React from "react";
import Form from "./Form";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

// Write tests for the form component and another component (not App yet)
// covering what should be displayed on the page.
// Write a unit test for the form component that checks that when data is put
 // into the form, the value is reflected in that form input. -good


describe("Form", ()=>{
  it('should render a Form and display inputs on the page', () => {
    const { getByPlaceholderText, getByText } = render(<Form />)

    expect(getByPlaceholderText('Number of guests')).toBeInTheDocument()
    expect(getByText('Make Reservation')).toBeInTheDocument();
    expect(getByPlaceholderText('Time')).toBeInTheDocument();
  })

  it('should update input values as text is input', () => {
      const mockSubmitReservation = jest.fn()
      const { debug, getByText, getByPlaceholderText, toHaveProperty } = render(<Form addReservation={mockSubmitReservation}/>);

      const timeInput = getByPlaceholderText('Time')
      const nameInput = getByPlaceholderText('name')
      fireEvent.change(getByPlaceholderText('name'), {target: {value: 'Nick'}})
      fireEvent.change(getByPlaceholderText('Time'), {target: {value: '7pm'}})

      expect(nameInput).toHaveProperty('value', 'Nick')
      expect(timeInput).toHaveProperty('value', '7pm')
  })

  it('should submit a reservation', () => {
      const mockSubmitReservation = jest.fn()
      const { debug, getByText, getByPlaceholderText } = render(<Form addReservation={mockSubmitReservation}/>);

      fireEvent.change(getByPlaceholderText('name'), {target: {value: 'Nick'}})
      fireEvent.change(getByPlaceholderText('Time'), {target: {value: '7pm'}})
      fireEvent.click(getByText('Make Reservation'));
      expect(mockSubmitReservation).toHaveBeenCalled()
  })

})
