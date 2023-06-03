import { screen, render, act, fireEvent } from "@testing-library/react"
import LightTheme from "@theme/variations/light"
import { LightContextProvider } from "@components/test.utils"

import Button, { StyledButton, ButtonSizes, ButtonModels, ButtonIconPositions } from "../index"
import { ThinArrow } from "@components/icons"

describe("The styled button", () => {
  it("renders its default values", () => {
    render(
      <LightContextProvider>
        <StyledButton>Styled button</StyledButton>
      </LightContextProvider>
    )

    const styledButton = screen.getByTestId(/StyledButton/)
    expect(styledButton).toBeInTheDocument()
    expect(styledButton).toHaveStyle(`
      background-color: ${LightTheme.color.primary}
    `)
  })
})

describe("The button", () => {
  it("renders in large size with an appended icon", () => {
    render(
      <LightContextProvider>
        <Button
          size={ButtonSizes.LARGE}
          icon={{ element: <ThinArrow /> }}
        >My button</Button>
      </LightContextProvider>
    )

    // to have the defaults + the large size
    const button = screen.getByTestId(/Button/)
    expect(button).toBeInTheDocument()
    expect(button).toHaveStyle(`
      background-color: ${LightTheme.color.primary};
      width: 200px;
    `)

    // and some indetermined icon
    expect(screen.getByTestId(/Icon/)).toBeInTheDocument()
  })

  it("is outlined and has a preppended icon", () => {
    render(
      <LightContextProvider>
        <Button
          model={ButtonModels.OUTLINED}
          icon={{
            element: <ThinArrow />,
            position: ButtonIconPositions.PREPEND
          }}
        >My button</Button>
      </LightContextProvider>
    )

    const button = screen.getByTestId(/Button/)
    expect(button).toBeInTheDocument()
    expect(button).toHaveStyle(`
      background-color: ${LightTheme.color.white};
      flex-direction: row-reverse;
    `)

    // and some indetermined icon
    expect(screen.getByTestId(/Icon/)).toBeInTheDocument()
  })

  it("is an icon, rounded and has some svg in it", () => {
    render(
      <LightContextProvider>
        <Button
          rounded={true}
          size={ButtonSizes.ICON}
          icon={{ element: <ThinArrow /> }}
        >My button</Button>
      </LightContextProvider>
    )

    const button = screen.getByTestId(/Button/)
    expect(button).toBeInTheDocument()
    expect(button).toHaveStyle(`
      background-color: ${LightTheme.color.primary};
      border-radius: 50%;
    `)

    // and some indetermined icon
    expect(screen.getByTestId(/Icon/)).toBeInTheDocument()
  })

  it("has some action to be performed on click", async () => {
    const onClick = jest.fn()

    render(
      <LightContextProvider>
        <Button onClick={onClick}>My button</Button>
      </LightContextProvider>
    )

    const button = screen.getByTestId(/Button/)
    expect(button).toBeInTheDocument()

    await act(() => fireEvent.click(button))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it("has icon size and is outlined", () => {
    render(
      <LightContextProvider>
        <Button model={ButtonModels.OUTLINED} size={ButtonSizes.ICON} icon={{ element: <ThinArrow /> }}>My button</Button>
      </LightContextProvider>
    )

    const button = screen.getByTestId(/Button/)
    expect(button).toBeInTheDocument()
    expect(button).toHaveStyle(`
      background-color: ${LightTheme.color.white};
      border: 1px solid ${LightTheme.color.lightGrey};
    `)
    expect(screen.getByTestId(/Icon/)).toBeInTheDocument()
  })
})