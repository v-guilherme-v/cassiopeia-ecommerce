import { render, screen } from "@testing-library/react"
import TextArea from "../component"
import { LightThemeProvider } from "@components/test.utils"

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