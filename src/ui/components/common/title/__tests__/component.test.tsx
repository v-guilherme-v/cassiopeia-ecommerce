import { screen, render } from "@testing-library/react"
import Title from "../component"
import { LightThemeProvider } from "@components/test.utils"
import lightTheme from "@theme/variations/light"

describe("The title", () => {
  it("is raw", () => {
    render(
      <LightThemeProvider>
        <Title></Title>
      </LightThemeProvider>
    )
    const title = screen.getByText("Raw title")
    expect(title).toBeInTheDocument()
  })

  it("is extra large", () => {
    render(
      <LightThemeProvider>
        <Title.ExtraLarge>Extra large title</Title.ExtraLarge>
      </LightThemeProvider>
    )
    const title = screen.getByTestId(/StyledTitle/)
    expect(title).toBeInTheDocument()
    expect(title).toHaveStyle(`
        font-size: ${lightTheme.title.extraLarge.fontSize};
    `)
  })

  it("is large", () => {
    render(
      <LightThemeProvider>
        <Title.Large>Large title</Title.Large>
      </LightThemeProvider>
    )
    const title = screen.getByTestId(/StyledTitle/)
    expect(title).toBeInTheDocument()
    expect(title).toHaveStyle(`
        font-size: ${lightTheme.title.large.fontSize};
    `)
  })

  it("is medium", () => {
    render(
      <LightThemeProvider>
        <Title.Medium>Medium title</Title.Medium>
      </LightThemeProvider>
    )
    const title = screen.getByTestId(/StyledTitle/)
    expect(title).toBeInTheDocument()
    expect(title).toHaveStyle(`
        font-size: ${lightTheme.title.medium.fontSize};
    `)
  })

  it("is small", () => {
    render(
      <LightThemeProvider>
        <Title.Small>Small title</Title.Small>
      </LightThemeProvider>
    )
    const title = screen.getByTestId(/StyledTitle/)
    expect(title).toBeInTheDocument()
    expect(title).toHaveStyle(`
        font-size: ${lightTheme.title.small.fontSize};
    `)
  })

  it("is extra small", () => {
    render(
      <LightThemeProvider>
        <Title.ExtraSmall>Extra small title</Title.ExtraSmall>
      </LightThemeProvider>
    )
    const title = screen.getByTestId(/StyledTitle/)
    expect(title).toBeInTheDocument()
    expect(title).toHaveStyle(`
        font-size: ${lightTheme.title.extraSmall.fontSize};
    `)
  })
})