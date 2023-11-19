import { render, screen } from "@testing-library/react"

import BannerContainer from "../widget"

describe("The banner container", () => {
  it("renders good", () => {
    render(<BannerContainer />)
    expect(screen.getByText("Banner container"))
      .toBeInTheDocument()
  })
})