import { render, screen } from "@testing-library/react"

import Header from "../widget"
import { LightThemeProvider } from "@providers"

describe("The Header", () => {
  it("renders fine", () => {
    render(
      <LightThemeProvider>
        <Header>Header</Header>
      </LightThemeProvider>
    )

    expect(screen.getByText("Header")).toBeInTheDocument()
  })
})