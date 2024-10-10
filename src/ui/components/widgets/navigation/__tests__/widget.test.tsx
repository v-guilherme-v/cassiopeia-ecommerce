import { render, screen } from "@testing-library/react"
import { LightThemeProvider } from "@providers"
import { categoriesMock } from "@widgets/__mocks__"

import Navigation from "../widget"

describe("The Navigation component", () => {
  it("has some categories to navigate", () => {
    render(
      <LightThemeProvider>
        <Navigation categories={categoriesMock} />
      </LightThemeProvider>
    )

    // Flowers is present into mocked list
    const navigationLink = screen.getByText("Flowers")
    expect(navigationLink).toBeInTheDocument()
  })
})