import { render, screen } from "@testing-library/react"
import Block from "../component"

describe("The block component", () => {
  it("renders as default", () => {
    render(
      <Block>This is a block</Block>
    )

    expect(screen.getByText("This is a block"))
      .toBeInTheDocument()
  })
})