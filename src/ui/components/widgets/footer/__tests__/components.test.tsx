import { render, screen } from "@testing-library/react"
import { LightThemeProvider } from "@providers"

import { FooterLinks, FooterInfo } from "../components"
import { FooterLinksColumn } from "../components/footer-links/component"

describe("The footer links section", () => {
  it("has some links", () => {
    const sections = [
      {
        sectionName: "Help",
        linksList: [
          { label: "Call us", route: "/callus" }
        ]
      }
    ]

    render(
      <LightThemeProvider>
        <FooterLinks sections={sections} />
      </LightThemeProvider>
    )

    expect(screen.getByText("Call us")).toBeInTheDocument()
  })
})

describe("The footer info section", () => {
  it("render its default content`", () => {
    render(
      <LightThemeProvider>
        <FooterInfo />
      </LightThemeProvider>
    )

    expect(screen.getByText("Footer")).toBeInTheDocument()
  })
})

describe("The footer links column", () => {
  it("render its default content`", () => {
    render(
      <LightThemeProvider>
        <FooterLinksColumn />
      </LightThemeProvider>
    )

    expect(screen.getByText("Section name")).toBeInTheDocument()
  })
})