import { render, screen } from "@testing-library/react";
import { LightThemeProvider } from "@providers"
import Carousel from "../component"

describe("The Carousel component...", () => {
  beforeAll(() => {
    // Reduced motion is deactivated
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation(() => ({
        matches: false
      }))
    })
  })

  it("renders nothing if no children is given", () => {
    // Turning on reduced motion
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation(() => ({
        matches: true
      }))
    })

    render(
      <LightThemeProvider>
        <Carousel children={[]}/>
      </LightThemeProvider>
    )

    expect(screen.queryByText("Child 1")).not.toBeInTheDocument()
  })

  it("renders a list of slides with navigation controls", () => {
    render(
      <LightThemeProvider>
        <Carousel
          // navigationControls will be a set of components 
          // that uses Swiper context to control navigation aspects
          navigationControls={
            <div>
              <button>prev</button>
              <button>next</button>
            </div>
          }
        >
          <span>Child 1</span>
          <span>Child 2</span>
        </Carousel>
      </LightThemeProvider>
    )

    expect(screen.getByText("Child 1")).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "next" })).toBeInTheDocument()
  })
})