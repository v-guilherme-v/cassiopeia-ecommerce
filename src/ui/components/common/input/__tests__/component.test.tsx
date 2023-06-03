import { act, fireEvent, render, screen } from "@testing-library/react"
import { LightContextProvider } from "@components/test.utils"

import Input from "../component"

describe("The input", () => {
  it("is default, has a value and a name", () => {
    render(
      <LightContextProvider>
        <Input name="input" value="My input" onChange={jest.fn()}/>
      </LightContextProvider>
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
      <LightContextProvider>
        <Input.Inline name="input" value={value} onChange={onChange}/>
      </LightContextProvider>
    )

    const input: HTMLInputElement = screen.getByTestId("Input")
    expect(input.value).toEqual("My input")

    await act(() => fireEvent.change(input, { target: { value: "Some text" } }))
    rerender(
      <LightContextProvider>
        <Input.Inline name="input" value={value} onChange={onChange}/>
      </LightContextProvider>
    )
    expect(input.value).toEqual("Some text")
  })
})