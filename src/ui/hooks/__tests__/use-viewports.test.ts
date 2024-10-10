import { renderHook } from "@testing-library/react"
import { useTheme } from "styled-components"
import { useMediaQuery } from "react-responsive"
import { useViewPorts } from "../use-viewports"

jest.mock("styled-components", () => ({
  useTheme: jest.fn()
}))

jest.mock("react-responsive", () => ({
  useMediaQuery: jest.fn()
}))

describe("useViewPorts", () => {
  const mockTheme = {
    viewPorts: {
      extraLarge: "1200px",
      large: "992px",
      medium: "768px",
      small: "576px"
    }
  }

  beforeEach(() => {
    (useTheme as jest.Mock).mockReturnValue(mockTheme)
  })

  it("should return correct values for various viewport sizes", () => {
    (useMediaQuery as jest.Mock)
      .mockReturnValueOnce(true) // maxWidthSmall
      .mockReturnValueOnce(false) // minWidthSmall
      .mockReturnValueOnce(false) // maxWidthMedium
      .mockReturnValueOnce(true) // maxWidthLarge
      .mockReturnValueOnce(false) // maxWidthExtraLarge

    const { result } = renderHook(() => useViewPorts())

    expect(result.current).toEqual({
      maxWidthSmall: true,
      minWidthMedium: false,
      maxWidthMedium: false,
      maxWidthLarge: true,
      maxWidthExtraLarge: false
    })
  })
})