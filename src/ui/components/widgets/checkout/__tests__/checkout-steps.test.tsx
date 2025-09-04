import { render, screen, fireEvent } from "@testing-library/react"
import { LightThemeProvider } from "@app/ui/providers"

import CheckoutSteps from "../checkout-steps"

describe("The checkout steps widget", () => {
  it("changes from one step to another", async () => {
    render(
      <LightThemeProvider>
        <CheckoutSteps />
      </LightThemeProvider>
    )

    const goToShippingAction = (await screen.findAllByText("Shipping"))[1]
    expect(goToShippingAction).toBeInTheDocument()
    fireEvent.click(goToShippingAction)
    
    const goToPaymentAction = (await screen.findAllByText("Payment"))[1]
    expect(goToPaymentAction).toBeInTheDocument()
    fireEvent.click(goToPaymentAction)
  })
})
