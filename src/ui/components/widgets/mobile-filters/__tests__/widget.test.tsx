import { fireEvent, render, screen } from "@testing-library/react"
import MobileFilters from "../widget"

import { MobileFiltersContext } from "@contexts"
import { LightThemeProvider, MobileFiltersContextProvider } from "@providers"

describe("The mobile filters widget", () => {
  it("is open when toggle is clicked for the first time", () => {
    render(
      <LightThemeProvider>
        <MobileFiltersContextProvider>
          <MobileFiltersContext.Consumer>
            {context => (
              <button onClick={() => context?.toggleMobileFilters()}>
                Toggle filters
              </button>
            )}
          </MobileFiltersContext.Consumer>
          <MobileFilters></MobileFilters>
        </MobileFiltersContextProvider>
      </LightThemeProvider>
    )

    const toggleFiltersButton = screen.getByText("Toggle filters")
    fireEvent.click(toggleFiltersButton)

    expect(screen.getByText("Filters", { exact: true })).toBeVisible()
  })

  it("is open when toggle is clicked for the first time 1", () => {
    render(
      <LightThemeProvider>
        <MobileFiltersContextProvider>
          <MobileFiltersContext.Consumer>
            {context => (
              <button onClick={() => context?.toggleMobileFilters()}>
                Toggle filters
              </button>
            )}
          </MobileFiltersContext.Consumer>
          <MobileFilters></MobileFilters>
        </MobileFiltersContextProvider>
      </LightThemeProvider>
    )

    const toggleFiltersButton = screen.getByText("Toggle filters")
    fireEvent.click(toggleFiltersButton)

    expect(screen.getByText("Filters", { exact: true })).toBeVisible()
    const brandNewFilterOption = screen.getByText("Brand new")
    fireEvent.click(brandNewFilterOption)
  })
})