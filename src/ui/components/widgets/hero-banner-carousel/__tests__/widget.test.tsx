import { render, screen } from "@testing-library/react";
import { LightThemeProvider } from "@providers"
import HeroBannerCarousel from "../widget"

import { heroBannersMock } from "@widgets/__mocks__"

describe("The HeroBannerCarousel component...", () => {
  beforeAll(() => {
    // Reduced motion is deactivated
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation(() => ({
        matches: false
      }))
    })
  })

  it("renders nothing if no hero banners is given", () => {
    render(
      <LightThemeProvider>
        <HeroBannerCarousel heroBanners={[]}/>
      </LightThemeProvider>
    )

    expect(screen.queryByText("I'm a banner")).not.toBeInTheDocument()
  })

  it("renders a list of hero banners", () => {
    render(
      <LightThemeProvider>
        <HeroBannerCarousel heroBanners={heroBannersMock}/>
      </LightThemeProvider>
    )

    expect(screen.queryAllByText("Flowers")[0]).toBeInTheDocument()
  })
})