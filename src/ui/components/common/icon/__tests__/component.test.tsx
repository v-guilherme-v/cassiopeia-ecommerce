import { render, screen } from "@testing-library/react"

import Icon from "../component"
import { MarkerIcon } from "@components/icons"
import { IconDirections } from "../types"

describe("The icon", () => {
  it("renders properly", () => {
    render(
      <Icon>
        <MarkerIcon data-testid="MarkerIcon"/>
      </Icon>)

    expect(screen.getByTestId("MarkerIcon")).toBeInTheDocument()
  })

  it("is upside down", () => {
    render(
      <Icon data-testid="Icon" direction={IconDirections.DOWNWARDS}>
        <MarkerIcon />
      </Icon>)

    const icon = screen.getByTestId("Icon")
    expect(icon).toBeInTheDocument()
    expect(icon).toHaveStyle(`
      transform: rotate(90deg);
    `)
  })

  it("is to left", () => {
    render(
      <Icon data-testid="Icon" direction={IconDirections.LEFT}>
        <MarkerIcon />
      </Icon>)

    const icon = screen.getByTestId("Icon")
    expect(icon).toBeInTheDocument()
    expect(icon).toHaveStyle(`
      transform: rotate(-180deg);
    `)
  })

  it("is upwards", () => {
    render(
      <Icon data-testid="Icon" direction={IconDirections.UPWARDS}>
        <MarkerIcon />
      </Icon>)

    const icon = screen.getByTestId("Icon")
    expect(icon).toBeInTheDocument()
    expect(icon).toHaveStyle(`
      transform: rotate(-90deg);
    `)
  })
})