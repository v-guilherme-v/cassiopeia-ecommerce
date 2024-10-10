import { render, screen, fireEvent } from "@testing-library/react"
import { LightThemeProvider } from "@ui/providers"

import MobileNavigation from "../widget"
import { categoriesMock } from "@widgets/__mocks__"

describe("The MobileNavigation widget", () => {
  it("allows navigating through children", () => {
    render(
      <LightThemeProvider>
        <MobileNavigation categories={categoriesMock}/>
      </LightThemeProvider>
    )

    const flowersCategoryLink = screen.getByText("Flowers")
    expect(flowersCategoryLink).toBeInTheDocument()

    // Flowers have children, there will be a button to navigate to them
    const flowersCategoryChildrenBtn = screen.getByLabelText("Flowers children button")
    expect(flowersCategoryChildrenBtn).toBeInTheDocument()
    fireEvent.click(flowersCategoryChildrenBtn)

    // Children categories are visible now
    const daisiesCategoryLink = screen.getByText("Daisies")
    expect(daisiesCategoryLink).toBeInTheDocument()

    // Daisies category have children too
    const daisiesCategoryChildrenBtn = screen.getByLabelText("Daisies children button")
    expect(daisiesCategoryChildrenBtn).toBeInTheDocument()
    fireEvent.click(daisiesCategoryChildrenBtn)

    // Daisies sub categories are visible now
    const subDaisiesCategoryLink = screen.getAllByText("Sub Daisies")
    expect(subDaisiesCategoryLink[0]).toBeInTheDocument()

    // User might want to navigate back
    const daisiesParentCategoryBtn = screen.getByLabelText("Daisies parent category button")
    expect(daisiesParentCategoryBtn).toBeInTheDocument()
    fireEvent.click(daisiesParentCategoryBtn)

    // Previous categories should be visible again
    const prevDaisiesCategoryLink = screen.getByText("Daisies")
    expect(prevDaisiesCategoryLink).toBeInTheDocument()

    // Going back to root categories
    const flowersParentCategoryBtn = screen.getByLabelText("Flowers parent category button")
    expect(flowersParentCategoryBtn).toBeInTheDocument()
    fireEvent.click(flowersParentCategoryBtn)

    // On root categories again
    const prevFlowersCategoryLink = screen.getByText("Flowers")
    expect(prevFlowersCategoryLink).toBeInTheDocument()
  })
})