import { screen, render } from "@testing-library/react"
import { LightThemeProvider } from "@providers"

import Pricing from "../component"

describe("The pricing component", () => {
  it("has a list price", () => {
    render(
      <LightThemeProvider>
        <Pricing listPrice={99.90}/>
      </LightThemeProvider>
    )

    const listPrice = screen.getByText("R$ 99,90")
    expect(listPrice).toBeInTheDocument()
  })

  it("has a list price and a sale price", () => {
    render(
      <LightThemeProvider>
        <Pricing listPrice={99.90} salePrice={90.00}/>
      </LightThemeProvider>
    )

    const salePrice = screen.getByText("R$ 90,00")
    expect(salePrice).toBeInTheDocument()
  })

  it("has a left alignment style", () => {
    render(
      <LightThemeProvider>
        <Pricing listPrice={9.90} alignment="ALIGNED_LEFT"/>
      </LightThemeProvider>
    )

    const salePrice = screen.getByText("R$ 9,90")
    expect(salePrice).toBeInTheDocument()
  })
})