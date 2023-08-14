import { render } from "@testing-library/react"

import TopBar from "../widget"
import { LightThemeProvider } from "@providers"

describe("The TopBar", () => {
  it("has its normal form rendering", () => {
    render(
      <LightThemeProvider>
        <TopBar />
      </LightThemeProvider>
    )
  })

  it("has a social media fragment that renders", () => {
    render(
      <LightThemeProvider>
        <TopBar.SocialMedias />
      </LightThemeProvider>
    )
  })
})