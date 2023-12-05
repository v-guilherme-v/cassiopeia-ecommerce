import { render, screen } from "@testing-library/react"

import MiniCart from "../widget"
import { LightThemeProvider } from "@providers"

describe("The MiniCart component", () => {
  it("has \"Content\" rendered inside", () => {
    render(
      <LightThemeProvider>
        <MiniCart />
      </LightThemeProvider>
    )
    expect(screen.getByText("Content")).toBeInTheDocument()
  })
})