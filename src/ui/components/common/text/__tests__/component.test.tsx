import { screen, render } from "@testing-library/react"
import Text from "../component"
import { LightThemeProvider } from "@providers"
import lightTheme from "@theme/styles/light"

describe("The text", () => {
  it("is in default format", () => {
    render(
      <LightThemeProvider>
        <Text>My text</Text>
      </LightThemeProvider>
    )
    const text = screen.getByText("My text")
    expect(text).toBeInTheDocument()
  })

  it("is a caption", () => {
    render(
      <LightThemeProvider>
        <Text.Caption>My caption</Text.Caption>
      </LightThemeProvider>
    )
    const text = screen.getByText("My caption")
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
    const text = screen.getByText("My button text")
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
    const text = screen.getByText("My large text")
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
    const text = screen.getByText("My strike text")
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
    const text = screen.getByText("My strike large text")
    expect(text).toBeInTheDocument()
    expect(text).toHaveStyle(`
      font-size: ${lightTheme.text.strikeLarge.fontSize}
    `)
  })
})