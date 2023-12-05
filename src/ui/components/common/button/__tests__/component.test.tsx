import { screen, render, act, fireEvent } from "@testing-library/react"
import LightTheme from "@theme/styles/light"
import { LightThemeProvider } from "@providers"

import Button, { StyledButton, ButtonSizes, ButtonModels, ButtonIconPositions } from "../index"
import { ThinArrowIcon } from "@components/icons"

describe("The styled button", () => {
  it("renders its default values", () => {
    render(
      <LightThemeProvider>
        <StyledButton.Normal>Styled button</StyledButton.Normal>
      </LightThemeProvider>
    )

    const styledButton = screen.getByText("Styled button")
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
          icon={{ element: <ThinArrowIcon data-testid="Icon" /> }}
        >My button</Button>
      </LightThemeProvider>
    )

    // to have the defaults + the large size
    const button = screen.getByRole("button")
    expect(button).toBeInTheDocument()
    expect(button).toHaveStyle(`
      background-color: ${LightTheme.color.primary};
      width: 200px;
    `)

    expect(screen.getByTestId("Icon")).toBeInTheDocument()
  })

  it("is outlined and has a preppended icon", () => {
    render(
      <LightThemeProvider>
        <Button
          model={ButtonModels.OUTLINED}
          icon={{
            element: <ThinArrowIcon data-testid="Icon"/>,
            position: ButtonIconPositions.PREPEND
          }}
        >My button</Button>
      </LightThemeProvider>
    )

    const button = screen.getByRole("button")
    expect(button).toBeInTheDocument()
    expect(button).toHaveStyle(`
      background-color: ${LightTheme.color.white};
      flex-direction: row-reverse;
    `)

    expect(screen.getByTestId("Icon")).toBeInTheDocument()
  })

  it("is an icon, rounded and has some svg in it", () => {
    render(
      <LightThemeProvider>
        <Button
          rounded={true}
          size={ButtonSizes.ICON}
          icon={{ element: <ThinArrowIcon data-testid="Icon" /> }}
        >My button</Button>
      </LightThemeProvider>
    )

    const button = screen.getByRole("button")
    expect(button).toBeInTheDocument()
    expect(button).toHaveStyle(`
      background-color: ${LightTheme.color.primary};
      border-radius: 50%;
    `)

    expect(screen.getByTestId("Icon")).toBeInTheDocument()
  })

  it("has some action to be performed on click", async () => {
    const onClick = jest.fn()

    render(
      <LightThemeProvider>
        <Button onClick={onClick}>My button</Button>
      </LightThemeProvider>
    )

    const button = screen.getByRole("button")
    expect(button).toBeInTheDocument()

    await act(() => fireEvent.click(button))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it("has icon size and is outlined", () => {
    render(
      <LightThemeProvider>
        <Button model={ButtonModels.OUTLINED}
          size={ButtonSizes.ICON}
          icon={{ element: <ThinArrowIcon data-testid="Icon" /> }}>My button</Button>
      </LightThemeProvider>
    )

    const button = screen.getByRole("button")
    expect(button).toBeInTheDocument()
    expect(button).toHaveStyle(`
      background-color: ${LightTheme.color.white};
      border: 1px solid ${LightTheme.color.lightGrey};
    `)

    expect(screen.getByTestId("Icon")).toBeInTheDocument()
  })

  it("has a custom background color", () => {
    render(
      <LightThemeProvider>
        <Button backgroundColor="#000">My button</Button>
      </LightThemeProvider>
    )

    const button = screen.getByRole("button")
    expect(button).toHaveStyle("background-color: #000;")
  })
})