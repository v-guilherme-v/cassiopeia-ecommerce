import { screen, render } from "@testing-library/react"
import { LightThemeProvider } from "@providers"

import Form from "../component"

describe("The form component", () => {
  it("renders fine", () => {
    render(
      <LightThemeProvider>
        <Form />
      </LightThemeProvider>
    )
  })
})