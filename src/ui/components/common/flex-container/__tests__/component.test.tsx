import { render, screen } from "@testing-library/react"
import { LightThemeProvider } from "@providers"

import FlexContainer from "../component"

describe("The flex container", () => {
  it("renders properly", () => {
    render(
      <LightThemeProvider>
        <FlexContainer direction="column">flex container</FlexContainer>
      </LightThemeProvider>
    )

    const flexElement = screen.getByText("flex container")

    expect(flexElement).toBeInTheDocument()
    expect(flexElement).toHaveStyle(`
      flex-direction: column;
    `)
  })
})