import { render } from "@testing-library/react"

import TopBarActions from "../component"
import { LightThemeProvider } from "@ui/providers"

describe("The TopBarActions", () => {
  it("renders fine", () => {
    render(
      <LightThemeProvider>
        <TopBarActions />
      </LightThemeProvider>
    )
  })
})