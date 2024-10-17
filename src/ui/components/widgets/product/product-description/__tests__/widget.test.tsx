import { render, screen } from "@testing-library/react"
import ProductDescription from "../widget"
import { LightThemeProvider } from "@ui/providers"

describe("The Product Description widget...", () => {
  it("renders fine", () => {
    render(
      <LightThemeProvider>
        <ProductDescription />
      </LightThemeProvider>
    )

    expect(screen.getAllByText("Description")[0]).toBeInTheDocument()
  })
})