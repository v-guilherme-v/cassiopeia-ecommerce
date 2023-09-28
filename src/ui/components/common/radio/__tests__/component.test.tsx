import { act, fireEvent, render, screen } from "@testing-library/react"
import { LightThemeProvider } from "@providers"

import Radio from "../component"
import { type RadioProps } from "../types"

const ComponentWrapper = (props: RadioProps): JSX.Element => {
  return (
    <LightThemeProvider>
      <Radio {...props} />
    </LightThemeProvider>
  )
}

describe("The radio", () => {
  it("has nothing in it", () => {
    render(<ComponentWrapper value="my-radio" onChange={jest.fn()}/>)
    const radio: HTMLInputElement = screen.getByTestId("Radio")
    expect(radio.checked).toBe(false)
  })

  it("changes its state to checked", async () => {
    const onChange = jest.fn(event => {
      isChecked = event.target.checked
    })

    let isChecked = false
    const { rerender } = render(<ComponentWrapper value="my-radio" checked={isChecked} onChange={onChange} />)

    const radio: HTMLInputElement = screen.getByTestId("Radio")
    expect(radio.checked).toBe(false)

    await act(() => fireEvent.click(radio))
    expect(onChange).toBeCalledTimes(1)

    rerender(<ComponentWrapper value="my-radio" checked={isChecked} onChange={onChange} />)
    expect(radio.checked).toBe(true)
  })
})