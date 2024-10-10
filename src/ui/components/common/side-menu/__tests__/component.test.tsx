import { render, screen } from "@testing-library/react"
import { LightThemeProvider } from "@providers"

import SideMenu from "../component"

describe("The SideMenu component", () => {
  it("is initially hidden and comes from right", () => {
    const { rerender } = render(
      <LightThemeProvider>
        <SideMenu
          isOpen={false}
          animationDirection="right"
        >
          SideMenu
        </SideMenu>
      </LightThemeProvider>
    )

    const sideMenu = screen.getByText("SideMenu")
    expect(sideMenu).not.toBeVisible()

    rerender(
      <LightThemeProvider>
        <SideMenu
          isOpen={true}
          animationDirection="right"
        >
          SideMenu
        </SideMenu>
      </LightThemeProvider>
    )

    expect(sideMenu).toBeVisible()
  })

  it("is initially open and comes from left", () => {
    const { rerender } = render(
      <LightThemeProvider>
        <SideMenu
          isOpen={true}
          animationDirection="left"
        >
          SideMenu
        </SideMenu>
      </LightThemeProvider>
    )

    const sideMenu = screen.getByText("SideMenu")
    expect(sideMenu).toBeVisible()

    rerender(
      <LightThemeProvider>
        <SideMenu
          isOpen={false}
          animationDirection="left"
        >
          SideMenu
        </SideMenu>
      </LightThemeProvider>
    )

    expect(sideMenu).not.toBeVisible()
  })
})