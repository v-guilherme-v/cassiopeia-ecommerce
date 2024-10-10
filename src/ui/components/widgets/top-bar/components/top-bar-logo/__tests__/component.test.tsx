import { render } from "@testing-library/react"

import TopBarLogo from "../component"
import { LightThemeProvider } from "@ui/providers"

describe("The TopBarLogo", () => {
  it("renders fine", () => {
    render(
      <LightThemeProvider>
        <TopBarLogo />
      </LightThemeProvider>
    )
  })
})