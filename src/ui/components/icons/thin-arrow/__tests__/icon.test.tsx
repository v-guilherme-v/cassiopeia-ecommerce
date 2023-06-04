import { screen, render } from "@testing-library/react"
import ThinArrow from "../icon"
import { IconDirections } from "@components/icons/types"

describe("The thin arrow icon", () => {
  it("renders just fine", () => {
    render(<ThinArrow />)
    expect(screen.getByTestId(/ThinArrowIcon/))
      .toBeInTheDocument()
  })

  it("is facing left", () => {
    render(<ThinArrow direction={IconDirections.LEFT}/>)
    const icon = screen.getByTestId(/ThinArrowIcon/)
    expect(icon).toBeInTheDocument()
    expect(icon).toHaveStyle(`
      transform: rotate(180deg);
    `)
  })

  it("is facing upwards", () => {
    render(<ThinArrow direction={IconDirections.UPWARDS}/>)
    const icon = screen.getByTestId(/ThinArrowIcon/)
    expect(icon).toBeInTheDocument()
    expect(icon).toHaveStyle(`
      transform: rotate(270deg);
    `)
  })

  it("is facing downwards", () => {
    render(<ThinArrow direction={IconDirections.DOWNWARDS}/>)
    const icon = screen.getByTestId(/ThinArrowIcon/)
    expect(icon).toBeInTheDocument()
    expect(icon).toHaveStyle(`
      transform: rotate(90deg);
    `)
  })
})