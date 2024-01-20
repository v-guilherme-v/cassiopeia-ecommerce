import { fireEvent, render, screen } from "@testing-library/react"

import MiniCart from "../widget"
import { MiniCartHeading } from "../components"
import { LightThemeProvider } from "@providers"
import { MiniCartContext } from "@contexts"

const context = {
  isOpen: false,
  toggleMiniCart: jest.fn()
}

describe("The MiniCart component", () => {
  it("has been initialized", () => {
    render(
      <LightThemeProvider>
        <MiniCartContext.Provider value={context}>
          <MiniCart />
        </MiniCartContext.Provider>
      </LightThemeProvider>
    )

    expect(screen.getByText("Your cart")).not.toBeVisible()
  })

  it("is open", () => {
    context.isOpen = true

    render(
      <LightThemeProvider>
        <MiniCartContext.Provider value={context}>
          <MiniCart />
        </MiniCartContext.Provider>
      </LightThemeProvider>
    )

    expect(screen.getByText("Your cart")).toBeVisible()
  })
})

describe("The MiniCartHeading component", () => {
  it("closes mini cart when X button is clicked", () => {
    context.isOpen = true

    render(
      <LightThemeProvider>
        <MiniCartContext.Provider value={context}>
          <MiniCartHeading />
        </MiniCartContext.Provider>
      </LightThemeProvider>
    )

    const closeCartButton = screen.getByRole("button")
    expect(closeCartButton).toBeInTheDocument()

    fireEvent.click(closeCartButton)
    expect(context.toggleMiniCart).toBeCalled()
  })
})