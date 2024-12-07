import { render, screen, fireEvent } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import { LightThemeProvider } from "@app/ui/providers"

import CheckoutSteps from "../checkout-steps"

describe("The checkout steps widget", () => {
  it("changes from one step to another", async () => {
    await act(() => {
      render(
        <LightThemeProvider>
          <CheckoutSteps />
        </LightThemeProvider>
      )
    })

    const goToShippingAction = screen.getAllByText("Shipping")[1]
    expect(goToShippingAction).toBeInTheDocument()
    fireEvent.click(goToShippingAction)
    
    const goToPaymentAction = screen.getByText("Next step")
    expect(goToPaymentAction).toBeInTheDocument()
    fireEvent.click(goToPaymentAction)
  })
})