import { render, screen } from "@testing-library/react"
import Validator from "../component"
import { LightThemeProvider } from "@providers"

describe("The validator", () => {
  it("has a valid state", () => {
    render(
      <LightThemeProvider>
        <Validator isValid={true}/>
      </LightThemeProvider>
    )

    expect(screen.getByTestId(/CheckIcon/)).toBeInTheDocument()
  })

  it("has an invalid state", () => {
    render(
      <LightThemeProvider>
        <Validator isValid={false}/>
      </LightThemeProvider>
    )

    expect(screen.getByTestId(/CloseIcon/)).toBeInTheDocument()
  })
})