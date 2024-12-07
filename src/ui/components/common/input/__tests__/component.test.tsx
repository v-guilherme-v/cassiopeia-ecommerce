import { act, fireEvent, render, screen } from "@testing-library/react"
import { LightThemeProvider } from "@providers"

import Input from "../component"

describe("The input", () => {
  it("is default, has a value and a name", () => {
    render(
      <LightThemeProvider>
        <Input name="input" value="My input" onChange={jest.fn()}/>
      </LightThemeProvider>
    )

    const input: HTMLInputElement = screen.getByTestId("Input")
    expect(input.value).toEqual("My input")
  })

  it("is an inline style input and change its contents", async () => {
    // since state is controlled by the parent
    // we need to simulate some setState changes
    const onChange = jest.fn(event => {
      value = event.target.value
    })

    let value = "My input"
    const { rerender } = render(
      <LightThemeProvider>
        <Input.Inline name="input" value={value} onChange={onChange}/>
      </LightThemeProvider>
    )

    const input: HTMLInputElement = screen.getByTestId("Input")
    expect(input.value).toEqual("My input")

    await act(() => fireEvent.change(input, { target: { value: "Some text" } }))
    rerender(
      <LightThemeProvider>
        <Input.Inline name="input" value={value} onChange={onChange}/>
      </LightThemeProvider>
    )
    expect(input.value).toEqual("Some text")
  })

  it("is an input with a validator", () => {
    const { rerender } = render(
      <LightThemeProvider>
        <Input.Validator name="input" />
      </LightThemeProvider>
    )

    rerender(
      <LightThemeProvider>
        <Input.Validator name="input" showValidator={true} />
      </LightThemeProvider>
    )

    rerender(
      <LightThemeProvider>
        <Input.Validator name="input" showValidator={true} isValid={true} />
      </LightThemeProvider>
    )
  })
})