import { render, screen } from "@testing-library/react"
import { LightThemeProvider } from "@providers"
import ProductTags from "../widget"

describe("The ProductTags", () => {
  it("has two options, 35% off and free delivery", async () => {
    render(
      <LightThemeProvider>
        <ProductTags tags={[
          { name: "35% off", icon: <></> },
          { name: "free delivery", icon: <></> }
        ]} />
      </LightThemeProvider>
    )

    const off35Tag = screen.getByText("35% off")
    expect(off35Tag).toBeInTheDocument()
    const freeDeliveryTag = screen.getByText("free delivery")
    expect(freeDeliveryTag).toBeInTheDocument()
  })
})