import { render, screen } from "@testing-library/react"
import { LightThemeProvider } from "@providers"

import Breadcrumbs from "../widget"

describe("The breadcrumbs", () => {
  it("has two levels", () => {
    render(
      <LightThemeProvider>
        <Breadcrumbs breadcrumbs={[
          { name: "Level 1", route: "level-1" },
          { name: "Level 2", route: "level-2" }
        ]} />
      </LightThemeProvider>
    )

    expect(screen.getByText("Level 1")).toBeInTheDocument()
    expect(screen.getByText("Level 2")).toBeInTheDocument()
  })

  it("is in title mode", () => {
    render(
      <LightThemeProvider>
        <Breadcrumbs displayMode="title" breadcrumbs={[
          { name: "Level 1", route: "level-1" },
          { name: "Level 2", route: "level-2" }
        ]} />
      </LightThemeProvider>
    )

    expect(screen.getByText("Level 1")).toBeInTheDocument()
    const titleBreadcrumb = screen.getByText("Level 2")
    expect(titleBreadcrumb).toBeInTheDocument()
    expect(titleBreadcrumb).toHaveStyle(`
      font-size: 2rem;
    `)
  })
})