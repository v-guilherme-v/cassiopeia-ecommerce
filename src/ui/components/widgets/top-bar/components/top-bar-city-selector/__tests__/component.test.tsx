import { render } from "@testing-library/react"

import TopBarCitySelector from "../component"
import { LightThemeProvider } from "@providers"

describe("The TopBarCitySelector", () => {
  it("renders fine", () => {
    render(
      <LightThemeProvider>
        <TopBarCitySelector />
      </LightThemeProvider>
    )
  })
})