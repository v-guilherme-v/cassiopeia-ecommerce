import { screen, render } from "@testing-library/react"
import HeroBanner from "../widget"
import { LightThemeProvider } from "@providers"

describe("The image component", () => {
  it("renders a random image", () => {
    render(
      <LightThemeProvider>
        <HeroBanner
          title="my hero banner"
          description="some description"
          image={{ src: "some-image-path.png", alt: "image alt" }}
        />
      </LightThemeProvider>
    )

    const heroActionButton = screen.getByText("my hero banner")
    expect(heroActionButton).toBeInTheDocument()
  })

  it("may have more detailed properties", () => {
    render(
      <LightThemeProvider>
        <HeroBanner
          title={{ text: "My hero banner", color: "#f00" }}
          description={{ text: "some description", color: "#8a1a5f" }}
          image={{ src: "some-image-path.png", alt: "image alt" }}
          button={{
            text: "click me!",
            textColor: "#fff",
            backgroundColor: "#ff0"
          }}
        />
      </LightThemeProvider>
    )

    const heroBannerTitle = screen.getByText("My hero banner")
    expect(heroBannerTitle).toBeInTheDocument()

    const heroBannerAction = screen.getByText("click me!")
    expect(heroBannerAction).toBeInTheDocument()
  })
})