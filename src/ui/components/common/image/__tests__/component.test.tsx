import { screen, render, fireEvent } from "@testing-library/react"

import { LightThemeProvider } from "@providers"
import Image from "../component"

describe("The image component", () => {
  it("renders a random image", () => {
    render(
      <LightThemeProvider>
        <Image src="custom-image-path.png" alt="my flowers"/>
      </LightThemeProvider>
    )

    const image = screen.getByAltText("my flowers")
    expect(image).toBeInTheDocument()
  })

  it("has a fallback image that is rendered on error", () => {
    render(
      <LightThemeProvider>
        <Image src="" alt="error"/>
      </LightThemeProvider>
    )

    const image = screen.getByAltText("error")
    expect(image).toBeInTheDocument()

    // Dispatching <img> tag onError function
    fireEvent.error(image)
    expect(image).toHaveAttribute("error", "true")
  })
})