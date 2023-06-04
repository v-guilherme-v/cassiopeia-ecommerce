import { screen, render, act, fireEvent } from "@testing-library/react"
import LightTheme from "@theme/variations/light"
import { LightThemeProvider } from "@components/test.utils"

import Button, { StyledButton, ButtonSizes, ButtonModels, ButtonIconPositions } from "../index"
import { ThinArrow } from "@components/icons"

describe("The styled button", () => {
  it("renders its default values", () => {
    render(
      <LightThemeProvider>
        <StyledButton>Styled button</StyledButton>
      </LightThemeProvider>
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
      <LightThemeProvider>
        <Button
          size={ButtonSizes.LARGE}
          icon={{ element: <ThinArrow /> }}
        >My button</Button>
      </LightThemeProvider>
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
      <LightThemeProvider>
        <Button
          model={ButtonModels.OUTLINED}
          icon={{
            element: <ThinArrow />,
            position: ButtonIconPositions.PREPEND
          }}
        >My button</Button>
      </LightThemeProvider>
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
      <LightThemeProvider>
        <Button
          rounded={true}
          size={ButtonSizes.ICON}
          icon={{ element: <ThinArrow /> }}
        >My button</Button>
      </LightThemeProvider>
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
      <LightThemeProvider>
        <Button onClick={onClick}>My button</Button>
      </LightThemeProvider>
    )

    const button = screen.getByTestId(/Button/)
    expect(button).toBeInTheDocument()

    await act(() => fireEvent.click(button))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it("has icon size and is outlined", () => {
    render(
      <LightThemeProvider>
        <Button model={ButtonModels.OUTLINED} size={ButtonSizes.ICON} icon={{ element: <ThinArrow /> }}>My button</Button>
      </LightThemeProvider>
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