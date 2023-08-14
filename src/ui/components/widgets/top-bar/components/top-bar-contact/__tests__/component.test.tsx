import { render } from "@testing-library/react"

import TopBarContact from "../component"
import { LightThemeProvider } from "@providers"

describe("The TopBarContact", () => {
  it("renders fine", () => {
    render(
      <LightThemeProvider>
        <TopBarContact />
      </LightThemeProvider>
    )
  })
})