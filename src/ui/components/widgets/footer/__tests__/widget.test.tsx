import { render, screen } from "@testing-library/react"
import { LightThemeProvider } from "@providers"

import Footer from "../widget"

describe("The footer", () => {
  it("renders properly", () => {
    render(
      <LightThemeProvider>
        <Footer title="footer"/>
      </LightThemeProvider>
    )

    expect(screen.getByText("footer")).toBeInTheDocument()
  })
})