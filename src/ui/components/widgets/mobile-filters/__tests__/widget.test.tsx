import { fireEvent, render, screen } from "@testing-library/react"
import MobileFilters from "../widget"

import { MobileFiltersContext } from "@contexts"
import { LightThemeProvider } from "@providers"

describe("The mobile filters widget", () => {
  it("calls its toggle visibility function", () => {
    const providerContext = {
      isFilterMenuOpen: true,
      toggleMobileFilters: jest.fn()
    }

    render(
      <LightThemeProvider>
        <MobileFiltersContext.Provider value={providerContext}>
          <MobileFilters />
        </MobileFiltersContext.Provider>
      </LightThemeProvider>
    )

    const filterDismissAction = screen.getByText("Filters", { exact: true })
    expect(filterDismissAction).toBeVisible()
    fireEvent.click(filterDismissAction)
    expect(providerContext.toggleMobileFilters).toBeCalled()

    // TODO: It's now clicked to cover the current component state tests,
    // but in future this test should expect something back from this call
    const brandNewFilterOption = screen.getByText("Brand new")
    fireEvent.click(brandNewFilterOption)
  })
})