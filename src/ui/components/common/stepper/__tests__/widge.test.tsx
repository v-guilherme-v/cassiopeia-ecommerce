import { fireEvent, render, screen } from "@testing-library/react"
import { LightThemeProvider } from "@ui/providers"

import Stepper from "../component"
import { IStepperStep } from "../types"

const steps: IStepperStep[] = [
  {
    id: "step-1",
    title: "Step 1",
    component: () => <>First step</>,
    state: "complete",
    actions: {
      nextButtonLabel: "Go to second"
    }
  },
  {
    id: "step-2",
    title: "Step 2",
    component: () => <>Second step</>,
    actions: {
      prevButtonLabel: "Go to first"
    }
  },
  {
    id: "step-3",
    title: "Step 3",
    component: () => <>Third step</>
  }
]

describe("The Stepper component...", () => {
  it("goes forward and backwards", () => {
    render(
      <LightThemeProvider>
        <Stepper steps={steps}/>
      </LightThemeProvider>
    )

    expect(screen.getByText("Second step")).toBeInTheDocument()
    
    const secondStepPrevButton = screen.getByRole("button", { name: "Go to first" })
    expect(secondStepPrevButton).toBeInTheDocument()
    fireEvent.click(secondStepPrevButton)
    
    expect(screen.getByText("First step")).toBeInTheDocument()

    const firstStepNextButton = screen.getByRole("button", { name: "Go to second" })
    expect(firstStepNextButton).toBeInTheDocument()
    fireEvent.click(firstStepNextButton)

    expect(screen.getByText("Second step")).toBeInTheDocument()
  })

  it("has no actions cause it's complete", () => {
    render(
      <LightThemeProvider>
        <Stepper steps={[
          {
            id: "step",
            title: "Step",
            component: () => <>Single step</>,
            state: "complete",
            actions: {
              prevButtonLabel: "Back to somewhere",
              nextButtonLabel: "Got to somewhere"
            }
          }
        ]}/>
      </LightThemeProvider>
    )

    expect(screen.queryByText("Back to somewhere")).not.toBeInTheDocument()
    expect(screen.queryByText("Go to somewhere")).not.toBeInTheDocument()
  })
})