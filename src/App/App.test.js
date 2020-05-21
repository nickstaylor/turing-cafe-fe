import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

// Write an integration test for App that
// tests the user flow for adding a new reservation.
describe("App", ()=>{

  it('should be able to fill out and submit the reservation form, and add a res to the page', () => {
    const { getByText, getByRole, getByPlaceholderText } = render(<App />);

    fireEvent.change(getByPlaceholderText('name'), {target: {value: 'Nick'}})
    fireEvent.change(getByPlaceholderText('Time'), {target: {value: '7pm'}})
    fireEvent.click(getByText('Make Reservation'));

    expect(getByText('Nick')).toBeInTheDocument()
    expect(getByText('7pm')).toBeInTheDocument()

  });


})
