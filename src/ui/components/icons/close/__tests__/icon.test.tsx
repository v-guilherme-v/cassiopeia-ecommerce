import { render, screen } from "@testing-library/react"
import Close from "../icon"

describe("The close icon", () => {
  it("renders correctly", () => {
    render(<Close />)
    expect(screen.getByTestId("CloseIcon"))
      .toBeInTheDocument()
  })
})