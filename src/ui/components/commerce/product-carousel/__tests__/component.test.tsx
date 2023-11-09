import { fireEvent, render, screen } from "@testing-library/react"

import ProductCarousel from "../component"
import ProductCarouselNavigationControls from "../components/product-carousel-navigation-controls/component"

import { SwiperContext, type SwiperContextType } from "@contexts"
import { LightThemeProvider } from "@providers"

describe("The product carousel", () => {
  it("render a product card as content", () => {
    const carouselTitle = "Recently bought"

    render(
      <LightThemeProvider>
        <ProductCarousel
          carouselTitle={carouselTitle}
          products={[ {
            id: "flower-1",
            displayName: "Flower 1"
          } ]}
        />
      </LightThemeProvider>
    )

    expect(screen.getByText(carouselTitle)).toBeInTheDocument()
  })

  it("returns null for an empty array of products", () => {
    render(
      <LightThemeProvider>
        <ProductCarousel />
      </LightThemeProvider>
    )

    expect(screen.queryByText("No title")).not.toBeInTheDocument()
  })
})

describe("The product carousel nav buttons", () => {
  it("render properly", () => {
    const swiperCommonContext: SwiperContextType = {
      swiperInstance: null,
      onSwiper: jest.fn(),
      onNavigationClick: jest.fn(),
      onAutoplay: jest.fn()
    }

    render(
      <LightThemeProvider>
        <SwiperContext.Provider value={swiperCommonContext}>
          <ProductCarouselNavigationControls />
        </SwiperContext.Provider>
      </LightThemeProvider>
    )

    /** It doesn't matter which button, because they call the same function */
    const navigationButtons = screen.getAllByRole("button")

    navigationButtons.forEach(navigationButton => {
      fireEvent.click(navigationButton)
    })

    expect(swiperCommonContext.onNavigationClick).toBeCalledTimes(2)
  })
})