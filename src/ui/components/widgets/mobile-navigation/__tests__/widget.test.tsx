import { render, screen, fireEvent } from "@testing-library/react"
import { LightThemeProvider } from "@ui/providers"

import MobileNavigation from "../widget"
import { categoriesMock } from "@widgets/__mocks__"

describe("The MobileNavigation widget", () => {
  it("allows navigating through children", async () => {
    render(
      <LightThemeProvider>
        <MobileNavigation categories={categoriesMock}/>
      </LightThemeProvider>
    )

    const flowersCategoryLink = await screen.findByText("Flowers")
    expect(flowersCategoryLink).toBeInTheDocument()

    // Flowers have children, there will be a button to navigate to them
    const flowersCategoryChildrenBtn = await screen.findByLabelText("Flowers children button")
    expect(flowersCategoryChildrenBtn).toBeInTheDocument()
    fireEvent.click(flowersCategoryChildrenBtn)

    // Children categories are visible now
    const daisiesCategoryLink = await screen.findByText("Daisies")
    expect(daisiesCategoryLink).toBeInTheDocument()

    // Daisies category have children too
    const daisiesCategoryChildrenBtn = await screen.findByLabelText("Daisies children button")
    expect(daisiesCategoryChildrenBtn).toBeInTheDocument()
    fireEvent.click(daisiesCategoryChildrenBtn)

    // Daisies sub categories are visible now
    const subDaisiesCategoryLink = await screen.findAllByText("Sub Daisies")
    expect(subDaisiesCategoryLink[0]).toBeInTheDocument()

    // User might want to navigate back
    const daisiesParentCategoryBtn = await screen.findByLabelText("Daisies parent category button")
    expect(daisiesParentCategoryBtn).toBeInTheDocument()
    fireEvent.click(daisiesParentCategoryBtn)

    // Previous categories should be visible again
    const prevDaisiesCategoryLink = await screen.findByText("Daisies")
    expect(prevDaisiesCategoryLink).toBeInTheDocument()

    // Going back to root categories
    const flowersParentCategoryBtn = await screen.findByLabelText("Flowers parent category button")
    expect(flowersParentCategoryBtn).toBeInTheDocument()
    fireEvent.click(flowersParentCategoryBtn)

    // On root categories again
    const prevFlowersCategoryLink = await screen.findByText("Flowers")
    expect(prevFlowersCategoryLink).toBeInTheDocument()
  })
})
