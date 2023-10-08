import { screen, render } from "@testing-library/react"
import { LightThemeProvider } from "@providers"

import ProductCard, { ProductCardStyleTypes } from "../component"

describe("The product card component", () => {
  it("renders without image", () => {
    render(
      <LightThemeProvider>
        <ProductCard product={{ displayName: "Flower 1" }}/>
      </LightThemeProvider>
    )

    const productDisplayName = screen.getByText("Flower 1")
    expect(productDisplayName).toBeInTheDocument()
  })

  it("renders without a name", () => {
    render(
      <LightThemeProvider>
        <ProductCard product={{}} alignment={ProductCardStyleTypes.ALIGNED_LEFT} />
      </LightThemeProvider>
    )

    const productDisplayName = screen.getByText("Name")
    expect(productDisplayName).toBeInTheDocument()
  })
})