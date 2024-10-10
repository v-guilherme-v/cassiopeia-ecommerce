import { fireEvent, render, screen } from "@testing-library/react"

import MiniCart from "../widget"

import {
  MiniCartHeading,
  MiniCartPromotionEntry
} from "../components"

import { LightThemeProvider } from "@providers"
import { MiniCartContext } from "@contexts"

import { useViewPorts } from "@ui/hooks/use-viewports"
jest.mock("@ui/hooks/use-viewports")

const context = {
  isOpen: false,
  toggleMiniCart: jest.fn()
}

describe("The MiniCart component", () => {
  beforeEach(() => {
    (useViewPorts as jest.Mock)
      .mockReturnValue({ minWidthMedium: false })
  })

  it("has been initialized", () => {
    render(
      <LightThemeProvider>
        <MiniCartContext.Provider value={context}>
          <MiniCart />
        </MiniCartContext.Provider>
      </LightThemeProvider>
    )
  })
})

describe("The MiniCartHeading component", () => {
  it("calls the toggle function when X button is clicked", () => {
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

  it("is on mobile render view", () => {
    (useViewPorts as jest.Mock)
      .mockReturnValue({ minWidthMedium: true })

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