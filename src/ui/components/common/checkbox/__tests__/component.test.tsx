import { act, fireEvent, render, screen } from "@testing-library/react"
import { LightThemeProvider } from "@components/test.utils"
import Checkbox from "../component"

describe("The checkbox", () => {
  it("is not checked", () => {
    render(
      <LightThemeProvider>
        <Checkbox checked={false} onChange={jest.fn()}/>
      </LightThemeProvider>
    )

    const checkbox: HTMLInputElement = screen.getByTestId("Checkbox")
    expect(checkbox.checked).toEqual(false)
  })

  it("calls its onChange method and rerenders with checked state", () => {
    const onChange = jest.fn()

    const { rerender } = render(
      <LightThemeProvider>
        <Checkbox onChange={onChange}/>
      </LightThemeProvider>
    )

    const checkbox: HTMLInputElement = screen.getByTestId("Checkbox")
    expect(checkbox.checked).toEqual(false)

    act(() => {
      fireEvent.click(checkbox)
    })

    expect(onChange).toBeCalledTimes(1)
    rerender(
      <LightThemeProvider>
        <Checkbox checked={true} onChange={onChange}/>
      </LightThemeProvider>
    )
    expect(checkbox.checked).toEqual(true)
  })
})