import { fireEvent, render, screen } from "@testing-library/react"

import MiniCart from "../widget"

import {
  MiniCartContainer,
  MiniCartHeading,
  MiniCartOverlay,
  MiniCartPromotionEntry
} from "../components"

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

describe("The MiniCartOverlay component", () => {
  // overlay is indentified as the dark background
  // that overlays the page content when cart is open
  it("closes the minicart when clicked", () => {
    context.isOpen = true

    render(
      <LightThemeProvider>
        <MiniCartContext.Provider value={context}>
          <MiniCartContainer>
            <MiniCartOverlay />
          </MiniCartContainer>
        </MiniCartContext.Provider>
      </LightThemeProvider>
    )

    const miniCartContainer = screen.getByRole("dialog")
    expect(miniCartContainer).toBeInTheDocument()

    // Finding the overlay through query selector
    // data-name="MiniCart__Container"
    const miniCartOverlay = miniCartContainer
      .querySelector("[data-name=\"MiniCart__Overlay\"]")
    expect(miniCartOverlay).toBeInTheDocument()

    // Clicking on container since "click" can't receive nulls
    fireEvent.click(miniCartOverlay ?? miniCartContainer)
    expect(context.toggleMiniCart).toBeCalled()
  })
})

describe("The MiniCartPromotionEntry component", () => {
  it("updates it's internal state when users types something", () => {
    context.isOpen = true

    render(
      <LightThemeProvider>
        <MiniCartContext.Provider value={context}>
          <MiniCartPromotionEntry />
        </MiniCartContext.Provider>
      </LightThemeProvider>
    )

    const promotionCodeInput: HTMLInputElement = screen
      .getByPlaceholderText("Add promocode")
    expect(promotionCodeInput).toBeInTheDocument()

    fireEvent.change(promotionCodeInput, { target: { value: "CODE10" } })

    expect(promotionCodeInput.value).toBe("CODE10")
  })
})