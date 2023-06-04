import { render, screen } from "@testing-library/react"
import Check from "../icon"

describe("The check icon", () => {
  it("renders correctly", () => {
    render(<Check />)
    expect(screen.getByTestId("CheckIcon"))
      .toBeInTheDocument()
  })
})