import React from "react";
import Reservations from "./Reservations";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";


// Write tests for the form component and another component (not App yet)
// covering what should be displayed on the page.
// Write a unit test for the form component that checks that when data is put
 // into the form, the value is reflected in that form input. -good



describe("Reservations", ()=>{
  it('should render a Reservations Page and display info on the page', () => {
    const reservation1 = {date: "12/29",
                        id: 1,
                        name: "Christie",
                        number: 12,
                        time: "7:00"}

                        const reservation2 = {date: "12/28",
                                            id: 2,
                                            name: "Nick",
                                            number: 5,
                                            time: "5:00"}

    const reservations = [reservation1, reservation2]
    const { getByText } = render(<Reservations
                                  reservations={reservations}/>)

    expect(getByText('All Reservations')).toBeInTheDocument();
    expect(getByText('Christie')).toBeInTheDocument();

  })

});
