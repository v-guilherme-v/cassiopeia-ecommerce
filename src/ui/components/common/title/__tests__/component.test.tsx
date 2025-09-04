import { screen, render } from "@testing-library/react"
import { LightThemeProvider } from "@providers"
import lightTheme from "@ui/theme/styles/theme"

import Title from "../component"

describe("The title", () => {
  it("is a normal title", () => {
    render(
      <LightThemeProvider>
        <Title>Normal title</Title>
      </LightThemeProvider>
    )

    const title = screen.getByText("Normal title")
    expect(title).toBeInTheDocument()
  })

  it("is extra large", () => {
    render(
      <LightThemeProvider>
        <Title.ExtraLarge>Extra large title</Title.ExtraLarge>
      </LightThemeProvider>
    )

    const title = screen.getByText("Extra large title")
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

    const title = screen.getByText("Large title")
    expect(title).toBeInTheDocument()
    expect(title).toHaveStyle(`
        font-size: ${lightTheme.title.large.fontSize};
    `)
  })

  it("is small", () => {
    render(
      <LightThemeProvider>
        <Title.Small>Small title</Title.Small>
      </LightThemeProvider>
    )

    const title = screen.getByText("Small title")
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

    const title = screen.getByText("Extra small title")
    expect(title).toBeInTheDocument()
    expect(title).toHaveStyle(`
        font-size: ${lightTheme.title.extraSmall.fontSize};
    `)
  })
})