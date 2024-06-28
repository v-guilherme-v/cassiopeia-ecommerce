import { screen, render } from "@testing-library/react"
import { LightThemeProvider } from "@providers"

import ProductCardWrapper from "../component"
import { EProductCardAlignStyles } from "../types"

import { useDeviceSettings, type IUseDeviceSettings } from "@ui/utils"

jest.mock("@ui/utils", () => ({
  useDeviceSettings: jest.fn()
}))

const mockedDeviceSettings = useDeviceSettings as jest.MockedFunction<() => IUseDeviceSettings>

describe("The product card component", () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it("renders without image", () => {
    mockedDeviceSettings.mockReturnValueOnce({
      isTablet: true,
      isMobile: false
    })

    render(
      <LightThemeProvider>
        <ProductCardWrapper product={{ displayName: "Flower 1" }}/>
      </LightThemeProvider>
    )

    const productDisplayName = screen.getByText("Flower 1")
    expect(productDisplayName).toBeInTheDocument()
  })

  it("renders without a name", () => {
    render(
      <LightThemeProvider>
        <ProductCardWrapper product={{}} alignment={EProductCardAlignStyles.ALIGNED_LEFT} />
      </LightThemeProvider>
    )

    const productDisplayName = screen.getByText("Name")
    expect(productDisplayName).toBeInTheDocument()
  })
})