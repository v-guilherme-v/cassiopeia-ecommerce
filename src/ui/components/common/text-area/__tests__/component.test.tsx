import { render, screen } from "@testing-library/react"
import { LightThemeProvider } from "@providers"

import TextArea from "../component"

describe("The text area", () => {
  it("renders with some text", () => {
    const value = "my text area"

    render(
      <LightThemeProvider>
        <TextArea value={value} onChange={jest.fn()}/>
      </LightThemeProvider>
    )

    expect(screen.getByDisplayValue(value)).toBeInTheDocument()
  })
})