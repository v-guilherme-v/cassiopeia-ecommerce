import { LightThemeProvider } from "@providers"
import { render, screen } from "@testing-library/react"
import Container from "../component"

describe("The container", () => {
  it("renders fine", () => {
    render(
      <LightThemeProvider>
        <Container>Container</Container>
      </LightThemeProvider>
    )

    expect(screen.getByText("Container"))
      .toBeInTheDocument()
  })
})