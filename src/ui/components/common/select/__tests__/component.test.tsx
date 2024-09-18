import { fireEvent, render, screen } from "@testing-library/react"
import { LightThemeProvider } from "@providers"
import Select from "../component"

describe("The Select component", () => {
  it("is single select type and has some selectable fruits", () => {
    const onSelectChange = jest.fn()
    render(
      <LightThemeProvider>
        <Select placeholder="Fruits"
          onChange={onSelectChange}
          options={[
            { label: "Apple", value: "apple" },
            { label: "Strawberry", value: "strawberry" },
            { label: "Banana", value: "banana" },
            { label: "Grape", value: "grape" }
          ]}/>
      </LightThemeProvider>
    )

    const selectBox = screen.getByTestId("Select__Box")
    fireEvent.click(selectBox)
    // Popup appears on the screen and options are visible
    const appleSelectOption = screen.getByText("Apple")
    fireEvent.mouseDown(appleSelectOption)
    // Option must be returned to the onChange callback prop
    expect(onSelectChange).toBeCalledWith({ label: "Apple", value: "apple" })
  })

  it("is multi selection type with selectable fruits", () => {
    const onSelectChange = jest.fn()
    render(
      <LightThemeProvider>
        <Select placeholder="Fruits"
          mode="multi"
          onChange={onSelectChange}
          options={[
            { label: "Apple", value: "apple" },
            { label: "Strawberry", value: "strawberry" },
            { label: "Banana", value: "banana" },
            { label: "Grape", value: "grape" }
          ]}/>
      </LightThemeProvider>
    )

    const selectBox = screen.getByTestId("Select__Box")
    fireEvent.click(selectBox)

    // Popup appears on the screen and options are visible
    const appleSelectOption = screen.getByText("Apple")
    fireEvent.mouseDown(appleSelectOption)

    const bananaSelectOption = screen.getByText("Banana")
    fireEvent.mouseDown(bananaSelectOption)

    // Option must be returned to the onChange callback prop
    expect(onSelectChange).toBeCalledWith([
      { label: "Apple", value: "apple" },
      { label: "Banana", value: "banana" }
    ])

    // Now banana is a selected crumb
    const bananaSelectedCrumb = screen.getByText("Banana")
    // When user clicks over it's deselected
    fireEvent.mouseDown(bananaSelectedCrumb)

    // On change callback must be notified of the removed option
    expect(onSelectChange).toBeCalledWith([
      { label: "Apple", value: "apple" }
    ])

    // User ends interaction by blurring the input
    fireEvent.blur(selectBox)
  })
})