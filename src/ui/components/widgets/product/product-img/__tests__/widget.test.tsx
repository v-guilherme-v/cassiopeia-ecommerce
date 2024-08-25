import { render, screen } from "@testing-library/react"
import { LightThemeProvider } from "@providers"
import ProductImage from "../widget"

import randomFlower from "src/assets/flower-1.png"

describe("The ProductImage", () => {
  it("has a random flower on screen", async () => {
    render(
      <LightThemeProvider>
        <ProductImage imageURL={randomFlower} imageAltText="Random flower"/>
      </LightThemeProvider>
    )

    const randomFlowerImg = screen.getByAltText("Random flower")
    expect(randomFlowerImg).toBeInTheDocument()
  })
})