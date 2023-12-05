import { render, screen } from "@testing-library/react"

import BannerContainer from "../widget"
import { LightThemeProvider } from "@providers"

describe("The banner container", () => {
  it("renders good", () => {
    render(
      <LightThemeProvider>
        <BannerContainer>Banner container</BannerContainer>
      </LightThemeProvider>
    )
    expect(screen.getByText("Banner container"))
      .toBeInTheDocument()
  })
})