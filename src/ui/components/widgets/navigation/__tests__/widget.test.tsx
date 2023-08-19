import { render, screen } from "@testing-library/react"

import Navigation from "../widget"
import { LightThemeProvider } from "@providers"

const navigationLinksMock = Array(5).fill(1).map((_, index) => ({ label: `Item ${index}`, route: `item-${index}` }))

describe("The Navigation", () => {
  it("renders some links", () => {
    render(
      <LightThemeProvider>
        <Navigation navigationLinks={navigationLinksMock} />
      </LightThemeProvider>
    )

    const linksLabels = screen.getAllByText(/Item [0-9]/)
    expect(linksLabels).toHaveLength(5)
  })
})