import { screen, render } from "@testing-library/react"
import Image from "../component"

describe("The image component", () => {
  it("renders a random image", () => {
    render(
      <Image src="custom-image-path.png" alt="my flowers"/>
    )

    const image = screen.getByAltText("my flowers")
    expect(image).toBeInTheDocument()
  })
})