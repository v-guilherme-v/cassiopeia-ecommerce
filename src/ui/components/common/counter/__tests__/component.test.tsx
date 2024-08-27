import { screen, render, act, fireEvent } from "@testing-library/react"
import { LightThemeProvider } from "@providers"
import Counter from "../component"

describe("The counter", () => {
  it("has an initial quantity of 1 but minimum quantity is 3", async () => {
    render(
      <LightThemeProvider>
        <Counter
          minQuantity={3}
          initialQuantity={1}
          onQuantityChange={jest.fn()}
        />
      </LightThemeProvider>
    )

    const counterInput: HTMLInputElement =
      screen.getByRole("textbox")

    expect(counterInput).toBeInTheDocument()
    expect(counterInput.value).toBe("3")
  })

  it("has an initial quantity of 7 but maximum quantity is 5", async () => {
    render(
      <LightThemeProvider>
        <Counter
          maxQuantity={5}
          initialQuantity={7}
          onQuantityChange={jest.fn()}
        />
      </LightThemeProvider>
    )

    const counterInput: HTMLInputElement =
      screen.getByRole("textbox")

    expect(counterInput).toBeInTheDocument()
    expect(counterInput.value).toBe("5")
  })

  it("is on screen and change its quantity", async () => {
    const onQuantityChange = jest.fn()

    render(
      <LightThemeProvider>
        <Counter onQuantityChange={onQuantityChange} />
      </LightThemeProvider>
    )

    const counterInput: HTMLInputElement =
      screen.getByRole("textbox")

    expect(counterInput).toBeInTheDocument()
    expect(counterInput.value).toBe("1")

    const counterSumButton: HTMLButtonElement =
      screen.getByRole("button", { name: "sum" })

    expect(counterSumButton).toBeInTheDocument()

    await act(() => fireEvent.click(counterSumButton))
    expect(counterInput.value).toBe("2")
    expect(onQuantityChange).toHaveBeenCalled()

    const counterDiffButton: HTMLButtonElement =
      screen.getByRole("button", { name: "difference" })

    await act(() => fireEvent.click(counterDiffButton))
    expect(counterInput.value).toBe("1")
    expect(onQuantityChange).toHaveBeenCalled()
  })
})