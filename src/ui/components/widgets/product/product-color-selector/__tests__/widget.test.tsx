import { render, screen, act, fireEvent } from "@testing-library/react"
import { LightThemeProvider } from "@providers"
import ProductColorSelector from "../widget"

describe("The ProductColorSelector", () => {
  it("has options and one of them is selected", async () => {
    render(
      <LightThemeProvider>
        <ProductColorSelector
          colorOptions={[ { id: "red", value: "#f00" } ]}
        />
      </LightThemeProvider>
    )

    const redColorOption: HTMLInputElement =
      screen.getByRole("radio", { name: "red" })
    expect(redColorOption).toBeInTheDocument()
    expect(redColorOption).toHaveStyle(`
      backgroundColor: #f00
    `)

    await act(() => fireEvent.click(redColorOption))
    // It means is selected
    expect(redColorOption).toHaveStyle(`
      outline: 2px solid #000000;
      border: 2px solid #FFFFFF;
    `)
  })
})