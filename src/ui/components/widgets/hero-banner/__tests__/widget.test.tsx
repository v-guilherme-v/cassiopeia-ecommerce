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
})