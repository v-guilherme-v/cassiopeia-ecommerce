import { render } from "@testing-library/react"

import TopBar from "../widget"
import { LightThemeProvider } from "@providers"

import { useViewPorts } from "@ui/hooks/use-viewports"
jest.mock("@ui/hooks/use-viewports")

describe("The TopBar", () => {
  beforeAll(() => {
    (useViewPorts as jest.Mock).mockReturnValue({
      minWidthMedium: true
    })
  })

  it("has its normal form rendering", () => {
    render(
      <LightThemeProvider>
        <TopBar />
      </LightThemeProvider>
    )
  })

  it("is on mobile render view", () => {
    (useViewPorts as jest.Mock).mockReturnValue({
      minWidthMedium: false
    })

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