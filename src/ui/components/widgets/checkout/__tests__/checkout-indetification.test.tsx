import { render, screen, fireEvent } from "@testing-library/react"
import { LightThemeProvider, CheckoutContextProvider } from "@providers"

import CheckoutIdentification from "../identification/widget"

describe("The checkout identification widget", () => {
  it("changes the form inputs", async () => {
    render(
      <LightThemeProvider>
        <CheckoutContextProvider>
          <CheckoutIdentification />
        </CheckoutContextProvider>
      </LightThemeProvider>
    )

    const fullNameInput = screen.getByPlaceholderText("Full Name")
    expect(fullNameInput).toBeInTheDocument()

    fireEvent.change(fullNameInput, { target: { value: "Gui " }})
    
    const emailInput = screen.getByPlaceholderText("Email")
    expect(emailInput).toBeInTheDocument()

    fireEvent.change(emailInput, { target: { value: "email" }})
    
    const cellphoneInput = screen.getByPlaceholderText("Cellphone")
    expect(cellphoneInput).toBeInTheDocument()

    fireEvent.change(cellphoneInput, { target: { value: "3312a" }})

    // The previous values for the inputs are all wrong to test out the error paths
    // Now i'm inserting acceptable values for them, so all paths are taken
    fireEvent.change(fullNameInput, { target: { value: "Guilherme" }})
    fireEvent.change(emailInput, { target: { value: "guilherme@email.com" }})
    fireEvent.change(cellphoneInput, { target: { value: "9999999999" }})
  })
})