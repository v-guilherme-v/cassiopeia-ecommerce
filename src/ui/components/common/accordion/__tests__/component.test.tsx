import { screen, render } from "@testing-library/react"
import { LightThemeProvider } from "@providers"
import Accordion from "../component"

describe("The accordion", () => {
  it("renders on screen", () => {
    const accordionLabel = "Some accordion label"
    render(
      <LightThemeProvider>
        <Accordion label={accordionLabel} />
      </LightThemeProvider>
    )

    const accordion = screen.getByText(accordionLabel)
    expect(accordion).toBeInTheDocument()
  })
})