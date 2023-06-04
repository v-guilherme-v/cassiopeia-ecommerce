import { screen, render } from "@testing-library/react"
import Text from "../component"
import { LightThemeProvider } from "@components/test.utils"
import lightTheme from "@theme/variations/light"

describe("The text", () => {
  it("is in default format", () => {
    render(
      <LightThemeProvider>
        <Text>My text</Text>
      </LightThemeProvider>
    )
    const text = screen.getByTestId(/StyledText/)
    expect(text).toBeInTheDocument()
  })

  it("is a caption", () => {
    render(
      <LightThemeProvider>
        <Text.Caption>My caption</Text.Caption>
      </LightThemeProvider>
    )
    const text = screen.getByTestId(/StyledText/)
    expect(text).toBeInTheDocument()
    expect(text).toHaveStyle(`
      font-size: ${lightTheme.text.caption.fontSize}
    `)
  })

  it("is for buttons", () => {
    render(
      <LightThemeProvider>
        <Text.Button>My button text</Text.Button>
      </LightThemeProvider>
    )
    const text = screen.getByTestId(/StyledText/)
    expect(text).toBeInTheDocument()
    expect(text).toHaveStyle(`
      font-size: ${lightTheme.text.button.fontSize}
    `)
  })

  it("is a large text", () => {
    render(
      <LightThemeProvider>
        <Text.Large>My large text</Text.Large>
      </LightThemeProvider>
    )
    const text = screen.getByTestId(/StyledText/)
    expect(text).toBeInTheDocument()
    expect(text).toHaveStyle(`
      font-size: ${lightTheme.text.large.fontSize}
    `)
  })

  it("is a strike text type", () => {
    render(
      <LightThemeProvider>
        <Text.Strike>My strike text</Text.Strike>
      </LightThemeProvider>
    )
    const text = screen.getByTestId(/StyledText/)
    expect(text).toBeInTheDocument()
    expect(text).toHaveStyle(`
      font-size: ${lightTheme.text.strike.fontSize}
    `)
  })

  it("is a strike large text type", () => {
    render(
      <LightThemeProvider>
        <Text.StrikeLarge>My strike large text</Text.StrikeLarge>
      </LightThemeProvider>
    )
    const text = screen.getByTestId(/StyledText/)
    expect(text).toBeInTheDocument()
    expect(text).toHaveStyle(`
      font-size: ${lightTheme.text.strikeLarge.fontSize}
    `)
  })
})