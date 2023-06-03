import { act, fireEvent, render, screen } from "@testing-library/react"
import { LightContextProvider } from "@components/test.utils"
import Checkbox from "../component"

describe("The checkbox", () => {
  it("is not checked", () => {
    render(
      <LightContextProvider>
        <Checkbox checked={false} onChange={jest.fn()}/>
      </LightContextProvider>
    )

    const checkbox: HTMLInputElement = screen.getByTestId("Checkbox")
    expect(checkbox.checked).toEqual(false)
  })

  it("calls its onChange method and rerenders with checked state", () => {
    const onChange = jest.fn()

    const { rerender } = render(
      <LightContextProvider>
        <Checkbox onChange={onChange}/>
      </LightContextProvider>
    )

    const checkbox: HTMLInputElement = screen.getByTestId("Checkbox")
    expect(checkbox.checked).toEqual(false)

    act(() => {
      fireEvent.click(checkbox)
    })

    expect(onChange).toBeCalledTimes(1)
    rerender(
      <LightContextProvider>
        <Checkbox checked={true} onChange={onChange}/>
      </LightContextProvider>
    )
    expect(checkbox.checked).toEqual(true)
  })
})